# pytest -s -v
# Позитивные проверки для API форума

import requests
from configuration.URL_configuration import API_URL, POST_STAND, API_URL_POST_ID, POST_PUT, API_URL_COMMENT, BODY_PUT_COMMENT, API_URL_COMMENT_ID
from configuration.COMMENT_BODY_configuration import COMMENT_STAND
from schemas.post import POST_CREATE
from jsonschema import validate

# отправка запроса на создание поста. Сохранение тела ответа и id поста в глобальные переменные
r = requests.post(API_URL, json = POST_STAND,auth = ("admin",'123')) #отправка post-запроса с телом и данными авторизации
body = r.json()
post_id = body['id']# вытаскивание id созданного поста для использования в последующих запросах
BODY_PUT_COMMENT["post"] = post_id


# Создание поста, проверка кода ответа
def test_post_create_code(): #проверка созданного поста
    
    assert r.status_code == 201, "Неверный код ответа" #проверка кода
    validate(body,POST_CREATE), "Неверная запись"
    print(r.json()) # вывод тела ответа
    
# Проверка поста по id, проверка тела ответа, кода ответа
def test_get_post_code(): #проверка поста по id
    
    d = requests.get(API_URL_POST_ID + str(post_id)) #отправка get-запроса с телом и данными авторизации
    
    assert d.status_code == 200, "Неверный код ответа" #проверка кода
    

def test_get_post_body():
    b = 0
    d = requests.get(API_URL_POST_ID + str(post_id)) #отправка get-запроса с телом и данными авторизации
    bodyd = d.json() # Тело ответа
    
    if body == bodyd:
        b = b + 1 
    assert b == 1, "Неверная запись" # Проверка, что данные записались корректно
    print(d.json()) #вывод тела ответа

# Проверка, что созданный пост есть в списке. Проверка кода ответа
def test_get_all_posts_code(): # проверка всех постов

    
    t = requests.get(API_URL)
    
    assert t.status_code == 200, "Неверный код ответа"
    

def test_get_all_posts_body(): # проверка всех постов

    b = 0
    t = requests.get(API_URL)
    bodyt = t.json()
    
    if body in bodyt:
        b = b + 1
    assert b == 1, "Неверная запись" # Проверка, что пост есть в списке


#РЕдактирование поста, проверка кода ответа, изменений
def test_put_post_code(): 

    r = requests.put(API_URL_POST_ID + str(post_id), json=POST_PUT, auth = ("admin",'123')) # редактирование поста. Тут в теле ответа будет "успешно"
    assert r.status_code == 200, "Неверный код ответа"
    
    

def test_put_post_body(): 

    a = requests.get(API_URL_POST_ID + str(post_id)) # получение тела запроса после изменения
    
    
    bodya = a.json()
    b = 0
    c = bodya.values()
    for i in POST_PUT.values(): #проверка, что изменения внеслись в пост
        if i in c:
            b = b + 1
    assert b == len(POST_PUT.values()), "Изменения записались неверно"
     


# Отправка запроса на создание комментария, внесение тела ответа и id комментария в глобальные переменные
t = requests.post(API_URL_COMMENT,json=BODY_PUT_COMMENT, auth = ("admin",'123')) # создание комментария
bodyt = t.json()
comment_id = bodyt["id"]

def test_comment_create_code():
     assert t.status_code == 201, "Неверный код ответа"

#Проверка комментария, кода ответа, изменений
def test_comment_get_code(): 
    BODY_PUT_COMMENT["post"] = comment_id
    a = requests.get(API_URL_COMMENT_ID +"/"+ str(comment_id)) # просмотр созданного комментария
    
    assert a.status_code == 200, "Неверный код ответа"
    

def test_comment_body(): 
    BODY_PUT_COMMENT["post"] = comment_id
    a = requests.get(API_URL_COMMENT_ID +"/"+ str(comment_id)) # просмотр созданного комментария
    bodya = a.json()
    b = 0
    c = bodya.values()
    for i in BODY_PUT_COMMENT.values(): #проверка, что изменения внеслись в пост
        if i in c:
            b = b + 1
    assert b == len(BODY_PUT_COMMENT.values()), "Изменения записались неверно"

# Проверка, что комментарий есть в списке
def test_get_comments_code(): 

    r = requests.get(API_URL_COMMENT)
    assert r.status_code == 200, "Неверный статус кода"
    
    

def test_get_comments_body(): 

    r = requests.get(API_URL_COMMENT)
    body = r.json()
    b = 0
    if bodyt in body:
        b = b + 1
    assert b > 0 , "Комментария нету в общем списке комментариев после создания" # Проверка, что созданный коментарий есть в общем списке



def test_put_comment_code():
    COMMENT_STAND["post"] = comment_id
    a = requests.put(API_URL_COMMENT_ID +"/"+ str(comment_id), json=COMMENT_STAND,auth = ("admin",'123'))   
    assert a.status_code == 200, "Неверный код ответа"

def test_put_comment_body():
    a = requests.get(API_URL_COMMENT_ID +"/"+ str(comment_id)) # просмотр созданного комментария
    bodya = a.json()
    b = 0
    c = bodya.values()
    for i in BODY_PUT_COMMENT.values(): #проверка, что изменения внеслись в пост
        if i in c:
            b = b + 1
    assert b == len(BODY_PUT_COMMENT.values()), "Изменения записались неверно"

# Удаление комментария, проверка, что комментарий удален, проверка кода ответа.
def test_del_comment_id_code():

    a = requests.get(API_URL_COMMENT_ID +"/"+ str(comment_id)) # отправка запроса на просмотр комментария с целью сохранения тела ответа
    bodya = a.json() # сохранение тела ответа комментария
    r = requests.delete(API_URL_COMMENT_ID +"/"+ str(comment_id),  auth = ("admin",'123')) # удаление комментария
    
    k = requests.get(API_URL_COMMENT) # получение всех комментариев
    bodyk = k.json()
    assert r.status_code == 204, "Неверный статус кода"

    b = 0
    if bodya not in bodyk:
        b = b + 1
    assert b == 1, "Комментарий есть, хотя должен быть удален"

    

def test_del_comment_no_longer_exist(): # Комментарий удален
    a = requests.get(API_URL_COMMENT_ID +"/"+ str(comment_id)) # отправка запроса на просмотр комментария с целью сохранения тела ответа
    assert a.status_code == 404, "Неверный код ответа"
    
# Удаление поста, проверка кода ответа, проверка, что пост удален и, что комментарии удалены вместе с ним. Проверка, что нельзя написать комментарии к удаленному посту
def test_post_delete(): 
    a =  requests.get(API_URL_POST_ID + str(post_id)) # отправка запроса на просмотр поста, с целью сохранения его в переменную
    bodya = a.json() # сохранение тела ответа комментария
    BODY_PUT_COMMENT['post'] = bodya['id']
    assert a.status_code == 200, "Неверный код ответа"

    t = requests.post(API_URL_COMMENT,json=BODY_PUT_COMMENT, auth = ("admin",'123')) # создание комментария для проверки, что он удаляется с удалением поста
    bodyt = t.json()
    print(bodyt)
    comment_id = bodyt['id']
    assert t.status_code == 201, "Неверный код ответа"

    r = requests.delete(API_URL_POST_ID + str(post_id), auth = ("admin",'123')) # удаление поста
    assert r.status_code == 204, "Неверный код ответа" #проверка кода

    q = requests.get(API_URL) # просмотр всех постов
    bodyq = q.json()
    b = 0
    if bodya not in bodyq:
        b = b + 1
    assert b == 1, "Пост есть в списке, хотя должен быть удален" 

    a =  requests.get(API_URL_POST_ID + str(post_id)) # проверка, что поста нет
    assert a.status_code == 404, "Неверный код ответа"

    a = requests.get(API_URL_COMMENT_ID +"/"+ str(comment_id)) 
    assert a.status_code == 404, "Неверный код ответа" # Проверка, что комментарий удален

    d = requests.post(API_URL_COMMENT,json=BODY_PUT_COMMENT, auth = ("admin",'123')) # попытка создать комментарий в удаленном посте
    assert d.status_code == 404, "Неверный код ответа"

  
