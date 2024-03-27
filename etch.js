let container = document.querySelector('#gridContainer');

let gridNum = gridNumber();
grid(gridNum);

function gridNumber(){
    let input = prompt('enter a value:');
    
    while(true){
        parseInt(input);
        
        if(isNaN(input) || (input > 100)||(input < 0)){
            input = prompt('entry must be int from 1-100!');
        }
        else{
            return input;
        }
        

    }
    
}


function grid(value){
    
    for(let i=0; i<value; i++){
        let row = document.createElement('div');
        row.className = 'row';

        for (let x = 1; x<=value; x++){
            let cell = document.createElement('div');
            cell.className = 'cell';
            
            row.appendChild(cell);
        }

        container.appendChild(row);
    }
    document.body.innertext = container.innerHTML;
}



    container.addEventListener('mouseover',(event)=>{
        let target = event.target;
        switch(target.className){
            case 'cell':
                target.setAttribute('style','background:white') 
        }
        

    })
   


