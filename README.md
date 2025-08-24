# Angular Feature Toggle Demo

This project demonstrates a clean implementation of feature toggles in an Angular application. It allows you to enable or disable features and components without deploying new code, making it ideal for continuous delivery, A/B testing, and gradual rollouts.

## Features

- Dynamic feature and component toggles configuration
- Route protection based on feature availability
- Component versioning with feature toggles
- Environment-based configuration for different deployment targets
- Clean, maintainable architecture with lazy-loaded routes

## Project Structure

```
src/
├── app/
│   ├── components/           # Reusable UI components
│   │   ├── feature-card/     # Feature card with toggleable designs
│   │   └── versioned-button/ # Button with versioning support
│   ├── pages/                # Feature pages
│   │   ├── dashboard/        # Dashboard page
│   │   ├── settings/         # Settings page (feature-toggled)
│   │   ├── reports/          # Reports page (feature-toggled)
│   │   ├── analytics/        # Analytics page (feature-toggled)
│   │   └── components/       # Component demo page (component-toggle)
│   ├── core/
│   │   ├── guards/           # Route guards
│   │   │   └── feature-toggle.guard.ts
│   │   └── services/
│   │       └── feature-toggle.service.ts
│   ├── app.routes.ts         # Application routes with feature guards
│   └── app.html              # Root template
├── environments/
│   ├── environment.ts        # Development feature flags
│   └── environment.prod.ts   # Production feature flags
└── assets/                   # Static assets
```

## Prerequisites

- Node.js (v16 or later)
- npm (v8 or later) or yarn
- Angular CLI (`npm install -g @angular/cli`)

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:4200`

## Configuration

Feature toggles are configured in the environment files:
- `src/environments/environment.ts` - Development configuration
- `src/environments/environment.prod.ts` - Production configuration

Example configuration:
```typescript
export const environment = {
  production: false,
  features: {
    dashboard: true,
    settings: true,
    reports: true,
    analytics: false,
    componentToggleDemo: true
  },
  components: {
    newCardDesign: true,
    newButtonDesign: false
  }
};
```

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

```bash
ng serve
```

## Building for Production

To build the project for production:

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## Code Quality

### Running Tests

Run unit tests using Karma:

```bash
# Run tests once
ng test

# Run tests in watch mode
ng test --watch
```

### Linting

Check and fix code style issues:

```bash
# Lint all TypeScript files
npm run lint

# Or use Angular CLI
ng lint
```

### Code Formatting

Format your code using Prettier:

```bash
# Format all TypeScript, HTML, and SCSS files
npm run format
```

For best practices, consider setting up your IDE to format on save using the project's Prettier configuration.

## Setting Up Feature Toggles

### 1. Define Features

Features are defined in the environment files:

- `src/environments/environment.ts` (development)
- `src/environments/environment.prod.ts` (production)

Example:
```typescript
export const environment = {
  production: false,
  features: {
    dashboard: true,   // Always enabled
    settings: false,   // Disabled by default
    reports: true,     // Enabled by default
    analytics: false   // Disabled by default
  }
};
```

### 2. Using Feature Toggles

#### In Templates (Directive)

Use the `*appFeatureToggle` directive to conditionally show/hide elements:

```html
<div *appFeatureToggle="'featureName'">
  This content is only visible when 'featureName' is enabled
</div>
```

#### In Components (Service)

Inject the `FeatureToggleService` in your component:

```typescript
constructor(private featureToggle: FeatureToggleService) {}

isFeatureEnabled(feature: string): boolean {
  return this.featureToggle.isFeatureEnabled(feature as FeatureName);
}
```

#### For Routes (Guard)

Protect routes using the `featureToggleGuard`:

```typescript
{
  path: 'protected-route',
  component: ProtectedComponent,
  canActivate: [() => featureToggleGuard('requiredFeature')]
}
```

### 3. Testing

Run unit tests:

```bash
ng test
```

Run end-to-end tests:

```bash
ng e2e
```

## Best Practices

1. **Keep Toggles Short-lived**: Remove feature toggles once the feature is stable and fully rolled out.
2. **Documentation**: Document each feature toggle with its purpose and expected removal date.
3. **Testing**: Test both states of each toggle (enabled/disabled).
4. **Environment-specific**: Use different toggle configurations for different environments.
5. **Naming**: Use clear, descriptive names for feature toggles.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
