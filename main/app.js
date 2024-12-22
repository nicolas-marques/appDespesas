class Despesa {
    constructor(ano, mes, dia, tipo, descricao, valor) {
        this.ano = ano;
        this.mes = mes;
        this.dia = dia;
        this.tipo = tipo;
        this.descricao = descricao;
        this.valor = valor;
    }
}

class Bd {
    constructor() {
        let id = localStorage.getItem('id');
        if (id === null) {
            localStorage.setItem('id', 0);
        }
    }

    recuperarTodosRegistros() {
        let despesas = []
        let id = localStorage.getItem('id')

        for (var i = 1; i <= id; i++) {

            let despesa = JSON.parse(localStorage.getItem(i))

            if (despesa === null) {
                continue;
            }
            despesa.id = i
            despesas.push(despesa)



        }
        return despesas
    }

    getProximoId() {
        let proximoId = parseInt(localStorage.getItem('id')); // Converte para número
        return proximoId + 1;
    }

    gravar(d) {
        let id = this.getProximoId();
        // Grava a despesa no localStorage
        localStorage.setItem(id, JSON.stringify(d));
        // Atualiza o ID no localStorage
        localStorage.setItem('id', id);
    }

    pesquisar(despesa) {

        let despesasFiltradas = [];

        despesasFiltradas = this.recuperarTodosRegistros();

        if (despesa.ano != '') {

            despesasFiltradas = despesasFiltradas.filter(d => d.ano == despesa.ano)

        }
        if (despesa.mes != '') {

            despesasFiltradas = despesasFiltradas.filter(d => d.mes == despesa.mes)

        }
        if (despesa.dia != '') {

            despesasFiltradas = despesasFiltradas.filter(d => d.dia == despesa.dia)

        }
        if (despesa.tipo != '') {

            despesasFiltradas = despesasFiltradas.filter(d => d.tipo == despesa.tipo)

        }
        if (despesa.descricao != '') {

            despesasFiltradas = despesasFiltradas.filter(d => d.descricao == despesa.descricao)

        }
        if (despesa.valor != '') {

            despesasFiltradas = despesasFiltradas.filter(d => d.valor == despesa.valor)

        }
        return despesasFiltradas;
    }

    remover(id){
        localStorage.removeItem(id)
    }


}
//Instanciando novo bd
let bd = new Bd();

function configurarModal(titulo, classeTitulo, mensagem, btnf, btnf2) {
    document.getElementById('modalExibirTitulo').innerHTML = titulo;
    document.getElementById('modalExibirTitulo').className = `modal-header ${classeTitulo}`;
    document.getElementById('modal_conteudo').innerHTML = mensagem;
    document.getElementById('btnf').innerHTML = btnf;
    document.getElementById('btnf').className = btnf2;
    $('#modalGravacao').modal('show');
}

function cadastrarDespesa() {
    // Pegando os valores dos campos de entrada
    let ano = document.getElementById('ano');
    let mes = document.getElementById('mes');
    let dia = document.getElementById('dia');
    let tipo = document.getElementById('tipo');
    let descricao = document.getElementById('descricao');
    let valor = document.getElementById('valor');

    // Validação simples dos campos
    if (ano.value === "" || mes.value === "" || dia.value === "" || tipo.value === "" || descricao.value === "" || valor.value === "") {
        configurarModal(
            'Erro na gravação',
            'text-danger',
            'Existem campos que não foram preenchidos!',
            'Voltar e corrigir',
            'btn-danger'
        );
        return;
    }

    // Criando uma nova instância de Despesa
    let despesa = new Despesa(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value);

    // Gravando a despesa no localStorage
    bd.gravar(despesa);

    // Exibindo a mensagem de sucesso no modal
    configurarModal(
        'Gravação realizada com sucesso!',
        'text-success',
        'Sua despesa foi inserida com sucesso!',
        'Voltar',
        'btn-success'
    );

    // Limpando os campos após o cadastro
    ano.value = "";
    mes.value = "";
    dia.value = "";
    tipo.value = "";
    descricao.value = "";
    valor.value = "";
}


function carregarListaDespesas(despesas = []) {
    if (despesas.length == 0) {
        despesas = bd.recuperarTodosRegistros();
    }

    let listaDespesas = document.getElementById('listaDespesas')
    listaDespesas.innerHTML = '';

    despesas.forEach(function (d) {
        let linha = listaDespesas.insertRow()

        linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`
        linha.insertCell(1).innerHTML = d.tipo
        switch (parseInt(d.tipo)) {
            case 1:
                d.tipo = 'Alimentação'
                break;
            case 2:
                d.tipo = 'Educação'
                break;
            case 3:
                d.tipo = 'Lazer'
                break;
            case 4:
                d.tipo = 'Saúde'
                break;
            case 5:
                d.tipo = 'Transporte'
                break;
        }

        linha.insertCell(2).innerHTML = d.descricao
        linha.insertCell(3).innerHTML = d.valor
        //Criação do botão de remoção de despesa
        let btn = document.createElement('button')
        btn.className = 'btn btn-danger'
        btn.innerHTML = '<i class="fas fa-times"></i>'
        btn.id = `id_despesa_${d.id}`
        btn.onclick = function(){
            let id = this.id.replace('id_despesa_', '')
            bd.remover(id)
            window.location.reload();
        }
        linha.insertCell(4).append(btn);
        

    });

}

function pesquisarDespesa() {
    let ano = document.getElementById('ano').value;
    let mes = document.getElementById('mes').value;
    let dia = document.getElementById('dia').value;
    let tipo = document.getElementById('tipo').value;
    let descricao = document.getElementById('descricao').value;
    let valor = document.getElementById('valor').value;
    //Nova instancia do objeto despesa
    let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor)

    let despesas = bd.pesquisar(despesa)

    document.getElementById('listaDespesas')

    this.carregarListaDespesas(despesas)


}