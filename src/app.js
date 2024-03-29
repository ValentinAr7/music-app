// import * as api from './api/user.js'        //import *all items 
// window.api = api      //assign the imported module object to the global object

import { page, render, nothing } from './lib.js'
import { getUserData } from './util.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { updateNav } from './views/nav.js';
import { showRegister } from './views/register.js';
import { showSearch } from './views/search.js';

const main = document.getElementById('main-content')     //content needs to get to all views
// document.getElementById('logoutBtn').addEventListener('click', onLogout)

page(decorateContext);
page('/', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/catalog', showCatalog);
page('/detail/:id', showDetails);
page('/edit/:id', showEdit);
page('/create', showCreate);
page('/search', showSearch);


updateNav()
page.start()

function decorateContext(ctx, next){     //every time the user navigates page.js will run this function before every view
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    const user = getUserData()  //check if the IDs if the user match
    if(user){
        ctx.user = user
    }


    next()          //continue in case of async func
}

function renderMain(content){           //renders the content into const main
    render(content, main)
}


