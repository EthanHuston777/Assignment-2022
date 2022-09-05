//-----------------------------------------------------
//CURTAIN MENU
function openNav() {
	document.getElementById("curtain-nav").style.width = "40%";			
}

function closeNav() {
	document.getElementById("curtain-nav").style.width = "0%";			
}		

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Data: assume we have a list of 5 items
let topItems = [{id: 0, title:"GGPC 3060", image_url: "MEDIA/Javascript/item0.png", description:"Prebuilt gaming pc, containing an i7-10700F, Nvidia RTX 3060, 16GB of RAM and 500GB of SSD capacity."},
	             {id: 1, title:"Logitech G502 Hero", image_url: "MEDIA/Javascript/item1.png", description:"High performance wired RGB gaming mouse, right handed with 25,6000 max dpi."},
				 {id: 2, title:"MSI Titan GT77 12UHS", image_url: "MEDIA/Javascript/item2.png", description:"Gaming laptop, containing ani-9 12900HX, 64GB of RAM, 2TB of SSD, Nvidia RTX 3080 Ti."},
				 {id: 3, title:"Steelseries Apex Pro", image_url: "MEDIA/Javascript/item3.png", description:"Adjustable mechanical gaming keyboard that adjusts for personal comfort, omnipoint mechanical switch type."},
				 {id: 4, title:"AOC 27G2SE Gaming Monitor", image_url: "MEDIA/Javascript/item4.png", description:"27 inch mgaming monitor, with 165Hz refresh rate, 2K resolution and a 1ms response time."}
				 ];
				 
				 
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Two slideshows
//Manual Slideshow
let manualIndex = 0;
function nextItem() {
	//Increase the index by 1 if the index <= the length of topItems array
	//if the index == 4, move back to first item: index=0
	if (manualIndex < topItems.length - 1) {
		manualIndex++;
	} else {
		manualIndex = 0;
	}
	
	//Extract the title, image_url and display on HTML elements
	document.getElementById("manual-slide-title").innerHTML = topItems[manualIndex].title;
	document.getElementById("manual-slide-image").src = topItems[manualIndex].image_url;
}

function previousItem() {
	//Increase the index by 1 if the index <= the length of topItems array
	//if the index == 4, move back to first item: index=0
	if (manualIndex > 0) {
		manualIndex--;
	} else {
		manualIndex = topItems.length - 1;
	}
	
	//Extract the title, image_url and display on HTML elements
	document.getElementById("manual-slide-title").innerHTML = topItems[manualIndex].title;
	document.getElementById("manual-slide-image").src = topItems[manualIndex].image_url;
}

//Automatic Slideshow
let = autoIndex = 0;
function autoSlideShow() {
	//Change the autoIndex
	if (autoIndex < topItems.length - 1) {
		autoIndex++;
	} else {
		autoIndex = 0;
	}
	
	//Extract the title, image_url and display on HTML elements
	document.getElementById("auto-slide-title").innerHTML = topItems[autoIndex].title;
	document.getElementById("auto-slide-image").src = topItems[autoIndex].image_url;
	
	//Wait 2 seconds
	setTimeout(autoSlideShow, 2000);//wait 2 seconds
}
autoSlideShow();




//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Dropdown menubar for items

//Popuate the "select" element with all items in the list
function loadItems() {
	//Find the select Element
	let itemSelect = document.getElementById("myItemList");
	//Loop through all items in the list (array) and extract it's title
	//and add to the select Element
	for(var ITE=0; ITE < topItems.length; ITE++) {
		//Extract titla and add to select element
		//Create a new option
		let optionNode = document.createElement("option");
		//Assign the option "value"
		optionNode.value = topItems[ITE].id.toString();
		//Assign the option "textContent"
		optionNode.textContent = topItems[ITE].title.toString();
		//Append this option to the "select" element
		itemSelect.appendChild(optionNode);
	}
	//Set the first item as selected option in drop-down list
	itemSelect.selectedIndex= "0";	
}
//Execute the loadItems() when loading he website
loadItems();



//When user selects a particular item, display item name, picture and description
function displayMyItem() {
	//Get the selected item "option value"
	let selectedItemIndex = document.getElementById("myItemList").value;
	document.getElementById("selectedItemTitle").innerHTML = topItems[selectedItemIndex].title;
	document.getElementById("selectedItemDescription").innerHTML = topItems[selectedItemIndex].description;
	document.getElementById("selectedItemURL").src = topItems[selectedItemIndex].image_url;
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//ADD NEW MOVIE TO THE LIST
//Add a new item to the existing list
function AddItemToList() {
	//Get entered item data
	let newItemTitle = document.getElementById("my-item-title").value;
	let newItemDescription = document.getElementById("my-item-description").value;
	let newItemUrl = document.getElementById("my-item-image-url").value;
	let newId = topItems.length;
	//Validate input before adding new item
	if ((newItemTitle == "") || (newItemDescription == "") || (newItemUrl == "")) {
		alert("ERROR. DATA IS INCOMPLETE!");
	} 
	else {
		//Add a new item
		topItems.push({id: newId, title: newItemTitle, description: parseInt(newItemDescription), image_url: newItemUrl});
		//document.write(allAccounts[1].user + "," + allAccounts[1].pass);
		alert("NEW ITEM ADDED SUCCESSFULLY!");
		//Reload the drop-down list
		//Remove all current options
		document.getElementById("my-itemList").options.length = 0;
		//Load updated options
		loadMyItems();
		//Empty the inputs
		document.getElementById("my-item-title").value = "";
		document.getElementById("my-item-description").value = "";
		document.getElementById("my-item-image-url").value = "";
	}
} 



//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Dropdown menubar for colors
//List of different colours
let topColors = [{id:0, color:"White"}, 
				 {id:1, color:"Green"}, 
				 {id:2, color:"Blue"}, 
				 {id:3, color:"Yellow"}, 
				 {id:4, color:"Red"}, 
				 {id:5, color:"Aqua"}];

//Popuate the "select" element with all colors in the list
function loadColors() {
	//Find the select Element
	let colorSelect = document.getElementById("myColorList");
	//Loop through all colors in the list (array) and extract it's color
	//and add to the select Element
	for(var COL=0; COL < topColors.length; COL++) {
		//Extract color and add to select element
		//Create a new option
		let optionColorNode = document.createElement("option");
		//Assign the option "value"
		optionColorNode.value = topColors[COL].id.toString();
		//Assign the option "textContent"
		optionColorNode.textContent = topColors[COL].color.toString();
		//Append this option to the "select" element
		colorSelect.appendChild(optionColorNode);
	}
	//Set the first color as selected option in drop-down list
	colorSelect.selectedIndex= "0";	
}
//Execute the loadColors() when loading he website
loadColors();

//When user selects a particular color, display that color as background
function displayMyColor() {
	//Get the selected color "option value"
	let selectedColorIndex = document.getElementById("myColorList").value;
	document.body.style.backgroundColor = topColors[selectedColorIndex].color;
}


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Dropdown menubar for fontsize change
//List of different font sizes
let topFontSizes = [{id:0, fontsize:"Medium", classname:"medium"}, 
					{id:1, fontsize:"Big", classname:"x-large"}, 
					{id:2, fontsize:"Small", classname:"x-small"}];

//Popuate the "select" element with all fontSizes in the list
function loadFontSizes() {
	//Find the select Element
	let fontSizeSelect = document.getElementById("myFontSizeList");
	//Loop through all fontSizes in the list (array) and extract it's fontsize
	//and add to the select Element
	for(var FSL=0; FSL < topFontSizes.length; FSL++) {
		//Extract titla and add to select element
		//Create a new option
		let optionFontSizeNode = document.createElement("option");
		//Assign the option "value"
		optionFontSizeNode.value = topFontSizes[FSL].id.toString();
		//Assign the option "textContent"
		optionFontSizeNode.textContent = topFontSizes[FSL].fontsize.toString();
		//Append this option to the "select" element
		fontSizeSelect.appendChild(optionFontSizeNode);
	}
	//Set the first fontSize as selected option in drop-down list
	fontSizeSelect.selectedIndex= "0";	
}
//Execute the loadFontSizes() when loading he website
loadFontSizes();

//When user selects a particular fontSize, display title/url/description of that fontSize
function displayMyFontSize() {
	//Get the selected font size "option value"
	let selectedFontSizeIndex = document.getElementById("myFontSizeList").value;
	document.getElementById("demo").style.fontSize = topFontSizes[selectedFontSizeIndex].classname;
}


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//ADD NEW COMMENT
//Data: Assume we have a list of existing comments stored in an array "allComments"
let allComments = [{name: "Steven", comment: "Nice"},
				   {name: "Matt", comment: "Looks great and feels great"},
				   {name: "Ethan", comment: "It's pretty good for the price, although can definitely get cheaper by buying parts seperately"},
				   ];
				   
//----------
//Load all existing comments and display them on HTML
function loadComments() {
	//Loop through all comments in the array "allComments"
	for (var COM=0; COM < allComments.length; COM++) {
		let name = allComments[COM].name;
		let comment = allComments[COM].comment;
		//
		//Create a new HTML node/element <P> to display this comment
		let node = document.createElement("P");
		let textnode = document.createTextNode(name + ": " + comment);
		node.appendChild(textnode);//Append the content (created TextNode) to the HTML Node (child)
		let parrent_node = document.getElementById("comment-list");//Get the id of parent node "commentlist"
		parrent_node.appendChild(node);//Append the above child HTML node to the parent node
	}
}

//Call to run this loadComments function when the webpage is loaded.
loadComments();
//----------
//Add a new comment
function addComment() {
//Get entered value/data by user
let enteredCommentName = document.getElementById("comment_name").value;
let enteredCommentText = document.getElementById("comment_text").value;
//Add this new comment to the array
allComments.push({name: enteredCommentName, comment: enteredCommentText});
alert("Thank you for your comment!");
//Display this new comment on HTML page
//Create a new child HTML node/element as "<p>" (paragraph) (as a child node)
let node = document.createElement("P");
//Create a new TextNode
let textnode = document.createTextNode(enteredCommentName + ": " + enteredCommentText);
//Append the content (created TextNode) to the HTML Node (child)
node.appendChild(textnode);
//Get the id of parent node "comment-list"
let parrent_node = document.getElementById("comment-list");
//Append the above child HTML node to the parent node
parrent_node.appendChild(node);
//Clear comment box
document.getElementById("comment_name").value = "";
document.getElementById("comment_text").value = "";
} 


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function loadRSSFeed() {
	//Configure RSS Feed to url and load proxy
	let url = "https://www.nasa.gov/rss/dyn/breaking_news.rss";
	let proxy = "https://cors-anywhere.herokuapp.com/";
		//CORS API website as proxy to pass through CORS issue
	
	//2: Create an XMLHttpRequest object
	let xhttp = new XMLHttpRequest();
	
	//3: Send this request from browser to web server
	xhttp.open("GET", proxy + url, true);//true: asynchronus transaction
								 //false: synchronus transaction
	xhttp.send();
	
	//4: Wait the response until the state changes to ready
	xhttp.onreadystatechange = function() {
		//Check if the response is valid or not
		if (this.readyState == 4 && this.status == 200) {
			//Response is goo and received XML file successfully
			//Load this XML file into "contact" element
			parserRSS(this);
		}
	
	};
	
	function parserRSS(rss) {
		let txt, nodes;
		txt = "";
		const items = rss.responseXML.getElementsByTagName("item");
		
		for (let i = 0; i < items.length; i++) {
			//console.log(items[i].children);
			nodes = items[i].children;
			let title, pubdate, description, link;
			for (let j = 0; j < nodes.length; j++) {
				//console.log(nodes);
				if (nodes[j].tagName == "title") {
					title = nodes[j].childNodes[0].nodeValue;
				} else if (nodes[j].tagName == "link") {
					link = nodes[j].childNodes[0].nodeValue;
				} else if (nodes[j].tagName == "description") {
					description = nodes[j].childNodes[0].nodeValue;
				} else if (nodes[j].tagName == "pubDate") {
					pubdate = nodes[j].childNodes[0].nodeValue;
				}
			}
				//Set the txt string as HTML format.
				txt +=  `<div class = "col-12 col-md-5 card">
							<div class="item">
								<h4>${title}</h4>
								<p class="p-1" id="contact1">${description}</p>
								<p>${pubdate}</p>
								<a href="${link}">Read More Here</a>
							</div>
						</div>`;
						
			document.getElementById("rssFeed").innerHTML = txt;
		}
	}
}
	