'use strict'; 
(function() {
    class Person {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }

        get fullName() {
            return this.firstName + ' ' +  this.lastName;
        }

        set fullName(value) {
            let nameParts = value.split(' ');
            this.firstName = nameParts[0]
            this.lastName = nameParts[1]
        }
    }

    let jim = new Person('Jim', 'Cooper', 29);
    display(jim.fullName)
    jim.fullName = 'Abrar Khan'
    display(jim.fullName)
})();