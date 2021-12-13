const parseDate = (date) => {
    const customDate = new Date(date);
    return customDate.toDateString();
}

export default parseDate;
