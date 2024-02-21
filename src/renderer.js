const setButton = document.getElementById('btn')
const titleInput = document.getElementById('title')
setButton.addEventListener('click', () => {
  const title = titleInput.value
  window.electronAPI.setTitle(title)

  console.log(title)
})




function sendToMain(){
  let text = document.getElementById("sendInput").value;
  document.getElementById("send").innerHTML =  text;
  window.electronAPI.sendToMain(text)
  console.log(text)

}

