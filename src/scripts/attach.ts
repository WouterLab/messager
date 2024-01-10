export const attachFile = () => {
  const attachModal = <HTMLDivElement>document.getElementById("attach-modal");

  console.log(attachModal);

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
