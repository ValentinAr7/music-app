import { getDetailsById } from "../api/data.js";
import { html, nothing } from "../lib.js";


const detailsTem = (album, isOwner) => html`
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src=${album.imgUrl}>
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${album.name}</h1>
                <h3>Artist: ${album.artist}</h3>
                <h4>Genre: ${album.genre}</h4>
                <h4>Price: $${album.price}</h4>
                <h4>Date: ${album.releaseDate}</h4>
                <p>Description ${album.description}</p>
            </div>

            ${
                isOwner ?
                html`
                <div class="actionBtn">
                <a href="/edit/${album._id}" class="edit">Edit</a>
                <a href="#" class="remove">Delete</a>
                </div>
                ` : nothing
            }`

            export async function showDetails(ctx){
                const id = ctx.params.id
                const album = await getDetailsById(id) 
                const isOwner = album._ownerId === ctx.user._id
                ctx.render(detailsTem(album, isOwner))
            }

