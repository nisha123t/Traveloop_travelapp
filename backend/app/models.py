from sqlalchemy import Column, Integer, String, Text
from app.database import Base

class User(Base):

    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    first_name = Column(String(100))
    last_name = Column(String(100))

    username = Column(String(100), unique=True)

    email = Column(String(150), unique=True)

    password = Column(String(255))

    phone = Column(String(20))

    city = Column(String(100))

    country = Column(String(100))

    additional_info = Column(Text)