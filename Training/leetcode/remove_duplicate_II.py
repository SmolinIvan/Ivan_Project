g = [1,2]
s = [1,2,3]

b = 0
a = 0
c = 0
d = 0
if len(g) > len(s):
    while d < len(s):
        a = 0
        while a < len(g):
            if s[d] >= g[a]:
                b = b + 1
            a = a + 1
        d = d + 1


else:
    while d < len(g):
        a = 0
        while a < len(s):
            if g[d] >= s[a]:
                b = b + 1
            a = a + 1
        d = d + 1

print(b)