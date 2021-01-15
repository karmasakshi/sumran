/* eslint-disable @typescript-eslint/no-explicit-any */

export const logAction = (action: string, data: any = {}): void => {

  (window as any).splitbee.track(action, data);

};

export const logNavigation = (path: string): void => {

  (window as any).splitbee.track('Navigation', path);

};
