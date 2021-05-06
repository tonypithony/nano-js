let a,b,c,det,root1,root2,realPart,imagPart;

	a = 1;
	b = 2;
	c = 3;

	det = b*b - 4*a*c;

	if (det > 0)
	{
		root1 = (-b+Math.sqrt(det))/(2*a);
		root2 = (-b-Math.sqrt(det))/(2*a);

		console.log("root1 =" + root1 +" root2 = " + root2);
	}
	else if (det == 0)
	{
		root1=root2=-b/(2*a);
		console.log('root1 = root2 = '+ root1);
	}
	else
	{
		realPart = -b/(2*a);
		imagPart = Math.sqrt(-det)/(2*a);

		console.log("root1 = " + realPart + "+" + imagPart + "i  root2 = " 
			+ realPart + "+" + imagPart + "i");
	}