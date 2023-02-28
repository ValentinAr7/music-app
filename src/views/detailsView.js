import { deleteAlbumById, getDetailsById } from "../api/data.js";
import { html, nothing } from "../lib.js";


const detailsTem = (album, isOwner, onDelete) => html`
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

            ${isOwner ?
        html`
                <div class="actionBtn">
                <a href="/edit/${album._id}" class="edit">Edit</a>
                <a @click=${onDelete}href="javascript:void(0)" class="remove">Delete</a>
                </div>
                ` : nothing
    }
            </div>
            </div>
        </section>
            `

export async function showDetails(ctx) {             //checked
    const id = ctx.params.id
    const album = await getDetailsById(id)
    const isOwner = album._ownerId === ctx.user._id
    ctx.render(detailsTem(album, isOwner, onDelete))

    async function onDelete(){
        const userConfirm = confirm('Are you sure?')
        if(!userConfirm){
            return
        }
        await deleteAlbumById(id) 
        ctx.page.redirect('/catalog')
    }
}

