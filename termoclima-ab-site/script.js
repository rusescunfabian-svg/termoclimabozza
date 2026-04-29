(function () {
  var STORAGE_KEY = "termoclima_cookie_ok";

  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    function setOpen(open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    }

    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("is-open"));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });
  }

  var bar = document.getElementById("cookie-bar");
  var accept = document.getElementById("cookie-accept");
  if (bar && accept) {
    function hideBanner() {
      bar.hidden = true;
      document.body.classList.remove("has-cookie-banner");
    }

    if (window.localStorage.getItem(STORAGE_KEY) === "1") {
      hideBanner();
    } else {
      bar.hidden = false;
      document.body.classList.add("has-cookie-banner");
    }

    accept.addEventListener("click", function () {
      try {
        window.localStorage.setItem(STORAGE_KEY, "1");
      } catch (e) {}
      hideBanner();
    });
  }
})();
