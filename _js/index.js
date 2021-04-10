addEventListener('load', ()=>{
    alert('Os dados a seguir devem ser fictios pois se trata de um teste.')
})

function acesso(){
    var nome = document.getElementById('nome')
    var num = document.getElementById('num').value
    
    if(nome.value == '' || num == ''){
        alert('Preencha os campos!')
    }else if(num.length < 12){
        alert('Número de título inválido!\nEstá incompleto.')
        document.getElementById('num').focus()
    }else if(num.length > 12){
        alert('Número de título inválido!\nUltrapassou os 12 dígitos.')
        document.getElementById('num').focus()
    }else{
        location.href = 'bora.html'
    }
}