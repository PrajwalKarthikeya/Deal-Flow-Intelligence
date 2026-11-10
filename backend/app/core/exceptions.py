"""
Custom exception classes and FastAPI exception handlers.
"""

from fastapi import Request, status
from fastapi.responses import JSONResponse
import logging

logger = logging.getLogger(__name__)


# ---------------------------------------------------------------------------
# Custom exceptions
# ---------------------------------------------------------------------------

class AppException(Exception):
    """Base application exception."""

    def __init__(self, message: str = "An error occurred", status_code: int = 500, detail: dict | None = None):
        self.message = message
        self.status_code = status_code
        self.detail = detail or {}
        super().__init__(self.message)


class NotFoundError(AppException):
    """Resource not found."""

    def __init__(self, resource: str = "Resource", identifier: str | None = None):
        msg = f"{resource} not found" + (f": {identifier}" if identifier else "")
        super().__init__(message=msg, status_code=status.HTTP_404_NOT_FOUND)


class BadRequestError(AppException):
    """Client sent an invalid request."""

    def __init__(self, message: str = "Bad request"):
        super().__init__(message=message, status_code=status.HTTP_400_BAD_REQUEST)


class UnauthorizedError(AppException):
    """Authentication required."""

    def __init__(self, message: str = "Not authenticated"):
        super().__init__(message=message, status_code=status.HTTP_401_UNAUTHORIZED)


class ForbiddenError(AppException):
    """Permission denied."""

    def __init__(self, message: str = "Permission denied"):
        super().__init__(message=message, status_code=status.HTTP_403_FORBIDDEN)


class ConflictError(AppException):
    """Resource conflict (duplicate, version mismatch, etc.)."""

    def __init__(self, message: str = "Conflict"):
        super().__init__(message=message, status_code=status.HTTP_409_CONFLICT)


class DatabaseError(AppException):
    """Database operation failed."""

    def __init__(self, message: str = "Database error"):
        super().__init__(message=message, status_code=status.HTTP_503_SERVICE_UNAVAILABLE)


# ---------------------------------------------------------------------------
# Exception handlers — register on the FastAPI app
# ---------------------------------------------------------------------------

async def app_exception_handler(request: Request, exc: AppException) -> JSONResponse:
    """Handle all AppException subclasses."""
    logger.warning("AppException: %s (status=%d, path=%s)", exc.message, exc.status_code, request.url.path)
    return JSONResponse(
        status_code=exc.status_code,
        content={
            "success": False,
            "message": exc.message,
            "detail": exc.detail,
        },
    )


async def unhandled_exception_handler(request: Request, exc: Exception) -> JSONResponse:
    """Catch-all for unhandled exceptions."""
    logger.exception("Unhandled exception on %s %s", request.method, request.url.path)
    return JSONResponse(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        content={
            "success": False,
            "message": "Internal server error",
            "detail": {},
        },
    )
