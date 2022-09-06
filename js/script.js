const bdark = document.querySelector("#dark");
const body = document.querySelector("body");

load();

bdark.addEventListener("click", (e) => {
  body.classList.toggle("darkmode");
  changeTheme();
  store(body.classList.contains("darkmode"));
});

function changeTheme() {
  if (body.classList.contains("darkmode")) {
    document.documentElement.style.setProperty("--background-color-1", "#222");
    document.documentElement.style.setProperty("--background-color-2", "#333");
    document.documentElement.style.setProperty("--background-color-3", "#444");
    document.documentElement.style.setProperty("--text-color-1", "#fff");
    document.documentElement.style.setProperty("--title-color-1", "#fff");
    document.documentElement.style.setProperty("--border-color-1", "#fff");
  } else {
    document.documentElement.style.setProperty(
      "--background-color-1",
      "#e7e7e7"
    );
    document.documentElement.style.setProperty(
      "--background-color-2",
      "#c9c9c9"
    );
    document.documentElement.style.setProperty(
      "--background-color-3",
      "#9c9c9c"
    );
    document.documentElement.style.setProperty("--text-color-1", "#686868");
    document.documentElement.style.setProperty("--title-color-1", "#000");
    document.documentElement.style.setProperty("--border-color-1", "#000");
  }
}

function load() {
  const darkmode = localStorage.getItem("darkmode");

  if (!darkmode) {
    store("false");
  } else if (darkmode == "true") {
    body.classList.add("darkmode");
  }
  changeTheme();
}

function store(value) {
  localStorage.setItem("darkmode", value);
}

const arrow = document.querySelector(".arrow");

arrow.addEventListener("click", (e) => {
  scroll();
});

function scroll() {
  const element = document.getElementById("start");
  const offset = 50;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}
