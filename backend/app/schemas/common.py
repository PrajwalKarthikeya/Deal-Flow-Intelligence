"""
Common Pydantic response schemas used across API endpoints.
"""

from pydantic import BaseModel
from typing import Any


class APIResponse(BaseModel):
    """Standard API success response wrapper."""
    success: bool = True
    message: str = "OK"
    data: Any = None


class ErrorResponse(BaseModel):
    """Standard API error response."""
    success: bool = False
    message: str
    detail: dict = {}


class HealthResponse(BaseModel):
    """Health check response."""
    status: str  # "healthy" | "degraded" | "unhealthy"
    database: dict = {}
