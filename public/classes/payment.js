export class Payment {
    constructor(client, amount, details) {
        this.client = client;
        this.amount = amount;
        this.details = details;
    }
    format() {
        return `${this.client} paid ${this.amount} for ${this.details}`;
    }
}
