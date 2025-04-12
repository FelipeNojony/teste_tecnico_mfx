function diferencaEntreDatas() {
  try {
    let dataAtual = new Date()
    let dataFutura = new Date()
    dataFutura.setDate(dataAtual.getDate() + 25);

    let diferencaDeTempo = dataFutura.getTime() - dataAtual.getTime()
    let tempoDoDia = 1000 * 3600 * 24;
    let diferencaEntreDias = diferencaDeTempo / tempoDoDia;

    return diferencaEntreDias;
  } catch (erro) {
    console.error(
      "A diferença entro os dias não pode ser exibido",
      erro.message
    );
  }
}

function adicionaDias(dias) {
  try {
    let data = new Date();
    let adicionarDias = new Date(data.setDate(data.getDate() + dias));

    return adicionarDias.toLocaleDateString("pt-BR", {
      dateStyle: "short",
    });
  } catch (erro) {
    console.error(
      "Há algum erro no código, não foi possível adicionar os dias",
      erro.message
    );
  }
}

function fusoHorario() {
    try{
        const dataAtual = new Date()

        const londres = 'Europe/London'
        const saoPaulo = 'America/Sao_paulo'

        let fusoHorarioFormatado = (data, timeZone) => {
            return new Intl.DateTimeFormat('pt-BR', {
                dateStyle: 'short',
                timeStyle: 'short',
                timeZone: timeZone
            }).format(data)
        }

        console.log(`Esta é a data atual com fuso-horário de São Paulo: ${fusoHorarioFormatado(dataAtual, saoPaulo)}`)
        console.log(`Esta é a data atual com fuso-horário de Londres: ${fusoHorarioFormatado(dataAtual, londres)}`)
        
        
        

    }catch(erro){
        console.error("A diferença de fuso-horário não pode ser exibida", erro.message)
    }
}

function formatarData() {
    try{
        const dataFormatada = new Date()

        return dataFormatada.toLocaleDateString("pt-BR", {
            dateStyle: "short",
            
        })
        
        

    }catch(erro){
        console.error("A data formatada não pode ser exibida", erro.message)
    }
}

function operacoesDatas() {
  try {
    console.log(
      "A diferença de dias entre as duas datas é:",
      diferencaEntreDatas()
    );
    console.log(
      "Esta é a data com o valor de dias adicionado:",
      adicionaDias(15)
    );

    fusoHorario()

    console.log("Esta é a data atual com formatação pt_BR:", formatarData())

   
  } catch (erro) {
    console.error("As operações de datas não podem ser exibidas", erro.message);
  }
}

operacoesDatas();
