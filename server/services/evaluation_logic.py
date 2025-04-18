from typing import Dict, Any
import numpy as np
from models.schemas import ApplicationData, EvaluationResult


async def calculate_scores(data: Dict[str, Any]) -> EvaluationResult:
    """Calculate all evaluation scores"""
    academic = await _calculate_academic_score(data)
    financial = await _calculate_financial_score(data)
    essay = await _calculate_essay_score(data)

    # Weighted overall score (all components are already 0-10)
    overall = (academic * 0.4) + (financial * 0.3) + (essay * 0.3)

    # Ensure overall score is capped at 10
    overall = min(overall, 10.0)

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

    # Normalize test scores to 0-10 scale
    normalized_scores = []
    if "SAT" in test_scores:
        # SAT range 400-1600 -> 0-10
        sat_score = test_scores["SAT"]
        normalized_scores.append(
            min((sat_score - 400) / 120, 10.0)
        )  # 120 points per point on 10 scale
    if "ACT" in test_scores:
        # ACT range 1-36 -> 0-10
        act_score = test_scores["ACT"]
        normalized_scores.append(
            min((act_score - 1) / 3.5, 10.0)
        )  # 3.5 points per point on 10 scale

    test_avg = np.mean(normalized_scores) if normalized_scores else 0

    # Calculate final academic score
    academic_score = (gpa_score * 0.6) + (test_avg * 0.4)

    # Ensure academic score is capped at 10
    return min(academic_score, 10.0)


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
        return min(9.0 + (np.random.random() * 1.0), 10.0)  # 9-10
    elif income_per_capita < 20000:
        return min(7.0 + (np.random.random() * 2.0), 10.0)  # 7-9
    elif income_per_capita < 40000:
        return min(5.0 + (np.random.random() * 2.0), 10.0)  # 5-7
    else:
        return min(3.0 + (np.random.random() * 2.0), 10.0)  # 3-5


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
    return min(base_score + (np.random.random() * 1.0), 10.0)  # Cap at 10
