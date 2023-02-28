import { searchAlbum } from "../api/data.js";
import { html, nothing } from "../lib.js";

const searchTem = (isClicked, handler, albums) => html`
<section id="searchPage">
<h1>Search by Name</h1>

<div class="search">
    <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
    <button @click=${handler} class="button-list">Search</button>
</div>

<h2>Results:</h2>
${isClicked ?

        albums.length > 0 ?

            html`
        <div class="search-result">
    ${albums.map(album => createCard(album))}
        </div>
            `:
            html` <p class="no-result">No result.</p>`
        : nothing
    }
        </div>
        </section>`

const createCard = (album) => html`
<div class="card-box">
    <img src="./images/BrandiCarlile.png">
    <div>
        <div class="text-center">
            <p class="name">Name: In These Silent Days</p>
            <p class="artist">Artist: Brandi Carlile</p>
            <p class="genre">Genre: Low Country Sound Music</p>
            <p class="price">Price: $12.80</p>
            <p class="date">Release Date: October 1, 2021</p>
        </div>
        <div class="btn-group">
            <a href="#" id="details">Details</a>
        </div>
    </div>`


export async function showSearch(ctx) {
    ctx.render(searchTem(false, onSearch))
    async function onSearch(e) {
        const searchInput = document.getElementById('search-input');
        const query = searchInput.value;
        if (!query) {
            return alert('enter text')
        }
        const albums = await searchAlbum(query)
        ctx.render(searchTem(true, onSearch, albums))
    }
}