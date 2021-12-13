import "./App.css";
import Sidebar from "../sidebar/sidebar";
import {useState} from "react";
import Chat from "../chat/chat";

const App = () => {
    const [chatToShow, setChatToShow] = useState("");

    const onChooseChat = (id) => {
        if (chatToShow !== id)
            setChatToShow(id);
    }

    return (
        <>
            <Sidebar onChooseChat={onChooseChat} chatId={chatToShow}/>
            <Chat chatId={chatToShow}/>
        </>
    );
}

export default App;
