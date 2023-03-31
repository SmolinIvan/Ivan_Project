num = 16
sqr = num ** (1/4)
print(sqr)
r=int(round(sqr))
print(r)

if sqr - r >= 0:
    r = r
else:
    r = r -1
print(r)
