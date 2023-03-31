s = 'egge'
t = 'add'
z = []
c = []


for i in s:
   z.append(s.count(i))
for h in t:
   c.append(t.count(h))



if len(set(s)) == len(set(t)) and z==c:
    print('True')
else:
    print('False')

print(z)
print(c)