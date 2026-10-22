// Ajuste estes valores e publique de novo.
window.CONFIG = {
  // URL do App da Web do Apps Script (termina em /exec). Ver README.md.
  SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbwbfv98k1g4O5l4xK-mTu8ii6G2jhLhutn9d9GTXBq292fVaHAWNPAPz4DcWXXUtd2Zsg/exec',
  // Nome do bairro ou da comunidade, aparece no topo.
  BAIRRO: 'João Pessoa',
  // Cidade, usada nos links de rota quando o ponto não foi marcado no mapa.
  CIDADE: 'João Pessoa, PB',
  // Área onde a busca de endereços e escolas procura: oeste, norte, leste, sul.
  // Grande João Pessoa: João Pessoa, Cabedelo, Bayeux, Santa Rita, Conde e Lucena.
  REGIAO: [-35.04, -6.85, -34.77, -7.35],
  REGIAO_NOME: 'na Grande João Pessoa',
  REGIAO_TITULO: 'Grande João Pessoa',
  // DDD usado nos exemplos de telefone.
  DDD: '83',
  // Exemplos de nomes de locais de votação (passo "Onde vota?").
  EXEMPLOS_LOCAIS: 'UFPB, Unipê, Pio X',
  // Área que o mapa mostra ao abrir: [[sul, oeste], [norte, leste]]. Aqui, João Pessoa inteira.
  AREA_MAPA: [[-7.2477, -34.974], [-7.056, -34.793]],
  // Centro da cidade: ordena os locais de votação por proximidade (e serve de reserva ao mapa).
  CENTRO: [-7.1216, -34.882],
  ZOOM: 12,
  // Texto da data da votação.
  DATA: 'Domingo, 25 de outubro · 2º turno · das 8h às 17h',
  // WhatsApp e nome de quem organiza (DDD + número, só dígitos). Deixe vazio para não exibir.
  CONTATO: '81996189993',
  CONTATO_NOME: 'Ricardo Rodrigues',
  // Código do site no GitHub (link do "Feito por" no rodapé).
  REPOSITORIO: 'https://github.com/caronasolidaria-jp/caronasolidaria-jp.github.io',
  // Quando os dados são apagados (igual a APAGAR_EM no Code.gs).
  APAGAR_ATE: '26/10/2026, às 18h',
};
