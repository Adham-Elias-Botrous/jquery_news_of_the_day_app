$(document).ready(function() {
  var url = 'https://hn.algolia.com/api/v1/search?query=javascript';
  $.getJSON(url, function(data) {
    var currentQuote = '';
    var quotes = data.hits;
    $('.read').on('click', function() {
      currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
      $('.quoteTitle').html(
        `<a href=${currentQuote.url} target='blank'>${currentQuote.title}</a>`
      );
      $('.quoteAuthor').html(
        'Author: <strong>' + currentQuote.author + '</strong>'
      );
      $('.tweetQuote')
        .attr('target', '_blank')
        .attr(
          'href',
          `https://twitter.com/intent/tweet?text=${currentQuote.title}%0a${currentQuote.url}`
        );
      $('.tweetQuote').removeClass('disabled');
      $('.read').text('Next news');
      console.log(currentQuote);
    });
  });
});
