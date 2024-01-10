export const editChat = () => {
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
