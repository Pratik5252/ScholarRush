## Features

- Real-time scholarship application evaluation
- AI-powered assessment using Groq
- Streaming evaluation updates
- Academic and financial merit analysis
- Comprehensive evaluation reports

## Prerequisites

- Python 3.11 or higher
- UV package manager
- Groq API key

## Installation

1. **Install UV Package Manager**

   ```bash
   # Windows
   powershell -c "irm https://astral.sh/uv/install.ps1 | iex"

   # macOS/Linux
   curl -LsSf https://astral.sh/uv/install.sh | sh
   ```

2. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd ScholarRush/server
   ```

3. **Environment Setup**

   Create a `.env` file:

   ```env
   GROQ_API_KEY="your_groq_api_key"
   ```

4. Running the Server

    ```bash
    # This will run the server and install dependencies
    uv run main.py
    ```

## To Install Additional Dependencies

```
bash
   # Install dependencies
   uv add dependencies_name
```

## API Endpoints

### Evaluation

```http
POST /evaluate
```

## Stream Evaluation

```http
POST /evaluate/stream
```

Performs full application evaluation


**Request Body:**

```json
{
  "applicant_id": "string",
  "applicant_name": "string",
  "transcript": "string",
  "gpa": "number",
  "test_scores": "object",
  "essay": "string",
  "income": "number",
  "family_size": "number",
  "financial_statement": "string",
  "recommendations": "array"
}
```
