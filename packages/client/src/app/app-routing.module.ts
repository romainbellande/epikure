import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'portal',
    loadChildren: () =>
      import(
        /* webpackChunkName: "portal" */ './views/portal/portal.module'
      ).then((m) => m.PortalModule),
  },
  {
    path: '',
    loadChildren: () =>
      import(
        /* webpackChunkName: "dashboard" */ './views/dashboard/dashboard.module'
      ).then((m) => m.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
