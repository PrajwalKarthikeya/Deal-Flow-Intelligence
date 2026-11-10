"""
Tests for the health check endpoint.
"""

import pytest


@pytest.mark.anyio
async def test_root_endpoint(client):
    """Root endpoint returns service info."""
    response = await client.get("/")
    assert response.status_code == 200
    data = response.json()
    assert data["service"] == "DealFlow Intelligence"
    assert "version" in data


@pytest.mark.anyio
async def test_health_endpoint_responds(client):
    """Health endpoint returns a response (may be degraded without DB)."""
    response = await client.get("/api/v1/health")
    # Without a running database, this will still return a response
    # (the health check catches DB errors gracefully)
    assert response.status_code == 200
    data = response.json()
    assert "status" in data
    assert data["status"] in ("healthy", "degraded")
