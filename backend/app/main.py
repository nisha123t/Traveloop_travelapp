from fastapi import FastAPI

from app.database import engine
from app.models import Base

from app.routes.users import router as user_router

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(user_router)

@app.get("/")
def home():
    return {"message": "Traveloop API Running"}