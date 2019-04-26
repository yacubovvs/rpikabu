// Запуск скрипта происходит после загрузки jquery
// Отлично бы было без него справиться, но у него отличные селекторы
console.log("r/Pikabu plugin starts")

// Функция проверки ссылок и замены их на изображения
function updateImages(){

    $('p > a').each(function(index, element){  
        //Сюда еще попадают ссылки из шапки, надо с этим что-то делать

        if ($(element).children().length==0){ // Значит у ссылки уже есть дети и ее преобразовывать не надо
            // Проверка адреса ссылки на картинку
            var href_end = element.href.substr(-4);
            var href_start = element.href.substr(0,5); // Проверяем точно ли картинка https, иначе не загрузится

            if (href_start=="https" && ( href_end==".jpg" || href_end==".png" || href_end=="jpeg") ){
                element.innerHTML = '<img src="' + element.href + '" style="width:500px; display: block">';
            }
        }
    
    });
}

//  Ночь на дворе, не особенно хочется сейчас что-то городить, 
//  просто поставлю таймер по которому будут ссылки превращаться в картинки, за такое мне руки оторвать надо.
//  updateImages() должна вызываться по событию
setInterval(updateImages, 5000);

