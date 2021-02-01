import splitbee from '@splitbee/web';

export const logAction: (action: string, data: undefined) => void = (action: string, data: undefined): void => {

  splitbee.track(action, data);

};
