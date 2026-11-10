"""
Health check endpoint.

Provides application and database health status.
"""

from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.db.health import check_db_health
from app.schemas.common import HealthResponse

router = APIRouter()


@router.get("/health", response_model=HealthResponse)
async def health_check(db: AsyncSession = Depends(get_db)):
    """
    Application health check.

    Returns overall status and database connectivity info.
    """
    db_health = await check_db_health(db)

    status = "healthy" if db_health["connected"] else "degraded"

    return HealthResponse(
        status=status,
        database=db_health,
    )
