/*!
* Fader.js 0.2.1
*
* Copyright 2012, Lukas Alexandre
* Licensed under MIT
*/

if (typeof window === "undefined" || window === null) {
  window = { Fader: {} };
}
if (typeof Fader === "undefined" || Fader === null) {
  Fader = {};
}
if (window.Fader == null) {
  window.Fader = {};
}

(function(w, d){

    Fader.fadeOutWithId = function(id, time) {
      fadeWithId(id, time, 100, 0);
    };
    
    Fader.fadeInWithId = function(id, time) {
      fadeWithId(id, time, 0, 100);
    };
    
    Fader.fadeOutWithClass = function(className, index, time) {
      fadeWithClass(className, index, time, 100, 0);
    };
    
    Fader.fadeInWithClass = function(className, index, time) {
      fadeWithClass(className, index, time, 0, 100);
    };
    
    Fader.fadeOutElement = function(elem, time) {
      fadeElement(elem, time, 100, 0);
    };
    
    Fader.fadeInElement = function(elem, time) {
      fadeElement(elem, time, 0, 100);
    };
    
    Fader.fadeOutWithSelector = function(selector, time) {
      fadeCss(selector, time, 100, 0);
    };
    
    Fader.fadeInWithSelector = function(selector, time) {
      fadeCss(selector, time, 0, 100);
    };
    
    /*
    Private functions
    */
    
    fadeCss = function(selector, time, ini, fin) {
      var target = document.querySelectorAll(selector);
      for (var i in target){ //handle all the elements
        executeFade(i, time, ini, fin);
      }
    };    
    
    fadeWithId = function(id, time, ini, fin) {
      var target = document.getElementById(id);
      executeFade(target, time, ini, fin);
    };
    
    fadeWithClass = function(className, index, time, ini, fin) {
      var target = document.getElementsByClassName(className)[index];
      executeFade(target, time, ini, fin);
    };
    
    fadeElement = function(elem, time, ini, fin) {
      executeFade(elem, time, ini, fin);
    };
    
    executeFade = function(target, time, ini, fin) {
      var alpha = ini;
      var inc;
      if (fin >= ini) {
          inc = 2;
      } else {
          inc = -2;
      }
      var timer = (time * 1000) / 50;
      var i = setInterval(
        function() {
          if ((inc > 0 && alpha >= fin) || (inc < 0 && alpha <= fin)) {
            clearInterval(i);
          }
          Fader.setAlpha(target, alpha);
          alpha += inc;
        }, timer
      );
    };
    
    setAlpha = function(target, alpha) {
      target.style.filter = "alpha(opacity="+ alpha +")";
      target.style.opacity = alpha/100;
    }
  };
}(window, document));
