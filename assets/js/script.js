function Menu(e) {
  let list = document.querySelector('ul');

  e.name === 'menu' ? (e.name = "close", list.classList.add('top-[100%]'), list.classList.add('opacity-100')):(e.name = "menu",list.classList.remove('top-[100%]'), list.classList.remove('opacity-100'))
  // e.name === 'menu' ? (e.name = "close", list.classList.add('top-[100%]')):(e.name = "menu",list.classList.remove('top-[100%]'))
}