from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):

    first_name: str
    last_name: str
    username: str
    email: EmailStr
    password: str
    phone: str
    city: str
    country: str
    additional_info: str | None = None