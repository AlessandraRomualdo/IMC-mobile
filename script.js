 
function calcular() {
 let altura = document.getElementById('altura')
 let alt = Number(altura.value)
 let peso = document.getElementById('peso')
 let p = Number(peso.value)
 let IMC
 let res = document.getElementById('resultado')

    if (altura.value.length == 0 || peso.value.length == 0){
    window.alert('[ERRO] - Preencha todos os campos')
    }else{
        IMC = (p/alt)/alt
        if(IMC < 18.5){
            //abaixo do peso
            res.innerHTML = `Seu IMC é ${IMC.toFixed(2)}, você está na faixa de peso baixo.`
        }else if(IMC >= 18.5 && IMC <= 24.9){
            //peso normal
            res.innerHTML = `Seu IMC é ${IMC.toFixed(2)}, você está na faixa de peso normal.`
        } else if(IMC >= 25 && IMC<= 29.9){
            //sobrepeso
            res.innerHTML = `Seu IMC é ${IMC.toFixed(2)}, você está acima do peso normal.`
        }else if(IMC >=30 && IMC <= 34.9){
            //obesidade tipo 1
            res.innerHTML = `Seu IMC é ${IMC.toFixed(2)}, você está na faixa de obesidade Tipo I`
        } else if(IMC >= 34 && IMC <= 39.9){
            //obesidade tipo 2
            res.innerHTML = `Seu IMC é ${IMC.toFixed(2)}, você está na faixa de obesidade Tipo II`
        }else{
            //obesidade tipo 3
            res.innerHTML = `Seu IMC é ${IMC.toFixed(2)}, você está na faixa de obesidade Tipo III`
        }
        res.style.fontSize='22px'
        res.style.fontWeight='36px'

     
    }
}