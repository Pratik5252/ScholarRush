from models.schemas import ApplicationData
from typing import Dict, Any


def clean_application_data(data: ApplicationData) -> Dict[str, Any]:
    """
    Clean and preprocess application data before evaluation
    """
    cleaned_data = data.dict()

    # Clean and standardize GPA if present
    if cleaned_data.get("gpa"):
        cleaned_data["gpa"] = round(float(cleaned_data["gpa"]), 2)

    # Clean and standardize income if present
    if cleaned_data.get("income"):
        cleaned_data["income"] = round(float(cleaned_data["income"]), 2)

    # Clean and standardize test scores
    if cleaned_data.get("test_scores"):
        cleaned_scores = {}
        for test, score in cleaned_data["test_scores"].items():
            cleaned_scores[test.upper()] = float(score)
        cleaned_data["test_scores"] = cleaned_scores

    # Clean text fields
    cleaned_data["transcript"] = clean_text(cleaned_data["transcript"])
    cleaned_data["essay"] = clean_text(cleaned_data["essay"])
    if cleaned_data.get("financial_statement"):
        cleaned_data["financial_statement"] = clean_text(
            cleaned_data["financial_statement"]
        )

    # Clean recommendations
    cleaned_data["recommendations"] = [
        clean_text(rec) for rec in cleaned_data.get("recommendations", [])
    ]

    return cleaned_data


def clean_text(text: str) -> str:
    """
    Clean and standardize text fields
    """
    if not text:
        return ""

    # Remove extra whitespace
    text = " ".join(text.split())

    # Remove any special characters that might interfere with the model
    text = text.replace("\u2018", "'").replace("\u2019", "'")  # Smart quotes
    text = text.replace("\u201c", '"').replace("\u201d", '"')  # Smart double quotes

    return text.strip()
