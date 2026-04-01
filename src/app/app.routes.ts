import { Routes } from '@angular/router';
import { Product } from './pages/product/product';
import { ProductAdd } from './pages/product-add/product-add';
import { ProductEdit } from './pages/product-edit/product-edit';

export const routes: Routes = [
    {
        path: 'products',
        component: Product
    },
    {
        path: 'product-add',
        component: ProductAdd
    },
    {
        path: 'product-edit/:id',
        component: ProductEdit
    }
];
