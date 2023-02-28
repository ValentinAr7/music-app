import { del, get, post, put} from "./api.js";

const endpoints = {
    'albums' : '/data/albums',
    'getAllAlbums' : '/data/albums?sortBy=_createdOn%20desc&distinct=name',
    'singleAlbum': '/data/albums'
}

export async function createAlbum(data){            //checked
        return post(endpoints.albums, data);
}

export async function getAllAlbums(){           //checked
    return get(endpoints.getAllAlbums);
}

export async function getDetailsById(id){       //checked
    return get(endpoints.albums + '/' + id);
}

export async function deleteAlbumById(id){
    return del(endpoints.singleAlbum + id);
}