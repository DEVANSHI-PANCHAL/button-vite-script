function e() {
  const t = document.createElement("button");
  return t.innerText = "Click me", t.addEventListener("click", () => {
    alert("Button clicked!");
  }), t;
}
export {
  e as Button
};
