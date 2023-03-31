from tkinter import *
from tkinter.ttk import Combobox # импорт выпадающего списка
from tkinter.ttk import Checkbutton # импорт чекбокса

def clicked():
    
    res = "Добавление текста {}".format(txt.get())
    lbl.configure(text=res)

window = Tk() # создание окна приложения
window.title("Здесь что-то будет")

lbl = Label(window,text="И здесь чтоже что-то будет",font = ("Times New Roman",20))  # создание надписи                                                           
lbl.grid(column=0,row=0)

btn = Button(window,text = 'Кнопка',command =clicked) # создание кнопки с надписью
btn.grid(column=2,row=0)

txt = Entry(window,width =10) # создание поля для ввода текста и сохранение его в переменной при клике
txt.grid(column=1,row=0)

combo = Combobox(window) # создание выпадающего списка
combo['values'] = (1,2,3,4,5, 'Текст')
combo.current(1) # вариант по умолчанию
combo.grid(column = 5, row = 4)

chk = Checkbutton(window,text = 'Выбрать') # создание чекбокса
chk.grid(column = 6, row = 7)
window.mainloop()

