function $(id) {
  return typeof id === 'string' ? document.getElementById(id) : id;
}

function tabHandle() {
  var navs = $('nav-tab').getElementsByTagName('li');
  var divs = $('content').getElementsByTagName('div');
  if (navs.length != divs.length) {
    // alert('the navigation not equals content');
    return;
  }

  for (var k = 1; k < navs.length; k++) {
    divs[k].style.display = 'none';
    navs[k].className = 'navs-tab-normal';
  }

  for (var i = 0; i < navs.length; i++) {
    navs[i].title = i;
    navs[i].onclick = function() {
      for (var j = 0; j < navs.length; j++) {
        divs[j].style.display = 'none';
        navs[j].getElementsByTagName('a')[0].className = 'nav-tab-normal';
      }

      divs[this.title].style.display = 'block';
        navs[this.title].getElementsByTagName('a')[0].className = 'nav-tab-selected';
        $('#nav-tab')
    }
  }
}

function introListClick() {
  $('band-intro').onclick = function() {
    window.open('html/band-intro.html', '_self');
  }

  $('band-install').onclick = function() {
    window.open('html/band-install.html', '_self');
  }

  $('band-charge').onclick = function() {
    window.open('html/band-charge.html', '_self');
  }

  $('band-on-off').onclick = function() {
    window.open('html/band-on-off.html', '_self');
  }

  $('install-app').onclick = function() {
    window.open('html/install-app.html', '_self');
  }


}

function questtionListClick() {

}

function init() {
  window.onload = function() {
    tabHandle();
    introListClick();
  }
}

init();
