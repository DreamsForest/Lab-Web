const questions = [
    {
        question: "Кто составлял большую часть декабристского восстания в 1825 году?",
        optionA: "Священники",
        optionB: "Ученые",
        optionC: "Крепостные крестьяне",
        optionD: "Дворяне",
        correctOption: "optionD"
    },

    {
        question: "В каком году отменили крепостное право в России ?",
        optionA: "1861",
        optionB: "1589",
        optionC: "1917",
        optionD: "1678",
        correctOption: "optionA"
    },

    {
        question: "Кто стал последним императором Российской империи ?",
        optionA: "Николай I",
        optionB: "Николай II",
        optionC: "Петр III",
        optionD: "Александр II",
        correctOption: "optionB"
    },

    {
        question: "Как звали жену Ленина ?",
        optionA: "Тамара",
        optionB: "Надежда",
        optionC: "Анна",
        optionD: "Елена",
        correctOption: "optionB"
    },

    {
        question: "Какое государство установило иго на Руси продолжительностью почти 200 лет ?",
        optionA: "Золотая Орда",
        optionB: "Византийская империя",
        optionC: "Римская империя",
        optionD: "Османская империя",
        correctOption: "optionA"
    },

    {
        question: "У какого города произошло крупнейшие сражение Отечественной войны 1812 года - Бородинское сражение в 124 километрах от Москвы ?",
        optionA: "Смоленск",
        optionB: "Владивосток",
        optionC: "Уваровка",
        optionD: "Можайск",
        correctOption: "optionD"
    },

    {
        question: "Что приказал Петр I брить всем боярам и дворянам 25 июня 1682 года ?",
        optionA: "Голову",
        optionB: "Ноги",
        optionC: "Кошек",
        optionD: "Бороду",
        correctOption: "optionD"
    },

    {
        question: "На что повлияла военная реформа Александра II в переод с 1861 по 1874 года ?",
        optionA: "Отслужив в армии, гарантированно получаешь землю с хозяйством",
        optionB: "Сократился срок службы с 20 лет до 6",
        optionC: "Эта реформа ничего нового не привнесла в Россию",
        optionD: "Форма военных стала выглядить более презентабельно и красиво",
        correctOption: "optionB"
    },

    {
        question: "Какой русский ученый был гением в области геометрии в 19 веке ?",
        optionA: "Дмитрий Менделеев",
        optionB: "Александр Попов",
        optionC: "Михаил Ломоносов",
        optionD: "Николай Лобачевский",
        correctOption: "optionD"
    },

    {
        question: "В 1712 году в России была объявлена новая столица. Как называется этот город ?",
        optionA: "Нижний Новгород",
        optionB: "Санкт-Петербург",
        optionC: "Таганрог",
        optionD: "Москва",
        correctOption: "optionB"
    },

    {
        question: "Эта газета стала первым печатным изданием в России. Ее утвердил Петр I, первый выпуск вышел 2 января 1703 года. ?",
        optionA: "Из рук в руки",
        optionB: "Ведомости",
        optionC: "Известия",
        optionD: "Комсомольская правда",
        correctOption: "optionB"
    },

    {
        question: "C принятием этого документа в России появились такие новые должности, как коллежский регистратор и тайный советник. Что это был за документ ?",
        optionA: "Табель о рангах",
        optionB: "Воинский устав",
        optionC: "Декларация независимости",
        optionD: "Пакт Риббентропа - Молотова",
        correctOption: "optionA"
    },


    {
        question: "Какая война произошла в 18 веке в России ?",
        optionA: "Не было никаких войн",
        optionB: "Только русско-шведская война",
        optionC: "Только семилетняя война",
        optionD: "И семилетняя война и русско-шведская война",
        correctOption: "optionD"
    },

    {
        question: "Чем запомнился период 1762-1796 года в России ?",
        optionA: "Восстание декабристов",
        optionB: "Проведение великой военной реформы",
        optionC: "Время правления императрицы Екатерины II",
        optionD: "Период затишья перед русско-шведской войной",
        correctOption: "optionC"
    },

    {
        question: "Чем прославился русский инженер Павел Яблочков ?",
        optionA: "Построил мочт через Москву-реку",
        optionB: "Выявил новый сорт яблок",
        optionC: "Посторил Земский собор",
        optionD: "Изобрел электрическую лампочку",
        correctOption: "optionD"
    },

    {
        question: "С какого года Россия стала гордо называться империей ?",
        optionA: "1648",
        optionB: "1721",
        optionC: "1812",
        optionD: "1761",
        correctOption: "optionB"
    }
]


let shuffledQuestions = [] //Пустой массив для хранения перетасованных вопросов

function handleQuestions() { 
    //функция для перешивания 10 вопросов и отправка их в shuffledQuestions
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// функция для отображения следующего вопроса в массиве
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
}
function chekText(){
    
}

function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //получает текущий вопрос
    const currentQuestionAnswer = currentQuestion.correctOption //получает ответ на текущий вопрос
    const options = document.getElementsByName("option"); //получает все эелементы dom с именем 'option'
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id
        }
    })
   
    //убеждаемся что radio проверена
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //проверяем, совпадает ли отмеченный переключатель с ответом
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //задержка номера вопроса до загрузки следующего вопроса
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++    
                $(".game-quiz-container").css({
                    "background": "rgb(153, 17, 17)"
                })    
            //задержка номера вопроса до загрузки следующего вопроса
            setTimeout(() => {
                questionNumber++
                $(".game-quiz-container").css({
                    "background": "rgb(26,121,182)",
                    "background": "linear-gradient(90deg, rgba(26,121,182,1) 0%, rgba(23,205,179,1) 50%)"
                })
            }, 1000)
        }
    })
}



//вызывается при вызове следующей кнопки
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //задерживает отображение следующего вопроса на секунду
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//возвращает фон опций к нулю после отображения правильных/неправильных ответов
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// функция для ответа на все вопросы
function handleEndGame() {
    let remark = null
    let remarkColor = null

    //проверка состояния для замечания игрока и примечания цвета примичания
    if (playerScore <= 3) {
        remark = "Плохой результат."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Средний результат, есть к чему стримиться."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Отличный результат."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //данные для отображения в таблице
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//закрытие окно счета + сбрасывание игры
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
    $('body[onload]').removeAttr('onload');
    $( "main" ).remove();  
    $(".container").css({
        "display": "inline-block",
    }) 
    $(".answer").css({
        "display": "inline-block",
    }) 
    $(".block2").css({
        "display": "block",
    }) 
    $(".test2").css({
        "display": "inline-block",
    }) 
    $(".answer2").css({
        "display": "block",
    }) 
    $(".checkBtn-btn-btn-primary").css({
        "display": "inline-block",
    }) 
    $(".span-test2").css({
        "display": "inline-block",
    }) 
}

//функция для закрытия модального окна
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}

$(document).ready(function(){
    
    let items = [
      ['Макиавелли'],
      ['Ливонская война','Принятие судебника'],
      ['Рюрик','Александр Невский'],
      ['Кавелин'],
      ['Рита'],
      ['Нормативитскую теорию права']
    ];
    let totalQuestion = items.length;
    let correctAns = -1;
    let i = 0;
    let j = 0;
    $('.checkBtn-btn-btn-primary').on('click',function(){

        $('.block2').each(function(){
            
            $(this).children('input').each(function(){
                
                if($(this).is(':checked'))
                    {
                        if(items[i][j] == $(this).val()){
                                $(this).parent().removeClass('incorrect');
                                $(this).parent().addClass('correct');
                        
                                    if(j < items[i].length - 1){
                                        j++;
                                    } 
                            }else{
                                $(this).parent().removeClass('correct');
                                $(this).parent().addClass('incorrect');
                                return false;                        
                            }
                    }else{
                        if(items[i][j] == $(this).val()){
                            $(this).parent().removeClass('correct');
                            $(this).parent().addClass('incorrect');
                        }
                    }
            });
             i++;
             j=0;
        
        });

        $('.answer').html($('.correct').length + " / " + totalQuestion + " - результат за второй тест по Истории");
    });
});

