 // uzb cuisine color
const colorH = document.getElementsByClassName('head');
for (let i = 0; i < colorH.length; i++) {
    colorH[i].style.color = 'red';
}

/// if color
 const colorHeader = document.getElementById('if');
 colorHeader.style.color = 'lime';

 
// menu bar
const topMenuEl = document.getElementById('top-menu')

topMenuEl.style.height = '100%';
topMenuEl.style.background = 'yellow';
topMenuEl.style.border = 'solid red';
topMenuEl.style.margin = '1em';
topMenuEl.style.fontSize = '24px';
 

const menuLinks = [
    {text: 'Home', href: '/index.html'},
    {text: 'Menu', href: '/menu.html'},
    {text: 'Recepies', href: '/recepies.html'},
    {text: 'About', href: '/about.html'}
];


menuLinks.forEach(link => {
    const anchor = document.createElement('a');
    anchor.setAttribute('href', link.href);
    anchor.textContent = link.text;
    topMenuEl.appendChild(anchor);

})