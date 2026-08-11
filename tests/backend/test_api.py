from backend.app import create_app
def test_health():
    response = create_app(testing=True).test_client().get("/api/health")
    assert response.status_code == 200
    assert response.get_json()["status"] == "healthy"
def test_customers():
    response = create_app(testing=True).test_client().get("/api/customers?q=loyal")
    assert response.status_code == 200
    assert response.get_json()["count"] == 2
def test_missing_customer():
    assert create_app(testing=True).test_client().get("/api/customers/missing").status_code == 404

