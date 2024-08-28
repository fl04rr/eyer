import { LabelSwitcher, SwitcherInput } from "./styled";

type SwitcherProps = {
  switcherChecked: boolean;
  setSwitcherChecked: (value: boolean) => void;
};
export default function Swithcer({
  switcherChecked,
  setSwitcherChecked,
}: SwitcherProps) {
  return (
    <>
      <LabelSwitcher $checked={switcherChecked}>
        <SwitcherInput
          type="checkbox"
          checked={switcherChecked}
          onChange={() => setSwitcherChecked(!switcherChecked)}
        />
      </LabelSwitcher>
    </>
  );
}
