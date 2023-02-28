import { logout } from '../api/user.js';
import { html, render, page } from '../lib.js'
import { getUserData } from '../util.js';


const nav = document.querySelector('nav');
//show nav bar depending on the user status 
const navTemplate = (hasUser) => html`         
<img src="./images/headphones.png">             
<a href="/">Home</a>
<ul>
    <li><a href="/catalog">Catalog</a></li>
    <li><a href="/search">Search</a></li>
    ${hasUser ? html`
    <li><a href="/create">Create Album</a></li>
    <li><a @click=${onLogout} href="javascript:void(0)">Logout</a></li>` : html`
    <li><a href="/login">Login</a></li>
    <li><a href="/register">Register</a></li>
    `}
</ul>
`
export function updateNav() {           //get all user data from getUserData()
    const user = getUserData()          // show specific nav bar depending on user status (true or false)
    render(navTemplate(user), nav)
}


function onLogout() {
    logout();
    updateNav();
    page.redirect('/')
}

