const container = document.querySelector('#gridContainer');
const numberBtn = document.querySelector('#submitBtn');
const numberContainer = document.querySelector('#numberContainer');

const invalidEntry = document.createElement('p');
invalidEntry.className = 'invalidEntry';

numberContainer.appendChild(invalidEntry);

const count = 0;
const initialGrid = 16;


grid(initialGrid);

50
numberBtn.addEventListener('click', () => {
    
    container.innerHTML = '';
   
        
    const input = document.querySelector('.input').value;
    

    parseInt(input);
    if(input ===''){
        grid(16);
        input.value = 16;
        alert('Your entry was invalid. Be sure to enter a number from 1 - 100. Default of 16 squares initialized.')
    }
    else if((isNaN(input)) || (input > 100)||(input < 1)){
        alert('Selection must have a minimum of 1 and a maximum of 100. Try again.')
        grid(16)
    }
    else{
        grid(input);
    }
})


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

//default mouseover event for blue
let defaultColor = 'blue';

container.addEventListener('mouseover',(event)=>{
    let target = event.target;
    switch(target.className){
        case 'cell':
           color(target, defaultColor); 
    }
})

let colorSelect = document.getElementById('colors');


//mouseover event for colorselect event, updating colors.

colorSelect.onchange = function(){
    container.addEventListener('mouseover',(event)=>{
        let target = event.target;
        switch(target.className){
            case 'cell':
                color(target, colorSelect.value); 
        }
    })
}

function color(cell, defaultColor){
    
        cell.setAttribute('style',`background:${defaultColor};`)

    
  
    
}
   

const eraser = document.querySelector('.erase');

eraser.addEventListener('click',(event)=>{
    container.addEventListener('mouseover',(event) =>{
        let target = event.target;
        switch(target.className){
            case 'cell':
                color(target, 'rgb(82, 82, 82'); 
        }
    })
        
})

    





