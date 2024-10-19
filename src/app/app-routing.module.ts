import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountModule } from './pages/account/account.module';
import { MyInputModule } from './my-core/component/my-input/my-input.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MyInputModule,
    AccountModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
