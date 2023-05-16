const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.toolbar-icon');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

const open1 = document.getElementById('seeproject1');
const open2 = document.getElementById('seeproject2');
const open3 = document.getElementById('seeproject3');
const open4 = document.getElementById('seeproject4');
const open5 = document.getElementById('seeproject5');
const open6 = document.getElementById('seeproject6');
const body = document.querySelector('body');

const data = [{
  name: 'Keeping track of hundreds of components',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum consequatur quae recusandae harum minus illum nisi reprehenderit maxime, modi, quam, nulla cumque! Incidunt, impedit doloribus?  a debitis quidem earum eum quibusdam quia, possimus soluta maiores eveniet quod et officia? Iusto minus provident veniam.',
  featuredImage: 'images/Snapshoot Portfolio.svg',
  // technologies :
  linkLiveVersion: 'https://k0ppai.github.io/',
  linkSource: 'https://github.com/K0ppai/portfolio-setup-mobile-1',
},

];
open1.addEventListener('click', () => {
  const html = document.createElement('div');
  html.innerHTML = `
  <div class="see-project-container active">
        <div class="close-container">
          <button type="button" class="close-button">&times;</button>
        </div>
        <img src="${data[0].featuredImage}" id="project-img">
        <div class="project-title-container">
          <h2>${data[0].name}</h2>
          <div class="see-live-container">
            <a href="${data[0].linkLiveVersion}">See live</a>
            <a href="${data[0].linkLiveVersion}"><img src="images/See-live.svg"></a>
          </div>
          <div class="see-source-container">
            <a href="${data[0].linkSource}">See source</a>
            <a href="${data[0].linkSource}"><img src="images/github-white.svg"></a>
          </div>
        </div>
        <ul class="project-tech">
          <li>Codekit</li>
          <li>GitHub</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
          <li>Terminal</li>
          <li>Codepen</li>
        </ul>
        <p class="project-desc">${data[0].description}</p>
      </div>
      <div class="overlay active"></div>
  `;
  body.appendChild(html);
  const closebtn = document.querySelector('.close-button');
  closebtn.addEventListener('click', () => {
    body.removeChild(html);
  });
});

