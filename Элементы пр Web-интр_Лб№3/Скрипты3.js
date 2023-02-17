let i = 0;

var otvet1 = "", otvet2 = "", otvet3 = "", otvet4 = "", otvet5 = "", otvet6 = "";
function handleNextQuestion1(){
    otvet1 = prompt("Ответ на первый вопрос"); //Получаем ответ пользователя через promt и передаем значение переменной
    document.querySelector('.otvetnavopros1').innerHTML = otvet1; // через inner добавляем в дом дерево ответ пользователя на страницу
    const element1 = document.querySelector('.otvetnavopros1'); //уже специально пригтовленный для этого див
    element1.style.opacity = 1; //по умолчанию он принимает нулевую прозрачность но как пользователь впишет ответ сразу станет виден
    document.querySelector('.ispravit1').innerHTML = "Исправить?";//Кнопка которая была ответить превращается в исправить и по новой запускает функцию
}
function handleNextQuestion2(){
    otvet2 = prompt("Ответ на первый вопрос");
    document.querySelector('.otvetnavopros2').innerHTML = otvet2;
    const element1 = document.querySelector('.otvetnavopros2');
    element1.style.opacity = 1;
    document.querySelector('.ispravit2').innerHTML = "Исправить?";
}
function handleNextQuestion3(){
    otvet3 = prompt("Ответ на первый вопрос");
    document.querySelector('.otvetnavopros3').innerHTML = otvet3;
    const element1 = document.querySelector('.otvetnavopros3');
    element1.style.opacity = 1;
    document.querySelector('.ispravit3').innerHTML = "Исправить?";
}
function handleNextQuestion4(){
    otvet4 = prompt("Ответ на первый вопрос");
    document.querySelector('.otvetnavopros4').innerHTML = otvet4;
    const element1 = document.querySelector('.otvetnavopros4');
    element1.style.opacity = 1;
    document.querySelector('.ispravit4').innerHTML = "Исправить?";
}
function handleNextQuestion5(){
    otvet5 = prompt("Ответ на первый вопрос");
    document.querySelector('.otvetnavopros5').innerHTML = otvet5;
    const element1 = document.querySelector('.otvetnavopros5');
    element1.style.opacity = 1;
    document.querySelector('.ispravit5').innerHTML = "Исправить?";
}
function handleNextQuestion6(){
    otvet6 = prompt("Ответ на первый вопрос");
    document.querySelector('.otvetnavopros6').innerHTML = otvet6;
    const element1 = document.querySelector('.otvetnavopros6');
    element1.style.opacity = 1;
    document.querySelector('.ispravit6').innerHTML = "Исправить?";
}



function handleNextQuestion7(){
   
        if(otvet1 == "1721"){
            i += 1;
            const element11 = document.querySelector('.game-question-container1');                                                
            element11.style.background = "#00FF00";
        }
        if(otvet1 != "1721"){
            document.querySelector('.otvetnavopros1').innerHTML = "Это не правильный ответ. Правильный ответ - 1721";
            const element12 = document.querySelector('.game-question-container1');                                               
            element12.style.background = "#FF0000";
        }


        if(otvet2 == "1861"){
            i += 1;
            const element21 = document.querySelector('.game-question-container2');                                                
            element21.style.background = "#00FF00";
        }
        if(otvet2 != "1861"){
            document.querySelector('.otvetnavopros2').innerHTML = "Это не правильный ответ. Правильный ответ - 1861";
            const element22 = document.querySelector('.game-question-container2');                                              
            element22.style.background = "#FF0000";
        }


        if(otvet3 == "1812"){
            i += 1;
            const element31 = document.querySelector('.game-question-container3');                                                
            element31.style.background = "#00FF00";
        }
        if (otvet3 != "1812"){
            document.querySelector('.otvetnavopros3').innerHTML = "Это не правильный ответ. Правильный ответ - 1812";
            const element32 = document.querySelector('.game-question-container3');                                                
            element32.style.background = "#FF0000";
        }


        if(otvet4 == "988"){
            i += 1;
            const element41 = document.querySelector('.game-question-container4');                                                
            element41.style.background = "#00FF00";
        }
        if(otvet4 != "988"){
            document.querySelector('.otvetnavopros4').innerHTML = "Это не правильный ответ. Правильный ответ - 988";
            const element42 = document.querySelector('.game-question-container4');                                              
            element42.style.background = "#FF0000";
        }


}
