class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (this.time === null || this.callback === null) {
            throw new Error("Отсутствуют обязательные аргументы");
        }

        this.alarmCollection.forEach(alarm => {
            if (alarm.time === this.time) {
                console.warn("Уже присутствует звонок на это же время");
                return;
            }
        })

        this.alarmCollection.push({ callback: callback, time: time, canCall: true });

    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== this.time)

    }

    getCurrentFormattedTime() {
        const date = new Date();
        const hours = date.getHours().toString();
        const minutes = date.getMinutes().toString();

        return `${hours}:${minutes}`;

    }

}

clock = new AlarmClock();
const callback = f => f;
clock.addClock("16:45", callback);
console.log (clock.getCurrentFormattedTime());

