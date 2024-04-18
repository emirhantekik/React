const unixToDay = (timestamp) => {
    const date = new Date(timestamp * 1000);

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const dayName = days[date.getDay()];

    const formattedDate = `${dayName}`;

    return formattedDate;
}

export default unixToDay;