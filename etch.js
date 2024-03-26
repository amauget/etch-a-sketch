let container = document.querySelector('#gridContainer');
grid();




function grid(){

    for(let i=0; i<16; i++){
        let row = document.createElement('div');
        row.className = 'row';

        for (let x = 1; x<=16; x++){
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.innerText=(i*16) + x;
            row.appendChild(cell);
        }

        container.appendChild(row);
    }
    document.body.innertext = container.innerHTML;
}


