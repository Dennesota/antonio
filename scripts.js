// Функция для отображения модального окна
function showModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Функция для закрытия модального окна
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Функция для обработки первого выбора
function selectFirstOption(option) {
    closeModal('firstModal');
    if (option === 'пельмени') {
        showModal('secondModal');
    } else if (option === 'салат') {
        alert("You are gay");
    }
}

// Функция для обработки второго выбора
function selectSecondOption(option) {
    closeModal('secondModal');
    if (option === 'танчики') {
        alert("You are a real Skuf");
    } else if (option === 'качалка') {
        alert("You are gay");
    }
}

// Закрытие модального окна при нажатии на X
var spans = document.getElementsByClassName("close");
for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
        closeModal(this.parentElement.parentElement.id);
    }
}

// Закрытие модального окна при нажатии вне его
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}
