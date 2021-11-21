//This is for practice: A person creator.

function Person(firstName, lastName, age, gender, isNice) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.isNice = function (nice) {
        if (nice = true) {
            console.log("I'm nice! If you don't believe me, I will let you not!")
        } else {
            console.log("Hey, you! Don't think I'm nice? Well, take this! Hyyyyy... yah!")
        }
    }
}