const colors = ['#556270', '#4ECDC4', "#C7F464", "#FF6B6B", "#C44D58" ];



const generateDom = (arr) => {

  const squaresContainer = document.querySelector('#squaresContainer');
  const buttonsContainer = document.querySelector('#buttonsContainer');
  const hideAllButton = document.querySelector('#hide');
  const showAllButton = document.querySelector('#show');

  hideAllButton.addEventListener('click', function(){
    document.querySelectorAll('.square').forEach( square => {
      square.style.display = 'none';
    });
  });

  showAllButton.addEventListener('click', function(){
    document.querySelectorAll('.square').forEach( square => {
      square.style.display = '';
    });
  });

  arr.forEach( color => {

    const square = document.createElement('div');
    square.className = 'square';
    // square.innerHTML = color;
    square.style.backgroundColor = color;
    squaresContainer.appendChild(square);

    const button = document.createElement('button');
    button.innerHTML = `toggle`;
    button.style.backgroundColor = color;
    buttonsContainer.append(button);
    button.addEventListener('click', function(){
      if (square.style.display === 'none'){
        square.style.display = '';
      } else {
        square.style.display = 'none';
      }
    });
  })

};

generateDom(colors);
generateDom(colors);
generateDom(colors);
generateDom(colors);
generateDom(colors);

