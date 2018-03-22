var User = /** @class */ (function () {
    function User(name, surname, city, age, email) {
        this.name = name;
        this.surname = surname;
        this.city = city;
        this.age = age;
        this.email = email;
    }
    User.prototype.fullName = function () {
        return this.name + " " + this.surname;
    };
    return User;
}());
var Order = /** @class */ (function () {
    function Order(item, price, discount, prepayment) {
        this.item = item;
        this.price = price;
        this.discount = discount;
        this.prepayment = prepayment;
    }
    Order.prototype.priceToPay = function () {
        if (this.prepayment = true)
            return this.price - this.discount;
        else
            return this.price;
    };
    Order.prototype.ifDeliveryToHome = function () {
        if (this.price > 1000)
            return this.deliveryToHome = true;
        else
            this.deliveryToHome = false;
    };
    return Order;
}());
var user1 = new User('Ivan', 'Ivanets', 'Lviv', 38, 'user@email');
var order1 = new Order('Smarfone', 5000, 1000, true);
function Dill(user, order) {
    return {
        item: order.item,
        prise: order.priceToPay(),
        buyer: user.fullName()
    };
}
console.log(Dill(user1, order1));
