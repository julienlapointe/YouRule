// Inspired by: https://jsfiddle.net/Marco_Bernardini/odyxae12/3/
// Built with: https://github.com/lukePeavey/SplitType

window.onload = function highlightLineOnHover() {

	// var paragraphs = document.getElementsByTagName('div');

	var array = [];
	// var foundFirstHeading = false;
	// var foundLastParagraph = false;

    var elements = document.body.querySelectorAll('h1, h2, h3, h4, h5, h6, p, pre, span, article, section, blockquote, ol, ul, li, strong, b, em')

	// https://stackoverflow.com/questions/17727977/how-to-get-all-text-from-all-tags-in-one-array
    for (var i = 0; i < elements.length; i++) {
       var current = elements[i];
	   // Check the element has no children and that it is not empty
        if (current.children.length === 0 && current.textContent.replace(/ |\n/g,'') !== '') {
			var element = [];
			element.push(current.nodeName);
			element.push(current.textContent);
			array.push(element);
        }
    }

	// Splits text into lines, words, characters (default)
	// const splitType = new SplitType('h1, h2, h3, h4, h5, h6, p, pre, span, article, section, blockquote, ol, ul, li, strong, b, em', { types: 'lines', lineClass: 'highlightLineOnHover' } );
	const splitType = new SplitType('.overlayContent', { types: 'lines', lineClass: 'highlightLineOnHover' } );
	console.log(splitType);

	browser.browserAction.onClicked.addListener(function() {console.log("Clicked!")});

}
