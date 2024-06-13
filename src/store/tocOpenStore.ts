import { persistentAtom } from "@nanostores/persistent";

export const $tocOpen = persistentAtom("");

export const setTocOpen = (open: boolean) => {
   let choice = open.toString()
   $tocOpen.set(choice);
};
