For these steps we're just going to whip open a browser and it's Dev Tools, we'll run a few code snippets in the console. 

# Meet `Selection`

* A selection is a representation of what is currently selected on the page.
* A top level container for one or many (but normally one) Range.

Throw this in your console, then have a look at some of the properties and methods that `activeSelection` provides. `anchorNode, anchorOffset, focusNode and focusOffset` are all super useful. `isCollapsed` is also something I found myself making use of, this will tell us if the start and end points are the same, if they are this means no text is selected, we're just dealing with an empty cursor.

var activeSelection = window.getSelection();

# Meet `Range`, best buddies with Selection. Got drunk together at Disneyland once.

We can get the active Range by using the following. Try this in your console. 

var range  = activeSelection.getRangeAt(0);

Again, have a little probe around and check out the properties and methods on a Range. 

We can assume that in the vast majority of cases only one area of the page will have text highlighted (vs multiple cursors and multiple text selections), which is why we grab the Range at 0. If we had multiple text selections we could do `var range  = activeSelection.getRangeAt(1);` and so on. 

Ranges are where the majority of action happens. Selections are useful, but mostly for accessing and manipulating the Ranges they contain.

Now we're a bit better acquainted, we'll have a look at a couple of useful examples. 

# A highlight text button (for easy copying)

```
var range = document.createRange(); 
var element = document.getElementById("element-with-text")  // Feel free to use any DOM method here to acquire an element
range.selectNode(element); 
var selectionReference = window.getSelection(); 
selectionReference.removeAllRanges(); 
selectionReference.addRange(range);
```

# A "uh-oh-bail-out" button 

```
var range = document.createRange(); 
var element = document.getElementById("element-with-text") 
range.selectNode(element); 
range.deleteContents();
```

