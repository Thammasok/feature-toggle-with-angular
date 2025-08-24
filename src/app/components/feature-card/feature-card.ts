import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureToggleService, ComponentName } from '../../core/services/feature-toggle.service';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-card.html',
  styleUrls: ['./feature-card.scss'],
})
export class FeatureCardComponent {
  @Input() title: string = 'Card Title';
  @Input() content: string = 'This is the card content';
  @Input() showNewDesign: boolean = false;

  constructor(private featureToggleService: FeatureToggleService) {
    // Check if the new card design feature is enabled
    this.showNewDesign =
      this.featureToggleService.isComponentEnabled('newCardDesign' as ComponentName) ||
      this.showNewDesign;
  }

  // Method to simulate an action
  onCardClick() {
    console.log('Card clicked:', this.title);
  }
}
