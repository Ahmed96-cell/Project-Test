import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Paginationcom = () => {
  const [pageCount, setpageCount] = useState();
  const pages = useEffect(() => {
    setpageCount(20);
  }, [20]);

  const handlePageClick = (data) => {
    pages(data.selected + 1);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالي"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="السابق"
        containerClassName="pagination justify-content-center p-3"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        extraAriaContext=<spane>"Showing 26 to 36 of 36 entries"</spane>
      />
    </>
  );
};

export default Paginationcom;
