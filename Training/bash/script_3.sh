echo "How old are you"
read age
if [[ $age -ge 0 ]] && [[ $age -lt 12 ]]; then
        echo "You are a child"
    elif [[ $age -ge 12 ]] && [[ $age -lt 18 ]]; then
        echo "You are a teenager"
    elif [[ $age -ge 18 ]] && [[ $age -lt 60 ]]; then
        echo "You are an adult"
    else
        echo "You are elderman"
fi