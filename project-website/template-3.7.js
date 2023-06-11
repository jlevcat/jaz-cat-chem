// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Get the search form and input elements
  var searchForm = document.querySelector(".search-container form");
  var searchInput = searchForm.querySelector("input[name=search]");

  // Add event listener to the search form
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the search query
    var query = searchInput.value.trim();

    // Perform the search
    if (query !== "") {
      // Redirect to the search page with the query parameter
      window.location.href = "/search.html?query=" + encodeURIComponent(query);
    }
  });
});

window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  if (window.scrollY >= 1800) {
    navbar.style.opacity = "0";
    navbar.style.pointerEvents = "none";
  } else {
    navbar.style.opacity = "1";
    navbar.style.pointerEvents = "auto";
  }
});

