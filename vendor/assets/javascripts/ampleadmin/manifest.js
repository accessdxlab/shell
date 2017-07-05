//= require ./jquery/dist/jquery.min
//= require_tree ./bootstrap/dist/js
//= require ./sidebar-nav/dist/sidebar-nav
//= require ./jquery.slimscroll
//= require ./waves
//= require ./waypoints/lib/jquery.waypoints
//= require ./counterup/jquery.counterup.min
//= require ./raphael/raphael-min
//= require ./morrisjs/morris
//= require ./chartist-js/dist/chartist.min
//= require ./chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.min
//= require ./moment/moment
//= require ./calendar/dist/fullcalendar.min
//= require ./calendar/dist/cal-init
//= require ./custom.min
//= require ./cbpFWTabs
(function() {
    [].slice.call(document.querySelectorAll('.sttabs')).forEach(function(el) {
        new CBPFWTabs(el);
    });
})();
//= require ./toast-master/js/jquery.toast
//= require ./styleswitcher/jQuery.style.switcher
//= require ./dashboard1
