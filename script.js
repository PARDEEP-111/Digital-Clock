async function getTime() {
    try {

        const res = await fetch('https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata');
        const data = await res.json();
        console.log(data)
        let hour = data.hour;
        const minute = data.minute.toString().padStart(2, '0');
        const second = data.seconds.toString().padStart(2, '0');
        const ampm = hour >= 12 ? 'PM' : 'AM';

        hour = hour % 12;
        hour = hour ? hour : 12;
        const time = `${hour.toString()}:${minute}:${second} ${ampm}`;
        document.querySelector(".screen").textContent = time

    } catch (error) {
        document.getElementById("clock").textContent = "Error loading time";
        console.error("Failed to fetch time:", error);
    }
}
setInterval(getTime, 1000); // Updates every second
getTime()

