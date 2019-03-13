import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'shop', loadChildren: './components/shop/shop.module#ShopModule' },
  { path: 'content', loadChildren: './components/shop/shop.module#ShopModule' },
  { path: 'search', loadChildren: './components/shop/shop.module#ShopModule' },
  {
    path: 'account',
    children: [
      { path: 'previous-purchases', loadChildren: './components/easy-reorder/easy-reorder.module#EasyReorderModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
