import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

export type FeatureName = 'dashboard' | 'settings' | 'reports' | 'analytics' | 'components';

export type ComponentName = 'newCardDesign' | 'newButtonDesign';

@Injectable({
  providedIn: 'root',
})
export class FeatureToggleService {
  private features = environment.features;
  private components = environment.components;

  isFeatureEnabled(featureName: FeatureName): boolean {
    return this.features[featureName] === true;
  }

  isComponentEnabled(componentName: ComponentName): boolean {
    return this.components[componentName] === true;
  }

  getAllFeatures(): Record<FeatureName, boolean> {
    return { ...this.features };
  }

  getAllComponents(): Record<ComponentName, boolean> {
    return { ...this.components };
  }
}
