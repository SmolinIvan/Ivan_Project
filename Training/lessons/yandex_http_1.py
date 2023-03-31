user_query = 'как стать бэкенд-разработчиком'
list = user_query.split(" ") # сделать и из строки список, пробел разделяет строку на элементы
kek = "%20".join(list) # собрать список в строку, между  элементами будет %20
url = 'https://yandex.ru/search/?text=' +  kek

print(url)