document.getElementById("full-page-circle").addEventListener("click", () => {
  window.location.href = "/ihec-chat";
});

document.getElementById("sider-circle").addEventListener("click", () => {
  // Open the side chat logic
  const chatbot = document.getElementById("chatbot"); // Assuming you have a chatbot div
  chatbot.style.display = "flex";
});
