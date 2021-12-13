import React from "react";
import PropTypes from "prop-types";
import "./message.css";
import parseDate from "../../shared/parseDate";

const Message = ({message: {text, date, direction}}) => {
    return (
        <div className={`message ${direction}`}>
            <p>{parseDate(date)}</p>
            <p>{text}</p>
        </div>
    )
}

Message.propTypes = {
    message: PropTypes.shape({
        text: PropTypes.string,
        date: PropTypes.string,
        direction: PropTypes.oneOf(["in", "out"]),
    }),
}

export default Message;
