const container = document.querySelector('.container');
const rows = document.querySelectorAll('.row');
let x=0;


function showAlert() {
    x = prompt("Enter grid size:");
    console.log(x);
    if(x > 100 || x < 1 || x =="") {
        
    }
    for(i=0; i < x; i++) {
        let row = container.appendChild(document.createElement('div'));
        row.classList.add('row');
        for(z=0; z < x; z++) {
            let box = row.appendChild(document.createElement('div'));
            box.classList.add('box');
        }
    }

    const cells = document.querySelectorAll('.box');

    cells.forEach((cell) => {
    
      cell.addEventListener('mouseover', () => {
        cell.classList.add('active');
      });
    });

}
