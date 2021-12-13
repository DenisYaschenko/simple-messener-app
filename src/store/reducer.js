import {defaultState} from "./state";
import {actionsTypes} from "./actions";

export const initializerOfState = (initialValue = defaultState) =>
    JSON.parse((localStorage.getItem("state"))) || initialValue;


export const reducer = (state = defaultState, action = {}) => {
    switch (action.type) {
        case actionsTypes.writeMessage: {
            const {chatId, messageId, text, date} = action;
            return {
                ...state,
                [chatId]: {...state[chatId], messages: [...state[chatId].messages, { messageId, text, date, direction: "out" }]}
            }
        }
        default:
            return state;
    }
}
