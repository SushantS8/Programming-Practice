x = 2
print(x == 2) # prints out True
print(x == 3) # prints out False
print(x < 3) # prints out True

name = "John"
age = 33
if name == "John" and age == 33:
    print("My name is John and I am 33 years old.")
if name == "John" or name == "Ian":
    print("Your name is either John or Ian.")

# in operator
if name in ["John","Ian"]:
    print("Your name is either John or Ian")       
     
#if-else statement
x == 2
if x == 2:
    print("value of x is 2")
else:
    print("value of x in not 2")         

#is operator
x = [1,2,3]
y = [1,2,3]
print(x == y) #prints True because the values of x and y are equal.
print(x is y) #prints False because x and y refer to different objects in memory.
