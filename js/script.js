const numberButtons = document.querySelectorAll(['data-number'])
const operationButtons = document.querySelectorAll(['data-operation'])
const equalsButtons = document.querySelectorAll(['data-equals'])
const deleteButtons = document.querySelectorAll(['data-delete'])
const allClearButton = document.querySelectorAll(['data-all-clear'])
const previousOperandTextElement = document.querySelector(['data-previous-operand'])
const currentOperandTextElement = document.querySelector(['data-current-operand'])
const calculator =new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
})
})

equalsButtons.addEventListener('click', button => {
    calculator.compute()//function call
    calculator.updateDisplay()
})

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement=currentOperandTextElement
    }
    clear(){
        //reset everything
        this.currentOperand = " "
        this.previousOperand= ''
        this.chooseOperation = undefined
    }
    delete(){

    }
    appendNumber(number){
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand =this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation){
        if (this.currentOperand === '')return
        if(this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operation
        this.currentOperand = this.currentOperand
        this.currentOperand = ''

    }
        compute(){
            //carry out the different math operations
            let computation
            const prev = parseFloat(this.previousOperand)
            const current= parseFloat(this.currentOperand)
            if (isNaN(prev) || isNaN(current)) return
            switch(this.operation){
                case '+':
                computation = prev + current
                break
                case 'X':
                computation = prev * current
                break
                case '-':
                computation = prev - current
                break
                case '÷':
                computation = prev / current
                break
            }

        }

        updateDisplay(){
            this.currentOperandTextElement.innerText = this.currentOperand
            this.previousOperandTextElement.innerText = this.previousOperand
        }
}


