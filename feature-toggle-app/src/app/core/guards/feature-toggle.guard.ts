import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FeatureToggleService, FeatureName } from '../services/feature-toggle.service';

export const featureToggleGuard = (featureName: FeatureName): ReturnType<CanActivateFn> => {
  const featureToggleService = inject(FeatureToggleService);
  const router = inject(Router);

  if (featureToggleService.isFeatureEnabled(featureName)) {
    return true;
  }
  
  // Redirect to a not-found page or home if the feature is disabled
  return router.createUrlTree(['/']);
};
