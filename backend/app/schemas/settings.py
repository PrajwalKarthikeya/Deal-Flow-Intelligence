from pydantic import BaseModel
from typing import Optional

class UserSettings(BaseModel):
    theme: str = "dark"
    ai_provider: str = "anthropic"
    date_format: str = "YYYY-MM-DD"
    currency: str = "USD"
