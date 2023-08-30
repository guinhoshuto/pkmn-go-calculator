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
    bundle?: number,
    bundle_value?: number
}

const items = data.map(item => ({qtd: 0, ...item}))

declare global {
  interface Window {changeQtd:  (e: any) => void}
}

function renderItemList(item: Item){
  let bundles = 0;
  let single = item.qtd;
  if(item.bundle){
    bundles = Math.floor(item.qtd/item.bundle) 
    single = item.qtd%item.bundle
  }
  return(
    `<li>
      <span>
        ${bundles > 0 ? (`${bundles}x ${item.name} bundle<br/>`) : ''}
        ${single > 0 ? (`${single}x ${item.name}`) : ''}
      </span><span> ${calculatePrice(item)}</span></li>`
  )
}


function calculatePrice(item: Item){
  return new Intl.NumberFormat('pt-BR',{ maximumSignificantDigits: 3 }).format(item.bundle ?  Math.floor(item.qtd/item.bundle)*item.bundle_value! + item.qtd%item.bundle*item.price : item.qtd*item.price);
}


function findItemById(items: Item[], id: number){
  return items.find(item => item.id === id) ?? null
}

function renderItem(item: Item){
  return (
    `<div data-id="${item.id}" data-qtd="1" class="item">
      <div class="item-thumb">
        <img src="../assets/${item.image}" alt="${item.name}"> 
      </div>
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
      ${item.qtd > 0 ? (`<div class='dot'>${item.qtd}</div>`) : ('')}
    </div>`
  )
}

function renderItems(){
  document.querySelector<HTMLDivElement>("#items")!.innerHTML = `
    ${items.map(item => renderItem(item)).join("")}
  `
}

function renderCalculator(){
  document.querySelector<HTMLElement>(".selected-items")!.innerHTML = `
      <ul>
        ${items.map((item: Item) => 
          item.qtd > 0 ? (renderItemList(item)) : ('')
        ).join('')}
      </ul>
  `;
}

function getTotal(items: Item[]): number{
  return new Intl.NumberFormat('pt-BR',{ maximumSignificantDigits: 3 }).format(items.reduce((acc, item) => acc + item.qtd * item.price, 0))
  // return items.reduce((acc, item) => acc + item.qtd * item.price, 0)')items.reduce((acc, item) => acc + item.qtd * item.price, 0)
}

window.changeQtd = (element: any) => {
  let selectedItem = findItemById(items, +element.currentTarget.dataset.id)
  console.log(selectedItem)
  if (selectedItem != null){
    selectedItem.qtd += +element.currentTarget.dataset.qtd
    if(selectedItem.qtd < 0) selectedItem.qtd = 0;
    document.querySelector<HTMLDivElement>(".result span")!.innerHTML = `${getTotal(items)} <img src="./assets/coin.png">`
    renderCalculator()
    renderItems()
  }
}

renderItems()
renderCalculator()