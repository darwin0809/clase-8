//html y js dodnde tomen 3 numeros y diga cual es el menor,
//y si de esos 3 numeros 2 son iguales decir cual numero es igual
// se debe hacer con ternarios, funcion flechas y si s epuede con promesas

        
        const compararNumeros = () => {
      
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            const num3 = parseFloat(document.getElementById('num3').value);
            

            const promesa = new Promise((resolve, reject) => {
                if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
                    reject("Por favor, ingresa valores numéricos válidos.");
                    return;
                }


                const menor = Math.min(num1, num2, num3);


                const iguales = (num1 === num2 || num1 === num3 || num2 === num3) ? 
                                `Números iguales: ${num1 === num2 ? num1 : num1 === num3 ? num1 : num2}` : 
                                "No hay números iguales.";

                resolve({ menor, iguales });
            });


            promesa
                .then(({ menor, iguales }) => {
                    document.getElementById('resultado').innerHTML = `
                        El menor número es: ${menor}<br>
                        ${iguales}
                    `;
                })
                .catch(error => {
                    document.getElementById('resultado').innerHTML = error;
                });
        };