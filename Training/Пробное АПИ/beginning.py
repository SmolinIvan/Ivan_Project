import requests
import sys
import json


class TestRegistration:
    def test_registration():
       
        res = requests.get('https://hr.recruit.liis.su/qa0/v1/api/smolin9667@gmail.com/posts')
        if res.status_code == 200:
            k = 'PASSED'
        else:
            k = 'FAILED'

        with open('resp.json', 'w', encoding = 'utf-8') as f:
            sys.stdout = f
            data = json.dumps(res.json(),sort_keys=False, indent=4,  ensure_ascii=False, separators= (',', ': '))
            
            print(res)
            print(data)
            print(k)

TestRegistration.test_registration()