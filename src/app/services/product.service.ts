import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  public create(product) {
    return this.db.list('/products').push(product);
  }

  public update(productId, product) {
    return this.db.object('/products/' + productId).update(product);
  }

  public getAll() {
    return this.db.list('/products');
  }

  public get(productId) {
    return this.db.object('/products/' + productId);
  }

  public delete(productId) {
    return this.db.object('/products/' + productId).remove();
  }

}
