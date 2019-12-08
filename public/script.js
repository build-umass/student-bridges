let x = window.matchMedia("(max-width: 992px)");
loadNav(x);
x.addListener(loadNav);

$(function(){
    $("#footer").load("footer.html");
});

function loadNav(x) {
    if (x.matches) { 
        $(function(){
            $("#navbar").load("mobilenavbar.html");
        });
    } else {
        $(function(){
            $("#navbar").load("navbar.html");
        });
    }
  }