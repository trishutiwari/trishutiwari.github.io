var counter = 0;


onmessage = function(message)
{
	if (message.data === "start")
	{
		while (true)
		{
			counter++;
			// console.log(counter);
		}
	}
	else
	{
		console.log(counter);
		postMessage(counter);
	}
}