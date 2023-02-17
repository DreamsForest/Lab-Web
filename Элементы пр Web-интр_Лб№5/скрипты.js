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

