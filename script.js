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

const projectBtns = document.querySelectorAll('.seeproject');
const body = document.querySelector('body');

const data = [{
  projectNum: '1',
  name: 'Keeping track of hundreds of components',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum consequatur quae recusandae harum minus illum nisi reprehenderit maxime, modi, quam, nulla cumque! Incidunt, impedit doloribus?  a debitis quidem earum eum quibusdam quia, possimus soluta maiores eveniet quod et officia? Iusto minus provident veniam.',
  featuredImage: 'images/Snapshoot Portfolio.svg',
  technologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  linkLiveVersion: 'https://k0ppai.github.io/',
  linkSource: 'https://github.com/K0ppai/portfolio-setup-mobile-1',
},
{
  projectNum: '2',
  name: 'Project2',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum consequatur quae recusandae harum minus illum nisi reprehenderit maxime, modi, quam, nulla cumque! Incidunt, impedit doloribus?  a debitis quidem earum eum quibusdam quia, possimus soluta maiores eveniet quod et officia? Iusto minus provident veniam.',
  featuredImage: 'images/Snapshoot Portfolio.svg',
  technologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  linkLiveVersion: 'https://k0ppai.github.io/',
  linkSource: 'https://github.com/K0ppai/portfolio-setup-mobile-1',
},
{
  projectNum: '3',
  name: 'project3',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum consequatur quae recusandae harum minus illum nisi reprehenderit maxime, modi, quam, nulla cumque! Incidunt, impedit doloribus?  a debitis quidem earum eum quibusdam quia, possimus soluta maiores eveniet quod et officia? Iusto minus provident veniam.',
  featuredImage: 'images/Snapshoot Portfolio.svg',
  technologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  linkLiveVersion: 'https://k0ppai.github.io/',
  linkSource: 'https://github.com/K0ppai/portfolio-setup-mobile-1',
},
{
  projectNum: '4',
  name: 'project4',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum consequatur quae recusandae harum minus illum nisi reprehenderit maxime, modi, quam, nulla cumque! Incidunt, impedit doloribus?  a debitis quidem earum eum quibusdam quia, possimus soluta maiores eveniet quod et officia? Iusto minus provident veniam.',
  featuredImage: 'images/Snapshoot Portfolio.svg',
  technologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  linkLiveVersion: 'https://k0ppai.github.io/',
  linkSource: 'https://github.com/K0ppai/portfolio-setup-mobile-1',
},
{
  projectNum: '5',
  name: 'project5',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum consequatur quae recusandae harum minus illum nisi reprehenderit maxime, modi, quam, nulla cumque! Incidunt, impedit doloribus?  a debitis quidem earum eum quibusdam quia, possimus soluta maiores eveniet quod et officia? Iusto minus provident veniam.',
  featuredImage: 'images/Snapshoot Portfolio.svg',
  technologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  linkLiveVersion: 'https://k0ppai.github.io/',
  linkSource: 'https://github.com/K0ppai/portfolio-setup-mobile-1',
},
{
  projectNum: '6',
  name: 'project6',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum consequatur quae recusandae harum minus illum nisi reprehenderit maxime, modi, quam, nulla cumque! Incidunt, impedit doloribus?  a debitis quidem earum eum quibusdam quia, possimus soluta maiores eveniet quod et officia? Iusto minus provident veniam.',
  featuredImage: 'images/Snapshoot Portfolio.svg',
  technologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  linkLiveVersion: 'https://k0ppai.github.io/',
  linkSource: 'https://github.com/K0ppai/portfolio-setup-mobile-1',
},
];
const popUp = (n) => {
  const html = document.createElement('div');
  const seeProjectNum = n.target.dataset.number;
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  const [dataForEach] = data.filter((element) => element.projectNum === seeProjectNum);
  if (mediaQuery.matches) {
    dataForEach.featuredImage = 'images/popupmobile.svg';
    dataForEach.technologies[0] = 'Ruby on Rails';
    dataForEach.technologies[1] = 'CSS';
    dataForEach.technologies[2] = 'JavaScript';
  }
  html.innerHTML = `
  <div class="see-project-container active">
        <div class="close-container">
          <button type="button" class="close-button">&times;</button>
        </div>
        <img src="${dataForEach.featuredImage}" id="project-img">
        <div class="project-title-container">
          <h2>${dataForEach.name}</h2>
          <div class="see-live-container">
            <a href="${dataForEach.linkLiveVersion}">See live</a>
            <a href="${dataForEach.linkLiveVersion}"><img src="images/See-live.svg"></a>
          </div>
          <div class="see-source-container">
            <a href="${dataForEach.linkSource}">See source</a>
            <a href="${dataForEach.linkSource}"><img src="images/github-white.svg"></a>
          </div>
        </div>
        <ul class="project-tech">
          <li>${dataForEach.technologies[0]}</li>
          <li>${dataForEach.technologies[1]}</li>
          <li>${dataForEach.technologies[2]}</li>
          <li>${dataForEach.technologies[3]}</li>
          <li>${dataForEach.technologies[4]}</li>
          <li>${dataForEach.technologies[5]}</li>
        </ul>
        <p class="project-desc">${dataForEach.description}</p>
      </div>
      <div class="overlay active"></div>
  `;
  body.appendChild(html);
  const closebtn = document.querySelector('.close-button');
  closebtn.addEventListener('click', () => {
    body.removeChild(html);
  });
};

projectBtns.forEach((button) => {
  button.addEventListener('click', popUp);
});