export {};
class User {
    name: string;
    surname: string;
    city: string;
    age: number;
    private email: string;

    constructor(name: string, surname: string, city: string, age: number, email: string) {
        this.name = name;
        this.surname = surname;
        this.city = city;
        this.age = age;
        this.email = email;
    }
    fullName() {
        return `${this.name} ${this.surname}`;
    }
}

class Order {
    item: string;
    price: number;
    prepayment: boolean;
    discount: number;
    deliveryToHome: boolean;
    private biyersHomeAdress: object;

    constructor(item: string, price: number, discount: number, prepayment: boolean, ) {
        this.item = item;
        this.price = price;
        this.discount = discount;
        this.prepayment = prepayment;
    }
    priceToPay() {
        if (this.prepayment = true) return this.price - this.discount;
        else return this.price;
    }
    ifDeliveryToHome() {
        if (this.price > 1000) return this.deliveryToHome = true;
        else this.deliveryToHome = false;
    }

}

let user1: User = new User('Ivan', 'Ivanets', 'Lviv', 38, 'user@email');
let order1: Order = new Order('Smarfone', 5000, 1000, true);

function Dill(user: User, order: Order): {item: string, prise: number, buyer: string} {
    return {
        item: order.item,
        prise: order.priceToPay(),
        buyer: user.fullName()
    }
}
console.log(Dill(user1, order1));