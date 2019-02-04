var movies = ['Чудеса Науки', 'Птичий Короб', 'Реинкарнация',
    'Сердце Дракона', 'Palo Alto', 'Человек швейцарский нож',
    'Игра престолов', 'Только Бог простит', 'Леденец',
    'Середина 90х', 'Narcos', 'Тихое место', 'Пассажиры', 'Аннигиляция', 'Остров проклятых',
    'Малхолланд драйв', 'Талли', 'Иллизиум', 'Голос Монстра', 'На игле', 'На игле 2', 'Выживший', 'Кристофер Робин', 
    'Невероятная жизнь Уолтера Митти', 'Мэнди'];

var movieTitle = document.querySelector('.js-movie');
function selectRandomMovieHandler() {
    debugger;
    var randomMovie = movies[Math.floor(movies.length * Math.random())];
    movieTitle.innerText = randomMovie;
}

/* с вводом цифр
function shuffle(arr) {
    var j, temp;
    for (var i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
window.onload = shuffle(movies);
function  selectMovie() {
    var numberMovie = document.querySelector('.js-input').value;
    if (numberMovie) {
        movieTitle.innerText = movies[numberMovie];
    } else {
        movieTitle.innerText = 'введите номер фильма!';
    }
}
*/