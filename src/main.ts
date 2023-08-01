import './style.css'
import { setupCounter } from './counter.ts'
import { items } from  '../utils/data.ts'

let selectedItems: any = [];

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

console.log(items)
document.querySelector<HTMLDivElement>("#items")!.innerHTML = `
  ${items.map(item => (
    `<div data-id="${item.id}" class="item">
      <img class="item-thumb" src="../assets/${item.image}" alt="${item.name}"> 
      <div>
      </div>  
      ${item.name} - ${item.price}
    </div>`
  )).join("")}
`
document.querySelector<HTMLElement>("aside")!.innerHTML = `
    <ul>
      ${selectedItems.map((item: any) => (
        `<li>${item.name} - ${item.price}</li>`
      ))}
    </ul>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

// function addItem(id: number){
//   console.log(  'entrou aqui ')
//   selectedItems.push(items.find(item => id === item.id))
//   console.log(selectedItems)
// }

addItem(document.querySelectorAll<HTMLDivElement[]>(".item")!)

function addItem(element: HTMLDivElement[]) {
//   console.log(  'entrou aqui ')
//   selectedItems.push(items.find(item => id === item.id))
//   console.log(selectedItems)
  function addToList(){
    console.log(element.dataset.id)
  }
  element.addEventListener('click', () => addToList())
}
