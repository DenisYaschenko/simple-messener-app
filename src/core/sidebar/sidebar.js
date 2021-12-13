import React from "react";
import PropTypes from "prop-types";
import "./sidebar.css";
import {useStore} from "../../store/store-provider";
import SidebarCard from "../sidebarCard/sidebarCard";

const Sidebar = ({onChooseChat, chatId}) => {
    const {store} = useStore();

    return <div className="sidebar">
        {Object.keys(store).map(id => (
            <SidebarCard key={id} name={store[id].name} active={chatId === id} onClick={() => onChooseChat(id)} />
        ))}
    </div>;
}

Sidebar.propTypes = {
    chatId: PropTypes.string,
    onChooseChat: PropTypes.func,
}

export default Sidebar;
