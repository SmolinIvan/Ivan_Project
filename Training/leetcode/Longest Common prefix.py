spisok = ['brand', 'bright', 'cd', 'kek']

for word1 in spisok:
    for word2 in spisok:
        k = word2[0]+word2[1]
        if word1 != word2 and word1.startswith(k):
            print(k)
        