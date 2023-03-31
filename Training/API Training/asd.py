x = 1
y = 4
a = str(bin(x))
b = str(bin(y))
a = a[2:]
b = b[2:]
z = int(a.index("1"))
w = int(b.index("1"))
print(a,b,z,w)
p = abs(w-z)
print(p)