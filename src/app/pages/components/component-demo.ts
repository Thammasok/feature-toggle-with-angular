import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureCardComponent } from '../../components/feature-card/feature-card';
import { VersionedButtonComponent } from '../../components/versioned-button/versioned-button';
import { FeatureToggleService } from '../../core/services/feature-toggle.service';

@Component({
  selector: 'app-component-demo',
  standalone: true,
  imports: [CommonModule, FeatureCardComponent, VersionedButtonComponent],
  templateUrl: './component-demo.html',
  styleUrls: ['./component-demo.scss'],
})
export class ComponentDemo {
  cardTitle = 'Component Toggle Demo';
  cardContent =
    'This card demonstrates how to use feature toggles to switch between different component versions.';

  constructor(public featureToggleService: FeatureToggleService) {}

  onButtonClick() {
    console.log('Button was clicked!');
  }
}
