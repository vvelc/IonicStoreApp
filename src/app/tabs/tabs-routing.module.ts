import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'catalog',
        loadChildren: () => import('../catalog/catalog.module').then(m => m.CatalogPageModule)
      },
      {
        path: 'credits',
        loadChildren: () => import('../credits/credits.module').then(m => m.CreditsPageModule)
      },
      {
        path: '',
        redirectTo: '/catalog',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
