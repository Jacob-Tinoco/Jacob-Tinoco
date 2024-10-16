import Header from '../components/Header.js';
import Hero from '../components/Hero.js';
import Footer from '../components/Footer.js';

document.addEventListener('DOMContentLoaded', () => {
    new Header().render('#main-header');
    new Hero().render('#hero');
    new Footer().render('#main-footer');
});
