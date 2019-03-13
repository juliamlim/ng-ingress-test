import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EasyReorderComponent } from './easy-reorder.component';

const routes: Routes = [
  { path: '**', component: EasyReorderComponent},
  { path: 'content', outlet: 'e', resolve: { noHeader: 'noHeader' }, data: [{ noHeader: true }]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EasyReorderRoutingModule { }
