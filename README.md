Olá devs, tenho aqui uma breve página HTML com seus respectivos arquivos CSS e javascript, são coisas bem simples, como sou iniciante no javascript estou com um erro que ainda não consegui detectar. E ele não está aparentemente no código, bem não faço a mínima ideia do que seja então irei relatar o que acontece.
O arquivo bora.html é uma página que apresenta quatro canditatos a presidência, com seus nomes em botões de rádio e a cada clique nos respectivos nomes uma foto do candidato é apresentada. Ao clicar na foto uma nova página é aberta exibindo a biografia do canditato na Wikipédia. Bem, aí está o problema. Quando se clica na foto do primeiro candidato e depois nas demais, ao voltar a clicar na foto do primeiro candidato novamente já não é mais aberta sua página na Wikipédia, mas sim a do ultimo candidato antes dele. A única vez que se pode ver a biografia do primeiro candidato na Wikipédia é se clicarmos nela quando a página é carregada, ou seja, ele precisa ser o primeiro candadato a ter a foto clicada para que sua biografia seja visalizada, depois disso não é mais possível ter acesso a página dele.
Pra mim se tornou um bug indetectável, pelo fato de isso acontecer com somente um dos quatro candidatos e o console do devtools não mostra nenhum erro. Agradeço qualquer contribuição.