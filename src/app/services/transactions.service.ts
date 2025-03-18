import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

// Models
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private transactionsCollection: AngularFirestoreCollection<Transaction>;

  constructor(private firestore: AngularFirestore) {
    // 'transactions' será el nombre de la colección en Firestore
    this.transactionsCollection = this.firestore.collection<Transaction>('transactions');
  }

  // Obtener todas las transacciones
  public get(): Observable<Transaction[]> {
    // valueChanges devuelve los datos y asigna el id en un campo, si lo especificas
    return this.transactionsCollection.valueChanges({ idField: 'id' });
  }

  // Crear una transacción
  public create(transaction: Transaction): Promise<any> {
    // Firestore asigna automáticamente un ID, a menos que quieras personalizarlo
    return this.transactionsCollection.add(transaction);
  }

  // Eliminar una transacción
  public remove(id: string): Promise<void> {
    return this.transactionsCollection.doc(id).delete();
  }
}
