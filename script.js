const Hourselem = document.getElementById("hours");
const Minuteselem = document.getElementById("minutes");
const Secondelem = document.getElementById("second");

setInterval(() => {
  const date = new Date();
  const hou = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  Hourselem.innerHTML = String(hou).padStart(2, "0");
  Minuteselem.innerHTML = String(min).padStart(2, "0");
  Secondelem.innerHTML = String(sec).padStart(2, "0");
}, 1000);
