function pesquisar() {
    // Seleciona a seção HTML com o ID "resultados-pesquisa"
    // e armazena-a na variável section. Essa seção será 
    // preenchida com os resultados da pesquisa.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado. Certifique-se que escreveu algo no campo de busca.</p>"
      return
    }
  
    campoPesquisa = campoPesquisa.toLowerCase ()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    // Essa string será preenchida com o HTML dos itens encontrados.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada item (dado) no array de dados.
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase ()
      descricao = dado.descricao.toLowerCase ()
      tags = dado.tags.toLowerCase ()
    
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) { 
        // Concatena o HTML de cada item à string resultados.
       // A estrutura HTML criada representa um item de resultado
      // com título, descrição e link para mais informações.
     
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank"> ${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
      }
    }

    if (!resultados) {
      resultados = "<p>Infelizmente nada foi encontrado, no nosso banco de dados.</p>"
    }
  
    // Atribui o conteúdo da string resultados ao HTML da seção.
    // Isso substitui o conteúdo anterior da seção pelos novos resultados.
    section.innerHTML = resultados;
  }