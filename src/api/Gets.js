import {PATH} from "../utils/consts";


export function GetPosts(page, string){
    
    const url = `${PATH}/obtenerPosts?page=${page}&search=${string}`;

    return fetch(url).then(response => {
        return response.json();
    }).then(result => {
        return result;
    }).catch(err => {
        return err;
    });

}

export function GetAlbums(page, string){

    const url = `${PATH}/obtenerAlbums?page=${page}&search=${string}`;

    return fetch(url).then(response => {
        return response.json();
    }).then(result => {
        return result;
    }).catch(err => {
        return err;
    });

}


export function GetLastPosts(){
    
    const url = `${PATH}/obtenerUltimosPosts`;

    return fetch(url).then(response => {
        return response.json();
    }).then(result => {
        return result;
    }).catch(err => {
        return err;
    });

}

export function GetLastAlbums(){
    
    const url = `${PATH}/obtenerUltimosAlbums`;

    return fetch(url).then(response => {
        return response.json();
    }).then(result => {
        return result;
    }).catch(err => {
        return err;
    });

}