
s = 'dbbccca'
n = int(input())
ans = n
for i in range(n):
    for j in range(i + 1, n + 1):
        substr = s[i:j]
        if set(substr) == set('abcd'):
            ans = min(ans, len(substr))
print(ans) if ans < n else print('-1')


