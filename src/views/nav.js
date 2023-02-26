import { logout } from '../api/user.js';
import { html, render, page } from '../lib.js'
import { getUserData } from '../util.js';
const nav = document.querySelector('nav');




//show nav bar depending on the user status 
const navTemplate = (hasUser) => html`         
<img src="./images/headphones.png">             
<a href="#">Home</a>
<ul>
    <li><a href="#">Catalog</a></li>
    <li><a href="#">Search</a></li>
    ${hasUser ? html`
    <li><a href="#">Create Album</a></li>
    <li><a href="#">Logout</a></li>` : html`
    <li><a href="#">Login</a></li>
    <li><a href="#">Register</a></li>
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

