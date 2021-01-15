import { AppWindow } from '@interfaces/app-window';

declare let appWindow: AppWindow;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const logAction = (action: string, data: any = {}): void => {

  appWindow.splitbee.track(action, data);

};

export const logNavigation = (path: string): void => {

  appWindow.splitbee.track('Navigation', path);

};
