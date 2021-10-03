import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
  },
  {
    path: 'signin',
    loadChildren: () =>
      import(/* webpackChunkName: "signin" */ './signin/signin.module').then(
        (m) => m.SigninModule
      ),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import(/* webpackChunkName: "signup" */ './signup/signup.module').then(
        (m) => m.SignupModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalRoutingModule {}
