# pytest -s -v

import requests
from jsonschema import validate
from configuration.URL_configuration import SERVICE_URL_POSTS, SERVICE_URL_POST_ID
#from schemas.post import POST_SCHEMA
from response import Response
from schemas.post_v import Posta



def test_getting_posts(): # все посты
    r = requests.get(url=SERVICE_URL_POSTS)
    response = Response(r)
    
    response.assert_status_code(200).validate(Posta)
    
   # print(r.json()) #тело ответа


def test_getting_post_id(): # пост по id
    r = requests.get(url=SERVICE_URL_POST_ID)
    response = Response(r)
    
    response.assert_status_code(201).validate(Posta) 
    
    print(r.json()) # тело ответа

    