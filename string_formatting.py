#String Formatting
#This prints Hello, John!
name = "John"
print("Hello, %s!" %name)

#This prints out Harry is 25 years old
name = "Harry"
age = 25
print("%s is %d years old." %(name,age))

# This prints out: A list: [1, 2, 3]
mylist = [1,2,3]
print("A list: %s" %mylist) 

data = ("John","Doe","55.55")
format_string = "Hello %s %s. Your current balance is $%s."
print(format_string % data) 