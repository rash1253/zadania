function coupe(here) {
	
	
	if(Number.isInteger(here)<=0)
	{
		console.log('������ ��������� ������������ ���������� ������ ������');
	}
	else
	if(here<=0)
	{
		console.log("������ ��������� ������������ ���������� ������ �����");
	}
	
else
	if (here<9)
	{
		console.log("���� ���� ����� 1");
		
	}
	else
	if(here<18)
	{
		console.log("���� ���� ����� 2");
		
	}
	else
	if(here<27)
	{
		console.log("���� ���� ����� 3");
		
	}
	else
	if(here<36)
	{
		console.log("���� ���� ����� 4");
		
	}
	if(here>36)
	{
	console.log("������ ��������� ������������ ���������� ������ �����");	
	}
}
coupe(23);