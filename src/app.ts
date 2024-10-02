import { Invoice } from './classes/invoice.js';
import {Payment} from './classes/payment.js';

let Pay: Payment;
let Inv: Invoice;
let invoices: Invoice[]= [];
let payments: Payment[]= [];


const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
console.log(type.value)
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  if(type.value == 'invoice'){
  Inv = new Invoice(tofrom.value, parseInt(amount.value), details.value);
  invoices.push(Inv);
  console.log(Inv.format());
  const item =  document.createElement('li');
  item.textContent= Inv.format();
  const ul = document.querySelector('.item-list');
  ul?.appendChild(item);
  }
  else if(type.value === 'payment'){
    Pay = new Payment(tofrom.value, parseInt(amount.value), details.value);
    payments.push(Inv);
    console.log(Pay.format());
    const item =  document.createElement('li');
    item.textContent= Pay.format();
    const ul = document.querySelector('.item-list');
    ul?.appendChild(item);
  }
})