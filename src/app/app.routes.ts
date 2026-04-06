import { Routes } from '@angular/router';
import { Product } from './pages/product/product';
import { ProductAdd } from './pages/product-add/product-add';
import { ProductEdit } from './pages/product-edit/product-edit';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {
        path: 'products',
        component: Product,
        canActivate: [authGuard]
    },
    {
        path: 'product-add',
        component: ProductAdd,
        canActivate: [authGuard]
    },
    {
        path: 'product-edit/:id',
        component: ProductEdit,
        canActivate: [authGuard]
    },
    {
        path: 'register',
        component: Register
    },
    {
        path: 'login',
        component: Login
    }
];
