const el = document.getElementById('overlayBtn');
if (el) {
  el.addEventListener('click', swapper, false);
}


document.getElementById('demosMenu').addEventListener('change', function(e){
    var dropdown = document.getElementById('demosMenu');
    window.location.href = dropdown.options[dropdown.selectedIndex].getAttribute('id') + '.html';
});