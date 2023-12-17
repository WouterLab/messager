document.addEventListener("click", (e) => {
  const handleclick = () => {
    const messageInput = <HTMLInputElement>(
      document.getElementById("message-input")
    );

    messageInput.value = "";
  };

  const clickedElement = e.target as Element;

  if (clickedElement) {
    if (clickedElement.getAttribute("id") === "send-message") {
      e.preventDefault();
      handleclick();
    }
  }
});
