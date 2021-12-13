import React, {useState} from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import "./chat.css";
import {useStore} from "../../store/store-provider";
import {writeMessageAction} from "../../store/actions";
import Message from "../message/message";

const Chat = ({chatId}) => {
    const [textValue, setTextValue] = useState("");
    const {store, dispatch} = useStore();

    const onSubmit = (e) => {
        e.preventDefault();
        if (textValue.trim().length) {
            dispatch(writeMessageAction(chatId, uuidv4(), textValue, Date()));
            setTextValue("");
        }
    }

    const onChange = (e) => {
        setTextValue(e.target.value);
    }

    if (!chatId.length) {
        return <></>;
    }

    return (
        <div className="chat">
            <div className="messageList">
                {store[chatId]?.messages.map(item => <Message message={item} key={item.messageId} />)}
            </div>
            <form onSubmit={onSubmit} className="form">
                <textarea name="message" cols="30" rows="10" value={textValue} onChange={onChange}/>
                <button type="submit">Send message</button>
            </form>
        </div>
    )
}

Chat.propTypes = {
    chatId: PropTypes.string,
}

export default Chat;
