
digits = [1,2,3]
b = []

z=''
for i in digits:
    z = z + str(i)
z = int(z)+1
z=str(z)
for i in z:
    b.append(int(i))
print(b)