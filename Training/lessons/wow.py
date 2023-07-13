row = [0,1]
k  = 5
a = 0
c = 1
while len(row) < k:
    b = row[a]+row[c]
    row.append(b)
    a = a+ 1
    c = c + 1

    print(row)
print(sum(row[-2:]))