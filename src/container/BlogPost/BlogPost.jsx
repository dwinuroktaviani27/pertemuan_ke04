import React, { Component } from "react";
import './BlogPost.css';
import Post from "./Post";
// import Post from "./Post";

class BlogPost extends Component {
    state = {
        listArtikel: []
    }

    componentDidMount(){
        fetch ('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(jsonHasilAmbilDariAPI => {
            this.setState ({
                listArtikel: jsonHasilAmbilDariAPI
            })
        })
    }



    render() {
        return (
            <div className="post-artikel">
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => {
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body}/>
                    })
                }
                {/* <Post judul="JTI Polinema" isi="Jurusan Teknologi Informasi - Politeknik Negeri Malang"></Post> */}
                {/* <div className="artikel">
                    <div className="gambar-artikel">
                        <img src="http://placeimg.com/120/120/any" alt="Gambar Tumbnail Artikel" />
                    </div>
                    <div className="konten-artikel">
                        <div className="judul-artikel">Judul Artikel</div>
                        <p className="isi-artikel">Isi Artikel</p>
                    </div>
                </div> */}
            </div>
        )
    }
}
export default BlogPost;