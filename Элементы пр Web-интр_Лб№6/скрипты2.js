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
        $('p').contents().unwrap();//УБИРАЕМ ВСЕ ТЕГИ p ЕСЛИ ПОЛЬЗОВАТЕЛЬ НЕ СТАЛ ОТВЕЧАТЬ НА ВСЕ ВОПРОСЫ И НАЖАЛ СРАЗУ КНОПКУ
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



//Анимация появления вариантов ответа на вопрос
$('.r1').fadeOut();
$('.r2').fadeOut();
$('.r3').fadeOut(); 
$('.r4').fadeOut();
$('.r5').fadeOut();



$(".r0").on("click", function() {
    $('.r1').slideDown();
});
$(".r1").on("click", function() {
    $('.r2').slideDown();
});
$(".r2").on("click", function() {
    $('.r3').slideDown();
});
$(".r3").on("click", function() {
    $('.r4').slideDown();
});
$(".r4").on("click", function() {
    $('.r5').slideDown();
    $('p').contents().unwrap();//убрать все теги р чтобы функция подсчета правильных ответов сработала
});
