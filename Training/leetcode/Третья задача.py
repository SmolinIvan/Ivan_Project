import math

s = str(input())

n = int(s[0])
m = int(s[1])
k = int(s[2])

rev = n * k
time = math.ceil(rev/m)

print(time)