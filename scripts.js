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
});
});


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
