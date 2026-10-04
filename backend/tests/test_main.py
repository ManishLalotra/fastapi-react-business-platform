from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_health_check():
    response = client.get("/healthz")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "healthy"
    assert "Manish Lalotra" in data["author"]

def test_get_users():
    response = client.get("/api/v1/users/")
    assert response.status_code == 200
    assert len(response.json()) >= 1
