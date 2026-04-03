import { Routes } from '@angular/router';
import { Product } from './pages/product/product';
import { ProductAdd } from './pages/product-add/product-add';
import { ProductEdit } from './pages/product-edit/product-edit';
import { Register } from './pages/register/register';

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
    },
    {
        path: 'register',
        component: Register
    }
];
