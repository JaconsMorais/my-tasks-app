import { REQUIRED_MESSAGE } from "./messages";
export const required = (val: string) => {
  if (!val) return REQUIRED_MESSAGE;
};
