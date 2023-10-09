//example on constructor creation
function Employee(id, name, sal)
{
	//prop init
	this.id=id;				//prop=param
	this.name=name;
	this.sal=sal;
	//method
	this.getEmp=function(){
								return `${this.id} &nbsp; ${this.name} &nbsp; ${this.sal}`;
							}
}