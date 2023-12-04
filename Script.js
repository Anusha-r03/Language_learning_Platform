$(document).ready(function() {
    $('.video-list a').on('click', function(e) {
      e.preventDefault();
      var videoId = $(this).data('video');
      var videoUrl = 'https://www.youtube.com/embed/' + videoId;
      $('.video-frame').attr('src', videoUrl);

    var videoText = $(this).siblings('p').text(); 
    $('.primary-video h2').text(videoText);
    });
  });
  