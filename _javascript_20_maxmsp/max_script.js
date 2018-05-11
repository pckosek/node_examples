var myval=0;

function bang()
{
	outlet(0,myval);
	// outlet(OUTLET_NUMBER,VALUE);
}

function msg_int(v)
{
	myval = v;
	bang();
}