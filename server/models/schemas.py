from pydantic import BaseModel
from typing import Optional, List


class ApplicationData(BaseModel):
    applicant_id: str
    applicant_name: str
    transcript: str
    gpa: Optional[float]
    test_scores: Optional[dict]
    essay: str
    income: Optional[float]
    family_size: Optional[int]
    financial_statement: Optional[str]
    recommendations: List[str] = []


class EvaluationResult(BaseModel):
    applicant_id: str
    academic_score: float
    financial_score: float
    essay_score: float
    overall_score: float
    evaluation: Optional[str] = None
    decision: Optional[str]
    flags: List[str] = []
