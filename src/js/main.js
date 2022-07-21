document.addEventListener('DOMContentLoaded', function() {
  let body = document.querySelector('body');
  @@include('modules/svg.js');
  @@include('modules/polyfills.js');
  @@include('modules/load-page.js');
  @@include('modules/menu.js');
  @@include('modules/main-slider.js');
  @@include('modules/reviews.js');
  @@include('modules/compatibility.js');
  @@include('modules/premium-form-list.js');
  @@include('modules/select.js');
  @@include('modules/compatibility-result.js');
  @@include('modules/tabs.js');
  @@include('modules/changePass.js');
  @@include('modules/background-animate.js');
});
