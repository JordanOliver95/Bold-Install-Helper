$(document).ready(function() {
  createButtons();
});

function createButtons() {
  bhCssFile = $('.bhCssFile');
  if (bhCssFile.length === 0)
    {
   bhCssFile = $('<input type="button" value="CSS" class="btn bh-btn bhCssFile" />');
   bhCssFile.prependTo($('.theme-asset-actions'));
   bhCssFile.click(function(){
     createBoldCss();
   });
  }
  bhBoldHelpers = $('.bhBoldHelpers');
  if (bhBoldHelpers.length === 0)
    {
   bhBoldHelpers = $('<input type="button"  value="Bold Helper Functions" class="btn bh-btn bhBoldHelpers" />');
   bhBoldHelpers.prependTo($('.theme-asset-actions'));
   bhBoldHelpers.click(function(){
     createBoldHelpers();
   });
  }
}
function createBoldCss()
{
  debugger
  $('.add-theme-asset')[4].click();

  setTimeout(function(){
 $('*[data-tab="blank"]')[0].click();
  $('.next-input', '#modal_container')[0].value = "bold-helper-custom";
  $('#new-asset-extension')[0].value = ".css";
  var submitBtn = $($('.js-btn-primary')[1]);
  $('#new-asset-extension').trigger('change');
  $('.next-input', '#modal_container').keyup();
  if(!submitBtn.hasClass('hide'))
  {
    submitBtn[0].click()
  }
  else
  {
    $('.close-modal').click();
  }
}, 500);
  console.log("hi hey there hello");
}
function createBoldHelpers()
{
  console.log("Hey Hi Hello");
}
