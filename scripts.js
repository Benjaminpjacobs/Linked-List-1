var bookmarkTitle = $('#cool')

$(function() {
  $('#cool').css("color","red")
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
  // $('#create').click( function() {
  //   if ($('#url').val() === '' || $('#title').val() === '') {
  //     alert("ERROR: Please enter Bookmark Information"); }
  //   });

  clearField()
  enableBtn()

  //to create counter,
  //$('.counter').html('<p>' BookmarkCounter + ' total bookmark(s). </p>');
  //$('.counter').append('<p>'unreadCounter + 'unread bookmark(s). </p>');
  //bookmarkCounter() { $('.bookmarkTitle').length});
  //readcounter() { $('.read').length}
  //unreadCounter() { ($('.bookmarkTitle').length - $('.read').length)};
