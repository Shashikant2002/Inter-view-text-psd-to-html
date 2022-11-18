AOS.init();

const open_close_bar = () => {
  const bars = document.getElementById("bars");
  const navbar = document.getElementById("nav_bar");
  bars.classList.toggle("clicked");
  navbar.classList.toggle("show_nav");
};

var a = 0;
$(window).scroll(function () {
  var oTop = $("#counter-box").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".counter").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-number");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 850,
          easing: "swing",
          step: function () {
            $this.text(Math.ceil(this.countNum).toLocaleString("en"));
          },
          complete: function () {
            $this.text(Math.ceil(this.countNum).toLocaleString("en"));
          },
        }
      );
    });
    a = 1;
  }
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
