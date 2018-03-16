export class Tour {
    public title: string;
    public description: string;
    public city: string;
    public imageSrc: string;
    public price: number;

    constructor(title, description, city, imageSrc, price) {
        this.title = title;
        this.description = description;
        this.city = city;
        this.imageSrc = imageSrc;
        this.price = price;
    }
}