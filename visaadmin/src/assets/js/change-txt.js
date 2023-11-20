$('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });

 /**
 * Change the text of a button
 * @param {el} object HTMLElement: button to change text of
 * @param {dText} string: default text
 * @param {nText} string: new text
 **/
function changeText(el, dText, nText) {
  var content = '',
      context = '';
  
  /**
   * Set the text of a button
   *     - dependant upon current text
   **/
  function setText() {
    return (content === dText) ? nText : dText;
  }
  
  /* Check to see if the browser accepts textContent */
  if ('textContent' in document.body) {
    context = 'textContent';
    /* Get the current button text */
    content = el[context];
  /* Browser does NOT use textContent */
  } else {
    /* Get the button text with fallback option */
    content = el.firstChild.nodeValue;
  }
  
  /* Set button text */
  if (context === 'textContent') {
    el.textContent = setText();
  } else {
    el.firstChild.nodeValue = setText();
  }
}

var defaultText,
    substituteText,
    btn;

/* Default text of the button */
defaultText = 'Hide Change Log';
/* Alternate text for button */
substituteText = 'Show Change Log';
/* Grab our button */
btn = document.querySelector('.btn-change');

/* Add a listener to the button instance so we can manipulate it */
btn.addEventListener('click', function() {
  changeText(this, defaultText, substituteText);
}, false);


var UL = document.getElementById("myUL");
  // hilde the list by default
  UL.style.display = "none";
  
  var searchBox = document.getElementById("myInput");
  
  // show the list when the input receive focus
  searchBox.addEventListener("focus",  function(){
      // UL.style.display = "block";
  });
  
  // hide the list when the input receive focus
  searchBox.addEventListener("blur", function(){
      UL.style.display = "none";
  });
  
  
  function myFunction() {
      var input, filter, ul, li, a, i;
      input = document.getElementById("myInput");
      ul = document.getElementById("myUL");
      filter = input.value.toUpperCase();
      // if the input is empty hide the list
      if(filter.trim().length < 1) {
          ul.style.display = "none";
          return false;
      } else {
          ul.style.display = "block";
      }
      
      li = ul.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          
          // This is when you want to find words that contain the search string
       if (a.innerHTML.toUpperCase().indexOf(filter) > -1) { 
          li[i].style.display = "";
       } else {
          li[i].style.display = "none";
      } 
      
      // This is when you want to find words that start the search string
      /*if (a.innerHTML.toUpperCase().startsWith(filter)) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }*/
      }
  }