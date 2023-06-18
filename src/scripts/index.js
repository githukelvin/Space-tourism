  let li = document.querySelectorAll("li");
// Define the click event handler function
function handleClick(event) {
  // Remove the class from the previously clicked element (if any)
  const previouslyClicked = document.querySelector('.active');
  if (previouslyClicked) {
    previouslyClicked.classList.remove('active');
  }

  // Add the class to the clicked element
  event.parent.classList.add('active');
}

// Attach the click event listener to each element
li.forEach(function (element) {
  element.addEventListener('click', handleClick);
});