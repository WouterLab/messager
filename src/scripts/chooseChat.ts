import { navigate } from "src/main";

document.addEventListener("click", (e) => {
  const handleclick = () => {
    navigate("chat");
    const chatWindow = <HTMLDivElement>document.getElementById("chat-window");
    chatWindow.scroll({ behavior: "smooth", top: chatWindow.scrollHeight });
    //behavior - только для наглядности пока один чат на всех
  };

  const clickedElement = e.target as Element;

  if (clickedElement) {
    if (clickedElement.getAttribute("class") === "chat") {
      e.preventDefault();
      handleclick();
    }
  }
});
