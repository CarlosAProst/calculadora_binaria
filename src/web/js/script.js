//Variables Globales

const form = document.getElementById('conversor');
const valor = document.getElementById('valor-a-convertir');
const conversion = document.querySelectorAll('.form-check-input');
const mostrar = document.getElementById('resultado');
const btn = document.getElementById('convert');


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    if(tipoDeConversión(conversion) == 'BIN'){
        conversionDeBinario(valor.value);
        valor.value = '';
    }else if(tipoDeConversión(conversion) == 'DEC'){
        conversionDeDecimal(valor.value);
        valor.value = '';
    }else if(tipoDeConversión(conversion) == 'HEX'){
        conversionDeHexa(valor.value);
        valor.value = '';
    }else if(tipoDeConversión(conversion) == 'OCTAL'){
        conversionDeOctal(valor.value);
        valor.value = '';
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
    if(/[10]/i.test(valor)){
        mostrar.innerHTML =`
        <table class="table">
            <thead>
                <tr>
                    <th>Decimal</th>
                    <th>Binario</th>
                    <th>hexadecimal</th>
                    <th>Octal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${parseInt(valor,2)}</td>
                    <td>${valor}</td>
                    <td>${parseInt(valor,2).toString(16).toUpperCase()}</td>
                    <td>${parseInt(valor,2).toString(8)}</td>
                </tr>
            </tbody>
        </table>
        `;
    }else{
        mostrar.innerText = 'Debe colocar un numero binario valido.';
    }
}

function conversionDeDecimal(valor){
    if(/[0-9]/i.test(valor)){
        valor = parseInt(valor);
        mostrar.innerHTML =`
        <table class="table">
            <thead>
                <tr>
                    <th>Decimal</th>
                    <th>Binario</th>
                    <th>hexadecimal</th>
                    <th>Octal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${valor}</td>
                    <td>${valor.toString(2)}</td>
                    <td>${(valor.toString(16)).toUpperCase()}</td>
                    <td>${valor.toString(8)}</td>
                </tr>
            </tbody>
        </table>
        `;
    }else{
        mostrar.innerText = 'Debe colocar un número decimal valido...';
    }
}

function conversionDeHexa(valor){
    if(/[A-Fa-f0-9]/i.test(valor)){
        mostrar.innerHTML =`
        <table class="table">
            <thead>
                <tr>
                    <th>Decimal</th>
                    <th>Binario</th>
                    <th>hexadecimal</th>
                    <th>Octal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${parseInt(valor, 16)}</td>
                    <td>${parseInt(valor, 16).toString(2)}</td>
                    <td>${valor.toUpperCase()}</td>
                    <td>${parseInt(valor, 16).toString(8)}</td>
                </tr>
            </tbody>
        </table>
        `;
    }else{
        mostrar.innerText = 'Debe colocar un numero valido hexadecimal...';
    }
}

function conversionDeOctal(valor){
    if(/[0-8]/i.test(valor)){
        mostrar.innerHTML =`
        <table class="table">
            <thead>
                <tr>
                    <th>Decimal</th>
                    <th>Binario</th>
                    <th>hexadecimal</th>
                    <th>Octal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${parseInt(valor, 8)}</td>
                    <td>${parseInt(valor, 8).toString(2)}</td>
                    <td>${parseInt(valor, 8).toString(16).toUpperCase()}</td>
                    <td>${valor}</td>
                </tr>
            </tbody>
        </table>
        `;
    }else{
        mostrar.innerText = ' Debe colocar un número octal valido...';
    }
}