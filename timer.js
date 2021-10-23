const template = (days, hours, mins, secs) => {
  return `<div class="field">
          <span class="value" data-value="days">${days}</span>
        </div>
      
        <div class="field">
          <span class="value" data-value="hours">${hours}</span>
        </div>
      
        <div class="field">
          <span class="value" data-value="mins">${mins}</span>
        </div>
      
        <div class="field">
          <span data-value="secs">${secs}</span>
        </div>`;
};

export default class CountdownTimer {
  constructor(selector, currentDate) {
    this.refEl = document.querySelector(`${selector}`);
    this.currentDate = currentDate;

    this.start();
  }

  start() {
    setInterval(() => {
      let dateNow = new Date();
      let diff = this.currentDate - dateNow;

      let numberDays = this.days(diff);
      let numberHours = this.hours(diff);
      let numberMins = this.mins(diff);
      let numberSecs = this.secs(diff);

      this.refEl.innerHTML = template(
        numberDays,
        numberHours,
        numberMins,
        numberSecs
      );
    }, 100);
  }

  days(time) {
    return Math.floor(time / (1000 * 60 * 60 * 24));
  }

  hours(time) {
    return Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  }

  mins(time) {
    return Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  }

  secs(time) {
    return Math.floor((time % (1000 * 60)) / 1000);
  }
}
