# pytest -s -v

import requests
from configuration.URL_configuration import SERVICE_URL_POST_ID
from response import Response
from schemas.user_id import User


resp = requests.get(SERVICE_URL_POST_ID)


print(resp.json())

def test_get_post_id():
    r = requests.get(SERVICE_URL_POST_ID)
    response = Response(r)
    response.assert_status_code(200).validate(User)


    
   