import { FC } from "react";
import { ButtonTheme2 } from "./ButtonTheme.style";

interface Props {
  updateTheme(): void;
  none: any;
  theme: boolean;
}

const ButtonTheme: FC<Props> = ({ updateTheme, none, theme }) => {
  return (
    <>
      <ButtonTheme2
        className="fa fa-power-off"
        onClick={() => updateTheme()}
        none={none}
      ></ButtonTheme2>
    </>
  );
};

export default ButtonTheme;
