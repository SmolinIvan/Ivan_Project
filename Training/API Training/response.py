from jsonschema import validate
from src.global_enums import GlobalErrorMessages

class Response:

    def __init__(self,response):
        self.response = response
        self.response_json = response.json()
        self.response_status = response.status_code

    def validate(self,schema):
        if isinstance(self.response_json, list):
            for item in self.response_json:
                schema.parse_obj(item)

                #validate(item,schema) # если у нас список, в нашем случае много постов и проверка, что все посты соответствую схеме

        else:
           # validate(self.response_json, schema)   # проверка тела на соответствие схеме
           schema.parse_obj(self.response_json)

        

    def assert_status_code(self,status_code):
        if isinstance(status_code,list):
            assert self.response_status in status_code, self # Сравниваем статус кода
        else:
            assert self.response_status == status_code, self # Сравниваем статус кода

        return self
    

    def __str__(self):
        return \
        f"\nКод овета:{self.response_status} \nЗапрашиваемый URL:{self.response.url}"