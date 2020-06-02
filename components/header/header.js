import { createMarkup } from '../pages/games.js';
import { games, programs } from '../../data.js';
import { addProduct } from '../cart/cart.js';
import { openCart } from '../modal/modal.js'


const header = () => {
    const navigationList =  <ul class="navigationList">
    <li class="navLink"><a href="#" class="activeLink" data-page="BEST SELLERS">CUPCAKES</a></li>
    <li class="navLink"><a href="#" data-page="SWEETS">COOKIES</a></li>
    <li class="navLink"><a href="#" data-page="NEWS">BEST SELLERS</a></li>
  </ul>
    const listItems = document.querySelector('.listItems'); //ul
    const user = document.querySelector('.user');

    const headerCart = document.querySelector('.modalCart');
    headerCart.addEventListener('click', openCart);

    const currentActivePage = document.querySelector('.activeLink'); //a
    const currentPageName = document.querySelector('.currentPageName'); //p

    listItems.innerHTML = createMarkup(games);


    const setActiveLink = (event) => {
        if (event.target === event.currentTarget) {
            return
        }
        const currentActiveLink = document.querySelector('.activeLink');
        currentActiveLink && currentActiveLink.classList.remove('activeLink');
        event.target.classList.add('activeLink');

        switch (event.target.dataset.page) {
            case 'games':
                listItems.innerHTML = createMarkup(games);
                break;
            case 'programs':
                listItems.innerHTML = createMarkup(programs)
                break;
            case 'news':
                listItems.innerHTML = createMarkup(programs)
                break;
            default:
                break;
        }
    }

    const setUser = (event) => {
        event.currentTarget.classList.toggle('activeUser');
    }

    const addToCart = (event) => {
        if (event.target.dataset.image) {
            const category = event.target.dataset.category;
            const id = event.target.dataset.id;
            if (category === "games") {
                for (const item of games) {
                    if (item.id === id) {
                        addProduct(item);
                    }
                }
            }
            if (category === "programs") {
                for (const item of programs) {
                    if (item.id === id) {
                        addProduct(item);
                    }
                }
            }
        } else return
    }

    navigationList.addEventListener('click', setActiveLink); //ul 
    user.addEventListener('click', setUser);

    listItems.addEventListener('click', addToCart);

}

export default header;


















// const navigationList = document.querySelector('.navigationList');
// // console.log(navigationList);

// // ============= styled elements ===================

// // navigationList.style.backgroundColor = 'green';
// // navigationList.classList.add('backgroundStyle');
// // navigationList.classList.remove('backgroundStyle');
// // navigationList.classList.toggle('navigationList');

// // const stylesToggle = document.querySelector('.stylesToggle');
// // stylesToggle.addEventListener('click', () => navigationList.classList.toggle('navigationList'))

