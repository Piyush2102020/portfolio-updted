import './style.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../functions/store'
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { marked } from "marked";
export default function Chatbox() {
    const ai = useSelector((state: RootState) => state.ai);
    const chat = useSelector((state: RootState) => state.chat);
    const [fullResponse, setFullResponse] = useState("");
    const [message1, setMessage] = useState("");
    const [streaming, setStreaming] = useState(false);
    const [executableJson, setExecutableJson] = useState({});


    function getResponse() {
        setMessage("");
        const message = message1;
        const token = localStorage.getItem("verification_token");
        if (!token) return;
        setStreaming(true);
        const container = document.getElementById("message-container");

        const userMessageDiv = document.createElement("div");
        userMessageDiv.className = "message-user";
        userMessageDiv.innerText = message;
        container?.appendChild(userMessageDiv);

        const botMessageDiv = document.createElement("div");
        botMessageDiv.className = "message-veronica";
        container?.appendChild(botMessageDiv);

        const userData = jwtDecode(token) as any;
        const chatId = userData.chatId;

        fetch(`${import.meta.env.VITE_SERVER_ENDPOINT}/chat/${chatId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message })
        })
            .then(async (response) => {
                if (!response.body) throw new Error("No response body");

                const reader = response.body.getReader();
                const decoder = new TextDecoder();

                const botMessageDiv = document.createElement('div');
                botMessageDiv.className = 'message-veronica';

                const paragraph = document.createElement('p');
                botMessageDiv.appendChild(paragraph);
                document.getElementById('message-container')?.appendChild(botMessageDiv);

                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;

                    let chunk = decoder.decode(value, { stream: true }).trim();

                    if (chunk.includes("[DONE]")) break;

                    if (chunk.startsWith("data: ")) {
                        chunk = chunk.replace("data: ", "");
                        chunk = JSON.parse(chunk);
                        botMessageDiv.scrollIntoView({ behavior: 'smooth' });
                        paragraph.innerText += chunk;
                    }

                    if (chunk.startsWith("executor:")) {
                        chunk.replace("executor: ", "");
                        console.log(chunk);
                        setExecutableJson(JSON.parse(chunk));
                    }
                }
                botMessageDiv.scrollIntoView({ behavior: 'smooth' })
                setStreaming(false);
            })
            .catch((error) => {
                setStreaming(false);
                console.error("Error in fetch:", error);
            });

        setStreaming(false);
    }



    return (
        <>
            {ai &&

                <div className="chatbox">
                    <div id='message-container' className="message-container">

                    </div>

                    <div className='chat-field'>
                        <input onChange={(e) => { setMessage(e.target.value) }} type="text" className="chat-input" value={message1} placeholder="Chat with Veronica..." />
                        {message1.length > 1 && !streaming && <button className='chat-send' onClick={getResponse} >Send Message</button>}
                    </div>

                </div>

            }
        </>

    )
}