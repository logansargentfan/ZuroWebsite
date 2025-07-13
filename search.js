document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById('search-input');
  const carItems = document.querySelectorAll('.car-item');

  console.log(carData); // You can now loop through it

  console.log("search.js loaded!");

  searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase();

    carItems.forEach((item) => {
      const description = item.querySelector('.description').textContent.toLowerCase();
      const words = description.split(' ');

      if (words.length < 3) {
        // fallback
        if (description.includes(query)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
        return;
      }

      const brand = words[1];
      const model = words.slice(2).join(' ');

      if (brand.includes(query) || model.includes(query)) {
        item.style.display = ''; // use empty string to revert to original display style (probably flex or grid item)
      } else {
        item.style.display = 'none';
      }
    });
  });
});
