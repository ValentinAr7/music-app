import { html } from "../lib.js";
import { getAllAlbums } from "../api/data.js";

const cardTemplate  =  () => html ``

const catalogTemplate = (albums) => html `        
<section id="catalogPage">
<h1>All Albums</h1>

${albums.length > 0 ? 
    albums.map(album => cardTemplate(album)) :
html `<p>No Albums in Catalog!</p>`
}
<section>
`

export async function showCatalog(ctx){
    const allAlbums = await getAllAlbums();    //frrom data.js
    ctx.render(catalogTemplate(allAlbums));
}