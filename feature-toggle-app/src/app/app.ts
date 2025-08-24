import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FeatureToggleDirective } from './shared/directives/feature-toggle.directive';
import { FeatureToggleService, FeatureName } from './core/services/feature-toggle.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FeatureToggleDirective
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  enabledFeatures: string[] = [];

  constructor(private featureToggleService: FeatureToggleService) {
    // Get all features and filter enabled ones
    const allFeatures = this.featureToggleService.getAllFeatures();
    this.enabledFeatures = Object.entries(allFeatures)
      .filter(([_, isEnabled]) => isEnabled)
      .map(([feature]) => feature);
  }
}
