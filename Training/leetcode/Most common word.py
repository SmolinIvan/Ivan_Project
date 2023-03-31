import re
paragraph = 'I lived long live. I lived '
banned = 'I'
find = max
txt = re.split(r"[.| ]", paragraph)
t=[]

if banned in paragraph:
    print('True')
else:
    print('False')

for i in txt:
    if i not in t :
        t.append(i)
    else:
        t.remove

print(t)
