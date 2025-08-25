
//adds an event listener to the form
document.querySelector("form").addEventListener("submit", function(e) {
  //prevents the default behaviour of the form submission
  e.preventDefault();
  //alert message 
  alert("Message Sent Successfully!");
});
