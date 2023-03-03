from humanfriendly import format_size, parse_size
from humanfriendly.prompts import prompt_for_input
user_input = prompt_for_input("Enter a readable file size: ")
num_bytes = parse_size(user_input)
print(num_bytes)