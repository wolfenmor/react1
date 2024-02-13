import React, {useEffect, useState} from 'react';
import {apiService} from "../services/apiService";
import {albumsService} from "../services/albumsService";
import Todo from "../TodosContainer/Todo";
import Album from "./Album";

const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(()=> {
        albumsService.getAll().then(({data}) => setAlbums(data))
    },[]);
    return (
        <div>
            {albums.map(album=> <Album key={album.id} album={album}/>)}
        </div>
    );
};

export default Albums;