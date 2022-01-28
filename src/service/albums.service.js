import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const AlbumsService = {
    getAllAlbums: (id) => axiosService.get(`${urls.users}/${id}/albums`).then(value => value.data),
    getAlbumsPhotos: (id) => axiosService.get(`${urls.albums}/${id}/photos`).then(value => value.data)
}