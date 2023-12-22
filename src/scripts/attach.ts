document.addEventListener("click", (e) => {
  const handleclick = () => {
    const attachModal = <HTMLDivElement>document.getElementById("attach-modal");

    if (attachModal.classList.contains("hidden")) {
      attachModal.classList.remove("hidden");
      attachModal.classList.remove("hideAnimation");
      attachModal.classList.add("showAnimation");
    } else {
      attachModal.classList.remove("showAnimation");
      attachModal.classList.add("hideAnimation");
      setTimeout(() => attachModal.classList.add("hidden"), 300);
    }
  };

  const clickedElement = e.target as Element;

  if (clickedElement) {
    if (clickedElement.getAttribute("id") === "attach") {
      e.preventDefault();
      handleclick();
    }
  }
});
