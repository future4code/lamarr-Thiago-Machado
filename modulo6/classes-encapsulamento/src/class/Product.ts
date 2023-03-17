export class Product {

    constructor(private id: string, private name: string, private price: number){
       this.id = id;
       this.name = name;
       this.price = price; 
    }

    public getId(){
        return this.id
    }
    public getName(){
        return this.name
    }
    public getPrice(){
        return this.price
    }

}