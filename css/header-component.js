export default class Header {
    constructor() {
        this.menuItems = [
            { text: 'PROYECTOS', href: '#proyectos' },
            { text: 'TRAYECTORIA', href: '#trayectoria' },
            { text: 'SOBRE MI', href: '#sobre-mi' },
            { text: 'CONTACTOS', href: '#contactos' }
        ];
    }

    render(selector) {
        const header = document.querySelector(selector);
        header.innerHTML = `
            <nav>
                <ul>
                    ${this.menuItems.map(item => `
                        <li><a href="${item.href}">${item.text}</a></li>
                    `).join('')}
                </ul>
            </nav>
            <h1>JACOB TINOCO</h1>
        `;
    }
}
