import React from "react";

interface Props {
  handlePrevPage: () => void;
  handleNextPage: () => void;
  pageNumber: number;
}

const Pagination = ({ handlePrevPage, handleNextPage, pageNumber }: Props) => {
  return (
    <div className="">
      <button
        className="btn btn-primary "
        onClick={handlePrevPage}
        disabled={pageNumber === 1}
      >
        Previous Page
      </button>
      <button className="btn btn-primary mx-2" onClick={handleNextPage}>
        Next Page
      </button>
    </div>
  );
};

export default Pagination;
