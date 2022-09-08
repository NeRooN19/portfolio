function changeTheme() {
  body.classList.contains("darkmode")
    ? (document.documentElement.style.setProperty(
        "--background-color-1",
        "#222"
      ),
      document.documentElement.style.setProperty(
        "--background-color-2",
        "#333"
      ),
      document.documentElement.style.setProperty(
        "--background-color-3",
        "#444"
      ),
      document.documentElement.style.setProperty("--text-color-1", "#fff"),
      document.documentElement.style.setProperty("--title-color-1", "#fff"),
      document.documentElement.style.setProperty("--border-color-1", "#fff"),
      document.documentElement.style.setProperty("--arrow-bk-color", "#c2c2c2"),
      document.documentElement.style.setProperty("--arrow-color", "#505050"),
      document.querySelector(".dark-button__moon").classList.add("hide-dark"),
      document.querySelector(".dark-button__sun").classList.remove("hide-dark"),
      document.documentElement.style.setProperty("--border-color-2", "#e7e7e7"))
    : (document.documentElement.style.setProperty(
        "--background-color-1",
        "#e7e7e7"
      ),
      document.documentElement.style.setProperty(
        "--background-color-2",
        "#c9c9c9"
      ),
      document.documentElement.style.setProperty(
        "--background-color-3",
        "#9c9c9c"
      ),
      document.documentElement.style.setProperty("--text-color-1", "#686868"),
      document.documentElement.style.setProperty("--title-color-1", "#000"),
      document.documentElement.style.setProperty("--border-color-1", "#000"),
      document.documentElement.style.setProperty("--arrow-bk-color", "#505050"),
      document.documentElement.style.setProperty("--arrow-color", "#fff"),
      document.querySelector(".dark-button__sun").classList.add("hide-dark"),
      document.querySelector(".dark-button__moon").classList.remove("hide-dark"),
      document.documentElement.style.setProperty("--border-color-2", "#777"));
}
function load() {
  const e = localStorage.getItem("darkmode");
  e ? "true" == e && body.classList.add("darkmode") : store("false"),
    changeTheme();
}
function store(e) {
  localStorage.setItem("darkmode", e);
}
function scroll() {
  const e = document.getElementById("start"),
    t = 50,
    o = document.body.getBoundingClientRect().top,
    r = e.getBoundingClientRect().top,
    c = r - o,
    n = c - t;
  window.scrollTo({ top: n, behavior: "smooth" });
}
const bdark = document.querySelector("#dark"),
  body = document.querySelector("body");
load(),
  bdark.addEventListener("click", (e) => {
    body.classList.toggle("darkmode"),
      changeTheme(),
      store(body.classList.contains("darkmode"));
  });
const arrow = document.querySelector(".arrow");
arrow.addEventListener("click", (e) => {
  scroll();
}),
  document.addEventListener("click", function (e) {
    const t = document.querySelector(".header"),
      o = document.querySelector(".dark-button");
    t.contains(e.target) ||
      (t.classList.remove("active"), o.classList.remove("active"));
  });
