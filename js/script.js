
/* Ev tapşırığı:

1) Bütün reklam şəkillərini silin (saytın sağ tərəfində)

2) Filmin janrını "Komediya"-dan на "Drama" -ya dəyişin
Posterin arxa fon şəkilini "bg.jpg" ilə dəyişin. Şəkil "img" qovluğunda yerləşir. Bunun üçün ancaq JS-dən istifadə edin.

4) Baxılmış kinoların siyahısını JS ilə silin 

5) "movieDB"- də olan kinoları əlifbaya görə sıralayın.

6) Baxılmış kinolara "movieDB"-də olan kino adlarını əlavə edirik (stili HTML-dən götürün)

7) Əlavə edilmiş kino adları nömrələnsin */

'use strict';

const movieDB = {
    movies: [
        "logan",
        "titanic",
        "Bəyin oğurlanması",
        "Xaç atası",
        "Avatar 2"
    ]
};

const sekiller = document.querySelectorAll('.promo__adv img');
const janr = document.querySelector('.promo__genre');
const bgImage = document.querySelector('.promo__bg');
const kinolar = document.querySelector('.promo__interactive-list');

sekiller.forEach(i => {
    i.remove();
});

janr.textContent = 'DRAMA';

bgImage.style.backgroundImage = 'url("img/bg.jpg")'

kinolar.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((item, i) => {
    kinolar.innerHTML += `
        <li class="promo__interactive-item"> ${i+1}. ${item}
            <div class="delete"></div>
        </li>
    
    `
});














