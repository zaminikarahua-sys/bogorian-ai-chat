(function () {

  // FLOAT BUTTON
  const button = document.createElement("button");
  button.innerHTML = "💬";
  button.style.position = "fixed";
  button.style.bottom = "20px";
  button.style.right = "20px";
  button.style.width = "60px";
  button.style.height = "60px";
  button.style.borderRadius = "50%";
  button.style.background = "#16a34a";
  button.style.color = "white";
  button.style.border = "none";
  button.style.fontSize = "24px";
  button.style.zIndex = "999999";
  document.body.appendChild(button);

  // CHAT BOX
  const box = document.createElement("div");
  box.style.position = "fixed";
  box.style.bottom = "90px";
  box.style.right = "20px";
  box.style.width = "340px";
  box.style.height = "500px";
  box.style.background = "#fff";
  box.style.border = "1px solid #ddd";
  box.style.borderRadius = "12px";
  box.style.display = "none";
  box.style.zIndex = "999999";
  document.body.appendChild(box);

  button.onclick = () => {
    box.style.display = box.style.display === "block" ? "none" : "block";
  };

  // SIMPLE CONTENT
  box.innerHTML = `
    <div style="padding:10px;background:#16a34a;color:white;">
      Bogorian AI
    </div>
    <div style="padding:10px;font-family:sans-serif;">
      Hi 👋 Ask me anything about Bogorian Shop.
    </div>
  `;

})();
