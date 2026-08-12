from fastapi.testclient import TestClient

from backend.app import create_app


client = TestClient(create_app())


def test_health():
    response = client.get("/api/health")
    assert response.status_code == 200
    assert response.json()["status"] == "healthy"


def test_customers():
    response = client.get("/api/customers?q=loyal")
    assert response.status_code == 200
    assert response.json()["count"] == 2


def test_missing_customer():
    response = client.get("/api/customers/missing")
    assert response.status_code == 404
    assert response.json()["detail"] == "Customer not found"
