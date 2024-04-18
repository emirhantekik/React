const unixToDate = (timestamp) => {
    const date = new Date(timestamp * 1000);

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


    const dayName = days[date.getDay()];
    const dayOfMonth = date.getDate();
    const monthName = months[date.getMonth()];

    const formattedDate = `${dayName}, ${dayOfMonth} ${monthName}`;

    return formattedDate;
}

export default unixToDate;