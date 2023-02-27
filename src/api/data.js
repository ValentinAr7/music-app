import { del, get, post, put} from "./api.js";

const endpoints = {
    'albums' : '/data/albums',
    'getAllAlbums' : '/data/albums?sortBy=_createdOn%20desc&distinct=name'
}

export async function createAlbum(data){
        return post(endpoints.albums, data)
}

export async function getAllAlbums(){
    return get(endpoints.getAllAlbums)
}