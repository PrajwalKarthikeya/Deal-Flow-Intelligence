# Setup & Development Guide

## Prerequisites

- **Node.js** (v18+) & npm
- **Python** (v3.10+) & `uv` package manager
- **PostgreSQL** (v15+) with `pgvector` extension enabled

---

## 1. Environment Variables

### Backend (`backend/.env`)
Copy `backend/.env.example` to `backend/.env`:
```bash
cd backend
cp .env.example .env
```
Ensure `DATABASE_URL` and `DATABASE_URL_SYNC` point to your PostgreSQL instance.

### Frontend (`frontend/.env`)
Copy `frontend/.env.example` to `frontend/.env`:
```bash
cd frontend
cp .env.example .env
```

---

## 2. Running the Backend

```bash
cd backend
uv venv .venv                  # Create virtual environment if not exists
source .venv/Scripts/activate  # (Git Bash) or .venv\Scripts\Activate.ps1
uv pip install -r requirements.txt
python run.py                  # Starts FastAPI on http://localhost:8000
```

API documentation: `http://localhost:8000/docs`

---

## 3. Running the Frontend

```bash
cd frontend
npm install
npm run dev                    # Starts Vite dev server on http://localhost:5173
```

---

## 4. Running Database Migrations (Alembic)

```bash
cd backend
source .venv/Scripts/activate
alembic revision --autogenerate -m "Initial migration"
alembic upgrade head
```
