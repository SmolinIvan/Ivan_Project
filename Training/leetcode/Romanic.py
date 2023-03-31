import textwrap

romanic = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000
}

romanic2 = {
    'IV' : 4,
    'IX' : 9,
    'XL' : 40,
    'XC' : 90,
    'CD' : 400,
    'CM' : 900
}

x=0

stroka = str('IIVXM')


strokasprobelom = ' '.join(' '.join(textwrap.wrap(word, 2)) for word in stroka.split(' '))

razbitayastroka = list(strokasprobelom)
print(razbitayastroka)
print(strokasprobelom)

print(stroka.find(str(romanic2.keys))+1)
for i in razbitayastroka:
    x= x + romanic[i]
print(x)




