# DealFlow Intelligence

An intelligent deal flow management and analysis platform.

## Architecture

- **Frontend:** React (JavaScript) + Vite + Tailwind CSS v4
- **Backend:** Python + FastAPI
- **Database:** PostgreSQL + pgvector
- **ORM:** SQLAlchemy (async) + Alembic migrations

## Project Structure

```
├── backend/             # FastAPI backend
│   ├── app/
│   │   ├── api/v1/      # Versioned API endpoints
│   │   ├── core/        # Config, logging, exceptions
│   │   ├── db/          # Database session, base model
│   │   ├── models/      # SQLAlchemy models
│   │   ├── schemas/     # Pydantic schemas
│   │   ├── services/    # Business logic
│   │   └── utils/       # Shared utilities
│   ├── alembic/         # Database migrations
│   └── tests/           # Backend tests
├── frontend/            # Vite React app
│   └── src/
│       ├── components/  # React components
│       ├── pages/       # Route pages
│       ├── hooks/       # Custom React hooks
│       ├── services/    # API client services
│       ├── styles/      # CSS / design tokens
│       └── utils/       # Frontend utilities
└── docs/                # Documentation
```

## Quick Start

See [docs/SETUP.md](docs/SETUP.md) for full installation instructions.

### Backend

```bash
cd backend
uv sync                    # Install Python dependencies
python run.py              # Start FastAPI on :8000
```

### Frontend

```bash
cd frontend
npm install                # Install Node dependencies
npm run dev                # Start Vite dev server on :5173
```

## API

- Base URL: `http://localhost:8000`
- API v1 prefix: `/api/v1`
- Health check: `GET /api/v1/health`
- Docs: `http://localhost:8000/docs` (Swagger UI)

## License

Proprietary — all rights reserved.
