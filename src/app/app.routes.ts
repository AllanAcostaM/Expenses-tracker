import { Routes } from '@angular/router';

import { AddTransactionComponent } from './pages/add-transaction/add-transaction.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: AddTransactionComponent },
];
