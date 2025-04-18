from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from config import settings
import uvicorn
import os

load_dotenv()

app = FastAPI(
    title="Scholarship Evaluation API",
    description="Real-time application processing with Groq",
    version="1.0.0",
)

## Main function to run the server
def main():
    uvicorn.run(app)


app.add_middleware(
    CORSMiddleware,
    allow_origins=settings["ALLOWED_ORIGINS"],  # You can modify this as needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


if __name__ == "__main__":
    main()
