// Inspired by: https://jsfiddle.net/Marco_Bernardini/odyxae12/3/
// Built with: https://github.com/lukePeavey/SplitType

window.onload = function highlightLineOnHover() {

	// var paragraphs = document.getElementsByTagName('div');

	// Splits text into lines, words, characters (default)
	// const splitType = new SplitType('h1, h2, h3, h4, h5, h6, p, pre, span, article, section, blockquote, ol, ul, li, strong, b, em', { types: 'lines', lineClass: 'highlightLineOnHover' } );
	const splitType = new SplitType('.overlayContent', { types: 'lines', lineClass: 'highlightLineOnHover' } );
	console.log(splitType);

	browser.browserAction.onClicked.addListener(function() {console.log("Clicked!")});

}
