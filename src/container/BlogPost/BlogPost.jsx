import React, { Component } from "react";
import API from "../../services";
import './BlogPost.css';
import Post from "./Post";

class BlogPost extends Component {
    state = {
        listArtikel: [],
        insertArtikel: {
            userId: 1,
            id: 1,
            title: "",
            body: ""
        }
    }

    ambilDataDariServerAPI = () => {
        API.getNewsBlog().then(result => {
            this.setState({
                listArtikel:result
            })
        })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusArtikel = (data) => {
        fetch(`http://localhost:3001/posts/${data}`, { method: 'DELETE' })
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahArtikel = (event) => {
        let formInsertArtikel = {...this.state.insertArtikel};
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState({
            insertArtikel:formInsertArtikel
        })
    }

    handleTombolSimpan = () => {
        fetch(`http://localhost:3001/posts`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertArtikel)
        })
        .then( (response) => {
            this.ambilDataDariServerAPI();
        });
    }



    render() {
        return (
            <div className="post-artikel">
                <div className="form pb-2 border-bottpm">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" onChange={this.handleTambahArtikel}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col col-form-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="body" onChange={this.handleTambahArtikel}></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => {
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel} />
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