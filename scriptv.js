const video = document.getElementById('remote_video');
$("#sound").on('click', function () {
  if(video.muted){
    $("#speaker").attr('src', 'img/sp_on.png'); // KX
    video.muted = false;
  }else{
    $("#speaker").attr('src', 'img/sp_off.png'); // KX
    video.muted = true;
  }
});
//connect();
//video.className = "rotate90";
window.setTimeout(function(){
  connect();
  video.className = "rotate90";
  $("#sound").css('visibility', 'visible'); // 20240304
}, 1000);
