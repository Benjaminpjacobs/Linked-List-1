var $title = $('#title')
var $url = $('#url')
var create = $('#create')


$(function() {
// When the user clicks on the button for creating the bookmark, it should be added to the bookmarks section
$('#create').on('click', function() {
  $('ul').append(`
    <li>
    <span class='title'>${$title.val()}</span>
    <span class='url'>${$url.val()}</span>
    <button class='remove'>Remove</button>
    <input type='checkbox' class='markAsRead'></input>
    <li>
  `);
  clearField()
});
});


function enableBtn() {
  if ($('#url').val() === "" && $('#title').val() === "") {
    return $('#create').attr('disabled', true); }
  if ($('#url').val() !== "" && $('#bookmark-title').val() !== "") {
    return $('#create').attr('disabled', false);}
}

  var clearField = function() {
    $('#title').val('');
    $('#url').val('');
  }
  //Uncomment section and remove disable on create button to see error
  // $('#create').click( function() {
  //   if ($('#url').val() === '' || $('#title').val() === '') {
  //     alert("ERROR: Please enter Bookmark Information"); }
  //   });

  
  enableBtn()

  //to create counter,
  //$('.counter').html('<p>' BookmarkCounter + ' total bookmark(s). </p>');
  //$('.counter').append('<p>'unreadCounter + 'unread bookmark(s). </p>');
  //bookmarkCounter() { $('.bookmarkTitle').length});
  //readcounter() { $('.read').length}
  //unreadCounter() { ($('.bookmarkTitle').length - $('.read').length)};


//   When the user clicks on the “Mark as Read” button:
// A class of .read should be added to the bookmark
// If it already has the class of .read, it should be removed
// $('markAsRead').on('click', function() {
//   $(this).tr().toggleClass('read');
// });
// // When the user clicks on the “Remove” button, the link should be removed from the page
// $('remove').on('click', function() {
//   var row = $(this).closest('tr');
//   row.remove()
// });
