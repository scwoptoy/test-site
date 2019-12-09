
// Change Heading 1 to say Hello World - two forward slashes denote a comment

/*
All text between forward slash and asterisk is considered a comment. 
Use this comment method whenever you need line breaks.
*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}