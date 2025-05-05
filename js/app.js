const menu = document.querySelector('.links-container');
const navButtons = document.querySelectorAll('a');
const liNavButtons = document.querySelectorAll('.navbar-link');
const openMenuBtn = document.querySelector('.button-menu');
const closeMenuBtn = document.querySelector('.show-menu');
const carouselImages = document.querySelectorAll('.images-column');
const navbar = document.querySelector('.navbar');
const groupProducts1 = document.getElementById('firstProduct')
const groupProducts2 = document.getElementById('secondProduct')
const carouselProducts1 = groupProducts1.querySelectorAll(':scope > .product');
const carouselProducts2 = groupProducts2.querySelectorAll(':scope > .product');

function isMenuOpened(classList) {
  const result = false;
  for (var i = 0; i < Array.length; i++) {
    if (classList[i] === 'menu-opened') {
      result = true;
    }
  }
  return result;
}

function openMenu() {
  // const isMenuOpenedconst = isMenuOpened(menu.classList);

  if (menu.classList.contains('menu-opened')) {
    menu.classList.remove('menu-opened');
    navbar.classList.remove('normal-navbar-color');
    menu.classList.remove('normal-navbar-color');
    menu.classList.remove('showMenu');
    menu.classList.toggle('closeMenu');
  } else {
    menu.classList.remove('closeMenu');
    menu.classList.toggle('showMenu');
    menu.classList.toggle('normal-navbar-color');
    navbar.classList.toggle('normal-navbar-color');
    menu.classList.toggle('menu-opened');
  }
}

function sendMail() {
  var link = "https://mail.google.com/mail/?view=cm&fs=1&to=fundauto_jabonero@hotmail.com"
    + "&su=Confirmación asisitencia " + document.getElementById('name').value
    + "&body=" + document.getElementById('comments').value;
    
    window.location.href = link;
}

function openGmail() {
  var name = document.getElementById('name').value;
  var comments = document.getElementById('comments').value;

  window.location.href = "mailto:fundauto_jabonero@hotmail.com&subject=Confirmación asisitencia " + name + "&body=" + comments;
}

openMenuBtn.addEventListener('click', openMenu)

for (var button of liNavButtons) {
  button.addEventListener('click', () => {
    openMenu();
    // for (var li of liNavButtons) {
    //     li.classList.remove("item-selected")
    // }
    // button.classList.add("item-selected");
    // button.classList.remove("item-selected");
  })
}

function changeImage(imageList, isSignailgRoadSection) {
  let i = 0;
  const window = screen.width;
  if ((window < 820 && isSignailgRoadSection) || !isSignailgRoadSection) {
    setInterval(() => {
      if (i === 0) {
        imageList[imageList.length - 1].classList.add('image-hided');
        imageList[imageList.length - 1].classList.remove('image-showed');
      } else {
        imageList[i - 1].classList.add('image-hided');
        imageList[i-1].classList.remove('image-showed');
      }

      imageList[i].classList.remove('image-hided');
      imageList[i].classList.add('image-showed');

      if (i === imageList.length - 1) {
        i = 0;
      } else {
        i++;
      }
    }, 3000)
  } else {

    imageList[0].classList.add('image-showed');
    imageList[1].classList.add('image-showed');
    imageList[2].classList.add('image-showed');
    imageList[0].classList.remove('image-hided');
    imageList[1].classList.remove('image-hided');
    imageList[2].classList.remove('image-hided');
  }
    
}

changeImage(carouselImages, true);
changeImage(carouselProducts1, false);
changeImage(carouselProducts2, false);

