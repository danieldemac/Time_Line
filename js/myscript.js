var timelineConfig = {
    "events": [
      // Eventos existentes
      {
        "start_date": {
          "year": 1801
        },
        "end_date": {
          "year": 1901
        },
        "text": {
          "headline": "Século XIX",
          "text": "<p>O século da Revolução</p>"
        }
      },
      {
        "start_date": {
          "year": 1901
        },
        "end_date": {
          "year": 2001
        },
        "text": {
          "headline": "Século XX",
          "text": "<p>O século das mudanças</p>"
        }
      },
      {
        "start_date": {
          "year": 2001
        },
        "end_date": {
          "year": 2101
        },
        "text": {
          "headline": "Século XXI",
          "text": "<p>O século da tecnologia</p>"
        }
      }
    ]
  };

  // Função para adicionar evento à timeline
  function adicionarEvento() {
    var eventTitle = document.getElementById('eventTitle').value;
    var eventDescription = document.getElementById('eventDescription').value;
    var eventStartDate = parseInt(document.getElementById('eventStartDate').value);
    var eventEndDate = parseInt(document.getElementById('eventEndDate').value);

    var newEvent = {
      "start_date": {
        "year": eventStartDate
      },
      "end_date": {
        "year": eventEndDate
      },
      "text": {
        "headline": eventTitle,
        "text": "<p>" + eventDescription + "</p>"
      }
    };

    timelineConfig.events.push(newEvent);
    updateTimeline();
  }

  // Função para atualizar a timeline com os novos eventos
function updateTimeline() {
  var timelineContainer = document.getElementById('timeline');
  var previousHeight = timelineContainer.clientHeight; // Armazena a altura atual da timeline

  timelineContainer.innerHTML = ''; // Limpa a div da timeline

  // Cria uma nova instância da TimelineJS
  var timeline = new TL.Timeline('timeline', timelineConfig);

  // Verifica e ajusta a altura da timeline, se necessário
  var currentHeight = timelineContainer.clientHeight;
  if (currentHeight < previousHeight) {
    timelineContainer.style.height = previousHeight + 'px'; // Mantém a altura anterior
  }
}

  window.onload = function () {
    updateTimeline(); // Inicializa a timeline

    // Captura o envio do formulário para adicionar eventos
    document.getElementById('addEventForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário
      adicionarEvento(); // Chama a função para adicionar o evento
    });
  };