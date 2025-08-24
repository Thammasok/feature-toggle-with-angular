import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

export type FeatureName = 'dashboard' | 'settings' | 'reports' | 'analytics';

@Injectable({
  providedIn: 'root'
})
export class FeatureToggleService {
  private features = environment.features;

  isFeatureEnabled(featureName: FeatureName): boolean {
    return this.features[featureName] === true;
  }

  getAllFeatures(): Record<FeatureName, boolean> {
    return { ...this.features };
  }
}
