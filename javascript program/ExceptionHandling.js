
    try{

        var x=10;
        var y=0;
        var z=x/y;

        if(y==0){
            throw "DivideByZeroError: can't divide by zero <br>" ;
        }
        if (y < 0) {
            throw "DivideByNegativeError: can't divide by Negative <br>";
        }

    }
    catch(exceptiondetails){
        document.write(exceptiondetails);
    }
    finally{
        document.write(`Division :${z}`);
    }
