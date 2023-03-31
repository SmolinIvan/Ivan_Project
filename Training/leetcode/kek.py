k = [1,2,2,3]
b = set(k)
z = []
n = 3
while n > 0:
    n = n-1
    if len(b) > 0 :
        z.append(max(b))
        b.remove(max(b))

if len(z) > 2:
    print(min(z))
else:
    print(max(z))

print(z)