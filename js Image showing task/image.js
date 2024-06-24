document.addEventListener('DOMContentLoaded', () => {
  let images = document.querySelectorAll('body img');

  images.forEach(image => {
      image.addEventListener('click', (event) => {
          let imgSrc = event.target.src;
          document.body.style.backgroundImage = `url(${imgSrc})`;

          if (event.target.id === 'image1') {
              document.body.style.backgroundImage = `url(${imgSrc})`;
          }
          if (event.target.id === 'image2') {
              document.body.style.backgroundImage = `url(${imgSrc})`;
          }
          if (event.target.id === 'image3') {
              document.body.style.backgroundImage = `url(${imgSrc})`;
          }
          if (event.target.id === 'image4') {
              document.body.style.backgroundImage = `url(${imgSrc})`;
          }
      });
  });
});

