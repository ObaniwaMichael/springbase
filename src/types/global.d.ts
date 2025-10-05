// Global type augmentations

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export {};


