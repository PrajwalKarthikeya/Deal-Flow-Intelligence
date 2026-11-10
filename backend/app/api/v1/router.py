"""
API v1 router — aggregates all v1 endpoint routers.
"""

from fastapi import APIRouter
from app.api.v1.endpoints import health

router = APIRouter()

router.include_router(health.router, tags=["health"])
