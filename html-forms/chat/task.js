const widjet = document.querySelector('.chat-widget');
let chat = document.getElementById('chat-widget__messages');
let userMessage = document.getElementById('chat-widget__input');

let intervalBotID;

widjet.addEventListener('click', () => {
  widjet.classList.add('chat-widget_active');
  if (chat.textContent == null) clearInterval(intervalBotID);
  else {
    clearInterval(intervalBotID);
    intervalBotID = setInterval(() => {botMessageSender(botQuestions)}, 30000);
  }
});

let chatTime = () => {
  let data = new Date();
  let hours;
  let minutes;
  if (data.getHours() < 10) hours = '0' + data.getHours();
  else hours = data.getHours();
  if (data.getMinutes() < 10)  minutes = '0' + data.getMinutes();
  else minutes = data.getMinutes();
  return  hours + ":" + minutes;
};

let randomMessage = (arr) => {
  let random = Math.floor(Math.random() * arr.length);
  return arr[random];
};

const botMessages = [
  'Пшёл вон, скотина!',
  'Понаберут по объявлению!',
  'Вопросы тебе следователь будет задавать!',
  'Вот так судье и скажешь!',
  'Нет никакого желания на тебя время тратить!',
  'Хватит писать! Задолбали!',
  'Я тут чтоб вас слать подальше, а не ваши дебильные сообщения комментировать!'
];

const botQuestions = [
  'Так и будем молчать?',
  'Я может кофе пока заварю?',
  'Так и ждешь годами сообщение... Напишешь уже, или нет?',
  'Молчание тебя не красит, пиши уже!',
  'Азбуку не знаешь? Когда ждать сообщение от тебя?'
];

let scrollMessages = () => {
  let messagesContainer = document.querySelector('.chat-widget__messages-container');
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

let userMessageSender = () => {
  chat.innerHTML += `
    <div class="message message_client">
      <div class="message__time">` + chatTime() + `</div>
      <div class="message__text">` + userMessage.value + `</div>
    </div>`;
  userMessage.value = '';
  scrollMessages();

};

let botMessageSender = (arrMessage) => {
  chat.innerHTML += `
    <div class="message">
      <div class="message__time">` + chatTime() + `</div>
      <div class="message__text">` + randomMessage(arrMessage) + `</div>
    </div>`;
  scrollMessages();
};

userMessage.addEventListener('keydown', (e) => {
  clearInterval(intervalBotID);
  if (e.key == 'Enter' && (userMessage.value)) {
    userMessageSender();
    setTimeout(() => {botMessageSender(botMessages)}, 1000);
    intervalBotID = setInterval(() => {botMessageSender(botQuestions)}, 30000);
  };
});
