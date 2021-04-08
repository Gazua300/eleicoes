var radio = document.getElementsByName('can')
var imagem = document.getElementById('img')
var img = document.createElement('img')
var gates = [], linux = [], rubin = [], ritchie = []
var votos = 0

img.onmouseover = ()=>{
    document.getElementById('popup').style.display = 'block'
}
img.onmouseout = ()=>{
    document.getElementById('popup').style.display = 'none'
}

addEventListener('input', ()=>{
    if(radio[0].checked){
        img.src = '_img/Bill_Gates.jpg'
        img.style.width = '170px'
        img.style.height = '200px'
        img.style.cursor = 'pointer'
        img.style.border = '1px solid'
        imagem.appendChild(img)
        imagem.onclick = ()=>{
            open('https://pt.wikipedia.org/wiki/Bill_Gates', '_blank')
        }
    }else if(radio[1].checked){
        img.src = '_img/Linus_Torvalds.jpg'
        img.style.width = '180px'
        img.style.height = '200px'
        img.style.cursor = 'pointer'
        img.style.border = '1px solid'
        imagem.appendChild(img)
        img.onclick = ()=>{
            open('https://pt.wikipedia.org/wiki/Linus_Torvalds', '_blank')
        }
    }else if(radio[2].checked){
        img.src = '_img/dennis_ritchie.jpg'
        img.style.width = '170px'
        img.style.height = '200px'
        img.style.cursor = 'pointer'
        img.style.border = '1px solid'
        imagem.appendChild(img)
        img.onclick = ()=>{
            open('https://pt.wikipedia.org/wiki/Dennis_Ritchie', '_blank')
        }
    }else if(radio[3].checked){
        img.src = '_img/Andy_Rubin.jpg'
        img.style.width = '190px'
        img.style.height = '190px'
        img.style.cursor = 'pointer'
        img.style.border = '1px solid'
        imagem.appendChild(img)
        img.onclick = ()=>{
            open('https://pt.wikipedia.org/wiki/Andy_Rubin', '_blank')
        }
    }
})

function votar(){
    if(!radio[0].checked && !radio[1].checked && !radio[2].checked && !radio[3].checked){
        alert('Selecione um canditato!')
    }else{
        if(radio[0].checked){
            gates.push(votos)
        }else if(radio[1].checked){
            linux.push(votos)
        }else if(radio[2].checked){
            ritchie.push(votos)
        }else if(radio[3].checked){
            rubin.push(votos)
        }
        votos++
    }
}

function resultado(){
    var total = gates.length + linux.length + ritchie.length + rubin.length
    var res = document.getElementById('res')
    if(votos == 0){
        alert('Ainda não houve votação!')
    }else{
        
        if(gates.length > linux.length && gates.length > ritchie.length && gates.length > rubin.length){
            res.innerHTML = `Bill Gates é o novo presidente com ${Math.floor((gates.length / total) * 100)}% dos votos`
            img.src = '_img/Bill_Gates.jpg'
            img.style.width = '170px'
            img.style.height = '200px'
            img.appendChild(img)
        
        }else if(linux.length > gates.length && linux.length > ritchie.length && linux.length > rubin.length){
            res.innerHTML = `Linus Torvalds é o novo presidente com ${Math.floor((linux.length / total) * 100)}% dos votos`
            img.src = '_img/Linus_Torvalds.jpg'
            img.style.width = '180px'
            img.style.height = '200px'
            img.appendChild(img)

        }else if(ritchie.length > gates.length && ritchie.length > linux.length && ritchie.length > rubin.length){            
            res.innerHTML = `Dennis Ritchie é o novo presidente com ${Math.floor((ritchie.length / total) * 100)}% dos votos`
            img.src = '_img/dennis_ritchie.jpg'
            img.style.width = '170px'
            img.style.height = '200px'
            img.appendChild(img)
        
        }else if(rubin.length > gates.length && rubin.length > linux.length && rubin.length > ritchie.length){            
            res.innerHTML = `Andy Rubin é o novo presidente com ${Math.floor((rubin.length / total) * 100)}% dos votos`
            img.src = '_img/Andy_Rubin.jpg'
            img.style.width = '190px'
            img.style.height = '190px'
            img.appendChild(img)
        }else{
            res.innerHTML = 'HAVERÁ SEGUNDO TURNO!'
        }
    }
    
}

function contagem(){
    if(votos == 0){
        alert('Ainda não houve votaçõa!')
    }else{
        alert(`Bill Gates ${gates.length} votos
Linus Torvalds ${linux.length} votos
Dennis Ritchie ${ritchie.length} votos
Andy Rubin ${rubin.length} votos`)
    }
}

function sair(){
    if(confirm('Tem certeza que deseja sair da página?')){
        location.href = 'index.html'
    }
}
