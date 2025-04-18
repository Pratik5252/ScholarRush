from fastapi import APIRouter, HTTPException
from fastapi.responses import StreamingResponse
from services.groq_service import GroqEvaluator
from models.schemas import ApplicationData, EvaluationResult
from typing import Optional
import asyncio

router = APIRouter(prefix="/evaluate", tags=["Evaluation"])


@router.post("/", response_model=EvaluationResult)
async def evaluate_application(data: ApplicationData):
    """Endpoint for full application evaluation"""
    try:
        evaluator = GroqEvaluator()
        return await evaluator.full_evaluation(data)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/stream")
async def stream_evaluation(data: ApplicationData):
    """Streaming evaluation endpoint"""
    evaluator = GroqEvaluator()

    async def generate():
        async for chunk in evaluator.stream_evaluation(data):
            yield f"data: {chunk}\n\n"
            await asyncio.sleep(0.1)  # Control stream speed

    return StreamingResponse(generate(), media_type="text/event-stream")
