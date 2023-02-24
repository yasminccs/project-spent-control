const inputCost = document.querySelector('#inputValueBudget')
const btnCalculate = document.querySelector('#btnAddBudget')
const nameDespesa = document.querySelector('#inputNameExpense')
const valueDespesa = document.querySelector('#inputValueExpense')
const btnAddDespesa = document.querySelector('#btnAddExpense')
const titleDespesa = document.querySelector('#pExpense')
const titleValue = document.querySelector('#pValueExpense')

const totalCost = document.querySelector('#displayBudget')
const totalDespesas = document.querySelector('#displayExpenses')
const saldo = document.querySelector('#displaySale')

const select = document.querySelector('#allExpenses')

const obj = {
    orcamento: 0,
    despesa: 0,
    saldo: 0
}
console.log(obj)

btnCalculate.addEventListener('click', function(){
    obj.orcamento += Number(inputCost.value)
    obj.saldo = obj.orcamento - obj.despesa

    totalCost.innerText = `+ R$${obj.orcamento}`
    saldo.innerText = `R$${obj.saldo}`
})

btnAddDespesa.addEventListener('click', function(){
    if(inputCost.value.length === 0 || nameDespesa.value.length === 0 || valueDespesa.value.length === 0){
        alert('Por favor, preencha todos os campos.')
    } else {
        obj.despesa += Number(valueDespesa.value)
        obj.saldo = Number(obj.orcamento - obj.despesa)
        
        titleValue.innerText = `R$${valueDespesa.value}`
        titleDespesa.innerText = `- ${nameDespesa.value}`
        totalDespesas.innerText = `- R$${obj.despesa}`
        saldo.innerText = `R$${obj.saldo}`

        const options = document.createElement('option')
        options.innerText += `${nameDespesa.value} --- R$${valueDespesa.value}`
        select.append(options)
    }
})

document.querySelector('#iconTrash').addEventListener('click', function(){
    obj.despesa -= Number(valueDespesa.value)
    obj.saldo = Number(obj.orcamento + obj.despesa)
    
    totalDespesas.innerText = `- R$${obj.despesa}`
    saldo.innerText = `R$${obj.saldo}`
})


//criar uma array e nela colocar ir adicionando objetos com atributos de nome da despesa e valor e quando a pessoa quiser clicar no botão de remover a despesa em si, buscar na array o objeto e removê-lo e também fazer o cálculo de subtrair o valor da despesa e adicionar no saldo. 

//obs: analisar a utilidade do objeto atual q contem o orçamento, despesa e saldo.