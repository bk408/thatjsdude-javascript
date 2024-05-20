
# call 

It means we can borrow functions from other method and write the code with industry standard

so when we need to pass the data dynamically which is pointing towards this in this case we use call method


# Apply

The only difference between call and apply is the way we pass the arguments


In both methods first parameter should be reference of this variable. the only difference is that we can pass second parameter directly in call method but in apply we use array. 

ex:- name.printFullName.call(name2, " Alwar ", " Raj" ) => call method

ex:- name.printFullName.call(name2, ["Alwar", "Raj"]) => apply method


# Bind

bind method looks exact same as call method but the only difference is that Instead of direct calling this method over here 

bind method binds this printFullName with the object and returns us the copy of that object


This is basically used to bind and keep a copy of that matter and use it later 



Note: The only difference between call and bind is like it gives you the copy but which can invoke later.
