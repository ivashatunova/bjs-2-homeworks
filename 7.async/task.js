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
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time)

    }

    getCurrentFormattedTime() {
        const date = new Date();
        const hours = date.getHours().toString();
        const minutes = date.getMinutes().toString();

        return `${hours}:${minutes}`;

    }

    start() {
        if (this.intervalId !== null) {
            return;
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(alarm => {
                if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            });  
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => alarm.canCall = false);  

    }

    clearAlarms() {
        stop();
        this.alarmCollection = [];
    }

}

clock = new AlarmClock();
console.log(clock.getCurrentFormattedTime());

    clock.addClock("16:45", f => f);
    clock.addClock("16:45", f => f);
    clock.addClock("16:46", f => f);
    clock.removeClock("16:45");
    console.log(clock.alarmCollection.length);
    console.log(clock.alarmCollection);

