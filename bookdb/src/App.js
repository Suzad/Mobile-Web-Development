import React, { useState } from "react";
import Searchbar from "./components/Searchbar";
import BookList from "./components/BookList";
import ReactPaginate from 'react-paginate';
import { getBooksByTerm } from "./api/Googleapi";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getBooksByTerm(searchTerm, setBooks, currentPage, setTotalPages);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const nextPage = async (page_number) => {
    await getBooksByTerm(searchTerm, setBooks, page_number.selected+1, setTotalPages);
    setCurrentPage(page_number.selected+1);
  };
  return (
      <div>
        <div>
          <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} />
          <BookList books={books} />
          {totalPages > 1 ? (
              <div align="center">
                <ReactPaginate
                    previousLabel={'<<<'}
                    nextLabel={'>>>'}
                    pageCount={totalPages}
                    marginPagesDisplayed={1}
                    onPageChange={nextPage}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
              </div>
          ) : ("")}
        </div>
      </div>
  );
};

export default App;