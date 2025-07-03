
    let stompClient = null;
    let lastMessageDate = '';

    function setConnected(connected) {
      document.getElementById('sendMessage').disabled = !connected;
    }

    function connect() {
      const socket = new SockJS('/chat');
      stompClient = Stomp.over(socket);
      stompClient.connect({}, function (frame) {
        setConnected(true);
        stompClient.subscribe('/topic/messages', function (message) {
          showMessage(JSON.parse(message.body));
        });
      });
    }

    function showMessage(message) {
      const chat = document.getElementById('chat');
      const currentDate = extractDate(message.timestamp || getCurrentTime(true));

      if (currentDate !== lastMessageDate) {
        const dateLabel = document.createElement('div');
        dateLabel.className = 'date-separator';
        dateLabel.innerText = formatDate(currentDate);
        chat.appendChild(dateLabel);
        lastMessageDate = currentDate;
      }

      const messageElement = document.createElement('div');
      messageElement.className = 'message';

      const currentSender = document.getElementById('SenderInput').value.trim();
      const isSender = message.sender === currentSender;
      if (isSender) {
        messageElement.classList.add('sender', 'align-self-end', 'text-end');
      } else {
        messageElement.classList.add('receiver', 'align-self-start', 'text-start');
      }

      const time = extractTime(message.timestamp || getCurrentTime(true));

      messageElement.innerHTML = `
        <div class="message-content">
          <div><strong>${message.sender}:</strong> ${message.content}</div>
          <div class="timestamp">${time}</div>
        </div>
      `;

      chat.appendChild(messageElement);
      chat.scrollTop = chat.scrollHeight;
    }

    function sendMessage() {
      const sender = document.getElementById('SenderInput').value.trim();
      const content = document.getElementById('messageInput').value.trim();
      if (!sender || !content) return;

      const chatMessage = {
        sender: sender,
        content: content,
        timestamp: getCurrentTime(true)
      };

      stompClient.send("/app/sendMessage", {}, JSON.stringify(chatMessage));
      document.getElementById('messageInput').value = '';
    }

    function getCurrentTime(includeDate = false) {
      const now = new Date();
      const year = now.getFullYear();
      const month = (now.getMonth() + 1).toString().padStart(2, '0');
      const day = now.getDate().toString().padStart(2, '0');
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');

      return includeDate
        ? `${year}-${month}-${day} ${hours}:${minutes}`
        : `${hours}:${minutes}`;
    }

    function extractDate(timestamp) {
      return timestamp.split(' ')[0];
    }

    function extractTime(timestamp) {
      const [hour, minute] = timestamp.split(' ')[1].split(':');
      let h = parseInt(hour);
      const ampm = h >= 12 ? 'PM' : 'AM';
      h = h % 12 || 12;
      return `${h}:${minute} ${ampm}`;
    }

    function formatDate(dateString) {
      const today = new Date();
      const messageDate = new Date(dateString);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };

      const isToday =
        today.toDateString() === messageDate.toDateString();

      return isToday ? 'Today' : messageDate.toLocaleDateString(undefined, options);
    }

    window.onload = function () {
      connect();
      document.getElementById('sendMessage').onclick = sendMessage;
    };
