## Portal de Eventos Offshore

### O que é?
Este é um portal web simples que permite aos usuários pesquisarem por eventos offshore no Brasil. Ao digitar uma palavra-chave relacionada ao evento, o portal exibe uma lista de eventos relevantes.

### Como funciona?
1. **Pesquisa:** O usuário digita uma palavra-chave no campo de pesquisa.
2. **Busca:** O sistema busca por essa palavra-chave em um banco de dados de eventos.
3. **Resultados:** Os eventos que correspondem à pesquisa são exibidos na tela.

### Tecnologias utilizadas (em português simples):
* **HTML:** É como as peças de um LEGO que formam a estrutura da página da web. Cada parte da página (como o campo de busca e a lista de eventos) é construída usando HTML.
* **CSS:** É a roupa da página! Ele deixa a página bonita e organizada, definindo as cores, fontes e o layout de cada elemento.
* **JavaScript:** É o cérebro da página! Ele faz com que a página seja interativa, permitindo que você faça buscas e veja os resultados de forma dinâmica.

### Como usar este código:
Se você é um programador e quer ver como este portal funciona por dentro, pode clonar este repositório e abrir os arquivos em um editor de código. Mas não se preocupe se você não entende de programação, o importante é que você possa usar o portal para encontrar os eventos que precisa.

### Contribuições:
Se você tiver alguma sugestão ou melhoria, fique à vontade para abrir um pull request.

### **Explicação detalhada do código (opcional):**
* **index.html:** Cria a estrutura da página, incluindo o campo de pesquisa, a seção de resultados e o rodapé.
* **styles.css:** Define o estilo visual da página, como cores, fontes e layout.
* **app.js:** Contém a lógica da aplicação, responsável por:
    * Capturar o termo de pesquisa do usuário.
    * Buscar os eventos relevantes no banco de dados (simulado no arquivo `dados.js`).
    * Exibir os resultados na página.

**Observações:**

* **Banco de dados:** O código atual utiliza um array JavaScript simples (`dados.js`) para simular um banco de dados. Em um projeto real, você utilizaria um banco de dados como MySQL, PostgreSQL ou MongoDB.
* **Melhorias:** Para melhorar o projeto, você pode adicionar funcionalidades como:
    * **Filtros:** Permitir filtrar os resultados por data, categoria, etc.
    * **Mapas:** Integrar um mapa para mostrar a localização dos eventos.
    * **Login:** Permitir que os usuários façam login e criem seus próprios eventos.

**Dúvidas?**
Se tiver algma dúvida, pode  abrir uma issue aqui no github ou me mandar um email.



## Offshore Events Portal

### What is it?
This is a simple web portal that allows users to search for offshore events in Brazil. By typing a keyword related to the event, the portal displays a list of relevant events.

### How does it work?
1. **Search:** The user types a keyword into the search field.
2. **Search:** The system searches for this keyword in an events database.
3. **Results:** Events that match the search are displayed on the screen.

### Technologies used (in simple terms):
* **HTML:** This is like the building blocks of a webpage. Each part of the page (like the search field and the event list) is built using HTML.
* **CSS:** This is the style sheet for the page! It makes the page look good and organized by defining the colors, fonts, and layout of each element.
* **JavaScript:** This is the brain of the page! It makes the page interactive, allowing you to search and see results dynamically.

### How to use this code:
If you're a programmer and want to see how this portal works under the hood, you can clone this repository and open the files in a code editor. But don't worry if you don't understand programming, the important thing is that you can use the portal to find the events you need.

### Contributions:
If you have any suggestions or improvements, feel free to open a pull request.

### **Detailed explanation of the code (optional):**
* **index.html:** Creates the structure of the page, including the search field, results section, and footer.
* **styles.css:** Defines the visual style of the page, such as colors, fonts, and layout.
* **app.js:** Contains the application logic, responsible for:
    * Capturing the user's search term.
    * Searching for relevant events in the database (simulated in the `dados.js` file).
    * Displaying the results on the page.

**Notes:**

* **Database:** The current code uses a simple JavaScript array (`dados.js`) to simulate a database. In a real project, you would use a database like MySQL, PostgreSQL, or MongoDB.
* **Improvements:** To improve the project, you can add features such as:
    * **Filters:** Allow filtering results by date, category, etc.
    * **Maps:** Integrate a map to show the location of events.
    * **Login:** Allow users to log in and create their own events.

**Questions?**
If you have any questions, feel free to open an issue here on GitHub or send me an email.
