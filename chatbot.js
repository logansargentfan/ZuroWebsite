// Basic Chatbot with hardcoded responses (no external API)

const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const stopButton = document.getElementById('stop-button');

function appendMessage(text, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', sender);

  const senderElement = document.createElement('span');
  senderElement.classList.add('message-sender');
  senderElement.innerHTML = `<strong>${sender === 'user' ? 'You:' : 'Zuro AI:'}</strong>`;

  const textElement = document.createElement('p');
  textElement.classList.add('message-text');
  textElement.innerHTML = text;

  messageElement.appendChild(senderElement);
  messageElement.appendChild(textElement);
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotReply(userInput) {
  const input = userInput.toLowerCase();

  if (input.includes('hello') || input.includes('hi')) {
    return "Hey there! I'm Zuro. Ask me anything about buying used cars.";
  }

  if (input.includes('best car')) {
    return "It depends on your budget and needs! For daily driving, the Toyota Corolla is a solid pick.";
  }

  if (input.includes('mustang')) {
    return "The Mustang is a great performance car, but expect higher insurance and maintenance costs!";
  }

  return "I'm still learning! Try asking about car models, budgeting, or maintenance.";
}

function sendMessage() {
  const userMessage = messageInput.value.trim();
  if (!userMessage) return;

  appendMessage(userMessage, 'user');
  messageInput.value = '';

  setTimeout(() => {
    const botReply = getBotReply(userMessage);
    appendMessage(botReply, 'bot');
  }, 600); // slight delay to simulate thinking
}

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});


stopButton.style.display = 'none'; // Hide the stop button (not needed here)
