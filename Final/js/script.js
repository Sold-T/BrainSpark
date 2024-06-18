let mainImage = document.querySelector('.gallery-active');
let previews = document.querySelectorAll('.gallery-list li a');

for (let activeImage of previews)
  activeImage.addEventListener('click', (evt) => {
      evt.preventDefault();
      mainImage.src = activeImage.href;
  
      let currentActive = document.querySelector('.gallery-container .active-item');
      currentActive.classList.remove('active-item');
      activeImage.classList.add('active-item');
  });

document.querySelector('.read-more-btn').addEventListener('click', function() {
  document.querySelector('.additional-text').style.display = 'block';
  this.style.display = 'none';
});

document.querySelector('.read-more-btn2').addEventListener('click', function() {
  document.querySelector('.additional-text2').style.display = 'block';
  this.style.display = 'none';
});

