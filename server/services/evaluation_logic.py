from typing import Dict, Any
import numpy as np
from models.schemas import ApplicationData, EvaluationResult


async def calculate_scores(data: Dict[str, Any]) -> EvaluationResult:
    """Calculate all evaluation scores"""
    academic = await _calculate_academic_score(data)
    financial = await _calculate_financial_score(data)
    essay = await _calculate_essay_score(data)

    # Weighted overall score
    overall = (academic * 0.4) + (financial * 0.3) + (essay * 0.3)

    # Determine decision based on overall score
    decision = (
        "Approve" if overall >= 7.0 else "Waitlist" if overall >= 5.0 else "Reject"
    )

    return EvaluationResult(
        applicant_id=data.get("applicant_id", ""),
        academic_score=float(academic),
        financial_score=float(financial),
        essay_score=float(essay),
        overall_score=float(overall),
        decision=decision,
        flags=[],
    )


async def _calculate_academic_score(data: Dict[str, Any]) -> float:
    """Calculate academic merit score (0-10)"""
    gpa = data.get("gpa", 0)
    test_scores = data.get("test_scores", {})
    # Normalize GPA to 0-10 scale
    gpa_score = (gpa / 4.0) * 10 if gpa else 0
    # Calculate test score average
    test_avg = np.mean([v for v in test_scores.values()]) if test_scores else 0
    return (gpa_score * 0.6) + (test_avg * 0.4)


async def _calculate_financial_score(data: Dict[str, Any]) -> float:
    """Calculate financial need score (0-10)"""
    income = data.get("income", 0)
    family_size = data.get("family_size", 1)

    if income == 0:
        return 10.0

    # Calculate income per capita
    income_per_capita = income / family_size
    # Normalize to 0-10 scale (lower income = higher score)
    if income_per_capita < 10000:
        return 9.0 + (np.random.random() * 1.0)  # 9-10
    elif income_per_capita < 20000:
        return 7.0 + (np.random.random() * 2.0)  # 7-9
    elif income_per_capita < 40000:
        return 5.0 + (np.random.random() * 2.0)  # 5-7
    else:
        return 3.0 + (np.random.random() * 2.0)  # 3-5


async def _calculate_essay_score(data: Dict[str, Any]) -> float:
    """Calculate essay quality score (0-10)"""
    essay = data.get("essay", "")
    if not essay:
        return 0.0

    # Basic scoring based on essay length and content
    word_count = len(essay.split())

    # Score based on length (encouraging detailed essays)
    if word_count < 100:
        base_score = 3.0
    elif word_count < 300:
        base_score = 5.0
    elif word_count < 500:
        base_score = 7.0
    else:
        base_score = 9.0

    # Add some randomness to simulate human evaluation
    return base_score + (np.random.random() * 1.0)
