s = 'ai'
k = ['e','u','i','o','a', 'E','U','I','O','A']
# d = []
# w = []
# for i in s:
#     if i in k:
#         d.append(i)
# d.reverse()



# b = 0
# for i in s:
    
#     if s[b] in d:
#         s = s[:b]+ d[a] + s[b+1:]
#         a = a + 1
#     b = b + 1
# print(s)


s = list(s)
print(s)
StringLength2= int(len(s)/2)
print(StringLength2)
i = 0
a = 0
b = -1
while  abs(a) < StringLength2  and abs(b) <= StringLength2:
    if s[a] in k and s[b] in k:
        sleva = s[a]
        s[a] = s[b]
        s[b] = sleva
        a = a + 1
        b = b - 1
    if s[a] not in k:
        a = a + 1
    if s[b] not in k:
        b = b - 1

p =''
for i in s:       
    p = p +''.join(i)
print(p)

    # print(s[a],s[b])
    # a = a + 1
    # b = b - 1 
    # i = i + 1

# for i in s:
#     if i not in d:
#         w.append(i)
#     else:
#         w.append(d[a])
#         a = a+1
# print(w)
# p = ''
# for i in w:
#     p = p +''.join(i)
# print(p)


