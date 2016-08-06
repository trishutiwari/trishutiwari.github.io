var main = function () {
$('.arrow').click(function () {
 $('.message').remove();
 $(".contentdiv").append('<div class="message"><div class="alert alert-warning"><a href="#" class="close" data-dismiss="alert" style="color:black;">&times;</a><strong>Like it? </strong>Come later to read more!.</div><div>')
 });
}

$(document).ready(main);
