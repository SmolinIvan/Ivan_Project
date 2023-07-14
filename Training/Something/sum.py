# n = 30
# m = 10
# m[0] = 10000
# m[9] = 10000
# m[10] = 11000
# m[19] = 11000
# m[20] = 12000
# m[29] = 12000




def sum(N,X,M):
    k = 0
    s = 0
    while k < N:
        if k < M:
            s = s + X
            k = k + 1
        else:
            X = X + 1000
            M = M + 10
            s = s + X
            k = k + 1
    return s,M,k

print(sum(30,10000,10))

