// ГОТОВЫЙ ВАРИАНТ НО БЕЗ ПОПАП ОКНА 
// document.querySelector('.wheel__button').addEventListener('click', function() {
//     const spinner = document.getElementById('spinner');
//     const sectors = 8; // Количество секторов
//     const currentSector = 3; // Замените на нужный вам сектор (0-7, где 0 - это первый сектор)
//     const degreesPerSector = 360 / sectors; // Угол для каждого сектора
//     const totalRotation = 360 * 5 + currentSector * degreesPerSector; // Общее вращение (5 полных оборотов + текущий сектор)

//     // Удаляем класс анимации вращения, если он есть
//     spinner.classList.remove('wheel__spinner_animated_1');

//     // Применяем вращение
//     spinner.style.transition = 'transform 4s cubic-bezier(0.33, 1, 0.68, 1)';
//     spinner.style.transform = `rotate(${totalRotation}deg)`;

//     // После завершения анимации, можно сбросить стиль
//     setTimeout(() => {
//         spinner.style.transition = 'none'; // Отключаем анимацию
//         spinner.style.transform = `rotate(${totalRotation % 360}deg)`; // Устанавливаем конечное положение
//         setTimeout(() => {
//             spinner.style.transition = 'transform 4s cubic-bezier(0.33, 1, 0.68, 1)'; // Включаем анимацию обратно
//         }, 50);
//     }, 4000); // Время анимации (4 секунды)

//     // Добавляем класс анимации вращения
//     spinner.classList.add('wheel__spinner_animated_1');
// });

// ГОТОВЫЙ ВАРИК ПОЛНОСТЬЮ, НО ПОКА ЧТО ССЫЛКА хреф из окна никуда не ведёт
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.wheel__button').addEventListener('click', function() {
        const spinner = document.getElementById('spinner');
        const popup = document.getElementById('popup');
        const sectors = 8; // Количество секторов
        const randomSector = Math.floor(Math.random() * sectors); // Случайный сектор
        const degreesPerSector = 360 / sectors; // Угол для каждого сектора
        const totalRotation = 360 * 5 + randomSector * degreesPerSector; // Общее вращение (5 полных оборотов + случайный сектор)

        // Удаляем класс анимации вращения, если он есть
        spinner.classList.remove('wheel__spinner_animated_1');

        // Применяем вращение
        spinner.style.transition = 'transform 4s cubic-bezier(0.33, 1, 0.68, 1)';
        spinner.style.transform = `rotate(${totalRotation}deg)`;

        // После завершения анимации, можно сбросить стиль
        setTimeout(() => {
            spinner.style.transition = 'none'; // Отключаем анимацию
            spinner.style.transform = `rotate(${totalRotation % 360}deg)`; // Устанавливаем конечное положение
            setTimeout(() => {
                spinner.style.transition = 'transform 4s cubic-bezier(0.33, 1, 0.68, 1)'; // Включаем анимацию обратно
            }, 50);
        }, 4000); // Время анимации (4 секунды)

        // Добавляем класс анимации вращения
        spinner.classList.add('wheel__spinner_animated_1');

        // Показываем поп-ап окно после завершения вращения
        setTimeout(() => {
            popup.classList.add('popup__show'); // Показываем поп-ап
        }, 4000); // Задержка, чтобы поп-ап появился после завершения вращения
    });
});
