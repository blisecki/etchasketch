const container = document.querySelector('.container');

for(i=1; i < 17; i++) {
    container.appendChild(document.createElement('div'));
}

const boxes = document.querySelectorAll('div');
boxes.forEach((box) => {
    box.classList.add('box');

  });

container.classList.remove('box');