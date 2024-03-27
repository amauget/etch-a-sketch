let container = document.querySelector('#gridContainer');
let numberBtn = document.querySelector('#submitBtn');
let numberContainer = document.querySelector('#numberContainer');

let invalidEntry = document.createElement('p');
invalidEntry.className = 'invalidEntry';

numberContainer.appendChild(invalidEntry);

let count = 0;
numberBtn.addEventListener('click', ()=>{
    
})

numberBtn.addEventListener('click', () => {
    
    container.innerHTML = '';
   
        
    let input = document.querySelector('.input').value;


    parseInt(input);
    
    if((isNaN(input)) || (input > 100)||(input < 1)){
        invalidEntry.textContent = `Input: '${input}' isn't valid. Enter numbers from 1 to 100.`
        
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
                target.setAttribute('style','background:white') 
        }
        

    })
   


