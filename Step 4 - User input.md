We've got our editable element setup, time to start filling in the blanks with our editor's JavaScript. 

# Next steps

* Open up `editor.js`. 
* Listen to Kerry say some words about our editor element losing focus when clicking the toolbar buttons, and thus the text becoming unselected. We'll fix this next. 
* A mousedown handler is setup for you, but we need to fill out the `saveCurrentRange` method. You'll want to assign this range to `this.savedRange`. Fill out `saveCurrentRange`.
* After mousedown we need to deal with the inevitable mouseup. Again, a handler is setup, we need to fill out the `applySavedRange` method that gets called. This method should take our previously saved range and apply it back on the page. (The Range and Selection Markdown document has snippets you can use if you're struggling). Fill out `applySavedRange`.


# Spoilers

This code would re-apply the Range that we took a reference to. 

```
if (this.savedRange) {
  var selection = window.getSelection();
  selection.removeAllRanges(); 
  selection.addRange(this.savedRange);
  this.savedRange = null;
}
``` 