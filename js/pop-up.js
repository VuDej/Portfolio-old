const myProjects = [
  {
    id: 1,
    title: 'Multi Post Stories',
    description:
      " Instagram's newest Stories feature allows users to post multiple photos on one screen.",
    img: 'img/section2.png',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    live: 'https://vudej.github.io/Responsive-Web-Design/',
    source: 'https://github.com/',
  },
  {
    id: 2,
    title: 'Web Summit 2020 Lisbon',
    description: 'Web Summit 2022 will feature talks from tech experts, cultural icons and global policymakers.',
    img: 'img/project1.jpg',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    live: 'https://vudej.github.io/Web-Summit-2022-Lisbon/',
    source: 'https://github.com/VuDej/Web-Summit-2022-Lisbon',
  },
  {
    id: 3,
    title: 'Awesome Books',
    description:
      'Awesome Books is single-page, where you can add books to list and delete books from list.',
    img: 'img/project2.png',
    technologies: ['css', 'html', 'javascript', 'ruby'],
    live: 'https://vudej.github.io/Awesome-Books-ES6/)',
    source: 'https://github.com/VuDej/Awesome-Books-ES6',
  },
  {
    id: 4,
    title: 'To Do List',
    description:
      'To do list is awesome tool for setting your smart goals and track progress with completed tasks or not.',
    img: 'img/project3.png',
    technologies: ['css', 'html', 'javascript', 'ruby'],
    live: 'https://vudej.github.io/To-Do-list/dist/',
    source: 'https://github.com/VuDej/To-Do-list',
  },
  {
    id: 5,
    title: 'Budget app',
    description:
      'Application where you can track your transactions',
    img: 'img/project4.png',
    technologies: ['ruby', 'rails', 'postgres', 'rcss'],
    live: 'https://dejab-v-budget.herokuapp.com/',
    source: 'https://github.com/VuDej/budget-app-rails',
  },
  {
    id: 6,
    title: 'Drum Machine',
    description:
      ' A simple Drum Machine with Create-react-app. Sample, Example , React.',
    img: 'img/project6.jpg',
    technologies: ['css', 'html', 'react', 'ruby'],
    live: 'https://vudej.github.io/Drum-Machine/',
    source: 'https://github.com/',
  },
  {
    id: 7,
    title: 'Pomodoro Timer',
    description:
      'A simple pomodoro timer in material tomato design Made this into a desktop and mobile app for my own use.',
    img: 'img/project7.png',
    technologies: ['css', 'html', 'react', 'ruby'],
    live: 'https://vudej.github.io/Time-Managment/',
    source: 'https://github.com/',
  },
];

const projectSections = document.querySelector('.projects-row');
const firstProject = document.querySelector('.wrapper-first');

firstProject.innerHTML = `<div class="title">
<h2 class="creta">My recent works </h2>
<hr class='dash'>
</div>
<div class='row'>

<div class="pic">
    <img src="${myProjects[0].img}" alt="placeholder" />
</div>

<div class="in-row">
    <h2 class="font crete">Multi-Post Stories</h2>
    <div class='around-p'>
        <p class='inter'>
            A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.
        </p>
    </div>

    <div class="ul-fix">
        <ul id='buttons-container'>
            <li class='buttons first-button'>
                <a href="https://en.wikipedia.org/wiki/CSS">css</a>
            </li>
            <li class='buttons'>
                <a href="https://en.wikipedia.org/wiki/HTML">html</a>
            </li>
            <li class='buttons'>
                <a href="https://getbootstrap.com/">bootstrap</a>
            </li>
            <li class='buttons'>
                <a href="https://www.ruby-lang.org/en/">ruby</a>
            </li>
        </ul>
        <ul class='button '>
            <li id='${myProjects[0].id}' class='open-pop'><a href="#">See Project</a></li>
        </ul>
    </div>
</div>
</div>`;

for (let i = 1; i < myProjects.length; i += 1) {
  const project = myProjects[i];

  projectSections.innerHTML += `
  
  
<div class="projects media" style="background: linear-gradient(180.45deg, rgba(38, 38, 38, 0) 0.75%, rgba(38, 38, 38, 0.9) 61.94%), url(${project.img}); background-repeat: no-repeat; background-size: cover;">
 
    <div id='${project.id}' class='fix')>
   
    <h2 class="white creta show1">${project.title}</h2>
      <h5 class='white inter hide'>${project.description}</h5>
     
     <ul class='framework-container hide'>
          <li class="framework"><a href="https://en.wikipedia.org/wiki/HTML">
          ${project.technologies[0]}</a></li>
          <li class='framework'><a href="https://getbootstrap.com/">
           ${project.technologies[1]}</a></li>
           <li class='framework'><a href="https://www.ruby-lang.org/en/">
           ${project.technologies[2]}</a></li>
       </ul>
       <ul class="big-button ">
           <li id='${project.id}' class="or-button open-pop"><a href="#">See Project</a>
           </li>
       </ul>
    
   </div>
   </div>
 
`;
}

const openPop = document.querySelectorAll('.open-pop');
const blur = document.getElementById('blur');
const popUp = document.querySelector('.pop-up');

openPop.forEach((element) => {
  element.addEventListener('click', () => {
    const id = Number(element.id);
    for (let i = 0; i < myProjects.length; i += 1) {
      const project = myProjects[i];
      if (id === project.id) {
        popUp.innerHTML = `
           
            <header class="pop-flex">
              
               <h2 class = 'pop-hide1-h2'>${project.title}</h2>
        
               <span class="pop-x">&times;</span>
          </header>
        
          <ul id='pop' class='list-unstyled '>
            <li class='pop-btns'>
                <a href="https://en.wikipedia.org/wiki/HTML">${project.technologies[0]}</a>
            </li>
            <li class='pop-btns'>
                <a href="https://getbootstrap.com/">${project.technologies[1]}</a>
            </li>
            <li class='pop-btns'>
                <a href="https://rubyonrails.org/">${project.technologies[2]}</a>
            </li>
        </ul>
            <div class="pop-flex1 p-1 m-0">
                <img class="img-fluid pop-img" src="${project.img}" alt="">
                <div class="pop-info">
                   <div>
                    <p>${project.description}</p>
                        
                          </div>
                            <div class='pop-button'>
                                <ul class='list-unstyled flex-icon'>
                                <li class='pop-btn'><a href="${project.live}">See Live</a></li>
                                <li class='icn'><a href="#"><i class="fas fa-external-link-alt"></i></a></li>
                            </ul>
                               <ul class='list-unstyled flex-icon'>
                                <li class='pop-btn'><a href="${project.source}">See Source</a></li>
                                <li class='icn'><a href="#"><i class="fab fa-github-square"></i></a></li>
                            </ul>
                          
                            </div>
                </div>
            </div>`;
      }
    }

    popUp.classList.add('pop');

    blur.classList.add('active');
    const closePop = document.querySelector('.pop-x');
    closePop.addEventListener('click', () => {
      popUp.classList.remove('pop');
      blur.classList.remove('active');
    });
  });
});