
function excluirLinha(botao) {
    if (confirm('Tem certeza que deseja excluir este item?')) {
      const linha = botao.closest('tr');
      linha.classList.add('fade-out');
      
      setTimeout(() => {
        linha.remove();
      }, 300);
    }
  }
  

  document.addEventListener('DOMContentLoaded', function() {
 
    const formProduto = document.getElementById('form-produto');
    if (formProduto) {
      formProduto.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = this.querySelector('input[type="text"]:nth-of-type(1)').value;
        const descricao = this.querySelector('input[type="text"]:nth-of-type(2)').value;
        const custo = this.querySelector('input[type="number"]:nth-of-type(1)').value;
        const venda = this.querySelector('input[type="number"]:nth-of-type(2)').value;
        
        const tabela = document.querySelector('#tabela-produto tbody');
        const novaLinha = tabela.insertRow();
        
        novaLinha.innerHTML = `
          <td>${nome}</td>
          <td>${descricao}</td>
          <td>R$${parseFloat(custo).toFixed(2)}</td>
          <td>R$${parseFloat(venda).toFixed(2)}</td>
          <td><button class="btn-danger" onclick="excluirLinha(this)">Excluir</button></td>
        `;
        
        this.reset();
      });
    }
  

    const formFuncionario = document.getElementById('form-funcionario');
    if (formFuncionario) {
      formFuncionario.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const inputs = this.querySelectorAll('input');
        const [nome, cpf, email, telefone, logradouro] = Array.from(inputs).map(input => input.value);
        
        const tabela = document.querySelector('#tabela-funcionario tbody');
        const novaLinha = tabela.insertRow();
        
        novaLinha.innerHTML = `
          <td>${nome}</td>
          <td>${cpf}</td>
          <td>${email}</td>
          <td>${telefone}</td>
          <td>${logradouro}</td>
          <td><button class="btn-danger" onclick="excluirLinha(this)">Excluir</button></td>
        `;
        
        this.reset();
      });
    }
  
  
    const formCliente = document.getElementById('form-cliente');
    if (formCliente) {
      formCliente.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const inputs = this.querySelectorAll('input');
        const [nome, cpf, email, logradouro] = Array.from(inputs).map(input => input.value);
        
        const tabela = document.querySelector('#tabela-cliente tbody');
        const novaLinha = tabela.insertRow();
        
        novaLinha.innerHTML = `
          <td>${nome}</td>
          <td>${cpf}</td>
          <td>${email}</td>
          <td>${logradouro}</td>
          <td><button class="btn-danger" onclick="excluirLinha(this)">Excluir</button></td>
        `;
        
        this.reset();
      });
    }
  });