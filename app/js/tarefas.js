//criar uma variavel
let tarefas =[];
//seleciona o elemento HTML com o id "btnSalvar" e adiciona o evento click a ele
document.querySelector("#btnSalvar").addEventListener("click", function(e){ 
    //adiciona o valor digitado em "txtTarefas" ao vetor 'tarefas' 
    tarefas.push(document.querySelector("#txtTarefa").value);
    //Limpa o conteudo do elemento com id 'lstTarefas'
    document.querySelector("#lstTarefas").innerHTML = '';
    //Percorre o s elementos do vetor 'tarefas'
    tarefas.forEach(item => {
        //cria uma variavel concatenando a sintaze da tag 'li' ao valor de 'item'
        let li = '<li>' + item + '</li>';
        //adiciona o conteudo da variavel 'li' a tag com o id 'lstTarefas'
        document.querySelector("#lstTarefas").innerHTML += li;
        console.log(li)
    });
});