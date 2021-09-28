import React, { FC } from "react";

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
    <div>
      {pageNumbers &&
        pageNumbers.map((num) => {
          return (
            <button key={num} onClick={() => pageNumber(num)}>
              {num}
            </button>
          );
        })}
    </div>
  );
};

export default Paginate;

