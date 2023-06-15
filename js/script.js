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

const body = document.querySelector('body');
const btn = document.querySelectorAll('.seeproject');
const data = [{
  name: 'Keeping track of hundreds of components',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum consequatur quae recusandae harum minus illum nisi reprehenderit maxime, modi, quam, nulla cumque! Incidunt, impedit doloribus?  a debitis quidem earum eum quibusdam quia, possimus soluta maiores eveniet quod et officia? Iusto minus provident veniam.',
  desktopImg: 'images/Snapshoot Portfolio.svg',
  mobileImg: '',
  displayImg: '',
  firstlineTitle: 'Multi-Post Stories',
  secondlineTitle: 'Gain+Glory',
  languages: ['Bootstrap','CSS', 'JavaScript', 'HTML'],
  technologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  linkLiveVersion: 'https://k0ppai.github.io/',
  linkSource: 'https://github.com/K0ppai/portfolio-setup-mobile-1',
},
{
  name: 'Project2',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum consequatur quae recusandae harum minus illum nisi reprehenderit maxime, modi, quam, nulla cumque! Incidunt, impedit doloribus?  a debitis quidem earum eum quibusdam quia, possimus soluta maiores eveniet quod et officia? Iusto minus provident veniam.',
  desktopImg: 'images/Snapshoot Portfolio.svg',
  mobileImg: '',
  displayImg: '',
  firstlineTitle: 'Multi-Post Stories',
  secondlineTitle: 'Gain+Glory',
  languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
  technologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  linkLiveVersion: 'https://k0ppai.github.io/',
  linkSource: 'https://github.com/K0ppai/portfolio-setup-mobile-1',
},
{
  name: 'project3',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum consequatur quae recusandae harum minus illum nisi reprehenderit maxime, modi, quam, nulla cumque! Incidunt, impedit doloribus?  a debitis quidem earum eum quibusdam quia, possimus soluta maiores eveniet quod et officia? Iusto minus provident veniam.',
  desktopImg: 'images/Snapshoot Portfolio.svg',
  mobileImg: '',
  displayImg: '',
  technologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  firstlineTitle: 'Multi-Post Stories',
  secondlineTitle: 'Gain+Glory',
  languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
  linkLiveVersion: 'https://k0ppai.github.io/',
  linkSource: 'https://github.com/K0ppai/portfolio-setup-mobile-1',
},
{
  name: 'project4',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum consequatur quae recusandae harum minus illum nisi reprehenderit maxime, modi, quam, nulla cumque! Incidunt, impedit doloribus?  a debitis quidem earum eum quibusdam quia, possimus soluta maiores eveniet quod et officia? Iusto minus provident veniam.',
  firstlineTitle: 'Multi-Post Stories',
  secondlineTitle: 'Gain+Glory',
  languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
  desktopImg: 'images/Snapshoot Portfolio.svg',
  mobileImg: '',
  displayImg: '',
  technologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  linkLiveVersion: 'https://k0ppai.github.io/',
  linkSource: 'https://github.com/K0ppai/portfolio-setup-mobile-1',
},
{
  name: 'project5',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum consequatur quae recusandae harum minus illum nisi reprehenderit maxime, modi, quam, nulla cumque! Incidunt, impedit doloribus?  a debitis quidem earum eum quibusdam quia, possimus soluta maiores eveniet quod et officia? Iusto minus provident veniam.',
  desktopImg: 'images/Snapshoot Portfolio.svg',
  mobileImg: '',
  displayImg: '',
  technologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  firstlineTitle: 'Multi-Post Stories',
  secondlineTitle: 'Gain+Glory',
  languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
  linkLiveVersion: 'https://k0ppai.github.io/',
  linkSource: 'https://github.com/K0ppai/portfolio-setup-mobile-1',
},
{
  name: 'Summit of Greatness',
  description: 'This is a project to showcase our HTML and CSS skills.This project is about inviting like-minded individuals who want to improve every aspect of their lives, to join the Summit of Greatness. The Summit of Greatness is a 5-day life-changing event that will help you unleash your inner hero and unlock the tools to reach your full potential.',
  desktopImg: 'images/responsive-desktop.jpg',
  mobileImg: 'images/responsive-mobile.jpg',
  displayImg: 'images/responsive-desktop.jpg',
  firstlineTitle: 'Summit of Greatness',
  secondlineTitle: 'Demo',
  languages: ['Bootstrap', 'CSS', 'JavaScript', 'HTML'],
  technologies: ['NPM', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Gh-pages'],
  linkLiveVersion: 'https://k0ppai.github.io/first-capstone-project/',
  linkSource: 'https://github.com/K0ppai/first-capstone-project',
},
];
const popUp = (i) => {
  const html = document.createElement('div');
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  if (mediaQuery.matches) {
    data[i].desktopImg = data[i].mobileImg;
    data[i].technologies[0] = 'Ruby on Rails';
    data[i].technologies[1] = 'CSS';
    data[i].technologies[2] = 'JavaScript';
  }
  html.innerHTML = `
  <div class="see-project-container active">
        <div class="close-container">
          <button type="button" class="close-button">&times;</button>
        </div>
        <img src="${data[i].desktopImg}" id="project-img">
        <div class="project-title-container">
          <h2>${data[i].name}</h2>
          <div class="see-live-container">
            <a href="${data[i].linkLiveVersion}">See live</a>
            <a href="${data[i].linkLiveVersion}"><img src="images/See-live.svg"></a>
          </div>
          <div class="see-source-container">
            <a href="${data[i].linkSource}">See source</a>
            <a href="${data[i].linkSource}"><img src="images/github-white.svg"></a>
          </div>
        </div>
        <ul class="project-tech">
          <li>${data[i].technologies[0]}</li>
          <li>${data[i].technologies[1]}</li>
          <li>${data[i].technologies[2]}</li>
          <li>${data[i].technologies[3]}</li>
          <li>${data[i].technologies[4]}</li>
          <li>${data[i].technologies[5]}</li>
        </ul>
        <p class="project-desc">${data[i].description}</p>
      </div>
      <div class="overlay active"></div>
  `;
  body.appendChild(html);
  const closebtn = document.querySelector('.close-button');
  closebtn.addEventListener('click', () => {
    body.removeChild(html);
  });
};

function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

const div = document.createElement('div');
const parentElement = document.getElementById('portfolio');
div.className = 'my-projects';
insertAfter(div, parentElement.lastElementChild);
for (let i = 0; i < 6; i += 1) {
  div.innerHTML += `
  <div id="project${i}" class="work-cards animation-left">
        <div class="work-desc">
          <p>${data[i].firstlineTitle}<br>${data[i].secondlineTitle}</p>
          <div>
            <ul class="languages">
              <li>${data[i].languages[0]}</li>
              <li>${data[i].languages[1]}</li>
              <li>${data[i].languages[2]}</li>
              <li>${data[i].languages[3]}</li>
            </ul>
          </div>
          <div class="button-container">
            <button type="button" onclick='popUp(${i})' class="button seeproject" id="seeproject${i}">See project</button>
          </div>
        </div>
      </div>`;
}
btn.addEventListener('click', popUp());