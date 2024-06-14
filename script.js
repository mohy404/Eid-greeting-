// script.js
var audio = new Audio('eid-takbeer.mp3'); 
var isMuted = false;

function displayGreeting() {
    var userName = document.getElementById('userName').value;
    var messageElement = document.getElementById('greetingMessage');

   
    var arabicPattern = /^[\u0600-\u06FF\s]+$/;
    if (!arabicPattern.test(userName)) {
        messageElement.innerHTML = "مش هينفع والله يابيه لازم تكتب اسمك بالعربي 😅";
        return;
    }

    var greetingMessage = "عيد أضحى مبارك! كل عام وأنت بخير يا " + userName + " 🎉🐏🌙";
    messageElement.innerHTML = greetingMessage;

    if (!isMuted) {
        audio.play();
    }

    // إضافة رسوم متحركة
    messageElement.classList.add('animate__animated', 'animate__bounceIn');
}

// دمج وسائل التواصل الاجتماعي
document.getElementById('facebook-share').onclick = function() {
    var userName = document.getElementById('userName').value;
    var shareText = "عيد أضحى مبارك! كل عام وأنت بخير يا " + userName + " 🎉🐏🌙";
    var url = "https://www.facebook.com/sharer/sharer.php?quote=" + encodeURIComponent(shareText) + "&u=" + encodeURIComponent(window.location.href);
    window.open(url, '_blank');
};

document.getElementById('twitter-share').onclick = function() {
    var userName = document.getElementById('userName').value;
    var shareText = "عيد أضحى مبارك! كل عام وأنت بخير يا " + userName + " 🎉🐏🌙 " + window.location.href;
    var url = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(shareText);
    window.open(url, '_blank');
};

// إضافة ملصق يعبر عن الفرحة
document.addEventListener('DOMContentLoaded', function() {
    var sticker = document.getElementById('celebrationSticker');
    sticker.src = 'sticker.png'; // تأكد من وجود ملف الملصق في نفس المسار
});

// التحكم في الصوت
function toggleSound() {
    isMuted = !isMuted;
    var soundToggleButton = document.getElementById('sound-toggle');
    if (isMuted) {
        audio.pause();
        soundToggleButton.innerText = '🔇 تشغيل الصوت';
    } else {
        audio.play();
        soundToggleButton.innerText = '🔊 كتم الصوت';
    }
}
