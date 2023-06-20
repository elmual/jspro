
/* Ev tapşırığı:

1) Bütün reklam şəkillərini silin (saytın sağ tərəfində)

2) Filmin janrını "Komediya"-dan на "Drama" -ya dəyişin
Posterin arxa fon şəkilini "bg.jpg" ilə dəyişin. Şəkil "img" qovluğunda yerləşir. Bunun üçün ancaq JS-dən istifadə edin.

4) Baxılmış kinoların siyahısını JS ilə silin 

5) "movieDB"- də olan kinoları əlifbaya görə sıralayın.

6) Baxılmış kinolara "movieDB"-də olan kino adlarını əlavə edirik (stili HTML-dən götürün)

7) Əlavə edilmiş kino adları nömrələnsin */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
    const addForm = document.querySelector('form.add');
    const addInput = addForm.querySelector('.adding__input');
    const checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const newFilm = addInput.value;
        const favorite = checkbox.checked;
        e.target.reset();

    })


    const deleteAdv = (del) => {
        del.forEach(i => {
            i.remove();
        });
    }

    const saytDeyis = () => {
        janr.textContent = 'DRAMA';
        bgImage.style.backgroundImage = 'url("img/bg.jpg")';
    }

    const sortArr = (arr) => {
        arr.sort();
    }

    const createMovieList = (film, anaElement) => {
        film.innerHTML = '';

        anaElement.forEach((item, i) => {
            film.innerHTML += `
                <li class="promo__interactive-item"> ${i + 1}. ${item}
                    <div class="delete"></div>
                </li>
            `
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(film, anaElement);
            })
        });
    }

    deleteAdv(sekiller);
    saytDeyis();
    sortArr(movieDB.movies);
    createMovieList(kinolar, movieDB.movies);
})





















