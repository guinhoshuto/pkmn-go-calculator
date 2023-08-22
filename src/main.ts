import '../styles/global.css'
import '../styles/item.css'

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

function renderItem(item: Item){
  return (
    `<div data-id="${item.id}" data-qtd="1" onclick="changeQtd(event)" class="item">
      <img class="item-thumb" src="../assets/${item.image}" alt="${item.name}"> 
      <div class="item-qtd">
        <button 
          onclick="changeQtd(event)" 
          data-id="${item.id}" 
          data-qtd="-1" 
          class="item-qtd-btn">-</button>
        <button onclick="changeQtd(event)" data-id="${item.id}" data-qtd="1" class="item-qtd-btn"   id="add">+</button>
      </div>  
    </div>`
  )
}

//tá rolando esse bug https://stackoverflow.com/questions/2385113/howto-div-with-onclick-inside-another-div-with-onclick-javascript

function renderItemList(item: Item){
  console.log(item.id, item.qtd)
  return(
    `<li>${item.qtd} - ${item.name} - ${item.qtd*item.price}</li>`
  )
}

document.querySelector<HTMLDivElement>("#items")!.innerHTML = `
  ${items.map(item => renderItem(item)).join("")}
`
function renderCalculator(){
  document.querySelector<HTMLElement>("aside")!.innerHTML = `
      <ul>
        ${items.map((item: Item) => 
          item.qtd > 0 ? (renderItemList(item)) : ( '')
        ).join('')}
      </ul>
  `;
}

renderCalculator()

function findItemById(id: number){
  return items.find(item => item.id === id) ?? null
}

window.changeQtd = (element: any) => {
  let newItem = findItemById(+element.currentTarget.dataset.id)
  console.log(newItem)
  if (newItem != null){
    newItem.qtd += +element.currentTarget.dataset.qtd
    renderCalculator()
  }
}
