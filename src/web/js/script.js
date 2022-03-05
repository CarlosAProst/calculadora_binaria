//Variables Globales

const form = document.getElementById('conversor');
const valor = document.getElementById('valor-a-convertir');
const conversion = document.querySelectorAll('.tipo');
const mostrar = document.getElementById('resultado');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(tipoDeConversión(conversion) == 'BIN'){
        conversionDeBinario(valor.value);
    }else if(tipoDeConversión(conversion) == 'DEC'){
        conversionDeDecimal(valor.value);
    }else if(tipoDeConversión(conversion) == 'HEX'){
        conversionDeHex(valor.value);
    }else if(tipoDeConversión(conversion) == 'OCTAL'){
        conversionDeOctal(valor.value);
    }
    
    
});

function tipoDeConversión(array) {
    for(let elem of array){
        if (elem.checked){
            return(elem.value); 
        }
    }
}

function conversionDeBinario(valor){

    mostrar.innerHTML =`
    <ul>
        <li>DEC: ${convertirADecimal(valor)}</li>
        <li>HEXA: ${convertirAHexadecimal(valor)}</li>
        <li>OCT: ${convertirAOctal(valor)}</li>
    </ul>
    `;

}

function convertirADecimal(valor){
    let valores = valor.split('');
    let decimal = 0;
    let i = valores.length -1;
    for(let elem of valores){
        if(elem == '1'){
            decimal += 2**i;
        }
        i--;
    }
    return(decimal);
}
function convertirAHexadecimal(valor){
    let valores = valor.split('');
    let hex = 0;
    let i = valores.length -1;
    for(let elem of valores){
        if(elem == '1'){
            hex += 2**i;
        }
        i--;
    }
    return(hex);
}