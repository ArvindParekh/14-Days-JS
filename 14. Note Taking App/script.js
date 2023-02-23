let addNoteButton = document.querySelector("#createNoteButton");
addNoteButton.addEventListener("click", addNote);

let noteIndex = 0;

function addNote() {
  //Adding a JSDoc comment to specify to js that the textarea is a HTMLInputElement, so that we can use the .value property on it.
  //.value property is only applicable on HTMLInputElements.
  //In general, document.getElementById() returns an HTMLElement which does not have a value property.
  // The closest match is nodeValue. is value a property on the particular element with id "id_name"
  /**
   * @type HTMLInputElement
   */
  let note = document.querySelector("#textarea");
  let noteValue = note.value;
  let notesContainer = document.querySelector(".notes-container");
  let pre = document.createElement("pre");
  let noteDiv = document.createElement("div");
  let noteHeaderDiv = document.createElement("div");
  let timeHeader = document.createElement("p");
  let closeHeader = document.createElement("p");

  if (noteValue == "") {
    //check whether the field is empty or not
    alert("Enter a note");
  } else {
    let time = new Date();

    closeHeader.setAttribute("onclick", "deleteNote(this)"); //run deleteNote function on clicking X

    //adding classes
    notesContainer.classList.add('border', 'border-gray-600');
    noteDiv.classList.add('ease-out');
    noteDiv.setAttribute("id", "notes-" + noteIndex);
    closeHeader.setAttribute("itemid", "notes-" + noteIndex++);
    noteDiv.classList.add(
      "border",
      "border-gray-600",
      "rounded-md",
      "p-2",
      "m-2"
    );
    noteHeaderDiv.classList.add("flex", "justify-between");
    closeHeader.classList.add("cursor-pointer");
    pre.classList.add("mt-2");

    //adding innerHTML
    pre.innerHTML = noteValue;
    timeHeader.innerHTML = time;
    closeHeader.innerHTML = "X";

    //making the schema
    noteDiv.appendChild(noteHeaderDiv);
    noteHeaderDiv.appendChild(timeHeader);
    noteHeaderDiv.appendChild(closeHeader);
    noteDiv.appendChild(pre);

    notesContainer.appendChild(noteDiv); //appending the final notes div to the div container

    note.value = ""; //clearing the textarea
  }
}

function deleteNote(element) {
  console.log("Delete note function is running");
  console.log(element);

  let notesId = element.getAttribute('itemid');
  console.log(notesId);
  let note = document.querySelector(`#${notesId}`);
  console.log(note);
  note.innerHTML = "";

  note.removeAttribute('class');

  if(notesId == 'notes-0'){
    let maindiv = document.querySelector('.notes-container');
    maindiv.classList.remove('border', 'border-gray-600');
  }
}
