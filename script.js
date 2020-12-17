const getRemainTime = deadLine => {
    let now = new Date(),
        time = (new Date(deadLine) - now + 1000) / 1000,
        seconds = ('0' + Math.floor(time % 60)).slice(-2),
        minutes = ('0' + Math.floor(time / 60 % 60)).slice(-2),
        hours = ('0' + Math.floor(time / 3600 % 24)).slice(-2),
        days = Math.floor(time / (3600 * 24));


    return {
        time,
        seconds,
        minutes,
        hours,
        days
    }
};


const getHtml = (deadLine, mensajeFinal) => { 
    const temp = document.getElementById("temp");
    setInterval(() => {
        let t = getRemainTime(deadLine);
        temp.textContent = `${t.days}d:${t.hours}h:${t.minutes}m:${t.seconds}s`;
        if(t.time <= 1){
            clearInterval();
            temp.textContent = mensajeFinal; 
        }
    }, 1000);
}
getHtml("Thu Dec 25 2020 00:00:00 GMT-0500", "Feliz Navidad");