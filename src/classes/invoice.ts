export class Invoice{
    constructor(
    readonly client: string,
    readonly amount: number,
    readonly details: string
    ){}

    format(){
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
    }
