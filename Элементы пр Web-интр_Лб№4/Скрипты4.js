function validation(form){

    function removeError(input){
        const parent = input.parentNode;

        if(parent.classList.contains('error')){
            parent.querySelector('.error-label').remove()
            parent.classList.remove('error')
        }
    }

    function createError(input, text){
        const parent = input.parentNode;
        const errorLabel = document.createElement('label')

        errorLabel.classList.add('error-label')
        errorLabel.textContent = text

        parent.classList.add('error')
        parent.append(errorLabel)
    }
    let result = true;
    const allInputs = form.querySelectorAll('input');

    for(const input of allInputs){
        removeError(input)

        if(input.dataset.minLength){
            if(input.value.length < input.dataset.minLength){
                removeError(input)
                createError(input,`Минимальное кол-во символов: ${input.dataset.minLength}`)
                result = false
            }
        }

        if(input.dataset.maxLength){
            if(input.value.length > input.dataset.maxLength){
                removeError(input)
                createError(input,`Максимальное кол-во символов: ${input.dataset.maxLength}`)
                result = false
            }
        }

        if(input.dataset.required == "true"){
            if(input.value == ""){
                createError(input,'Поле не заполнено или введены некоректные символы!')
                result = false
            }
        }
    }
    return result;
}
document.querySelector(".myValidate").addEventListener("keyup", function(){
    this.value = this.value.replace(/[^\d]/g, "");
});

document.getElementById('add-form').addEventListener('submit', function(event){
    event.preventDefault()
    
    if(validation(this)==true){
        alert('Форма проверена успешно!');
    }
})


function getRadioValue(name) {
    let elements = document.getElementsByName(name);
    for (let i = 0, l = elements.length; i < l; i++) {
      if (elements[i].checked)
        return elements[i].value;
    }
    return 0;
}
  
function calc() {
    let result = getRadioValue("recommed2") + +getRadioValue("recommed3") + +getRadioValue("recommed1") + +getRadioValue("recommed4") + +getRadioValue("recommed5") + +getRadioValue("recommed6") + +getRadioValue("recommed7") + +getRadioValue("recommed8") + +getRadioValue("recommed9") + +getRadioValue("recommed00");
    document.getElementById('trouble_itog').value = `Количество баллов ученика: ${result}`
}

