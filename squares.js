const colors = ["blue", "green", "yellow", "orange"];

// const inBox = document.querySelectorAll('.square')

const generateDom = (arr) => {

  for (let i = 0 ; i < arr.length; i++){
    const curEl = arr[i];
    let div = document.createElement('div');
    div.id = color
    div.className = '.square'
    const newDiv = document.getElementById('div1');
    document.body.insertBefore(div, newDiv)
  }
  
  // const ul = document.querySelector('ul');

  // const generateButton = document.querySelector('#generate');

  // generateButton.addEventListener('click', function(){
  
    // arr.forEach( color => {
    //   let div = document.createElement('div');
    //   div.id = color
    //   div.className = '.square'
    //   const newDiv = document.getElementById('div1');
    //   document.body.insertBefore(div, newDiv)
      // color.style.display = '';

      
  })
// });

  const hideButton = document.querySelector('#hide');

  hideButton.addEventListener('click', function(){
    const squares = document.querySelectorAll('.square');
    squares.forEach( square => square.style.display = 'none');
  });

  

  // const generateButton = document.querySelector('#generate');

  // generateButton.addEventListener('click', function(){
  //   colors.forEach( color => {
  //     const createdSquares = document.createElement('div');
  //     createdSquares.className = '.square';
  //     createdSquares.style.display = '';
  //     box.appendChild(createdSquares)
  //     // createdSquares.id = color
  //     })
  //   });

  const showButton = document.querySelector('#show');

  showButton.addEventListener('click', function(){
  const squares = document.querySelectorAll('.square');
  squares.forEach( square => square.style.display = '');
  });

  const toggleRed = document.querySelector('#toggleRed');

  const redSquare = document.querySelector('#red');

  toggleRed.addEventListener('click', function (){
    if (redSquare.style.display === ''){
      redSquare.style.display = 'none';
    } else if (redSquare.style.display === 'none'){
      redSquare.style.display = '';
    }
  });

};

generateDom(colors); //should generate squares, buttons and event handlers
