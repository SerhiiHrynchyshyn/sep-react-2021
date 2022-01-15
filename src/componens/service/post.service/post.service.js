import {axiosService} from "../axios.service";
import {urls} from "../../../config/urls";

export const postService = {
    getAll: (id) => axiosService.get(`${urls.posts}?userId=${id}`).then(value => value.data)
}