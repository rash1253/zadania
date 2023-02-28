function coupe(here) {
	
	
	if(Number.isInteger(here)<=0)
	{
		console.log('ошибка проверьте правильность введенного номера местаы');
	}
	else
	if(here<=0)
	{
		console.log("ошибка проверьте правильность введенного номера места");
	}
	
else
	if (here<9)
	{
		console.log("ваше купе номер 1");
		
	}
	else
	if(here<18)
	{
		console.log("ваше купе номер 2");
		
	}
	else
	if(here<27)
	{
		console.log("ваше купе номер 3");
		
	}
	else
	if(here<36)
	{
		console.log("ваше купе номер 4");
		
	}
	if(here>36)
	{
	console.log("ошибка проверьте правильность введенного номера места");	
	}
}
coupe(23);