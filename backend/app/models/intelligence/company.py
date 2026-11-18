from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Float, JSON
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from backend.app.db.base import Base

class Company(Base):
    __tablename__ = "companies"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False, index=True)
    legal_name = Column(String)
    website = Column(String)
    description = Column(String)
    industry = Column(String)
    sector = Column(String)
    
    # Relationships
    funding_rounds = relationship("FundingRound", back_populates="company")
    financial_records = relationship("FinancialRecord", back_populates="company")

class FundingRound(Base):
    __tablename__ = "funding_rounds"

    id = Column(Integer, primary_key=True, index=True)
    company_id = Column(Integer, ForeignKey("companies.id"))
    round_name = Column(String) # e.g., Series A
    amount = Column(Float)
    date = Column(DateTime)
    
    company = relationship("Company", back_populates="funding_rounds")

class FinancialRecord(Base):
    __tablename__ = "financial_records"

    id = Column(Integer, primary_key=True, index=True)
    company_id = Column(Integer, ForeignKey("companies.id"))
    revenue = Column(Float)
    ebitda = Column(Float)
    reporting_period = Column(String)
    
    company = relationship("Company", back_populates="financial_records")
