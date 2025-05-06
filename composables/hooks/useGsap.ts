import { useModalNavbar } from "./navbar/useModalNavbar";
import { useSplitText } from "./typo/useSplitText";

export  function useGsap() {
  return {
    useModalNavbar,
    useSplitText
  }
} 