let a = ["#FFFFFF","#FF0000","#FFFF00","#00FF00","#00008B"], i;

alert('Приветствую тебя пользователь!');
alert("Выберите цвет фона сайта");
//Пользователь выбирает цвет фона спомощью кнопок


//Кнопки
function alertedBlack(){
    document.querySelector('.fraza').innerHTML = 'Вы выбрали белый фон!'
    const element = document.querySelector('.fon');                                                //Белая кнопка с белым фоном
    element.style.background = a[0];                                                        
    element.style.color = "#00008B";
}

function alertedRed(){
    document.querySelector('.fraza').innerHTML = 'Вы выбрали красный фон!'
    const element = document.querySelector('.fon');                                                 //Красная кнопка с красным фоном
    element.style.background = a[1];
    element.style.color = "white";
}

function alertedYellow(){
    document.querySelector('.fraza').innerHTML = 'Вы выбрали жёлтый фон!'
    const element = document.querySelector('.fon');                                                 //Желтая кнопка с желтым фоном
    element.style.background = a[2];
    element.style.color = "black";
}

function alertedGreen(){
    document.querySelector('.fraza').innerHTML = 'Вы выбрали зелёный фон!'
    const element = document.querySelector('.fon');                                                  //Зеленая кнопка с зеленым фоном
    element.style.background = a[3];
    element.style.color = "white";
}

function alertedBlue(){
    document.querySelector('.fraza').innerHTML = 'Вы выбрали синий фон!'
    const element = document.querySelector('.fon');                                                    //Синия кнопка с синим фоном
    element.style.background = a[4];
    element.style.color = "white";
}

//Цикличная смена фона

let colors = ['red','pink','coral','orange','yellow','green'];              
let colInx = 0;
(function changeColor(){
  document.querySelector(".rgb-function").style.backgroundColor = colors[colInx++%colors.length]; 
  setTimeout(changeColor, 5000);
})();


    
     





































//Памятка   
/*const textElement = document.querySelector('.block');

const textElementContent = textElement.innerHTML;
console.log(textElementContent);
// Изменение содержания
textElement.innerHTML = `Живи, а работай в свое время!`; 
console.log(textElement);

const element = document.querySelector('.block2');
//Задаем стиль с помощью CSS свойства
element.style.color = "red";
//
*/