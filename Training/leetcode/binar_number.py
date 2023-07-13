
s = 43261596
b = ''
s = bin(s)
s = s[2:]
while len(s) <32:
    s = "0" + s    
print(len(s))
print(s)



n = 123

n = bin(n)

n = n[2:]
print(n)
n=str(n)
n=''.join(reversed(n))
print(n)
print(b)