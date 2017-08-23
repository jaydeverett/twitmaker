// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener("DOMContentLoaded", function(event) {

  var newTweet = document.querySelector('#new_tweet');

  newTweet.addEventListener('submit', function(eventObject) {
    eventObject.preventDefault();

    var tweetElement = document.querySelector('.tweet');
    var tweetList = document.querySelector('.tweets');
    var tweetInput = tweetElement.value;

  $.ajax( {
    url: this.getAttribute('action'),
    method: this.getAttribute('method'),
    data: $(this).serialize(),
    dataType: 'json'
  }).done(function (data) {
    console.log(data);

    var newElement = document.createElement('li');
    var newP = document.createElement('p');
    newP.innerText = data.message;
    newElement.append(newP);
    var newTime = document.createElement('time');
    newTime.innerText = new Date();
    newElement.append(newTime);
    newElement.classList = 'tweet';
    tweetList.prepend( newElement );

    newTweet.reset();

    var button = document.querySelector('#create-tweet');
    button.removeAttribute('disabled');
    button.removeAttribute('data-disable-with');    
  });

  });
})
