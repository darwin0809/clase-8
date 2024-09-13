const sumar =(num1,num2)=>{
    return new Promise((resolve, reject) => {
        //solo vamos a sumar numeros positivos, si ponemos negativos no va a pasar nada
        if(num1<0 || num2<0){
            reject("esto no es valido")

        }else{
            resolve(num1 + num2)
        }
    })
}

const result = sumar(45,54)
.then((res)=>{
    document.write(res);
})
.catch((error)=>{
    document.write(error);
})
