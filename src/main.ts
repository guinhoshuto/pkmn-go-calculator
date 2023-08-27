import '../styles/global.css'
import '../styles/item.css'
import '../styles/list.css'

import { data } from  '../utils/data.ts'
interface Item{
    id: number,
    qtd: number,
    name: string, 
    image: string, 
    price: number,
}

const items = data.map(item => ({qtd: 0, ...item}))

declare global {
  interface Window {changeQtd:  (e: any) => void}
}

function renderItemList(item: Item){
  console.log(item.id, item.qtd)
  return(
    `<li>${item.qtd} - ${item.name} - ${item.qtd*item.price}</li>`
  )
}

export function findItemById(items: Item[], id: number){
  return items.find(item => item.id === id) ?? null
}

export function renderItem(item: Item){
  return (
    `<div data-id="${item.id}" data-qtd="1" class="item">
      <img class="item-thumb" src="../assets/${item.image}" alt="${item.name}"> 
      <h2>${item.name} - ${item.price}</h2>
      <div class="item-qtd">
        <button 
          onclick="changeQtd(event)" 
          data-id="${item.id}" 
          data-qtd="-1" 
          class="item-qtd-btn">-</button>
        <button 
          onclick="changeQtd(event)" 
          data-id="${item.id}" 
          data-qtd="1" 
          class="item-qtd-btn">+</button>
      </div>  
    </div>`
  )
}

document.querySelector<HTMLDivElement>("#items")!.innerHTML = `
  ${items.map(item => renderItem(item)).join("")}
`
function renderCalculator(){
  document.querySelector<HTMLElement>(".selected-items")!.innerHTML = `
      <ul>
        ${items.map((item: Item) => 
          item.qtd > 0 ? (renderItemList(item)) : ( '')
        ).join('')}
      </ul>
  `;
}

function getTotal(items: Item[]): number{
  return items.reduce((acc, item) => acc + item.qtd * item.price, 0)
}

window.changeQtd = (element: any) => {
  let newItem = findItemById(items, +element.currentTarget.dataset.id)
  console.log(newItem)
  if (newItem != null){
    newItem.qtd += +element.currentTarget.dataset.qtd
    document.querySelector<HTMLDivElement>(".result span")!.innerHTML = `${getTotal(items)}`
    renderCalculator()
  }
}

renderCalculator()