export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// eslint-disable-next-line camelcase
export const logPageView = (page_path: string) => {

  (window as any).gtag('config', GA_MEASUREMENT_ID, {
    page_path
  });

};

// eslint-disable-next-line camelcase
export const logEvent = (action: string, event_category: string, event_label: string, value: number) => {

  (window as any).gtag('event', action, {
    event_category,
    event_label,
    value
  });

};
