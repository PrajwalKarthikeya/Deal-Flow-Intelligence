from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from typing import List

from backend.app.db.session import get_db
from backend.app.models.intelligence.company import Company as CompanyModel
from backend.app.schemas.intelligence.company import Company, CompanyCreate

router = APIRouter()

@router.get("/", response_model=List[Company])
async def get_companies(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(CompanyModel))
    return result.scalars().all()

@router.post("/", response_model=Company)
async def create_company(company_in: CompanyCreate, db: AsyncSession = Depends(get_db)):
    new_company = CompanyModel(**company_in.model_dump())
    db.add(new_company)
    await db.commit()
    await db.refresh(new_company)
    return new_company
