import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

const commentsService = {
    getAll: () => axiosService.get(urls.comments).then(value => value.data),
    getPostId: (id) => axiosService.get(`${urls.comments}?postId=${id}`).then(value => value.data)
}