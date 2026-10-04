from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

router = APIRouter()

class Item(BaseModel):
    id: int
    title: str
    category: str
    price: float
    status: str

@router.get("/", response_model=List[Item])
def list_items():
    return [
        {"id": 101, "title": "Cloud Infrastructure Provisioning", "category": "DevOps", "price": 450.0, "status": "active"},
        {"id": 102, "title": "CI/CD Pipeline Hardening", "category": "Security", "price": 320.0, "status": "active"},
        {"id": 103, "title": "Microservices Observability Suite", "category": "Monitoring", "price": 580.0, "status": "active"},
    ]
