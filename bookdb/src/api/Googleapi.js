import axios from "axios";

const Googleapi = axios.create({
    baseURL: "https://www.googleapis.com/books/v1",
});

const getBooksByTerm = (SearchTerm, setBooks, page_number, setTotalPages, sort = "relevance") => {
    Googleapi.get("/volumes", {
        params: {
            q: SearchTerm,
            startIndex: ((page_number-1)*10),
            maxResults: 10,
            orderBy: sort,
        },
    }).then((response) => {
        console.log(response.data);
        setBooks(response.data.items);
        setTotalPages(response.data.totalItems/10);
    });
};

const getBooksById = (BookId, SetCurrentBook) => {
    Googleapi.get("/volumes/" + BookId)
        .then((response) => {
            SetCurrentBook(response.data);
        });
};

export { getBooksByTerm, getBooksById };