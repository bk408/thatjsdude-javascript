let name = {
    firstName: "Bhavya",
    lastName: "Khatri",
    printFullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
}

name.printFullName()

/*let name2 = {
  firstName: "Kabir",
  lastName: "Thapar",
  printFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

name2.printFullName() */


// We can do this but this is not a good practice that's why we use call method


let name2 = {
    firstName: "virat",
    lastName: "kohli"
}


// call method is very useful. we can borrow functions from other method and write the code with industry standard

name.printFullName.call(name2)  // here first parameter should be reference of this variable, second parameter is optional

// like here we are adding hometown also.


// Improvise the code

let newName = {
  firstName: "Glenn",
  lastName: "Maxwell",
};

let printFullName = function (hometown) {
    console.log(this.firstName + " " + this.lastName +  " from " + hometown );
}

printFullName.call(newName, "Delhi")


let newName2 = {
    firstName: "Steve",
    lastName: "smith"
}

printFullName.call(newName2, "punjab")



// Apply method

let names = {
    firstName: "David",
    lastName: "Warner"
}


let fullName = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown, state);
}


fullName.apply(names, ["sydney", "australia"])


// bind method

let printMyName = fullName.bind(names, "punjab", "mohali");

// console.log(printMyName);

printMyName()