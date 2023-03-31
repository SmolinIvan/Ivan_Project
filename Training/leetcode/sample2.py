accounts = [[1,2,3],[2,3,4],[10,12]]
c = []
n = 0
for i in accounts:
    n = 0
    for j in i:
        n = j + n
        
    c.append(n) 
print(c)
c.sort(reverse=True)       
a = c
print(a)
print(a[0])