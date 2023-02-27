import { del, get, post, put} from "./api.js";

const endpoints = {
    'albums' : '/data/albums'
}

export async function createAlbum(data){
        return post(endpoints.albums, data)
}