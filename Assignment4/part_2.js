const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const alternativeText = {
    'pic1.jpg' : 'Eye',
    'pic2.jpg' : 'Rock',
    'pic3.jpg' : 'Flowers',
    'pic4.jpg' : 'Egyptian Drawing',
    'pic5.jpg' : 'Insect'
}

/* Looping through images */

for(const image of imageArray){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alternativeText[image]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', function(e){
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function(){
    const checkClass = btn.getAttribute('class');

    if (checkClass === "dark") {
      btn.setAttribute("class", "light");
      btn.textContent = "Lighten";
      overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    } 
    else {
      btn.setAttribute("class","dark");
      btn.textContent = "Darken";
      overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
  });
