//example on class with static methods
class Maths
{
	static add(x,y){
		return x+y;
	}
	static product(x,y){
		return x*y;
	}
	static power(x,y){
		return x**y;
	}
	max(...n)
	{
		let m=n[0]; //assume
		for(let e of n){
			if(e>m)
				m=e;
		}
		return m;	
	}
}
