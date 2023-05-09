const insert = () => {
    let type = document.querySelector('#type').value
    let label = document.querySelector('#label').value

    switch(type){
        case 'text': appendText(label)
        break
        case 'button': appendButton(label)
        break
        case 'radio':appendRadio(label)
        break
        case 'checkbox': appendBox(label)
        break
    }
}

const delCard = () => {
    const george = document.querySelector('#displays')
    george.remove()
    george.create()
}

const appendText = (label = "No label") => {
    let el = document.createElement('input')
    
    el.setAttribute('type', 'text')
    el.setAttribute('class', 'form-control mt-2')
    el.setAttribute('placeholder', label)
    
    document.querySelector('#displays').append(el)
        
}
   
const appendButton = (label = "No label") => {
    let el = document.createElement('button')

    el.setAttribute('type', 'text')
    el.setAttribute('class', 'btn btn-primary mt-2') 
    el.textContent = label
    
    document.querySelector('#displays').append(el)
}

const appendRadio = (label = "No label") => {
    let contain = document.createElement('div')
    let el = document.createElement('input')
    let elLabel = document.createElement('label')

    contain.setAttribute('class', 'form-check')

    el.setAttribute('type', 'radio')
    el.setAttribute('class', 'form-check-input mt-2')
    el.setAttribute('id', 'radioID')
    el.setAttribute('name', 'radioGroup')

    elLabel.setAttribute('class', 'form-check-label mt-2')
    elLabel.setAttribute('for', 'radioID')
    elLabel.textContent = label
    
    document.querySelector('#displays').append(contain)
    contain.appendChild(el)
    contain.appendChild(elLabel)
}

const appendBox = (label = "No label") => {
    let contain = document.createElement('div')
    let el = document.createElement('input')
    let elLabel = document.createElement('label')

    contain.setAttribute('class', 'form-check')

    el.setAttribute('type', 'checkbox')
    el.setAttribute('class', 'form-check-input mt-2')
    el.setAttribute('id', 'boxID')


    elLabel.setAttribute('class', 'form-check-label mt-2')
    elLabel.setAttribute('for', 'boxID')
    elLabel.textContent = label
    
    document.querySelector('#displays').append(contain)
    contain.appendChild(el)
    contain.appendChild(elLabel)
}
