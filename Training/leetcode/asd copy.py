n ='4312'
z = []
for i in n:
    z.append(int(i))

print(z)

b = sorted(z)
print(b)

d = sorted(z,reverse=True)
print(d)

if z == b or z == d:
    print('true')
else:
    print('False')