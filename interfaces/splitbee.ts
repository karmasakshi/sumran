/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Splitbee {
  track: (action: string, data: any) => void;
  user: { set: (attribute: any) => void; };
}
