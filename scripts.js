var $title = $('#title')
var $url = $('#url')
var $create = $('#create')
var clearField = function() {
  $title.val('');
  $url.val('');
}


$create.on('click', function() {
  validateInputs()
  addLink()
  countAll();
  clearField()
  $create.attr('disabled', 'disabled')
  $('h3').text('Please check to mark as read!');
});

$('.list').on('click', '.markAsRead', function() {
  $(this).parent().toggleClass('read');
  $(this).parent().toggleClass('unread');
  countAll();
});

$('.list').on('click', '.remove', function() {
  $(this).parent().remove();
  countAll();
});

enableBtn()

function addLink() {
    $('ul').append(`
   <li class="unread">
   <span class='title'>${$title.val()}</span>
   <a href="${$url.val()}" target="_blank" class='url'>${$url.val()}</a>
   <button class='remove'>Remove</button>
   <input type='checkbox' class='markAsRead'></input>
   </li>
 `);
}

function enableBtn() {
  if ($('#url').val() === "" || $title.val() === "") {
    return $create.attr('disabled', true); }
  if ($('#url').val() !== "" && $('#bookmark-title').val() !== "") {
    return $create.attr('disabled', false);}
}

  function validateInputs(){
    if ($url.val() === '' || $title.val() === '') {
      alert("ERROR: Please enter Bookmark Information");
    }
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
