# pytest -s -v
# Негативные проверки для API форума

import requests
from configuration.URL_configuration import API_URL, API_URL_COMMENT, AUTH, API_URL_POST_ID, API_URL_COMMENT_ID, API_ACCOUNT
from configuration.POST_BODY_configuration import POST_TITLE_NUMBER,POST_STAND, POST_CONTENT_NUMBER, POST_TITLE_EMPTY, POST_CONTENT_EMPTY, POST_NO_TITLE, POST_NO_CONTENT, POST_EMPTY, POST_EMPTY_MASSIVE, POST_XML
from configuration.COMMENT_BODY_configuration import COMMENT_STAND, COMMENT_TITLE_NUMBER, COMMENT_CONTENT_NUMBER, COMMENT_TITLE_EMPTY, COMMENT_CONTENT_EMPTY, COMMENT_NO_TITLE, COMMENT_NO_CONTENT, COMMENT_EMPTY, COMMENT_EMPTY_MASSIVE, COMMENT_XML
from schemas.post import POST_CREATE
from jsonschema import validate


r = requests.post(API_URL, json = POST_STAND,auth = ("admin",'123')) #отправка post-запроса с телом и данными авторизации
body = r.json()
post_id = body['id']# вытаскивание id созданного поста для использования в последующих запросах
COMMENT_STAND["post"] = post_id

# Создание поста с невалидными данными в теле запроса
def test_post_posts_1(): #проверка созданного поста
    r = requests.post(API_URL, json = POST_TITLE_NUMBER,auth = AUTH) 
    assert r.status_code == 422, "Неверный код ответа" 

    r = requests.post(API_URL, json = POST_CONTENT_NUMBER,auth = AUTH) 
    assert r.status_code == 422, "Неверный код ответа" 

    r = requests.post(API_URL, json = POST_TITLE_EMPTY,auth = AUTH) 
    assert r.status_code == 201, "Неверный код ответа" 

    r = requests.post(API_URL, json = POST_CONTENT_EMPTY,auth = AUTH) 
    assert r.status_code == 201, "Неверный код ответа" 

    r = requests.post(API_URL, json = POST_NO_TITLE,auth =AUTH) 
    assert r.status_code == 422, "Неверный код ответа" 
    
    r = requests.post(API_URL, json = POST_NO_CONTENT,auth = AUTH) 
    assert r.status_code == 422, "Неверный код ответа" 

    r = requests.post(API_URL, json = POST_EMPTY,auth = AUTH) 
    assert r.status_code == 422, "Неверный код ответа" 

    r = requests.post(API_URL, data =  POST_XML,auth = AUTH)
    assert r.status_code == 422, "Неверный код ответа" 
    print(r.json())

    r = requests.post(API_URL, json = POST_EMPTY_MASSIVE,auth = AUTH)
    assert r.status_code == 422, "Неверный код ответа" 

def test_comments():
    COMMENT_TITLE_NUMBER["post"] = post_id
    t = requests.post(API_URL_COMMENT,json=COMMENT_TITLE_NUMBER, auth = AUTH) # создание комментария
    assert t.status_code == 422, "Неверный код ответа"
    
    COMMENT_CONTENT_NUMBER["post"] = post_id
    t = requests.post(API_URL_COMMENT,json=COMMENT_CONTENT_NUMBER, auth = AUTH) # создание комментария
    assert t.status_code == 422, "Неверный код ответа"
    
    COMMENT_TITLE_EMPTY["post"] = post_id
    t = requests.post(API_URL_COMMENT,json=COMMENT_TITLE_EMPTY, auth = AUTH )# создание комментария
    assert t.status_code == 201, "Неверный код ответа"

    COMMENT_CONTENT_EMPTY["post"] = post_id
    t = requests.post(API_URL_COMMENT,json=COMMENT_CONTENT_EMPTY, auth = AUTH) # создание комментария
    assert t.status_code == 201, "Неверный код ответа"

    COMMENT_NO_TITLE["post"] = post_id
    t = requests.post(API_URL_COMMENT,json=COMMENT_NO_TITLE, auth = AUTH) # создание комментария
    assert t.status_code == 422, "Неверный код ответа"

    COMMENT_NO_CONTENT["post"] = post_id
    t = requests.post(API_URL_COMMENT,json=COMMENT_NO_CONTENT, auth = AUTH) # создание комментария
    assert t.status_code == 422, "Неверный код ответа"

    t = requests.post(API_URL_COMMENT,json=COMMENT_EMPTY, auth = AUTH) # создание комментария
    assert t.status_code == 422, "Неверный код ответа"

    COMMENT_EMPTY["post"] = post_id
    t = requests.post(API_URL_COMMENT,data=COMMENT_EMPTY, auth = AUTH) # создание комментария
    assert t.status_code == 422, "Неверный код ответа"

    t = requests.post(API_URL_COMMENT,json=COMMENT_EMPTY_MASSIVE, auth = AUTH) # создание комментария
    assert t.status_code == 422, "Неверный код ответа"
   
    COMMENT_STAND["post"] = 9999999 # Несуществующий id
    t = requests.post(API_URL_COMMENT,json=COMMENT_STAND, auth = AUTH) # создание комментария
    assert t.status_code == 404, "Неверный код ответа"

def test_put_post():
    r = requests.put(API_URL_POST_ID + str(post_id), json = POST_TITLE_NUMBER,auth = AUTH) 
    assert r.status_code == 422, "Неверный код ответа" 
    print(r.json())
    print(POST_TITLE_NUMBER)

    r = requests.put(API_URL_POST_ID + str(post_id), json = POST_CONTENT_NUMBER,auth = AUTH) 
    assert r.status_code == 422, "Неверный код ответа" 
    print(r.json())

    r = requests.put(API_URL_POST_ID + str(post_id), json = POST_TITLE_EMPTY,auth = AUTH) 
    print(r.json())
    assert r.status_code == 200, "Неверный код ответа" 
   
    
    r = requests.put(API_URL_POST_ID + str(post_id), json = POST_CONTENT_EMPTY,auth = AUTH) 
    assert r.status_code == 200, "Неверный код ответа" 

    r = requests.put(API_URL_POST_ID + str(post_id), json = POST_NO_TITLE,auth =AUTH) 
    assert r.status_code == 200, "Неверный код ответа" 
    
    r = requests.put(API_URL_POST_ID + str(post_id), json = POST_NO_CONTENT,auth = AUTH) 
    assert r.status_code == 200, "Неверный код ответа" 

    r = requests.put(API_URL_POST_ID + str(post_id), json = POST_EMPTY,auth = AUTH) 
    assert r.status_code == 200, "Неверный код ответа" 

    r = requests.put(API_URL_POST_ID + str(post_id), auth = AUTH) 
    assert r.status_code == 422, "Неверный код ответа" 

    r = requests.put(API_URL_POST_ID + str(post_id), data =  POST_XML,auth = AUTH)
    assert r.status_code == 422, "Неверный код ответа" 
    print(r.json())

    r = requests.put(API_URL_POST_ID + str(post_id), json = POST_EMPTY_MASSIVE,auth = AUTH)
    assert r.status_code == 422, "Неверный код ответа" 

def test_put_comments():

    COMMENT_STAND['post'] = post_id
    t = requests.post(API_URL_COMMENT,json=COMMENT_STAND, auth = AUTH) # создание комментария
    assert t.status_code == 201, "Неверный код ответа"    
    bodyt = t.json()
    comment_id = bodyt["id"]

    
    t = requests.put(API_URL_COMMENT_ID +"/"+ str(comment_id),json=COMMENT_TITLE_NUMBER, auth = AUTH) # создание комментария
    assert t.status_code == 422, "Неверный код ответа"   
    
    t = requests.put(API_URL_COMMENT_ID +"/"+ str(comment_id),json=COMMENT_CONTENT_NUMBER, auth = AUTH) # создание комментария
    assert t.status_code == 422, "Неверный код ответа"
    
    t = requests.put(API_URL_COMMENT_ID +"/"+ str(comment_id),json=COMMENT_TITLE_EMPTY, auth = AUTH )# создание комментария
    assert t.status_code == 200, "Неверный код ответа"

    t = requests.put(API_URL_COMMENT_ID +"/"+ str(comment_id),json=COMMENT_CONTENT_EMPTY, auth = AUTH) # создание комментария
    assert t.status_code == 200, "Неверный код ответа"
    
    t = requests.put(API_URL_COMMENT_ID +"/"+ str(comment_id),json=COMMENT_NO_TITLE, auth = AUTH) # создание комментария
    assert t.status_code == 200, "Неверный код ответа"

    t = requests.put(API_URL_COMMENT_ID +"/"+ str(comment_id),json=COMMENT_NO_CONTENT, auth = AUTH) # создание комментария
    assert t.status_code == 200, "Неверный код ответа"
    
    t = requests.put(API_URL_COMMENT_ID +"/"+ str(comment_id),data=COMMENT_XML, auth = AUTH) # создание комментария
    assert t.status_code == 422, "Неверный код ответа"

    t = requests.put(API_URL_COMMENT_ID +"/"+ str(comment_id),json=COMMENT_EMPTY_MASSIVE, auth = AUTH) # создание комментария
    assert t.status_code == 422, "Неверный код ответа"
   


    
    