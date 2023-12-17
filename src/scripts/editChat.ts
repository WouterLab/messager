document.addEventListener("click", (e) => {
  const handleclick = () => {
    const editModal = <HTMLDivElement>document.getElementById("edit-modal");

    if (editModal.classList.contains("hidden")) {
      editModal.classList.remove("hidden");
      editModal.classList.remove("hideAnimation");
      editModal.classList.add("showAnimation");
    } else {
      editModal.classList.remove("showAnimation");
      editModal.classList.add("hideAnimation");
      setTimeout(() => editModal.classList.add("hidden"), 300);
    }
  };

  const clickedElement = e.target as Element;

  if (clickedElement) {
    if (clickedElement.getAttribute("id") === "edit-chat") {
      e.preventDefault();
      handleclick();
    }
  }
});
