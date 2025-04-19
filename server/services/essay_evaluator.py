import re
from groq import AsyncGroq
import os


class EssayEvaluator:
    def __init__(self):
        api_key = os.environ.get("GROQ_API_KEY")
        self.client = AsyncGroq(api_key=api_key)
        self.model = "mistral-saba-24b"  # Groq's fastest model

    async def evaluate_essay(self, essay: str) -> float:
        """Calculate essay quality score (0-10) using Groq AI analysis"""
        if not essay:
            return 0.0

        try:
            evaluation_prompt = f"""
            Please evaluate this scholarship essay on a scale of 0-10 based on the following criteria:
            1. Grammar and Mechanics (20%)
            2. Structure and Organization (20%)
            3. Content and Relevance (30%)
            4. Clarity and Coherence (20%)
            5. Originality and Insight (10%)

            Essay:
            {essay}

            Provide a detailed evaluation and a final score between 0-10.
            """

            response = await self.client.chat.completions.create(
                model=self.model,
                messages=[{"role": "user", "content": evaluation_prompt}],
                temperature=0.3,
                max_tokens=500,
            )

            evaluation_text = response.choices[0].message.content
            score_match = re.search(
                r"(\d+(?:\.\d+)?)\s*(?:/|out of)\s*10", evaluation_text
            )

            if score_match:
                score = float(score_match.group(1))
                return min(max(score, 0.0), 10.0)
            else:
                return self._fallback_score(essay)

        except Exception as e:
            print(f"Error in essay evaluation: {str(e)}")
            return self._fallback_score(essay)

    def _fallback_score(self, essay: str) -> float:
        word_count = len(essay.split())
        if word_count < 100:
            return 3.0
        elif word_count < 300:
            return 5.0
        elif word_count < 500:
            return 7.0
        else:
            return 9.0
