from pydantic import BaseModel,validator,Field

class Posta(BaseModel):
    id: int #= Field(le=2) - Тоже самое что и функция @validator
    content:str
    author:str
    publication_datetime:str
    title:str

    @validator("id") # с помощью валидатора можно проверять значения в ответе. Например если id не должно быть больше 2, а придет id = 3, то будет ошибка, тест не пройдет
    def check_that_id_is_less_than_two(cls,v):
        if v < 2:
            raise ValueError('Id is not less than two')
        else:
            return v
        

