import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

export type FeatureName = 'dashboard' | 'settings' | 'reports' | 'analytics' | 'components';
export type ComponentName = 'newCardDesign' | 'newButtonDesign';
export type ServiceName = 'authService' | 'userService';

@Injectable({
  providedIn: 'root',
})
export class FeatureToggleService {
  private features = environment.features;
  private components = environment.components;
  private services = environment.services;

  isFeatureEnabled(featureName: FeatureName): boolean {
    return this.features[featureName] === true;
  }

  isComponentEnabled(componentName: ComponentName): boolean {
    return this.components[componentName] === true;
  }

  isServiceEnabled(serviceName: ServiceName): boolean {
    return this.services[serviceName] === true;
  }

  getAllFeatures(): Record<FeatureName, boolean> {
    return { ...this.features };
  }

  getAllComponents(): Record<ComponentName, boolean> {
    return { ...this.components };
  }

  getAllServices(): Record<ServiceName, boolean> {
    return { ...this.services };
  }
}
