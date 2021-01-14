export const logAction = (action: string, additionalData: any = {}) => {

  (window as any).splitbee.track(action, additionalData);

};

export const logPageView = (path: string) => {

  (window as any).splitbee.track('Page View', path);

};
