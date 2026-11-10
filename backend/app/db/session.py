"""
Async and sync SQLAlchemy engine + session factories.
"""

from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.core.config import settings

# ---------------------------------------------------------------------------
# Async engine (primary — used by the app)
# ---------------------------------------------------------------------------

async_engine = create_async_engine(
    settings.DATABASE_URL,
    echo=settings.DEBUG,
    pool_pre_ping=True,
    pool_size=10,
    max_overflow=20,
)

AsyncSessionLocal = async_sessionmaker(
    bind=async_engine,
    class_=AsyncSession,
    expire_on_commit=False,
)

# ---------------------------------------------------------------------------
# Sync engine (for Alembic migrations and one-off scripts)
# ---------------------------------------------------------------------------

sync_engine = create_engine(
    settings.DATABASE_URL_SYNC,
    echo=settings.DEBUG,
    pool_pre_ping=True,
)

SyncSessionLocal = sessionmaker(bind=sync_engine)


# ---------------------------------------------------------------------------
# Dependency — use in FastAPI endpoints
# ---------------------------------------------------------------------------

async def get_db() -> AsyncSession:
    """Yield an async database session, auto-closing on exit."""
    async with AsyncSessionLocal() as session:
        try:
            yield session
        finally:
            await session.close()
