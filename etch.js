const container = document.querySelector('#gridContainer');
const numberBtn = document.querySelector('#submitBtn');
const numberContainer = document.querySelector('#numberContainer');

const invalidEntry = document.createElement('p');
invalidEntry.className = 'invalidEntry';

numberContainer.appendChild(invalidEntry);

const count = 0;
const initialGrid = 16;


grid(initialGrid);


numberBtn.addEventListener('click', () => {
    
    container.innerHTML = '';
   
        
    const input = document.querySelector('.input').value;
    

    parseInt(input);
    if(input ===''){
        grid(16);
        input.value = 16;
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



    container.addEventListener('mouseover',(event)=>{
        let target = event.target;
        switch(target.className){
            case 'cell':
                target.setAttribute('style','background:blue') 
        }
    })
   
    





