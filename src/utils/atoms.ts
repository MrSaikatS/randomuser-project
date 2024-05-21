import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const numAtom = atom<number>(3);

export const darkAtom = atomWithStorage<boolean>("darkmode", false);
