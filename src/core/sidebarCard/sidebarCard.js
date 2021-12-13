import React from "react";
import PropTypes from "prop-types";
import "./sidebarCard.css";

const SidebarCard = ({active, onClick, name}) => {
    return <button className={`sidebarCard ${active ? "active" : ""}`} onClick={onClick}>{name}</button>
};

SidebarCard.propTypes = {
    name: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func,
}

export default SidebarCard;
