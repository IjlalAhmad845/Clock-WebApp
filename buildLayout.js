const body = document.querySelector(".clock-body-inner");

for (let i = 0; i < 360; i++) {
  if (i % 6 == 0) {
    const needles = document.createElement("div");
    needles.className = "needles";

    if (i % 30 == 0) {
        needles.style.width = "40px";
        needles.style.height = "8px"
    } else needles.style.width = "20px";

    needles.style.transform = `rotate(${i}deg)`;

    body.appendChild(needles);
  }
}
