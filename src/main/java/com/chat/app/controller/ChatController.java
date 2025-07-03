package com.chat.app.controller;

import com.chat.app.model.ChatMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ChatController {

    @MessageMapping("/sendMessage")
    @SendTo("/topic/messages")
    public ChatMessage sendMessage(ChatMessage message) {
        // Logic to handle sending a chat message
        // This could involve saving the message to a database, broadcasting it to other users, etc.
        return message; // Return the message for confirmation or further processing
    }
    @GetMapping("/chat")
    public String chat(){
        // This method can be used to return the chat view or any other necessary setup
        // For example, you might return a view name to render a chat page
        return "chat"; // Assuming there is a chat.html template in the templates directory
    }
}
