document.addEventListener("DOMContentLoaded", function () {
  const bar = document.getElementById("bar");
  const closeBtn = document.getElementById("close");
  const navbar = document.getElementById("navbar");

  if (bar) {
    bar.addEventListener("click", () => {
      navbar.classList.add("active");
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      navbar.classList.remove("active");
    });
  }
});

// single product
var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function () {
  MainImg.src = smallimg[0].src;
};
smallimg[1].onclick = function () {
  MainImg.src = smallimg[1].src;
};
smallimg[2].onclick = function () {
  MainImg.src = smallimg[2].src;
};
smallimg[3].onclick = function () {
  MainImg.src = smallimg[3].src;
};
