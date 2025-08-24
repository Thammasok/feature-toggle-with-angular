import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentName, FeatureToggleService } from '../../core/services/feature-toggle.service';

@Component({
  selector: 'app-versioned-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './versioned-button.html',
  styleUrls: ['./versioned-button.scss'],
})
export class VersionedButtonComponent {
  @Input() label: string = 'Click Me';
  @Input() type: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() disabled: boolean = false;
  @Input() showNewDesign: boolean = false;
  @Output() clicked = new EventEmitter<void>();

  constructor(private featureToggleService: FeatureToggleService) {
    // Check if the new button design feature is enabled
    this.showNewDesign =
      this.featureToggleService.isComponentEnabled('newButtonDesign' as ComponentName) ||
      this.showNewDesign;
  }

  onClick() {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
