document.body.innerHTML = `<div id="wrapper">
<input type="text" id="name">
<input type="text" id="income">
</div>`;

let chai = require('chai');
let jsdom = require('jsdom-global')();
let $ = require('jquery');
let assert = chai.assert;


let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

describe('sharedObject tests', () => {
    describe('Unmodified sharedObject tests', () => {
        it("should be an object", () => {
            assert.equal(Object.prototype.toString.call(sharedObject), '[object Object]');
}       );
        it("should have property name", () => {
            assert.isTrue(sharedObject.hasOwnProperty('name'));
        });
        it("should have property income", () => {
            assert.isTrue(sharedObject.hasOwnProperty('income'));
        });
        it('name should be null initially', () => {
            assert.isNull(sharedObject.name);
        });
        it('income should be null initially', () => {
            assert.isNull(sharedObject.income);
        });
        it("initial value for name input should be an empty string", () => {
            let nameInput = $('#name');
            assert.equal(nameInput.val(), '');
        });
        it("initial value for name input should be an empty string", () => {
            let incomeInput = $('#income');
            assert.equal(incomeInput.val(), '');
        });
        it("should be a function", () => {
            assert.equal(typeof sharedObject.changeName, 'function');
        });
        it("should be a function", () => {
            assert.equal(typeof sharedObject.changeIncome, 'function');
        });
        it("should be a function", () => {
            assert.equal(typeof sharedObject.updateName, 'function');
        });
        it("should be a function", () => {
            assert.equal(typeof sharedObject.updateIncome, 'function');
        });
    });
    

    describe('changeName tests', () => {
        it('Passing an empty string should not change the name value', () => {
            const expected = 'Pesho';

            sharedObject.changeName('Pesho');
            sharedObject.changeName('');    
            let result = sharedObject.name;

            assert.equal(result, expected);
        });
        it('Passing an empty string should not change the name input', () => {
            const expected = 'Gosho';

            sharedObject.changeName('Gosho');
            sharedObject.changeName('');      
            const nameInput = $('#name');

            assert.equal(nameInput.val(), expected);
        });
        it('Passing a valid string should modify the name value', () => {
            const expected = 'Zoro';

            sharedObject.changeName('Initial');
            sharedObject.changeName('Zoro');

            const result = sharedObject.name;
            assert.equal(result, expected);
        });
        it('Passing a valid string should change textbox name value', () => {
            const expected = 'Bye';
            sharedObject.changeName('Greetings');
            let nameInput = $('#name');
            sharedObject.changeName('Bye');
            assert.equal(nameInput.val(), expected);
        });
    });

    describe('changeIncome tests', () => {
        it('Passing a string after a valid number should not change income', () => {
            sharedObject.changeIncome(35);
            sharedObject.changeIncome('hi');
            assert.equal(sharedObject.income, 35);
        });
        it('Passing a string after a valid number should not change income element', () => {
            sharedObject.changeIncome(315);
            sharedObject.changeIncome('hi');
            let income = $('#income');
            assert.equal(income.val(), 315);
        });
        it('Passing a floating point number after a valid number should not change income', () => {
            sharedObject.changeIncome(330);
            sharedObject.changeIncome(2.5);
            assert.equal(sharedObject.income, 330);
        });
        it('Passing a floating point number after a valid number should not change income input', () => {
            sharedObject.changeIncome(444);
            sharedObject.changeIncome(2.13);
            let incomeInput = $('#income');
            assert.equal(incomeInput.val(), 444);
        });
        it('Passing a negative number after a valid number should not change income', () => {
            const expected = 345;

            sharedObject.changeIncome(345);
            sharedObject.changeIncome(-5);
           
            const result = sharedObject.income;
            assert.equal(expected, result);
        });
        it('Passing a negative number after a valid number should not change income element', () => {
            const expected = 10;

            sharedObject.changeIncome(10);
            sharedObject.changeIncome(-53);
            const income = $('#income');
            const result = income.val();

            assert.equal(result, expected);
        });
        it('Passing a zero after a valid number should not change income', () => {
            const expected = 8123;

            sharedObject.changeIncome(8123)
            sharedObject.changeIncome(0);

            const result = sharedObject.income;
            assert.equal(result, expected);
        });
        it('Passing a zero after a valid number should not change income input', () => {
            const expected = 5555;

            sharedObject.changeIncome(5555)
            sharedObject.changeIncome(0);
            const income = $('#income');

            assert.equal(income.val(), expected);
        });  
        it('Passing a valid number should correctly modify income', () => {
            const expected = 5;
            sharedObject.changeIncome(5);
            const result = sharedObject.income;
            assert.equal(result, expected);
        });
        it('Passing a valid number should correctly change income element', () => {
            sharedObject.changeIncome(5);
            let income = $('#income');
            assert.equal(income.val(), 5);
        });
    });

    describe('updateName tests', () => {
        it('Passing an empty string should not change name', () => {           
            sharedObject.changeName('Testov');
            $('#name').val('');
            sharedObject.updateName();
            const expected = 'Testov';
            const result = sharedObject.name;          
            assert.equal(result, expected);
        }); 
        it('Passing a correct value should change name', () => {
            const expected = 'Testov';       

            sharedObject.changeName('Testing');
            $('#name').val('Testov');
            sharedObject.updateName();
            
            const result = sharedObject.name;
            assert.equal(result, expected);
        }); 
    });
    describe('updateIncome tests', () => {
        it('Passing a correct number should update income', () => {
            $('#income').val(15);
            sharedObject.updateIncome();
            const expected = 15;          
            const result = sharedObject.income;
            assert.equal(result, expected);
        }); 
        it('Passing an empty string should not update income', () => {
            sharedObject.changeIncome(35);
            $('#income').val('');
            sharedObject.updateIncome();
            const expected = 35;          
            const result = sharedObject.income;
            assert.equal(result, expected);
        }); 
        it('Passing a string should not update income', () => {
            sharedObject.changeIncome(545);
            $('#income').val('Im a string, mister');
            sharedObject.updateIncome();
            const expected = 545;          
            const result = sharedObject.income;
            assert.equal(result, expected);
        }); 
        it('Passing a floating point number should not update income', () => {
            const expected = 831;       
            
            sharedObject.changeIncome(831);
            $('#income').val('2.5');
            sharedObject.updateIncome();

            const result = sharedObject.income;
            assert.equal(result, expected);
        }); 
        it('Passing a negative number should not update income', () => {
            const expected = 355;    

            sharedObject.changeIncome(355);
            $('#income').val('-5');
            sharedObject.updateIncome();
         
            const result = sharedObject.income;
            assert.equal(result, expected);
        });    
        it('Passing a zero should not update income', () => {
            const expected = 15;
            
            sharedObject.changeIncome(15);
            $('#income').val('0');
            sharedObject.updateIncome();
          
            const result = sharedObject.income;
            assert.equal(result, expected);
        }); 
        
        it('Passing a correct number should update income', () => {
            const expected = 123;    
            
            sharedObject.changeIncome(412);
            $('#income').val('123');
            sharedObject.updateIncome();
        
            const result = sharedObject.income;
            assert.equal(result, expected);
        }); 
    });
});
