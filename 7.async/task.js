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

}

// clock = new AlarmClock();
// const callback = f => f;
// clock.addClock("16:45", callback);

