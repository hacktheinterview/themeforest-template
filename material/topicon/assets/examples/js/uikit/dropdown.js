/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
(function(document, window, $) {
  'use strict';

  var Site = window.Site;

  $(document).ready(function($) {
    Site.run();

    Waves.attach('.dropdown-menu:not([class*="dropdown-menu-"]) li a', ['waves-classic']);
    Waves.attach('[class*="dropdown-menu-"]:not(.dropdown-menu-right):not(.dropdown-menu-left) li a', ['waves-light']);
    Waves.attach('.dropdown-menu-right li a', ['waves-classic']);
    Waves.attach('.dropdown-menu-left li a', ['waves-classic']);
  });

  $(".example-dropdown-js select").dropdown();

})(document, window, jQuery);
