import os
from groq import AsyncGroq
from typing import AsyncGenerator
from models.schemas import ApplicationData, EvaluationResult
from services.evaluation_logic import calculate_scores
from services.preprocessor import clean_application_data


class GroqEvaluator:
    def __init__(self):
        api_key = os.environ.get("GROQ_API_KEY")
        self.client = AsyncGroq(api_key=api_key)
        self.model = "mistral-saba-24b"  # Groq's fastest model

    ## For Full Evaluation
    async def full_evaluation(self, data: ApplicationData) -> EvaluationResult:
        """Complete evaluation pipeline"""
        cleaned_data = clean_application_data(data)

        # Get scores from evaluation logic
        scores = await calculate_scores(cleaned_data)

        # Ensure all scores are within 0-10 range
        academic_score = min(max(scores.academic_score, 0), 10)
        financial_score = min(max(scores.financial_score, 0), 10)
        essay_score = min(max(scores.essay_score, 0), 10)
        overall_score = min(max(scores.overall_score, 0), 10)

        # Generate detailed evaluation with Groq
        evaluation_text = await self._generate_evaluation(cleaned_data, scores)

        # Create new EvaluationResult with validated scores
        return EvaluationResult(
            applicant_id=scores.applicant_id,
            academic_score=academic_score,
            financial_score=financial_score,
            essay_score=essay_score,
            overall_score=overall_score,
            evaluation=evaluation_text,
            decision=scores.decision,
            flags=scores.flags,
        )

    ## For Streaming Evaluation
    async def stream_evaluation(
        self, data: ApplicationData
    ) -> AsyncGenerator[str, None]:
        """Stream evaluation progress"""
        cleaned_data = clean_application_data(data)

        # Stream initial processing
        yield "Starting evaluation..."

        # Stream academic evaluation
        academic_prompt = self._build_academic_prompt(cleaned_data)
        response = await self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": "user", "content": academic_prompt}],
            stream=True,
        )
        async for chunk in response:
            if chunk.choices[0].delta.content:
                yield f"Academic: {chunk.choices[0].delta.content}"

        # Stream financial evaluation
        financial_prompt = self._build_financial_prompt(cleaned_data)
        response = await self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": "user", "content": financial_prompt}],
            stream=True,
        )
        async for chunk in response:
            if chunk.choices[0].delta.content:
                yield f"Financial: {chunk.choices[0].delta.content}"

    async def _generate_evaluation(self, data: dict, scores: EvaluationResult) -> str:
        """Generate comprehensive evaluation text"""
        prompt = f"""
        Scholarship Application Evaluation:
        
        Applicant: {data['applicant_name']}
        Academic Score: {scores.academic_score}/10
        Financial Need: {scores.financial_score}/10
        Essay Quality: {scores.essay_score}/10
        
        Please provide:
        1. Overall assessment
        2. Key strengths
        3. Areas for improvement
        4. Recommended decision (Approve/Reject/Waitlist)
        5. Detailed justification
        
        Use professional tone for scholarship committee.
        """

        response = await self.client.chat.completions.create(
            messages=[{"role": "user", "content": prompt}],
            model=self.model,
            temperature=0.3,  # More deterministic output
        )
        return response.choices[0].message.content

    def _build_academic_prompt(self, data: dict) -> str:
        """Build prompt for academic evaluation"""
        return f"""
        Evaluate academic merit:
        Transcript: {data.get('transcript', '')}
        GPA: {data.get('gpa', 'N/A')}
        Test Scores: {data.get('test_scores', 'N/A')}
        
        Provide:
        - Strength assessment
        - Weakness analysis
        - Score (1-10 scale)
        """

    def _build_financial_prompt(self, data: dict) -> str:
        """Build prompt for financial need evaluation"""
        return f"""
        Evaluate financial need:
        Household Income: {data.get('income', 'N/A')}
        Family Size: {data.get('family_size', 'N/A')}
        Financial Statement: {data.get('financial_statement', '')}
        
        Provide:
        - Need level assessment
        - Supporting evidence
        - Score (1-10 scale)
        """
