import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { FeatureToggleService, FeatureName } from '../../core/services/feature-toggle.service';

@Directive({
  selector: '[appFeatureToggle]',
  standalone: true,
})
export class FeatureToggleDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private featureToggleService: FeatureToggleService,
  ) {}

  @Input() set appFeatureToggle(featureName: FeatureName) {
    const isEnabled = this.featureToggleService.isFeatureEnabled(featureName);

    if (isEnabled && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!isEnabled && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
