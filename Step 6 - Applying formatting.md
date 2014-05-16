In the last step we dealt with the preliminary steps of a user selecting one of our formatting options in the toolbar. Now we'll deal with the `applyFormatting` method, and get it to actually apply some formatting. The information from the previous step (good old `document.execCommand()`) will be really important here. 

# Next steps 

* Make the `applyFormatting` method apply the formatting option (command) that it's been passed.

# Bonus points

* Try adding in some conditional logic for one of the commands that requires certain parameters (`createLink` for example).

# Spoilers

`document.execCommand(command);`