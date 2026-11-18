from pydantic import BaseModel, HttpUrl
from typing import Optional, List

class FundingRoundBase(BaseModel):
    round_name: str
    amount: float
    date: str

class FinancialRecordBase(BaseModel):
    revenue: float
    ebitda: float
    reporting_period: str

class CompanyBase(BaseModel):
    name: str
    legal_name: Optional[str] = None
    website: Optional[HttpUrl] = None
    description: Optional[str] = None
    industry: Optional[str] = None
    sector: Optional[str] = None

class CompanyCreate(CompanyBase):
    pass

class Company(CompanyBase):
    id: int
    funding_rounds: List[FundingRoundBase] = []
    financial_records: List[FinancialRecordBase] = []

    class Config:
        from_attributes = True
