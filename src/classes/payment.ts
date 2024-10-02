export class Payment{
    constructor(
    readonly client: string,
    readonly amount: number,
    readonly details: string
    ){}

    format(){
        return `${this.client} paid ${this.amount} for ${this.details}`;
    }
    }