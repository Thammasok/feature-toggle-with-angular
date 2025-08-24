export const environment = {
  production: true,
  features: {
    dashboard: true,
    settings: false,
    reports: true,
    analytics: false,
    // New feature flags for our components
    newCardDesign: false, // Default to false in production
    newButtonDesign: false, // Default to false in production
  },
};
