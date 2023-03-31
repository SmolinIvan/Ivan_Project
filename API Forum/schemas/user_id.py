from pydantic import BaseModel, validator
from src.global_enums import GlobalErrorMessages

class User(BaseModel):
    id:int
    author: str
    content: str
    publication_datetime: str
    title: str


    @validator('title')
    def title_less_50_chars(cls,title):
        if len(title) >50:
            raise ValueError(GlobalErrorMessages.WRONG_TITLE_LENGTH)
        else:
            return title