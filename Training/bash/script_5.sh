echo "Telephone brand"
read brand
if [[ $brand == "samsung" ]] || [[ $brand == "nokia" ]] || [[ $brand == "honor" ]] ; then
    case $brand in 
        samsung)
            echo "Скидка на телефоны $brand - 30%";;
        nokia)
            echo "Скидка на телефоны $brand - 10";;
        honor)
            echo "Скидка на телефоны $brand - 20";;
        *)
            echo "На эту модель скидок нет"  
    esac  
else
    echo "$brand - это не марка телефона"
fi