import { useRecoilValue } from "recoil"
import { tab } from "../atoms/tab";

export const useBalance = () => {
    const value = useRecoilValue(tab);
    return value;
} 