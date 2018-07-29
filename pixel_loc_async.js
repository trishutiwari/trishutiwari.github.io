var tot_iterations = 10
var element = "ship-rotate";
var array_ts = new Array(tot_iterations);
var iteration = 0;
var element_index = 0;

function sleep(milliseconds) 
{
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
	  if ((new Date().getTime() - start) > milliseconds){
	    break;
	  }
	}
}

onmessage = function(message)
{
	array_ts[iteration] = message.data;
	// console.log(array_ts[iteration]);
	iteration++;
}

function get_pixel_ts() 
{
  for (var iteration = 0; iteration < tot_iterations; iteration++) 
  {
    	postMessage(element);
    	sleep(200)
  }
}

get_pixel_ts();

// var oReq = new XMLHttpRequest();
// oReq.open("POST", "trishita.ddns.net:7777");
// oReq.send(array_ts[0][0]["x"]);