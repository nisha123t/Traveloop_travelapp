from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models import User
from app.schemas import UserCreate

router = APIRouter()

# Database Dependency
def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()

# Register User
@router.post("/register")
def register_user(user: UserCreate, db: Session = Depends(get_db)):

    new_user = User(

        first_name=user.first_name,
        last_name=user.last_name,
        username=user.username,
        email=user.email,
        password=user.password,
        phone=user.phone,
        city=user.city,
        country=user.country,
        additional_info=user.additional_info,
    )

    db.add(new_user)

    db.commit()

    db.refresh(new_user)

    return {
        "message": "User registered successfully"
    }