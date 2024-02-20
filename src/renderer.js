


async function reciveFunction(){
const messageFromMain = await window.electronAPI.sendMssg()
console.log(`from  render ${messageFromMain}`)
}
reciveFunction()


function sendFunction() {
  let text = document.getElementById("sendInput").value;
  document.getElementById("send").innerHTML = "You wrote: " + text;
}

const counter = document.getElementById('counter')

window.electronAPI.onUpdateCounter((value) => {
  const oldValue = Number(counter.innerText)
  const newValue = oldValue + value
  counter.innerText = newValue.toString()
  window.electronAPI.counterValue(newValue)
})






const btn = document.getElementById('btn1')
const filePathElement = document.getElementById('filePath')

btn.addEventListener('click', async () => {
  const filePath = await window.electronAPI.openFile()
  filePathElement.innerText = filePath
})


const setButton = document.getElementById('btn')
const titleInput = document.getElementById('title')
setButton.addEventListener('click', () => {
  const title = titleInput.value
  window.electronAPI.setTitle(title)
})
