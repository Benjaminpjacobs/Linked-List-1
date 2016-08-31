var $title = $('#title')
var $url = $('#url')
var $create = $('#create')


$(function() {
// When the user clicks on the button for creating the bookmark, it should be added to the bookmarks section
$('#create').on('click', function() {
  $('ul').append(`
    <li>
    <span class='title'>${$title.val()}</span>
    <span class='url'>${$url.val()}</span>
    <button class='remove'>Remove</button>
    <input type='checkbox' class='markAsRead'></input>
    <label for="checkbox_id">mark as read</label>
    <li>
  `);
  clearField()
});
  $('.list').on('click', '.markAsRead', function() {
    $(this).parent().toggleClass('.read');
  });
  $('.list').on('click', '.remove', function() {
    $(this).parent().remove();
  });
});


function enableBtn() {
  if ($('#url').val() === "" && $('#title').val() === '') {
    return $('#create').attr('disabled', true); }
  if ($('#url').val() !== "" && $('#bookmark-title').val() !== '') {
    return $('#create').attr('disabled', false);}
}

  var clearField = function() {
    $('#title').val('');
    $('#url').val('');
  }
  //remove disable on create button to see error
  $('#create').click( function() {
    if ($('#url').val() === '' || $('#title').val() === '') {
      alert("ERROR: Please enter Bookmark Information"); }
    });

  enableBtn()

  //to create counter,
  //$('.counter').html('<p>' BookmarkCounter + ' total bookmark(s). </p>');
  //$('.counter').append('<p>'unreadCounter + 'unread bookmark(s). </p>');
  //bookmarkCounter() { $('.bookmarkTitle').length});
  //readcounter() { $('.read').length}
  //unreadCounter() { ($('.bookmarkTitle').length - $('.read').length)};
