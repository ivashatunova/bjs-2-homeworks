class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
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
        this.alarmCollection.forEach(alarm => alarm.canCall = true);

    }

    clearAlarms() {
        stop();
        this.alarmCollection = [];
    }

}


