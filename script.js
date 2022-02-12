function loader() {
  console.log("Page loaded");

  const submitEvent = () => console.log("Submit successful");

  const uploadButton = document.getElementById("upload");
  uploadButton.addEventListener("click", submitEvent);
}

window.addEventListener("load", loader);
