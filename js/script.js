const open_close_bar = () => {
  const bars = document.getElementById("bars");
  const navbar = document.getElementById('nav_bar');
  bars.classList.toggle("clicked");
  navbar.classList.toggle("show_nav");
};
