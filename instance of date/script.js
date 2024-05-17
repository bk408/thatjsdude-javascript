

// Write a method on instance of a date which will give you next day

Date.prototype.nextDay = function () {
    const nextDay = new Date(this);

    nextDay.setDate(nextDay.getDate() + 1)

    return nextDay
}

const today = new Date()
const result = today.nextDay()
console.log(result);


/* 
 # Logic to solve this issue:-

 1. first we need to define a method on the Date.prototype. This alloys any instance of the Date object to call this method

 2. Inside the method, we create a new Date object and set it to the current date (this)

 3. in this case we need date of next day so here we do the increment for oneDay by using setDate()

 4. then we just return the nextDay, which is now represent the current date

 */