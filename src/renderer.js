function sendToMain(){
  let text = document.getElementById("sendInput").value;
  document.getElementById("send").innerHTML =  text;
  window.electronAPI.sendToMain(text)
  console.log(text)

}

