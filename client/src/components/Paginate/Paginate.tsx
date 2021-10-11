import React, { FC } from "react";
import { StyledPaginate, StyledButton } from "./StyledPaginate";

interface Props {
  amountPerPage: number;
  totalAmount: number;
  pageNumber(num: number): void;
}

const Paginate: FC<Props> = ({ amountPerPage, totalAmount, pageNumber }) => {
  const pageNumbers: Array<number> = [];

  for (let i: number = 1; i <= Math.ceil(totalAmount / amountPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <StyledPaginate>
      {pageNumbers.length > 1 &&
        pageNumbers.map((num) => {
          return (
            <StyledButton key={num} onClick={() => pageNumber(num)}>
              {num}
            </StyledButton>
          );
        })}
    </StyledPaginate>
  );
};

export default Paginate;
