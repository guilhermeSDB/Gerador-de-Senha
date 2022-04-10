$(function () {

    let btnGerar = $("button#gerar")
    let inputSenha = $('input#password')

    let letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let numeros = [0,1,2,3,4,5,6,7,8,9]
    let caracteresEsp = ['#','!','@','$','%','&','*','-','/']
    let senhaArr = []
    let senhaStr;
    const LETRASIZE = letras.length

    //Ativa o Bootstrap Tooltip
    $('[data-toggle="tooltip"]').tooltip()    

    //Gera um numero aleatorio entre 0 e 9
    function gerarNumero(numero){       
        return Math.floor(Math.random() * numero)
    }

    //Procura o indice no Array com base no Numero aleatorio gerado
    function procurarNumero(arr,numero){       
        return arr[numero]
    }

    //Função copiar texto
    function CopyText(){
        //Pega o texto do input
        var copyText = document.getElementById("password");

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* Para dispositivos moveis */

        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);

    }

    function CopyTextCopied(){
        $(this).attr('data-bs-original-title','Copiado')
        console.log('oi')
    }

    //Ao clickar no button gerar
    $(btnGerar).click(function(){
        for(let i = 0; i <= 10; i++){                
            let number = gerarNumero(10)  //Gera um numero aleatorio entre 0 e 9
            let numberLetra = gerarNumero(LETRASIZE) //Gera um numero aleatorio entre 0 e 26
            let letra = procurarNumero(letras,numberLetra) // Procura o numero gerado aleatorio no Array Letras e traz o que tem nessa posição
            let numero = procurarNumero(numeros,number) // Procura o numero gerado aleatorio no Array Numero e traz o que tem nessa posição
            let caracterEsp = procurarNumero(caracteresEsp,number) // Procura o numero gerado aleatorio no Array Numero e traz o que tem nessa posição
            let ordem = gerarNumero(3)    

            if(ordem === 0){ // Se 0 gera uma letra
                let ordem2 = gerarNumero(2)
                if(ordem2 === 0){ //Se 0 gera uma letra minuscula
                    senhaArr.push(letra) //Adiciona a letra encontrada ao Array senha
                }else if(ordem2 === 1){ //Se 1 gera uma letra MAIUSCULA
                    senhaArr.push(letra.toUpperCase()) //Adiciona a letra encontrada ao Array senha
                }
            }else if (ordem === 1){ // Se 1 gera um numero        
                senhaArr.push(numero) //Adiciona o numero encontrado ao Array senha
            }else if (ordem === 2){                    
                senhaArr.push(caracterEsp) // Adiciona um caracter especial ao Array
            }
        }

        senhaStr = senhaArr.join('') //Junta o Array em uma string gerando a senha        
        $(inputSenha).val(senhaStr) // Substitui o conteudo pela senha gerada   
        $('span.copiar').removeClass('d-none') //Remove a classe D-NONE 
    })

    //Copia o texto para area de transferencia
    $('span.copiar').click(function(){
        CopyText()
        CopyTextCopied()
    })

})