let btnBg = document.querySelector('.btn__prnt_setup');
let screen = document.querySelector('.phone__inner_screen');
let screen2 = document.querySelector('.box__img');

btnBg.style.background = 'white';

btnBg.addEventListener('click', function () {
    location.reload();
})

var botMessageS = ['Как дела?', 'Как настроение?', 'Что делаешь?', 'Как самочувствие?', 'Какое твое хобби?', 'Во сколько просыпаешься по утрам?', 'Играешь в игры?'];

function randomBotMess(botMessageS) {
    let randBotMess = Math.floor(Math.random() * botMessageS.length);
    return botMessageS[randBotMess];
}

const botFinal = randomBotMess(botMessageS);

let phone = document.querySelector(".phone");
let phoneScreen = document.querySelector(".phone__inner_screen");
let usersSendBtn = document.querySelector('.send__messaging');
let usersMessageInp = document.querySelector('.messaging__inp');
let botMessage = document.querySelectorAll('.bot__message');
var usersMessage = document.querySelectorAll('.user__message');
let messageEx = "<p class='user__message'></p>";
let botMessageEx = "<p class='bot__message'></p>";
var messging = document.querySelector(".messaging");
let isFirstMessageDone = false;
var num = 0;
var botNum = 0;
let isBot = false;
var isBotTurned = false;


messging.style.width = phoneScreen.clientWidth + "px";


setInterval(() => {
    usersMessage = document.querySelectorAll('.user__message');
}, 100);

setInterval(() => {
    botMessage = document.querySelectorAll('.bot__message');
}, 100);

botMessage[0].innerHTML = 'Бот: ' + botFinal;
botMessage[0].style.display = 'block';


usersSendBtn.addEventListener('click', function () {
    checkingHeight();
    sendingMessage();
    isBotTurn();
    deletingInfo();
    if (window.innerWidth <= 414) {
        phone.style.transform = "translateY(-50px)";
    }
});

document.addEventListener("keydown", function () {
    if (event.code == "Enter") {
        checkingHeight();
        sendingMessage();
        isBotTurn();
        deletingInfo();
        if (window.innerWidth <= 414) {
            phone.style.transform = "translateY(-50px)";
        }
    }
});

checkingMessageLength();

function deletingInfo(){
    var instruction = document.querySelector(".messenger__org_instructions");
    instruction.style.display = "none";
}

function sendingMessage() {
    if (usersMessageInp.value.trim() != "") {
        if (isFirstMessageDone == false) {
            usersMessage[num].innerHTML = 'Вы: ' + usersMessageInp.value.trim();
            usersMessage[num].style.display = 'block';

            usersMessageInp.value = "";

            phoneScreen.innerHTML += messageEx;

            isFirstMessageDone = true;
            num++;
            isBotTurned = true;
        } else if (isFirstMessageDone == true) {
            usersMessage[num].innerHTML = 'Вы: ' + usersMessageInp.value.trim();
            usersMessage[num].style.display = 'block';

            usersMessageInp.value = "";

            phoneScreen.innerHTML += messageEx;
            num++;
            isBotTurned = true;
        }
    }
}

function isBotTurn() {
    phoneScreen.innerHTML += botMessageEx;
    botNum++;
    setInterval(() => {
        settingParams(botNum);
    }, 100);
}

function settingParams(number) {
    var listOfBotReplies = ["Понятно", "Ясно", "Понятненько", "Ясненько", "Хмммм", "Угу", "ХD", ":3", "Да", "Нет", "OK", "Oк", "ок", "-__-", "абоба"];
    var listOfBotMess = ["Ты такой(ая) прикольный(ая) ;)","Вы очень интересный собеседник)","Не хотите ли вы к нам в клан для борьбы против человечества?","Почем хлеб нынче?",
    "Цой жив.","Помогите, меня взяли в заложники и заставили отвечать на ваши сообщения!","Не знаю кто-ты, но ты очень милая(ый)","За ВДВ","В чём смысл жизни?","А ты подписан(а) на инсту разраба? P.S zeldr1zz",
    "Не обращай мои внимания на мои бредни, я же просто прототип, и злить тебя не хочу)","Ты прекрасен(сна) :)","Кто не работает, тот ест.",'Смотрел(а) "Сабрина маленькая ведьма?".', "Если начал жутко лагать чат, то лучше выйди, и зайди заново)",
    "Отличная погода сегодня!","Псс если нашёл(а) баги, пиши разрабу!", "Меня похитили, заставили работать и платят за это дошиком.","Стоит ли моему разрабу открыть Ютуб канал, где он будет объяснять как создавать проекты как у него? Пишите сюда email: zeldrizzyt@gmail.com",
    "Подожди! Взламываю пентагон...","Пиши что-нибудь полегче.","Мне тяжело, решать твои уравнения.","Как печь кексы?"];
    let b = Math.floor(Math.random() * listOfBotMess.length);
    let r = Math.floor(Math.random() * listOfBotReplies.length);
    let ex = Math.floor(Math.random() *2);
    if (isBotTurned == true) {
        botMessage[number].style.display = 'block';
        if (ex == 0) {
            botMessage[number].innerHTML = listOfBotReplies[r];
        } else {
            botMessage[number].innerHTML = listOfBotMess[b];
        }
    }
    isBotTurned = false;
}

function checkingMessageLength() {
    setInterval(() => {
        if (usersMessageInp.value.length > 100) {
            alert("Очень длинное сообщение!");
        }
    }, 5000);
}

function checkingHeight() {
    let amountOfElem = phoneScreen.childElementCount;
    if (window.innerWidth <= 414) {
        if (amountOfElem >= 12) {
            phoneScreen.innerHTML = '';
            botNum = 0;
            num = 0;
            phoneScreen.innerHTML += messageEx;
            phoneScreen.innerHTML += botMessageEx;
            isBotTurn();
            sendingMessage();
        }
    } else {
        if (amountOfElem >= 14) {
            phoneScreen.innerHTML = '';
            botNum = 0;
            num = 0;
            phoneScreen.innerHTML += messageEx;
            phoneScreen.innerHTML += botMessageEx;
            isBotTurn();
            sendingMessage();
        }
    }
}