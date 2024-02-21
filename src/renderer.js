const setButton = document.getElementById('btn')
const titleInput = document.getElementById('title')
setButton.addEventListener('click', () => {
  const title = titleInput.value
  window.electronAPI.setTitle(title)
})


async function reciveFunction(){
const messageFromMain = await window.electronAPI.sendMssg()
console.log(`from  render ${messageFromMain}`)
}
reciveFunction()


function sendFunction() {
  let text = document.getElementById("sendInput").value;
  document.getElementById("send").innerHTML = "You wrote: " + text;
}







