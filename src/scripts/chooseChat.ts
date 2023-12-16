import { navigate } from "src/main";

document.addEventListener("click", (e) => {
  const handleclick = (e: Event) => {
    navigate("chat");
  };

  const clickedElement = e.target as Element;

  if (clickedElement) {
    if (clickedElement.getAttribute("class") === "chat") {
      e.preventDefault();
      handleclick(e);
    }
  }
});
