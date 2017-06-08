var addbars = function (skills, proficiency) {
 $(".skills").remove();
 $('.bk0').append('<div class="skills"></div>');
 for (var i=0; i < skills.length; i++ ) {
  $(".skills").append("<div class='fullbar'><div class='bar' style='width:"+proficiency[i]*100+"%;background-color:rgba(153, 0, 61,"+proficiency[i]+")'><p style='position:absolute;top:35%;left:5px;font-family:monospace;'>"+skills[i]+"</p></div></div>");
  }
  $(".skills").append("<table class='outscale'><thead><tr><th class='scale'></th><th class='scale'></th><th class='scale'></th><th class='scale'></th></tr></thead> </table>");
  }

var checkHeight = function () {
 if ($('.scale').css('height') === '0px') { //wierd bug in firefox and ie that won't accept percentages for heights
  var height = $('.outscale').css('height');
  $('.scale').css('height',height);
  }
 }

var main = function () {
 addbars(['Python','Java','C/C++','HTML','CSS','Javascsript/JQuery'],[0.85,0.65,0.85,1,0.8,0.5]);
 checkHeight();
 $(".sub").click(function () {
   var text = $(this).text();
   if (text === 'Web') {
    addbars(['HTML','CSS','Javascsript/JQuery','Django'],[1,0.8,0.5,0.25]);
   }
   else if (text === 'Languages') {
    addbars(['Python','Java','C/C++'],[0.85,0.65,0.85]);
   }
   else if (text === 'Cyber Sec') {
   	addbars(['Web','Reverse Eng','Networks'],[0.65,0.25,0.75]);
   }
   else {
	addbars(['Android Dev','InfluxDB','Algorithms','OS'],[0.65,0.75,0.75,0.25]);
   }
  checkHeight();
  });
}

$(document).ready(main);

