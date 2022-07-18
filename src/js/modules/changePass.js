function toggleChangePass() {
  let form = document.querySelector('.userData');
  let link = document.querySelector('.changePass');
  link.addEventListener('click', function(e) {
    e.preventDefault();
    form.style.display = "none";
    document.querySelector('[data-form="change-pass"]').style.display= "flex";
  })
};

if(body.classList.contains('profil')) {
  toggleChangePass();
}
