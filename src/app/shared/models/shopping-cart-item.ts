import { Product } from './product';

export class ShoppingCartItem {
    public $key: string;
    public title: string;
    public imageUrl: string;
    public price: number;
    public quantity: number;

    constructor(init?: Partial<ShoppingCartItem>) {
        Object.assign(this, init);
    }

    get totalPrice() { return this.price * this.quantity; }

}