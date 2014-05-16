We have a functional editor now. High fives all round. We can click toolbar buttons which apply and remove formatting, and we have some nice active classes to represent the state of formatting. One last thing we should deal with is how users provide content. Unfortunately users won't just click and type within our editable element, it's highly likely that at some point users will paste content.

Pasted content can be a nightmare. It's impossible to deal with all of the possible combinations of nightmare that can be caused pasting from things like Microsoft Word, so we'll have to do our best to deal with things as a whole. 

# Handling paste 

```
function onPaste(event) {
    event.preventDefault();

    var text;

    if (event.clipboardData) {
      text = event.clipboardData.getData('text/plain');
      var html = event.clipboardData.getData('text/html');
    } else if (window.clipboardData) {
      text = window.clipboardData.getData('Text');
      var url = window.clipboardData.getData('URL');
    }
  }
```