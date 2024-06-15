// Homepage 

document.addEventListener('DOMContentLoaded', function () {
    // Obtenha o contexto do canvas
    var ctx = document.getElementById('myChart').getContext('2d');

    // Configure os dados do gráfico
    var data = {
        datasets: [{
            label: 'Valor = R$',
            backgroundColor: ['#094293', '#7597BF', '#35C59A', '#34A853', '#C2F4E5'],
            data: [3500, 2500, 2000, 1000, 1000] // Valores monetários de investimento para cada categoria
        }]
    };

    // Crie o gráfico de pizza
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var label = data.labels[tooltipItem.index] || '';
                        var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                        return label + ': R$ ' + value.toLocaleString('pt-BR'); // Adiciona "R$ " antes do valor
                    }
                }
            },
            legend: {
                display: false // Remover a legenda
            }
        }
    });
});

// Editais 
// Dados para preencher a tabela
const dados = [
    { col1: 'Edital 2024/1', col2: '08/04/2024' },
    { col1: 'Edital 2023/1', col2: '10/06/2023' },
    { col1: 'Edital 2022/1', col2: '11/06/2022' },
    { col1: 'Edital 2021/1', col2: '12/06/2021' },
    { col1: 'Edital 2020/1', col2: '13/06/2020' },
    { col1: 'Edital 2019/1', col2: '08/06/2019' },
    { col1: 'Edital', col2: '00/00/0000' },
    { col1: 'Edital', col2: '00/00/0000' }
  ];
  
  // Referência da tabela no DOM
  const tabela = document.getElementById('minhaTabela');

  // Iterar sobre os dados e adicionar linhas à tabela
  dados.forEach((item, index) => {
      const linha = tabela.insertRow();
      const coluna1 = linha.insertCell(0);
      const coluna2 = linha.insertCell(1);
      coluna1.textContent = item.col1;
      coluna2.textContent = item.col2;
  
      // Adicionar classe à primeira linha
      if (index === 0) {
          linha.className = 'primeira-linha'; // Usando className para definir a classe
      }
  });