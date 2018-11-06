function createPeople(){
    function Person(firstName, lastName, age, email){
        if(firstName){ this.firstName = firstName; }
        if(lastName){ this.lastName = lastName;}
        if(age){ this.age = age; }
        if(email) { this.email = email; }
    }
    
    Person.prototype.toString = function(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
    // the code above is equivalent to the code of P02 (except for the if statements)
    return [
    new Person("Maria", "Petrova", 22, "mp@yahoo.com"),
    new Person("SoftUni"),
    new Person("Stephan", "Nikolov", 25,),
    new Person("Peter", "Kolev", 24, "ptr@gmail.com")];
}

const people = createPeople();
for (const person of people) {
    console.log(person.toString());
}
