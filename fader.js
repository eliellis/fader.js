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
      this.fadeWithId(id, time, 100, 0);
    };
    
    Fader.fadeInWithId = function(id, time) {
      this.fadeWithId(id, time, 0, 100);
    };
    
    Fader.fadeOutWithClass = function(className, index, time) {
      this.fadeWithClass(className, index, time, 100, 0);
    };
    
    Fader.fadeInWithClass = function(className, index, time) {
      this.fadeWithClass(className, index, time, 0, 100);
    };
    
    Fader.fadeOutElement = function(elem, time) {
      this.fadeElement(elem, time, 100, 0);
    };
    
    Fader.fadeInElement = function(elem, time) {
      this.fadeElement(elem, time, 0, 100);
    };
    
    Fader.fadeOutWithSelector = function(selector, time) {
      this.fadeCss(selector, time, 100, 0);
    };
    
    Fader.fadeInWithSelector = function(selector, time) {
      this.fadeCss(selector, time, 0, 100);
    };
    
    /*
    Private functions
    */
    this = {};
    
    this.fadeCss = function(selector, time, ini, fin) {
      var target = document.querySelectorAll(selector);
      for (var i in target){ //handle all the elements
        thisexecuteFade(i, time, ini, fin);
      }
    };    
    
    this.fadeWithId = function(id, time, ini, fin) {
      var target = document.getElementById(id);
      this.executeFade(target, time, ini, fin);
    };
    
    this.fadeWithClass = function(className, index, time, ini, fin) {
      var target = document.getElementsByClassName(className)[index];
      this.executeFade(target, time, ini, fin);
    };
    
    this.fadeElement = function(elem, time, ini, fin) {
      this.executeFade(elem, time, ini, fin);
    };
    
    this.executeFade = function(target, time, ini, fin) {
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
          this.setAlpha(target, alpha);
          alpha += inc;
        }, timer
      );
    };
    
    this.setAlpha = function(target, alpha) {
      target.style.filter = "alpha(opacity="+ alpha +")";
      target.style.opacity = alpha/100
    };
  
}(window, document));
