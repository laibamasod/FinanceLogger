import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
let Pay;
let Inv;
let invoices = [];
let payments = [];
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
console.log(type.value);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (type.value == 'invoice') {
        Inv = new Invoice(tofrom.value, parseInt(amount.value), details.value);
        invoices.push(Inv);
        console.log(Inv.format());
        const item = document.createElement('li');
        item.textContent = Inv.format();
        const ul = document.querySelector('.item-list');
        ul === null || ul === void 0 ? void 0 : ul.appendChild(item);
    }
    else if (type.value === 'payment') {
        Pay = new Payment(tofrom.value, parseInt(amount.value), details.value);
        payments.push(Inv);
        console.log(Pay.format());
        const item = document.createElement('li');
        item.textContent = Pay.format();
        const ul = document.querySelector('.item-list');
        ul === null || ul === void 0 ? void 0 : ul.appendChild(item);
    }
});
