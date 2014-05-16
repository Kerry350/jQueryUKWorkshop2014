Now we've dealt with the 'focus race', we can handle the user's toolbar selection. There's a couple of things we'll want to do here. But first we'll talk a little about commands and how they can be used with `document.execCommand()`.  


# Next steps

These steps should be carried out in our mouseup handler, right after we've called `applySavedRange`.

* Find which command we're dealing with (the buttons had data attributes).
* Call the `applyFormatting` method with the command as a parameter.
* Then call the `setActiveButtonStates` method.

# Spoilers

```
var command = e.target.getAttribute('data-command');
this.applyFormatting(command);
this.setActiveButtonStates();
```