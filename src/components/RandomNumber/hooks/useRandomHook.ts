import { useNumberContext } from "../../../contexts/NumberContext";

export default function useRandomHook() {
  const { setRandom } = useNumberContext();
  return setRandom;
}
