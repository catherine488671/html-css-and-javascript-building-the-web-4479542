//pos1 and pos2 will store the change in cursor position on the x and y axis
//pos3 and 4 store the current cursor position on x and y axis

//create a function that will take an HTML element as an argument and make it draggable
//terrariumElement (the plant) is the HTML element that we want to make draggable (the parameter)
//since all functions need the position of the cursor, want to make that the outer function
let pos1 = 0,
  pos2 = 0,
  pos3 = 0,
  pos4 = 0;

function dragElement(terrariumElement) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  terrariumElement.onpointerdown = pointerDrag;

  function pointerDrag(e) {
    //e represents the event object, contains info about event that triggers function - pointerDrag
    e.preventDefault(); //prevents default events
    console.log(e); //logs event object to console
    pos3 = e.clientX; //x axis of original cursor
    pos4 = e.clientY; //y axis of original cursor
    document.onpointermove = elementDrag; //event listeners for dragging and calls elementDrag continuously
    document.onpointerup = stopElementDrag; //when pointer is released, stopElementDrag is called and will stop
  }

  function elementDrag(e) {
    //responsible for updating the terrarium element position
    pos1 = pos3 - e.clientX; //calculates new cursor position
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX; //update stored cursor position
    pos4 = e.clientY;

    terrariumElement.style.top = terrariumElement.offsetTop - pos2 + "px"; //responsible for moving the element
    terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + "px";
  }

  function stopElementDrag(e) {
    //responsible for leaving the element where released
    document.onpointerup = null;
    document.onpointermove = null;
  }
}

//using DOM to select the HTML plant element by ID, passing the HTML elements to the function dragElement
//when we are calling the function, we put the actual value of the parameter (argument)

dragElement(document.getElementById('plant1'));
dragElement(document.getElementById("plant2"));
dragElement(document.getElementById("plant3"));
dragElement(document.getElementById("plant4"));
dragElement(document.getElementById("plant5"));
dragElement(document.getElementById("plant6"));
dragElement(document.getElementById("plant7"));
dragElement(document.getElementById("plant8"));
dragElement(document.getElementById("plant9"));
dragElement(document.getElementById("plant10"));
dragElement(document.getElementById("plant11"));
dragElement(document.getElementById("plant12"));
dragElement(document.getElementById("plant13"));
dragElement(document.getElementById("plant14"));