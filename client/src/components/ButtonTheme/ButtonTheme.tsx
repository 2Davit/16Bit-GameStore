import { FC } from "react";
import { ButtonTheme2, IconTheme } from "./ButtonTheme.style";



interface Props {
  updateTheme(): void;
  none: any;
  theme: boolean;
}

const ButtonTheme: FC<Props> = ({ updateTheme, none, theme }) => {
  return (
    <>
      <ButtonTheme2
        onClick={() => updateTheme()}
        none={none}
      >
        <IconTheme/>
      </ButtonTheme2>
    </>
  );
};

export default ButtonTheme;
