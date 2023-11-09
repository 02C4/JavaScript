const livro = {
    titulo: "Aventuras de Alice no País das Maravilhas",
    autor: "Lewis Carroll",
    anoPublicacao: 1865,
    genero: "Fantasia",
    disponivel: false, 

    emprestarLivro: function() {
      if (livro.disponivel) {
        livro.disponivel = false; 
        console.log("Livro emprestado com sucesso.");
      } else {
        console.log("Este livro já está emprestado.");
      }
    }
  };
  
  console.log("Informações do livro:");
  console.log("Título: " + livro.titulo);
  console.log("Autor: " + livro.autor);
  console.log("Ano de Publicação: " + livro.anoPublicacao);
  console.log("Gênero: " + livro.genero);
  console.log("Disponível para Empréstimo: " + (livro.disponivel ? "Sim" : "Não"));
  
  livro.emprestarLivro();
  
  console.log("Disponível para Empréstimo: " + (livro.disponivel ? "Sim" : "Não")); 
  