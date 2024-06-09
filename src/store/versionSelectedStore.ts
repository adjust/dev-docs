import { atom } from "nanostores";

export const $versionSelected = atom(false);

export const setVersionSelected = (loaded: boolean) => {
   $versionSelected.set(loaded);
};
