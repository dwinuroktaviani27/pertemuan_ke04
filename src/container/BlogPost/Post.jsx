import React from "react";

const Post = (props) => {
    return (
        <div className="artikel">
            <div className="gambar-artikel">
                <img src="http://placeimg.com/120/120/any" alt="Gambar Tumbnail Artikel" />
            </div>
            <div className="konten-artikel">
                <div className="judul-artikel"><b>{props.judul}</b></div>
                <p className="isi-artikel">{props.isi}</p>
            </div>
        </div>
    )
}
export default Post;