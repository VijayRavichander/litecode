import { atom } from "recoil";

export const tab = atom<string>({
    key: "string",
    default: "description",
})