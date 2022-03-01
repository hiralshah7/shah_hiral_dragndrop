(() => {
    // make the connections to the elemnts on the page
    //that we want the user to interact with 
    const theButtons = document.querySelectorAll('#buttonHolder img'),
        puzzlePieces = document.querySelectorAll('.puzzle-pieces *'),
        dropZones = document.querySelectorAll('.drop-zone'),
        theGameBoard = document.querySelector('.puzzle-board');
    // this below thelink is in reference to prevent default function 

    theLink = document.querySelector('a');

    theLink.addEventListener('click', function(event) { event.preventDefault(); })
        // the buttons becomes this
        // [
        // <img>
        // <img>
        // <img>
        // <img>
        //]
        //
        //

    function changeBgImg() {
        //debugger; // pause our code execution at this point
        let key = this.dataset.bgref;
        console.log(key);

        theGameBoard.style.backgroundImage = `url(images/backGround${key}.jpg)`;
    }

    function startDrag(event) {
        console.log('started dragging');
        //save a refrence to the element we are dragging
        // setter and getter function -- setter is here and getter is below in handle drop
        event.dataTransfer.setData('draggedElement', event.target.id);
    }

    function draggedOver(event) {
        // event is the user event ( a click, a drag, a drop)
        // some elements have default behaviour ( like an anchor tag) -> we need to block that behaviour
        // and script our own
        // thats when event.predefault() does -> override the default behavious ( block it)
        event.preventDefault();
        console.log('dragged over me');
    }

    function handleDrop(event) {
        event.preventDefault();
        console.log('dropped on me');
        // getter is here and setter is above
        let currentEl = event.dataTransfer.getData('draggedElement');

        console.log('dropped this element:', currentEl);

        // append child ( add child) is a built in javacript method that 
        // adds an element to a containing ( [parent] ) element 

        // thie " this" keyword is a reference to the element you are dropping onto ( or into )
        this.appendChild(document.querySelector(`#${currentEl}`));
    }

    // `` => this is javascript template string, you can use it to write a bit of a inline javascript which will be interpreted at runtime
    // search for MDN Javascript template string

    // these are the " triggers" we want  the user to use to fire off the events.
    theButtons.forEach(button => button.addEventListener('click', changeBgImg));

    puzzlePieces.forEach(piece => piece.addEventListener('dragstart', startDrag));
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', draggedOver);
        zone.addEventListener('drop', handleDrop);
    });

})();