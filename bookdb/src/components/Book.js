import React from "react";
import {Link} from "react-router-dom";

const Book = (props) => {
    let ImageURL;
    if (props.data.volumeInfo.imageLinks == undefined) {
        ImageURL = null;
    } else {
        console.log(props);
        ImageURL = props.data.volumeInfo.imageLinks.thumbnail;
    }

    return (
        <div className="col s12 m3">
            <div className="card large" onClick={() => {
            }}>
                <div className="card-image">
                    {ImageURL == null ? (
                        <img src="https://picsum.photos/200/300" alt="" style={{ width: "100", height: "200" }}/>
                    ) : (
                        <img src={ImageURL} alt="" style={{ width: "100", height: "200" }}/>
                    )}
                </div>
                <div className="card-content" style={{justifyContent:"center"}}>
                    <p style={{justifyContent:"center"}}>{props.data.volumeInfo.title} </p>
                    {/*By {props.data.volumeInfo.authors}*/}
                </div>
                <div className="card-action">
                    <Link to={{pathname:"/book/"+props.data.id, book_id:props.data.id}}>Book details</Link>
                </div>
            </div>
        </div>
    );
};

export default Book;