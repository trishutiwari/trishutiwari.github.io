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
 addbars(['Python','HTML','CSS','Javascsript','JQuery','PHP','Java','SQL','InfluxQL','Redis'],[0.75,1,0.8,0.5,0.75,0.25,0.40,0.25,0.75,0.65]);
 checkHeight();
 $(".sub").click(function () {
   var text = $(this).text();
   if (text === 'Web') {
    addbars(['HTML','CSS','Javascsript','JQuery','PHP'],[1,0.8,0.5,0.75,0.25]);
   }
   else if (text === 'Languages') {
    addbars(['Python','Java'],[0.75,0.40]);
   }
   else if (text === 'Databases') {
   addbars(['SQL','InfluxQL','Redis'],[0.25,0.75,0.65]);
   }
   else {
   addbars(['Python','HTML','CSS','Javascsript','JQuery','PHP','Java','SQL','InfluxQL','Redis'],[0.75,1,0.8,0.5,0.75,0.25,0.40,0.25,0.75,0.65]);
   }
  checkHeight();
  });
}

$(document).ready(main);

