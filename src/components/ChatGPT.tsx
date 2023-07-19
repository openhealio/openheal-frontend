import { Configuration, OpenAIApi } from "openai";
import React, { useState } from "react";

const configuration = new Configuration({
  // apiKey: process.env.OPENAI_API_KEY,
  apiKey: "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",
});

export default function ChatGPT() {
  const openai = new OpenAIApi(configuration);

  const [messages, setMessages] = useState([]);

  const handleMessage = async (message) => {
    setMessages([...messages, { text: message, from: "user" }]);

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: message,
      temperature: 0.2,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.6,
      stop: [" Human:", " AI:"],
    });

    const text = response.data.choices[0].text;
    console.log(messages);
    setMessages([...messages, { text, from: "bot" }]);
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            {message.from === "bot" ? "Bot: " : "User: "}
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            handleMessage(event.currentTarget.value);
            event.currentTarget.value = "";
          }
        }}
      />
    </div>
  );
}
