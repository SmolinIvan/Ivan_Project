l = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
k = 'EEE'
z = []
for i in k:
    if i in l:
        z.append(l.index(i)+1)

p = 0
h = []
a = 0
for i in z:
    p = 26**((len(z)-1) - a) * i
    h.append(p)
    a = a + 1
    print(i)
    print(z.index(i))
print(z)

print(h)
print(p)
print(sum(h))

