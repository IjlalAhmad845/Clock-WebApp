const sec = document.querySelector(".sec-hand");
const secTail = document.querySelector(".sec-hand-tail");
const min = document.querySelector(".min-hand");
const hr = document.querySelector(".hour-hand");
const pi = Math.PI;

const setSecondsShadow = (value) => {
  sec.style.boxShadow = `${-15 * Math.sin((value * 6 * pi) / 180)}px 
  ${-15 * Math.sin(((value * 6 + 45) * pi) / 180)}px 15px #46484a`;

  secTail.style.boxShadow = `${15 * Math.sin((value * 6 * pi) / 180)}px 
   ${-15 * Math.sin(((value * 6 + 45 + 180) * pi) / 180)}px 15px #46484a`;
};

const setMinutesShadow = (value) => {
  min.style.boxShadow = `${-15 * Math.sin((value * 6 * pi) / 180)}px  
  ${-15 * Math.sin(((value * 6 + 45) * pi) / 180)}px 15px #46484a`;
};

const setHoursShadow = (value) => {
  hr.style.boxShadow = `${-10 * Math.sin((value * 6 * pi) / 180)}px 
   ${-15 * Math.sin(((value * 6 + 45) * pi) / 180)}px 15px #676a6e`;
};

setInterval(() => {
  const date = new Date();
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hour = date.getHours();

  hour = hour % 12;
  setSecondsShadow(seconds);
  setMinutesShadow(minutes);
  setHoursShadow(hour * 5 + 1);

  sec.style.transform = `rotate(${90 + seconds * 6}deg)`;
  secTail.style.transform = `rotate(${90 + 180 + seconds * 6}deg)`;
  min.style.transform = `rotate(${90 + minutes * 6 + seconds / 10}deg)`;
  hr.style.transform = `rotate(${90 + hour * 30 + minutes / 2}deg)`;
}, 1);
