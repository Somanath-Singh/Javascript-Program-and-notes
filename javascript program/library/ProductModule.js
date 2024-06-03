//javascript name is used as productmodules

//export allow this module to access outside module
//const msg="product Details";

//a module contain only one default and default module load automaticaly

export default function Title(msg){
    return msg;
}

export function Details(name,price){

    return {Name:name,price:price};

}