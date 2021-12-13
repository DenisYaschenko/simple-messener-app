export const actionsTypes = {
    writeMessage: "WRITE_MESSAGE",
};

export const writeMessageAction = (chatId, messageId, text, date) => ({
    type: actionsTypes.writeMessage,
    chatId,
    messageId,
    text,
    date
});
