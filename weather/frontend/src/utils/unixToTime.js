const unixToTime = (timestamp) => {
    /* unixToTime fonksiyonu API'dan unix timestamp değeri geliyor kullanıcın anlayabileceği ifadeye çevirir */
    const milliseconds = timestamp * 1000;

    const dateObject = new Date(milliseconds);
    const hours = dateObject.getHours().toString().padStart(2, '0');
    const minutes = dateObject.getMinutes().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;

    return formattedTime;
}

export default unixToTime;