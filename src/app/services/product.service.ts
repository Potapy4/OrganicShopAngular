import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  public create(product) {
    return this.db.list('/products').push(product);
  }

}
