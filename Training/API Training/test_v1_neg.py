# pytest -s -v
# Негативные проверки для API форума

import requests
from configuration.configuration import API_URL_COMMENT, BODY_STAND, BODY_PUT_COMMENT, API_URL, POST_TITLE_NUMBER, POST_CONTENT_NUMBER, POST_TITLE_EMPTY, POST_CONTENT_EMPTY, POST_NO_TITLE,POST_NO_CONTENT, POST_EMPTY, POST_XML, POST_EMPTY_MASSIVE
from schemas.post import POST_CREATE
from jsonschema import validate


r = requests.post(API_URL, json = BODY_STAND,auth = ("admin",'123')) #отправка post-запроса с телом и данными авторизации
body = r.json()
post_id = body['id']# вытаскивание id созданного поста для использования в последующих запросах
BODY_PUT_COMMENT["post"] = post_id

# Создание поста с невалидными данными в теле запроса
def test_post_posts_1(): #проверка созданного поста
    r = requests.post(API_URL, json = POST_TITLE_NUMBER,auth = ("admin",'123')) 
    assert r.status_code == 422, "Неверный код ответа" 

    r = requests.post(API_URL, json = POST_CONTENT_NUMBER,auth = ("admin",'123')) 
    assert r.status_code == 422, "Неверный код ответа" 

    r = requests.post(API_URL, json = POST_TITLE_EMPTY,auth = ("admin",'123')) 
    assert r.status_code == 201, "Неверный код ответа" 

    r = requests.post(API_URL, json = POST_CONTENT_EMPTY,auth = ("admin",'123')) 
    assert r.status_code == 201, "Неверный код ответа" 

    r = requests.post(API_URL, json = POST_NO_TITLE,auth = ("admin",'123')) 
    assert r.status_code == 422, "Неверный код ответа" 
    
    r = requests.post(API_URL, json = POST_NO_CONTENT,auth = ("admin",'123')) 
    assert r.status_code == 422, "Неверный код ответа" 

    r = requests.post(API_URL, json = POST_EMPTY,auth = ("admin",'123')) 
    assert r.status_code == 422, "Неверный код ответа" 

    r = requests.post(API_URL, data =  POST_XML,auth = ("admin",'123')) 
    assert r.status_code == 422, "Неверный код ответа" 
    print(r.json())

    r = requests.post(API_URL, json = POST_EMPTY_MASSIVE,auth = ("admin",'123')) 
    assert r.status_code == 422, "Неверный код ответа" 

def test_comments():
    POST_TITLE_NUMBER["post"] = post_id
    t = requests.post(API_URL_COMMENT,json=POST_TITLE_NUMBER, auth = ("admin",'123')) # создание комментария
    assert t.status_code == 422, "Неверный код ответа"
    
    POST_CONTENT_NUMBER["post"] = post_id
    t = requests.post(API_URL_COMMENT,json=POST_CONTENT_NUMBER, auth = ("admin",'123')) # создание комментария
    assert t.status_code == 422, "Неверный код ответа"
    
    POST_TITLE_EMPTY["post"] = post_id
    t = requests.post(API_URL_COMMENT,json=POST_TITLE_EMPTY, auth = ("admin",'123')) # создание комментария
    assert t.status_code == 201, "Неверный код ответа"

    POST_CONTENT_EMPTY["post"] = post_id
    t = requests.post(API_URL_COMMENT,json=POST_CONTENT_EMPTY, auth = ("admin",'123')) # создание комментария
    assert t.status_code == 201, "Неверный код ответа"

    POST_NO_TITLE["post"] = post_id
    t = requests.post(API_URL_COMMENT,json=POST_NO_TITLE, auth = ("admin",'123')) # создание комментария
    assert t.status_code == 422, "Неверный код ответа"

    POST_NO_CONTENT["post"] = post_id
    t = requests.post(API_URL_COMMENT,json=POST_NO_CONTENT, auth = ("admin",'123')) # создание комментария
    assert t.status_code == 422, "Неверный код ответа"

    

    t = requests.post(API_URL_COMMENT,json=POST_EMPTY, auth = ("admin",'123')) # создание комментария
    assert t.status_code == 422, "Неверный код ответа"

    POST_XML["post"] = post_id
    t = requests.post(API_URL_COMMENT,data=POST_EMPTY, auth = ("admin",'123')) # создание комментария
    assert t.status_code == 422, "Неверный код ответа"

    
    t = requests.post(API_URL_COMMENT,json=POST_EMPTY_MASSIVE, auth = ("admin",'123')) # создание комментария
    assert t.status_code == 422, "Неверный код ответа"
   


    
