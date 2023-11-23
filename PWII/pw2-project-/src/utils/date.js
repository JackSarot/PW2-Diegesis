const formatDateString = (date) => {
    let dateObj = new Date(date);
    let day = '0' + dateObj.getDate();
    day = day.substring(day.length - 2);
    let month = '0' + (dateObj.getMonth() + 1);
    month = month.substring(month.length - 2);
    let year = dateObj.getFullYear();

    return `${day}/${month}/${year}`;
};

export { formatDateString };
