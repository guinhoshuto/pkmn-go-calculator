import '../styles/global.css'
import '../styles/item.css'

import { items } from  '../utils/data.ts'

interface Items{
    id: number,
    name: string, 
    image: string, 
    price: number,
}
declare global {
  interface Window {addItem:  (e: any) => void}
}

let selectedItems: Items[] = [];

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

document.querySelector<HTMLDivElement>("#items")!.innerHTML = `
  ${items.map(item => (
    `<div data-id="${item.id}" onclick="addItem(event)" class="item">
      <img class="item-thumb" src="../assets/${item.image}" alt="${item.name}"> 
      <div>
      </div>  
      ${item.name} - ${item.price}
    </div>`
  )).join("")}
`
function updateCalculator(){
  document.querySelector<HTMLElement>("aside")!.innerHTML = `
      <ul>
        ${selectedItems.map((item: any) => (
          `<li>${item.name} - ${item.price}</li>`
        )).join('')}
      </ul>
  `;
}

updateCalculator()

function findItemById(id: number){
  return items.find(item => item.id === id) ?? null
}

window.addItem = (element: any) => {
  let newItem = findItemById(+element.currentTarget.dataset.id)
  console.log(newItem)
  if (newItem != null){
    selectedItems.push(newItem)
    updateCalculator()
    console.log(selectedItems)
  }

}
