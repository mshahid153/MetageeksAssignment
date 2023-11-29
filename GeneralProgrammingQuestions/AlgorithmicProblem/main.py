def is_palindrome(string):
    cleaned_str = string.lower()
    return cleaned_str == cleaned_str[::-1]

string = input("Enter a string : ")
print(is_palindrome(string))