const container = document.querySelector('.container');
const rows = document.querySelectorAll('.row');

for(i=0; i < 4; i++) {
    let row = container.appendChild(document.createElement('div'));
    row.classList.add('row');
    for(x=0; x < 4; x++) {
        let box = row.appendChild(document.createElement('div'));
        box.classList.add('box');
    }
}