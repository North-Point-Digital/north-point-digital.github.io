interface Window {
  gtag?: (
    command: 'config' | 'event' | 'set' | 'js',
    targetIdOrEventName: string | Date,
    config?: Record<string, any>
  ) => void;
  dataLayer?: any[];
}
