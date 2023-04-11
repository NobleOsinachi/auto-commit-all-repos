function dateString() {
    const date = new Date();

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const monthOfYear = monthsOfYear[date.getMonth()];
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const meridiem = hours < 12 ? 'AM' : 'PM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    const dateString = `${dayOfWeek} ${monthOfYear} ${dayOfMonth} ${year} at ${hours}:${minutes}:${seconds}${meridiem}`;

    // console.log(dateString);
    return dateString;

}


console.log(

    dateString()
);
