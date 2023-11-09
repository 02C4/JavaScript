function organizarTarefas(tarefas) {
    let tarefasNaoFeitas = [];
  
    tarefas.forEach(function(tarefa) {
      if (!tarefa.includes("Feito")) {
        tarefasNaoFeitas.push(tarefa);
      }
    });
  
    return tarefasNaoFeitas;
  }
  
  let tarefas = [
    "Estudar JavaScript",
    "Fazer exercícios de arrays",
    "Preparar apresentação",
    "Enviar relatório",
    "Terminar módulo 4 - Feito",
    "Aprender HTML e CSS - Feito"
  ];
  
  console.log("1 - Listagem de tarefas:");
  tarefas.forEach(function(tarefa, index) {
    console.log(`${index + 1} - ${tarefa}`);
  });
  
  let tarefasPendentes = tarefas.filter(function(tarefa) {
    return !tarefa.includes("Feito");
  });
  console.log("2 - Tarefas Pendentes:");
  console.log(tarefasPendentes);
  
  let tarefasOrdenadas = tarefas.slice(); 
  tarefasOrdenadas.sort();
  console.log("3 - Tarefas Ordenadas Alfabeticamente:");
  console.log(tarefasOrdenadas);
  
  let primeirasTarefas = tarefas.slice(0, 2);
  console.log("4 - Duas Primeiras Tarefas:");
  console.log(primeirasTarefas);
  
  tarefas.pop();
  console.log("5 - Removendo a Última Tarefa:");
  console.log(tarefas);
  
  tarefas.push("Ler livro novo");
  console.log("6 - Adicionando 'Ler livro novo' à lista:");
  console.log(tarefas);
  
  
  let tarefasARealizar = organizarTarefas(tarefas);
  
  console.log(tarefasARealizar);
  