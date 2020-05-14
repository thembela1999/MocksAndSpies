class Sms {
    constructor(number, message) {
        this.number = number;
        this.message = message;
    }

    //Getters 
    getNumber() {
        return this.number;
    }
    getText() {
        return this.message;
    }

    //Public methods
    toString() {
        console.log(`${this.getNumber()} is successfully ${this.getText()} `)
        return (`${this.getNumber()} is successfully ${this.getText()}`)
    }
}
var sms = new Sms('0633942468', 'changed');
sms.toString();

module.exports = {
    Sms
}