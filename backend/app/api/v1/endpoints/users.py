from fastapi import APIRouter
from pydantic import BaseModel, EmailStr
from typing import List

router = APIRouter()

class UserResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    role: str
    is_active: bool

@router.get("/", response_model=List[UserResponse])
def get_users():
    return [
        {
            "id": 1,
            "name": "Manish Lalotra",
            "email": "manish.lalotra.devops@gmail.com",
            "role": "Lead DevOps Architect",
            "is_active": True
        },
        {
            "id": 2,
            "name": "Engineering Service Agent",
            "email": "service@platform.internal",
            "role": "Operator",
            "is_active": True
        }
    ]
