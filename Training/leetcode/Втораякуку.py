def wow(s):
    n = len(s)
    ans = n
    for i in range(n):
        for j in range(i + 1, n + 1):
            substr = s[i:j]
            if set(substr) == set('abcd'):
                ans = min(ans, len(substr))
    return ans if ans < n else -1

print(wow('aaaabbbbccccdddd'))