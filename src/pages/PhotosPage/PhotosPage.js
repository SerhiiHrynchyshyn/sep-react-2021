import React, {useEffect, useState} from 'react';
import {AlbumsService} from "../../service/albums.service";
import {useLocation, useParams} from "react-router-dom";

const PhotosPage = () => {
    const [photos, setPhotos] = useState([]);
    const {state} = useLocation();
    const albumId = state.id;

    useEffect(() => {
        AlbumsService.getAlbumsPhotos(albumId).then(value => setPhotos([...value]))
    }, [albumId])

    return (
        <div>
            {photos.map(photo =>
                <div key={photo.id}>
                    <div>{photo.albumId}</div>
                    <div>{photo.id}</div>
                    <div>{photo.title}</div>
                    <img src={photo.url} alt="photo"/>
                </div>
            )}
        </div>
    );
};

export {PhotosPage};