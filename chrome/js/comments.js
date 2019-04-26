// Запуск скрипта происходит после загрузки jquery
// Отлично бы было без него справиться, но у него отличные селекторы
console.log("r/Pikabu plugin starts")

// Функция проверки ссылок и замены их на изображения
function updateImages(){

    $('p > a:not(.rp-c-checked)').each(function(index, element){  
        //Сюда еще попадают ссылки из шапки, надо с этим что-то делать

        //Добавляем класс, который говорит парсеру что ссылка уже обработана
        $(element).addClass("rp-c-checked");

        var href_end_4 = element.href.substr(-4);
        var href_end_5 = element.href.substr(-4);
        var href_start_5 = element.href.substr(0,5); 
        var href_start_23 = element.href.substr(0,23); 

        if (href_start_5=="https"){ // Проверяем точно ли картинка https, иначе не загрузится
            if ( href_end_4==".jpg" || href_end_4==".png" || href_end_4==".gif" || href_end_5==".jpeg"){
                element.innerHTML = '<img src="' + element.href + '" style="max-width:500px; display: block">';
            }
            if (href_start_23=="https://www.youtube.com"){ // Распознаем YouTube
                console.log("Youtube detected");
                element.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + element.href.split('?v=')[1] + '" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>';
            }
        }
    
    });
}

//  Ночь на дворе, не особенно хочется сейчас что-то городить, 
//  просто поставлю таймер по которому будут ссылки превращаться в картинки, за такое мне руки оторвать надо.
//  updateImages() должна вызываться по событию или после скролла
setInterval(updateImages, 3000);

