
/// <reference types="vite/client" />

declare global {
  interface Window {
    _HB_?: {
      pid?: string;
    };
  }
}

export {};
