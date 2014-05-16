function jQUKEditor() {
  this.savedRange = null;
  this.init();
};

jQUKEditor.prototype = {
  init: function() {
    this.setElementReferences();
    this.addEventHandlers();
  },

  // Take a couple of element references so we're not looking
  // them up over and over
  setElementReferences: function() {
    this.editor = document.getElementById('editor');
    this.toolbar = document.getElementById('toolbar');
  }, 

  addEventHandlers: function() {
    /* 
      Remember that for something more robust you wouldn't want
      to use anonymous functions, named functions would allow you
      to later remove the listeners 
    */
    this.toolbar.addEventListener('mousedown', function(e) {
      // Delegate the events
      if (e.target.webkitMatchesSelector('li')) {
        /* 
          We save the current range (if any) on mousedown as this
          event will cause the text to become de-selected within 
          our contenteditable element, so we make a note of it, 
          and re-apply it on mouseup.  
        */
        this.saveCurrentRange();
      }      
    }.bind(this));

    this.toolbar.addEventListener('mouseup', function(e) {
      // Delegate the events
      if (e.target.webkitMatchesSelector('li')) {
        this.applySavedRange();
        // Logic here for grabbing the command and applying it
      }      
    }.bind(this));
  },

  saveCurrentRange: function() {
    // Assign the Range to this.savedRange
  },

  applySavedRange: function() {
    // Take the this.savedRange property and apply it back on to the page
  },

  applyFormatting: function(command) {
    // Apply the formatting option here
  },

  setActiveButtonStates: function() {
    // Find out which of our toolbar buttons should be 'active'
    // Apply, or remove, the 'active' class as needed 
  }
};