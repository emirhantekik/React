const unixToFullDate = (timestamp) => {
    const date = new Date(timestamp * 1000);

    const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];

    const dayOfMonth = date.getDate();
    const monthName = months[date.getMonth()];
    const year = date.getFullYear();

    const formattedDate = `${dayOfMonth} ${monthName} ${year}`;

    return formattedDate;
}

export default unixToFullDate;