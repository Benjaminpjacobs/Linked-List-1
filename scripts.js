var $title = $('#title')
var $url = $('#url')
var $read = $('.read')
var $create = $('#create')
var $data = $('li')


$('.list').on('click', function() {
  countAll();
});


$('#create').on('click', function() {
  validateInputs()
  $('ul').append(`
    <li class="unread">
    <span class='title'>${$title.val()}</span>
    <span class='url'>${$url.val()}</span>
    <button class='remove'>Remove</button>
    <input type='checkbox' class='markAsRead'></input>
    </li>
  `);
  clearField()
  $('#create').attr('disabled', 'disabled')
  countAll();
});


$('.list').on('click', '.markAsRead', function() {
  $(this).parent().toggleClass('read');
  $(this).parent().toggleClass('unread');
});
  $('.list').on('click', '.remove', function() {
    $(this).parent().remove();
  });
  $('#create').on('click', function(){
    $('h3').text('Please check to mark as read!');
  });

function enableBtn() {
  if ($('#url').val() === "" || $('#title').val() === "") {
    return $('#create').attr('disabled', true); }
  if ($('#url').val() !== "" || $('#bookmark-title').val() !== "") {
    return $('#create').attr('disabled', false);}
}

  var clearField = function() {
    $('#title').val('');
    $('#url').val('');
  }
  //comment out enableBtn on create button to see error
  function validateInputs(){
    if ($('#url').val() === '' || $('#title').val() === '') {
      alert("ERROR: Please enter Bookmark Information"); }
  }


function countLinks(){
  return $('li').length
}

function totalReadLinks() {
  return $('.read').length
}

function unreadLinks() {
  return $('.unread').length
}

function countAll () {
  $('.link-counter').text('Number of Links: ' + countLinks());
  $('.read-links').text('Number of Read Links: ' + totalReadLinks());
  $('.unread-links').text('Number of Unread Links: ' + unreadLinks());
}

enableBtn()
