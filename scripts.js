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

	for (var i = 0; i < array.length; i++) {
		var element = document.createElement("H1");
		var text = document.createTextNode(array[i][1]);
		element.appendChild(text);
		document.body.appendChild(element);
		// $("#overlay").appendChild(element);
		console.log(element);
		// console.log(array[i][1]);
	}

	var stringifiedElements = '';

	for (var i = 0; i < array.length; i++) {
		switch(array[i][0]) {
			case "H1":
				stringifiedElements += "<h1 class='overlayContent'>" + array[i][1] + "</h1>";
				break;
			case "H2":
				stringifiedElements += "<h2 class='overlayContent'>" + array[i][1] + "</h2>";
				break;
			case "H3":
				stringifiedElements += "<h3 class='overlayContent'>" + array[i][1] + "</h3>";
				break;
			case "H4":
				stringifiedElements += "<h4 class='overlayContent'>" + array[i][1] + "</h4>";
				break;
			case "H5":
				stringifiedElements += "<h5 class='overlayContent'>" + array[i][1] + "</h5>";
				break;
			case "H6":
				stringifiedElements += "<h6 class='overlayContent'>" + array[i][1] + "</h6>";
				break;
			case "P":
				stringifiedElements += "<p class='overlayContent'>" + array[i][1] + "</p>";
				break;
			case "PRE":
				stringifiedElements += "<pre class='overlayContent'>" + array[i][1] + "</pre>";
				break;
			// case "SPAN":
			// 	stringifiedElements += "<span class='overlayContent'>" + array[i][1] + "</span>";
			// 	break;
			case "ARTICLE":
				stringifiedElements += "<article class='overlayContent'>" + array[i][1] + "</article>";
				break;
			case "SECTION":
				stringifiedElements += "<section class='overlayContent'>" + array[i][1] + "</section>";
				break;
			case "BLOCKQUOTE":
				stringifiedElements += "<blockquote class='overlayContent'>" + array[i][1] + "</blockquote>";
				break;
			case "OL":
				stringifiedElements += "<ol class='overlayContent'>" + array[i][1] + "</ol>";
				break;
			case "UL":
				stringifiedElements += "<ul class='overlayContent'>" + array[i][1] + "</ul>";
				break;
			case "LI":
				stringifiedElements += "<li class='overlayContent'>" + array[i][1] + "</li>";
				break;
			case "STRONG":
				stringifiedElements += "<strong class='overlayContent'>" + array[i][1] + "</strong>";
				break;
			case "B":
				stringifiedElements += "<b class='overlayContent'>" + array[i][1] + "</b>";
				break;
			case "EM":
				stringifiedElements += "<em class='overlayContent'>" + array[i][1] + "</em>";
				break;
			default:

		}
	}

	console.log(stringifiedElements);

	stringifiedElementsTrimmed = stringifiedElements.slice(stringifiedElements.indexOf('<h'), stringifiedElements.lastIndexOf('</p>')+4);

	console.log(stringifiedElementsTrimmed);

	var docHeight = $(document).height();

	$("body").append("<div id='overlay'>" + stringifiedElements + "</div>");

	$("#overlay")
		.height(docHeight)
		.css({
			'opacity' : 1,
			'position': 'absolute',
			'top': 0,
			'left': 0,
			'background-color': 'lightblue',
			'width': '100%',
			'z-index': 99999999
		});

	// Splits text into lines, words, characters (default)
	// const splitType = new SplitType('h1, h2, h3, h4, h5, h6, p, pre, span, article, section, blockquote, ol, ul, li, strong, b, em', { types: 'lines', lineClass: 'highlightLineOnHover' } );
	const splitType = new SplitType('.overlayContent', { types: 'lines', lineClass: 'highlightLineOnHover' } );
	console.log(splitType);

	browser.browserAction.onClicked.addListener(function() {console.log("Clicked!")});

}
