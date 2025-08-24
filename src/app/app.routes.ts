import { Routes } from '@angular/router';
import { featureToggleGuard } from './core/guards/feature-toggle.guard';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent),
    canActivate: [() => featureToggleGuard('dashboard')],
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/settings/settings.component').then((m) => m.SettingsComponent),
    canActivate: [() => featureToggleGuard('settings')],
  },
  {
    path: 'reports',
    loadComponent: () =>
      import('./pages/reports/reports.component').then((m) => m.ReportsComponent),
    canActivate: [() => featureToggleGuard('reports')],
  },
  {
    path: 'analytics',
    loadComponent: () =>
      import('./pages/analytics/analytics.component').then((m) => m.AnalyticsComponent),
    canActivate: [() => featureToggleGuard('analytics')],
  },
  {
    path: 'components',
    loadComponent: () => import('./pages/components/component-demo').then((m) => m.ComponentDemo),
    canActivate: [() => featureToggleGuard('componentToggleDemo')],
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' },
];
