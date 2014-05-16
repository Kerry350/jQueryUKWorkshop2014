We're now at a point where a user can click our formatting buttons, and the formatting is applied (or removed, if already applied). Back in Step 5 we also called a method called `setActiveButtonStates`, we'll deal with that now. The purpose of our `setActiveButtonStates` method is to add a class of 'active' to all toolbar buttons which are active - i.e. it's command is currently applied to the selected range of text. First we'll talk about `document.queryCommandState(‘bold’)` as this will be one of the core methods to achieve this, then you can take a look through the next steps.  

# Next steps

* Apply / remove an 'active' class from each of our toolbar buttons so that it represents the formatted state of the currently selected portion of text.
  * Loop through each of the buttons
  * Grab the command that button represents
  * See if that command is currently applied
  * Add or remove 'active' class as required 

# Spoilers

```
var buttons = this.toolbar.querySelectorAll('li');

for (var i = 0, l = buttons.length; i < l; i++) {
  var button = buttons[i];
  var command = button.getAttribute('data-command');
  var active = document.queryCommandState(command);
  
  if (active) {
    button.classList.add('active');
  } else {
    button.classList.remove('active');
  }
} 
```