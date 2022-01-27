import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const postsService = {
    getAll: () => axiosService.get(urls.posts).then(value => value.data),
    getPostId: (id) => axiosService.get(`${urls.posts}/${id}`).then(value => value.data),
    getCommentsOfPosts: (id) => axiosService.get(`${urls.posts}/${id}/comments`).then(value => value.data)

}