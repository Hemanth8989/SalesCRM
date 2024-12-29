import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'home',
                loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
            },
            {
                path: 'customers',
                loadComponent: () => import('./customers/customers.page').then((m) => m.CustomersPage),
            },
            {
                path: 'settings',
                loadComponent: () => import('./settings/settings.page').then((m) => m.SettingsPage),
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full',
            },
        ],
      },
];