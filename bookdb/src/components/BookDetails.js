import React,{useState, useEffect} from "react";
import {getBooksById} from "../api/Googleapi";

const BookDetails = (props) => {
    const [currentBook, SetCurrentBook] = useState({});
    let ImageURL;
    useEffect(() =>{
        getBooksById(props.match.params.id, SetCurrentBook);
    },[])

    if (currentBook.volumeInfo == undefined){
        return (<div></div>)
    }else {
        if (currentBook.volumeInfo.imageLinks == undefined) {
            ImageURL = null;
        } else {
            ImageURL = currentBook.volumeInfo.imageLinks.thumbnail;
        }
        return (
            <div >
                <div className="row">
                    <div className="col s12 m4 l2">
                        <div className="card" /*onClick={() => {}}*/>
                            <div className="card-image">
                                {ImageURL == null ?
                                    (<img src="https://picsum.photos/200/300" alt="" style={{width: "50", height: "50"}}/>)
                                    :
                                    (<img src={ImageURL} alt="" style={{width: "50", height: "50"}}/>)
                                }
                            </div>
                            <div className="card-content">
                                <p><b>{currentBook.volumeInfo.title} </b></p>
                                By {currentBook.volumeInfo.authors ? (currentBook.volumeInfo.authors.join(', ')):("")}

                            </div>
                        </div>
                        <div>
                            <p><b>Publisher:</b> {currentBook.volumeInfo.publisher}</p>
                            <p><b>Published Date:</b> {currentBook.volumeInfo.publishedDate}</p>
                            <p><b>Language:</b> {currentBook.volumeInfo.language}</p>
                            <p><b>Average Rating:</b> {currentBook.volumeInfo.averageRating}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default BookDetails;