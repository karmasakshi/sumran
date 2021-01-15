/* eslint-disable @typescript-eslint/no-explicit-any */

export const logAction = (action: string, data: any = {}): void => {

  (window as any).splitbee.track(action, data);

};
