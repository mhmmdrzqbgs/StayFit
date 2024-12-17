// Function to send a message
function sendMessage() {
    // Ambil nilai dari input pesan
    var messageInput = document.getElementById("message-input");
    var messageText = messageInput.value.trim();

    // Pastikan pesan tidak kosong
    if (messageText !== "") {
        // Buat elemen div untuk balon pesan dan tambahkan ke chat-messages
        var chatMessages = document.getElementById("chat-messages");
        var newMessage = document.createElement("div");

        // Tentukan kelas balon pesan berdasarkan pengirim (misalnya, sent atau received)
        newMessage.className = "chat-bubble sent bg-success text-white p-2 rounded";
        newMessage.innerHTML = "<p>" + messageText + "</p>";

        // Tambahkan balon pesan ke elemen chat-messages
        chatMessages.appendChild(newMessage);

        // Reset nilai input pesan setelah mengirim
        messageInput.value = "";
    }
}


// Function to add a message to the chat
function addMessage(type, text) {
    var chatMessages = document.getElementById("chat-messages");
    var chatBubble = document.createElement("div");
    chatBubble.className = "chat-bubble " + type + " bg-light p-2 rounded";
    chatBubble.innerHTML = "<p>" + text + "</p>";
    chatMessages.appendChild(chatBubble);
}
