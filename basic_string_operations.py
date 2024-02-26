astring = "hello world!"
print("single quotes are ' ' ")

print(len(astring)) 

#This prints out the location of first occurrence of o and only counts one 'o' even if it contains two o's.
print(astring.index("o")) 

#This counts the no. of l's in the string.
print(astring.count("l")) 

#This prints a slice of the string, starting at index 3, and ending at index 6.
print(astring[3:7]) 

#This prints the characters of string from 3 to 7 skipping one character. This is extended slice syntax. The general form is [start:stop:step].
print(astring[3:7:2])

#This both gives same output as default step is 1.
print(astring[3:7])
print(astring[3:7:1])

#This function reverse the string.
print(astring[::-1])

#This converts the given string into upper and lower cases resp.
print(astring.lower())
print(astring.upper())

#This is used to determine whether the string starts with something or ends with something
print(astring.startswith("hello"))
print(astring.endswith("hdndfm"))

#This example splits at a space, the first item in the list will be "Hello", and the second will be "world!".
abc = astring.split(" ")
print(abc)

