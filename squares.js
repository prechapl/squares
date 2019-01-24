const colors = ["blue", "green", "yellow", "orange"];

const generateDom = colors => {
  const squares = document.querySelectorAll(".square");

  squares.forEach(square => {
    square.addEventListener("click", function() {
      const li = document.createElement("li");
      li.innerHTML = `you clicked on ${this.id}`;
      ul.appendChild(li);
    });
  });
  // const square = document.getElementById("red");

  // square.addEventListener("click", function() {
  //   alert("clicked " + this.id);
  // });
};

generateDom(colors); //should generate squares, buttons and event handlers
