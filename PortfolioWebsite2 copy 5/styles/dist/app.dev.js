"use strict";

var sections = document.querySelectorAll('.section');
var sectBtns = document.querySelectorAll('.controls');
var sectBtn = document.querySelectorAll('.contro1');
var allSections = document.querySelector('.main-content');

function PageTransitions() {
  //Button click active class
  for (var i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function () {
      var currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.className += ' active-btn';
    });
  } //Sections Active class


  allSections.addEventListener('click', function (e) {
    var id = e.target.dataset.id;

    if (id) {
      //remove selected from the other button
      sectBtns.forEach(function (btn) {
        btn.classList.remove('active');
      });
      e.target.classList.add('active'); //hide other sections

      sections.forEach(function (section) {
        section.classList.remove('active');
      });
      var element = document.getElementById(id);
      element.classList.add('active');
    }
  }); //Toggle Theme

  var themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click', function () {
    var element = document.body;
    element.classList.toggle('light-mode');
  });
}

PageTransitions();