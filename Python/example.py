#Examples of basic string operations
s = "Strings are awesome!"

#Provides length of the string
print("Length of string is %d" %len(s))

# First occurrence of "a" should be at index 8
print("The first occurrence of a is %d" %s.index("a"))

# Counts number of a's in the string.
print("a occurs %d times" %s.count("a"))

# Slicing the string into bits
print("The first five characters are '%s'" %s[:5]) #Starts to 5
print("The next five charaters are '%s'" %s[5:10]) #5 to 10
print("The thirteen character is '%s'" %s[12]) #prints the character in index 12 as it uses zero indexig.
print("The characters with odd index are '%s'" %s[1::2])
print("The last five characters are '%s'" %s[-5:]) # 5th-from-last to end

#Coverting the above string into uppercase and lowercase.
print("String in uppercase is '%s'" %s.upper())
print("String in lowercase is '%s'" %s.lower()) 

#Check how the string starts and ends with.
if s.startswith("Sr"):
    print("True")
else:
    print("False")    

if s.endswith("ome!"):
    print("True")
else:
    print("False")    

# Split the string into three separate strings,
# each containing only a word
print("Split the strings '%s'" %s.split())    



