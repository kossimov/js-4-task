var elForm = document.querySelector(".js-form");
var elInput = elForm.querySelector(".js-input");
var elTextarea = elForm.querySelector(".js-textarea");
var elText = elForm.querySelector(".js-text");



elForm.addEventListener("submit", function(evt){

  evt.preventDefault();

  var elInputValue = elText.textContent.indexOf(elInput.value.trim());
  var elTextareaValue = elText.textContent.indexOf(elTextarea.value.trim());

  console.log(elText.textContent.slice(elInputValue , elTextareaValue));
})