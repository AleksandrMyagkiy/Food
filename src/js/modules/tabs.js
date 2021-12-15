function tabs() {
    	// Tabs
	const tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');

// Функция которая скрывает табы
function hideTabContent() {
    tabsContent.forEach(item => {
        item.classList.add('hide'); //style.display = 'none'; // Скрываем табы 
        item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active'); // Будем у каждого из табов удалять класс активности
    });
}
// Функция которая будет показывать табы
function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade'); //style.display = 'block';
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
}

hideTabContent();
showTabContent(); // отображаем по умолчанию первый слайд (0)

// назначаем обработчик событий от клика  (делегирование событий)
tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showTabContent(i);
            }
        });
    }
});
}

module.exports = tabs;