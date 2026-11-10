"""
Database health check utility.
"""

import logging
from sqlalchemy import text
from sqlalchemy.ext.asyncio import AsyncSession

logger = logging.getLogger(__name__)


async def check_db_health(session: AsyncSession) -> dict:
    """
    Run a lightweight query to verify database connectivity.

    Returns a dict with 'connected' (bool) and 'version' or 'error'.
    """
    try:
        result = await session.execute(text("SELECT version()"))
        version = result.scalar()
        return {"connected": True, "version": version}
    except Exception as exc:
        logger.error("Database health check failed: %s", exc)
        return {"connected": False, "error": str(exc)}
