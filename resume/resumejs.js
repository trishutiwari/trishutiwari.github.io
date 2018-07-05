var addbars = function (skills, proficiency) {
 $(".skills").remove();
 $('.bk0').append('<div class="skills"></div>');
 for (var i=0; i < skills.length; i++ ) {
  $(".skills").append("<div class='fullbar'><div class='bar' style='width:"+proficiency[i]*100+"%;background-color:rgba(153, 0, 61,"+proficiency[i]+")'><p style='position:absolute;top:35%;left:5px;font-family:monospace;'>"+skills[i]+"</p></div></div>");
  }
  // $(".skills").append("<table class='outscale'><thead><tr><th class='scale'></th><th class='scale'></th><th class='scale'></th><th class='scale'></th></tr></thead> </table>");
  }

// var checkHeight = function () {
//  if ($('.scale').css('height') === '0px') { //wierd bug in firefox and ie that won't accept percentages for heights
//   var height = $('.outscale').css('height');
//   $('.scale').css('height',height);
//   }
//  }

var main = function () {
 addbars(['Computer Networks (Prof. Matta)','Cyber Security (Prof. Egele)','IoT Security (Prof. Starobinski)','Android Side Channels (Prof. Trachtenberg)','Microprocessors (Prof. Montazam)','Computer Organization (Prof. Herbordt)'],[0.75,0.7,0.75,1,0.8,0.9]);
 // checkHeight();
 $(".sub").click(function () {
   var text = $(this).text();
   if (text === 'Senior') {
    addbars(['Advances in Cybersec (Prof. Trachtenberg)','Operating Systems (Prof. Kreiger)','Senior Thesis (Prof. Trachtenberg)'],[0.95,0.8,0.8]);
   }
   else if (text === 'Junior') {
    addbars(['Computer Networks (Prof. Matta)','Cyber Security (Prof. Egele)','IoT Security (Prof. Starobinski)','Android Side Channels (Prof. Trachtenberg)','Microprocessors (Prof. Montazam)','Computer Organization (Prof. Herbordt)'],[0.75,0.7,0.75,1,0.8,0.9]);
   }
   else if (text === 'Sophomore') {
   	addbars(['C++ (Prof. Densmore)','Data Structures & Algo (Prof. Trachtenberg)','Probability (Prof. Goyal)','Circuits (Prof. Sergienko)','Logic Design (Prof. Starobinski)'],[0.5,1,0.6,0.65,0.75]);
   }
   else if (text === 'Freshman') {
    addbars(['Python (Prof. Giles)'],[0.5]);
   }
   else {
	addbars(['Android Dev','InfluxDB','Web Dev','OS'],[0.3,0.2,0.2,0.1]);
   }
  // checkHeight();
  });
}

$(document).ready(main);

