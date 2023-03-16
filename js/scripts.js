/*!
* Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/


// Array with all user's current answers
let answers = [];
let myChart;
let date = new Date();
let chartBGcolor=["rgba(224,102,102,0.2)", "rgba(147,196,125,0.2)", "rgba(142,124,195,0.2)"];
let chartBcolor=["rgba(224,102,102,1)", "rgba(147,196,125,1)", "rgba(142,124,195,1)"];
let color = -1;


let testData1 = [2, 3, 5, 4, 4, 5, 2, 3, 2, 3, 4];
let testData2 = [2, 3, 5, 4];
// variable for radios btns
let maxValue = 6;
let minValue = 1;
let defaultCheckedBtn = 4;
let curentSet = 1;
// chart values :
let mintick = 0;
let step = 1;
let testDatas;

// use to navigate adn keep previus responses
let previusResponses = null;
// Set of questions : if add set -> must add an if in function getQuestions
let set = [
	{
		"title": "Acculturation numérique",
		"sous-dimension" : [
			"Développer et mobiliser des habiletés numériques",
			"Développer une pensée computationnelle",
			"Gérer sa formation au numérique",
		],
		"resources": [
			"la ressource 1 : http:google.com",
			"la ressource 2 : http:google.com",
			"la ressource 3 : http:google.com",
		],
		"category": 1
	},
	{
		"title": "Pensée critique",
		"sous-dimension" : [
			"Développer sa pensée critique envers le numérique",
			"Développer sa pensée critique grâce au numérique",
		],
		"resources": [
			"la ressource 1 : http:google.com",
			"la ressource 2 : http:google.com",
		],
		"category": 1
	},
	{
		"title": "Développement professionnel et personnel",
		"sous-dimension" : [
			"Gérer sa carrière et son apprentissage tout au long de sa vie avec le numérique",
			"Exploiter le potentiel du numérique pour l’apprentissage et l’enseignement",
		],
		"resources": [
			"la ressource 1 : http:google.com",
			"la ressource 2 : http:google.com",
		],
		"category": 1
	},
	{
		"title": "Littératie de l’information et des données",
		"sous-dimension" : [
			"Parcourir, rechercher, filtrer et évaluer les données, les informations et le contenu numériques",
			"Gérer les informations, les données et le contenu numérique",
		],
		"resources": [
			"la ressource 1 : http:google.com",
			"la ressource 2 : http:google.com",
		],
		"category": 1
	},
	{
		"title": "Communication et réputation",
		"sous-dimension" : [
			"Partager efficacement via les technologies numériques en employant les formes d’expressions appropriées (netiquettes)",
			"Gérer son identité numérique",
		],
		"resources": [
			"la ressource 1 : http:google.com",
			"la ressource 2 : http:google.com",
		],
		"category": 1
	},
	{
		"title": "Collaboration",
		"sous-dimension" : [
			"Interagir et collaborer au moyen des technologies numériques",
			"S’engager au moyen des technologies numériques",
		],
		"resources": [
			"la ressource 1 : http:google.com",
			"la ressource 2 : http:google.com",
		],
		"category": 1
	},
	{
		"title": "Création de contenu numérique",
		"sous-dimension" : [
			"Intégrer, développer et réélaborer du contenu numérique",
			"Respecter le droit d’auteur et les licences",
			"Programmer et paramétrer",
		],
		"resources": [
			"la ressource 1 : http:google.com",
			"la ressource 2 : http:google.com",
		],
		"category": 1
	},
	{
		"title": "Santé et sécurité",
		"sous-dimension" : [
			"Protéger les équipements",
			"Protéger les données personnelles et la vie privée",
			"Veiller à la santé et au bien-être",
		],
		"resources": [
			"la ressource 1 : http:google.com",
			"la ressource 2 : http:google.com",
			"la ressource 3 : http:google.com",
		],
		"category": 1
	},
	{
		"title": "Résolution de problèmes",
		"sous-dimension" : [
			"Identifier les besoins et les réponses technologiques",
			"Résoudre des problèmes techniques",
		],
		"resources": [
			"la ressource 1 : http:google.com",
			"la ressource 2 : http:google.com",
		],
		"category": 1
	},
	{
		"title": "Innovation et créativité",
		"sous-dimension" : [
			"Développer sa capacité à créer et à innover",
			"Développer une pensée complexe",
			"Développer une flexibilité grâce au numérique",
		],
		"resources": [
			"la ressource 1 : http:google.com",
			"la ressource 2 : http:google.com",
		],
		"category": 1
	},
	{
		"title": "Conscience éthique et culturelle",
		"sous-dimension" : [
			"Agir en citoyen·ne éthique à l’ère du numérique",
			"Mettre à profit le numérique en tant que vecteur d’inclusion et pour répondre à des besoins diversifiés",
			"Protéger l’environnement",
		],
		"resources": [
			"la ressource 1 : http:google.com",
			"la ressource 2 : http:google.com",
			"la ressource 3 : http:google.com",
		],
		"category": 1
	},
	{
		"title": "Engagement professionnel ",
		"sous-dimension" : [
			"Communication organisationnelle et institutionnelle",
			"Collaboration professionnelle",
			"Développement professionnel continu",
			"Ouverture et pensée critique envers l’utilisation du numérique dans l’éducation",
		],
		"resources": [
			"la ressource 1 : http:gogole.com",
			"la ressource 2 : http:gogole.com",
		],
		"category": 2
	},
	{
		"title": "Ressources et informations numériques",
		"sous-dimension" : [
			"Sélection de ressources et d’informations numériques",
			"Adaptation, et création de ressources numériques",
			"Gestion, protection et partage des ressources numériques",
		],
		"resources": [
			"la ressource 1 : http:gogole.com",
			"la ressource 2 : http:gogole.com",
		],
		"category": 2
	},
	{
		"title": "Enseignement et auto-apprentissage",
		"sous-dimension" : [
			"Dispositifs et méthodes d’enseignement",
			"Orientation et accompagnement des étudiant·es",
			"Apprentissage en autonomie ",
			"Résolution de problèmes d’enseignement",
		],
		"resources": [
			"la ressource 1 : http:gogole.com",
			"la ressource 2 : http:gogole.com",
		],
		"category": 2
	},
	{
		"title": "Evaluation de l’apprentissage",
		"sous-dimension" : [
			"Stratégies d’évaluation",
			"Analyse de l’activité d’apprentissage",
			"Rétroaction sur l’activité d’apprentissage",
		],
		"resources": [
			"ressource 1"
		],
		"category": 2
	},
	{
		"title": "Stimuler les étudiant·es",
		"sous-dimension" : [
			"Accessibilité et inclusion",
			"Différenciation et personnalisation",
			"Impliquer activement les étudiant·es",
		],
		"resources": [
			"ressource 1"
		],
		"category": 2
	},
	{
		"title": "Faciliter la compétence numérique des étudiant·es",
		"sous-dimension" : [
			"Education à l’information et aux médias",
			"Communication et collaboration avec le numérique pour l’apprentissage",
			"Création de contenus numériques",
			"Usage responsable du numérique",
			"Pensée computationnelle et résolution de problèmes",
			"Développement professionnel",
		],
		"resources": [
			"ressource 1"
		],
		"category": 2
	},
]

let questions = set;
let nbQuestions = questions.length;

// Do questions listing 
function getQuestions(index) {
    curentSet = index;
    // remove welcome msg
    document.getElementById('welcome').innerHTML = "";

	// get only the right category
	questions = set.filter(e => e.category === index);

    nbQuestions = questions.length;

	let listOfQuestions = '<table class="table"><thead><tr><th scope="col">Questions</th><th scope="col" style="text-align: center;">1 non acquis \t  6 acquis</th></tr></thead><tbody>';
    for (let i = 0; i < nbQuestions; i++) {
        listOfQuestions += '<tr><td scope="col" ><div class="col-12 col-md-12">' +
            '<label for="labCustomRange' + i + '" class="form-label">' + (i + 1) + ') ' + questions[i].title + '</label>' +
			'<span style="margin-left: 20px"><i onclick="getSousDimension(' + i + ')" class="icon-plus-sign icon-large" id="button-plus-' + i + '"></i></span>' +
			(questions[i]["sous-dimension"].length === 0 ? "" :
			'<ul id="question_sous_dimension_' + i + '" style="display: none">' +
			questions[i]["sous-dimension"].map(e => '<li>' + e + '</li>').join('') +
			'</ul>') +
            '</td><td scope="col col-8" align="center"><div id="radio' + i + '" class="col-md-12 col-12">';
        for (let j = minValue; j <= maxValue; j++) {
            listOfQuestions += '<div class="form-check form-check-inline text-right">' +
                '<input class="form-check-input"  type="radio" name="radioName' + i + '" id="inlineRadio' + i +
                '"value="' + j + '"';
            if (j === defaultCheckedBtn) {
                listOfQuestions += 'checked';
            }
            listOfQuestions += '><label class="form-check-label" for="inlineRadio1">' + j + '</label></div>';
        }
        listOfQuestions += '</div></td></div></tr>';
    }
    listOfQuestions += '</tbody></table>';

    listOfQuestions += '<div class="row justify-content-md-center">' +
        '<div class="col col-auto " >' +
        '<button onclick="getChart()" type="button" class="btn btn-secondary btn-lg mt-3 mb-3">Valider mes réponses</button>' +
        '</div>' +
        '<div id="flat-slider"></div>' +
        '</div>';

	let questionsText = document.getElementById('listOfQuestions');
    questionsText.innerHTML = listOfQuestions + '</div>';

	// set text of the button "choisir questionnaire"
	let btn = document.getElementById('dropdownMenuButton1');
	if(curentSet===1){
		btn.innerHTML = "Référentiel HES-SO";
	} else if(curentSet===2){
		btn.innerHTML = "Référentiel Uni-fr";
	} else {
		btn.innerHTML = "Choisir questionnaire";
	}
}


// JS for chart 

function getChart() {
    // read user values
    for (let i = 0; i < nbQuestions; i++) {
        answers.push($('input[name=radioName' + i + ']:checked', '#radio' + i).val());
    }
    // empty questions area
    previusResponses = document.getElementById('questionsContainer').innerHTML;
    document.getElementById('questionsContainer').innerHTML = "";
    // remove dropdown list
    document.getElementById('chooseQuestions').innerHTML = "";
	const d = new Date();
    // do chart
    myChart = new Chart(document.getElementById("radar-chart"), {
        type: 'radar',
        data: {
            labels: set.filter(el => el.category === curentSet).map(item => item.title),
			pointLabelFontSize: 40,
            datasets: [
                {
                    label: date.getDate() + "/" + (date.getMonth()+1) +"/" +date.getFullYear(),
                    fill: true,
                    backgroundColor: "rgba(61,240,222,0.2)",
                    borderColor: "rgba(61,240,222,1)",
                    pointBorderColor: "#fff",
                    pointBackgroundColor: "rgba(179,181,198,1)",
                    data: answers
                }
            ]
        },
        options: {
            responsive: true,
            scale: {
                ticks: {
                    max: maxValue,
                    min: mintick,
                    stepSize: step
                },
				pointLabels: {
					fontSize: 12
				},
				labels:{fontSize:12}
							
            },
			layout: {
				padding: {
					left: 1,
					right: 1,
					},
			},
            title: {
                display: true,
                text: 'Graphique de vos résultats',
				position:'top',
				 fontSize:20
            },
            legend: {
			}
        }
    });

// Buttons part : 
    document.getElementById('dwnSection').innerHTML += '<div class="mt-2 mb-3">';
// btn Img	
    document.getElementById('dwnSection').innerHTML += '<div class="col-4">' +
        '<button onclick="chartPDF()" id="chartPDF" type="button" class="removeInPDF btn btn-secondary btn-lg mr-3">Télécharger PDF</button>' +
        '</div>';
// btn json	
    document.getElementById('dwnSection').innerHTML += '<div class="col-4">' +
        '<button onclick="dwnJson()" id="chartJSON" type="button" class="removeInPDF btn btn-secondary btn-lg ml-3">Télécharger mon résultat (.txt)</button>' +
        '</div>';
// btn import
    document.getElementById('dwnSection').innerHTML += '<div class="col-4">' +
		'<button onclick="importJSON()" id="importJSON" type="button" class="removeInPDF btn btn-secondary btn-lg ml-3">Importer anciens résultats (.txt)</button>' +
		'<input type="file" id="file_input" name="avatar" accept="text/plain" style="display: none" onchange="readText(event)">' + '<br>' +
		'<div id="wrapper">' +
			'<div class="container w-50 mt-2">' +
				'<div class="row">' +
					'<div class="alert alert-danger text-break" role="alert" id="alert" style="display: none">Erreur</div>' +
				'</div>' +
			'</div>'+
		'</div>'+

        '</div>';
    document.getElementById('dwnSection').innerHTML += '</div>';

	generateSubSectionDiv()
	
}

function verifyJson(json_result) {
	if (json_result.length !== nbQuestions){
		return false;
	} else {
		return json_result.reduce((result,element)=> result && (element >= minValue && element <= maxValue ));
	}
}

// Read text file from the file input
async function readText(event) {
	const file = event.target.files.item(0);
	var files = event.target.files;	
	var fileName = String(files[0].name.substring(0, files[0].name.lastIndexOf('.')));
	const labelname = fileName.split("_")[2]+"/"+fileName.split("_")[3]+"/"+fileName.split("_")[4];	
	file.text().then(result => {
		const json_result = JSON.parse(result);
		if(verifyJson(json_result)){
			let alertText = $('#alert')[0];
			alertText.innerHTML = "";
			$(alertText).hide();	
			color=color+1;
			let oldDataSet = {
				label: labelname, //extract date from file name
				fill: true,
				backgroundColor: chartBGcolor[color],
				borderColor: chartBcolor[color],
				pointBorderColor: "#fff",
				pointBackgroundColor: "rgba(255,99,132,1)",
				data: json_result
			};
			myChart.data.datasets.push(oldDataSet);
			myChart.update();
		} else {
			let alertText = $('#alert')[0];
			alertText.innerHTML = "Erreur avec l'import";
			$(alertText).show();
		}
	})

}

// Dwn : do pdf from chart 
function chartPDF() {
	window.jsPDF = window.jspdf.jsPDF
	let pdf =  new jsPDF('p', 'pt','a4', true);

	const pdf_height = 841;
	const pdf_width = 595;
	//console.log(pdf_width)

    // source can be HTML-formatted string, or a reference
    // to an actual DOM element from which the text will be scraped.
    const canvas = $('#radar-chart')[0];
	const canvas_width = canvas.width;
	const canvas_height = canvas.height;
	const imgData = canvas.toDataURL('image/png', 1.0);

	const optimal_canvas_width = pdf_width - 100;
	const canvas_optimal_heigth = optimal_canvas_width * canvas_height / canvas_width;

	// we support special element handlers. Register them with jQuery-style
    // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
    // There is no support for any other type of selectors
    // (class, of compound) at this time.

	pdf.addImage(imgData, 'PNG', 50, Math.floor((pdf_height-canvas_optimal_heigth)/2), Math.floor(optimal_canvas_width), Math.floor(canvas_optimal_heigth), 'FAST');
	// TODO: for add dimension < 3 in pdf add a page and call the method doc.fromHtml
	pdf.save(`mon_autoevaluation_${(date.getDate() + "/" + (date.getMonth()+1) +"/" +date.getFullYear())}.pdf`);
}

function dwnJson() {
	let textToSave = JSON.stringify(answers);

	let hiddenElement = document.createElement('a');

    hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
    hiddenElement.target = '_blank';
    hiddenElement.download = `mon_autoevaluation_${(date.getDate() + "/" + (date.getMonth()+1) +"/" +date.getFullYear())}.txt`;
    hiddenElement.click();
}

function importJSON() {
	$('#file_input')[0].click();
}

function getSousDimension(row_number) {
	console.log($('#button-plus-'+row_number)[0]);
	if ($($('#question_sous_dimension_' + row_number)[0]).css('display') === 'none') {
		$($('#button-plus-'+row_number)[0]).attr("class", "icon-minus-sign icon-large");
		$($('#question_sous_dimension_' + row_number)[0]).show();
	} else {
		$($('#button-plus-'+row_number)[0]).attr("class", "icon-plus-sign icon-large");
		$($('#question_sous_dimension_' + row_number)[0]).hide();
	}
}

function generateSubSectionDiv() {
	let html_string = '<div class="col-12 col-md-12">'
	html_string += "Voici les compétences que nous vous conseillons d'approfondir si (<=2) avec les thématiques correspondantes :" + '<br>';   
	
	
	// set.filter(el => el.category === curentSet).forEach((item, index) => {
			// html_string += '<div id="question_div_' + index + '" style="display: none"><label for="labCustomRange' + index + '" class="form-label">' + (index + 1) + ') ' + item.title + '</label>' +
			// (item["sous-dimension"].length === 0 ? "" :
			// '<ul id="question_sous_dimension_' + index + '">' +
				// item["sous-dimension"].map(e => '<li>' + e + '</li>').join('') +
			// '</ul>') +
			// '</div>'
	// })
	
		set.filter(el => el.category === curentSet).forEach((item, index) => {			
			html_string += '<div id="question_div_' + index + '" style="display: none"><label for="labCustomRange' + index + '" class="form-label">' + (index + 1) + ') ' + item.title + '</label>' +
				'</div>'
	})
	html_string+= "----------------------" + '<br>'+"Retrouver les thématiques correspondantes et l'ensemble des ressources sur " +  '<a href="https://cyberlearn.hes-so.ch/course/view.php?id=20692#section-0">Moodle</a><br>'; //Mettre l'adresse du moodle
	html_string += '</div>'
	$('#sub-dimensions-div')[0].innerHTML = html_string;
	generatetable();

	answers.forEach((answer, index) => {
			if (parseInt(answer) <= 3) {			
				$($('#question_div_' + index)[0]).show()
			}
		})
	
}

function generatetable(){
	let html_table = '<table style="margin-top: 10px;margin-bottom: 20px " class="tg">'+
'<thead>'+
  '<tr>'+
    '<th class="tg-bemg">Thématiques</th>'+
    '<th class="tg-bemg">Collaboration pour l\'enseignement/l\'apprentissage</th>'+
    '<th class="tg-bemg">Ethique numérique (attitudes)</th>'+
    '<th class="tg-bemg">Création de contenu numérique</th>'+
    '<th class="tg-bemg">Résolution de problèmes</th>'+
    '<th class="tg-bemg">Feedback, évaluation et progression</th>'+
  '</tr>'+
'</thead>'+
'<tbody>'+
 ' <tr>'+
  '  <td class="tg-fq8o" align="center" rowspan="6">Référentiel HES-SO</td>'+
   ' <td class="tg-7zrl">VI - Collaboration</td>'+
    '<td class="tg-7zrl">II - Pensée critique</td>'+
    '<td class="tg-7zrl">VII - Création de contenu numérique</td>'+
    '<td class="tg-7zrl">IX - Résolution de problème</td>'+
    '<td class="tg-7zrl">VII- Création de contenu</td>'+
  '</tr>'+
  '<tr>'+
    '<td class="tg-7zrl"> III.2 - Exploiter le potentieldu numérique pour l\'apprentissage et l\enseignement </td>'+
    '<td class="tg-7zrl">XI.1 - Concience éthique et culturelle</td>'+
    '<td class="tg-7zrl">X.1 - Développer sa capacité à créer et à innover</td>'+
    '<td class="tg-7zrl">X - Innovation et créativité</td>'+
    '<td class="tg-7zrl"> I.2 - Développer une pensée computationnelle</td>'+
  '</tr>'+
  '<tr>'+
    '<td class="tg-7zrl"> X.3 - Développer une flexibilité grâce au numérique </td>'+
    '<td class="tg-7zrl">XI.3 -  Protéger l\'environnement</td>'+
    '<td class="tg-7zrl">IV - Littératie de l\'information des données</td>'+
    '<td class="tg-7zrl">I.2 - Développer une pensée computationnelle</td>'+
    '<td class="tg-7zrl"> IV - Littératie de l\'information des données</td>'+
  '</tr>'+
	    '<tr>'+
    '<td class="tg-7zrl">  </td>'+
    '<td class="tg-7zrl">VIII.2 -  Protéger les données personnelles et la vie privée</td>'+
    '<td class="tg-7zrl"></td>'+
    '<td class="tg-7zrl"></td>'+
    '<td class="tg-7zrl"> </td>'+
  '</tr>'+
	    '<tr>'+
    '<td class="tg-7zrl">  </td>'+
    '<td class="tg-7zrl">VIII.3 -  Veiller à la santé et au bien-être</td>'+
    '<td class="tg-7zrl"></td>'+
    '<td class="tg-7zrl"></td>'+
    '<td class="tg-7zrl"></td>'+
  '</tr>'+
	    '<tr>'+
    '<td class="tg-7zrl"> </td>'+
    '<td class="tg-7zrl">V - Communication et réputation</td>'+
    '<td class="tg-7zrl"></td>'+
    '<td class="tg-7zrl"></td>'+
    '<td class="tg-7zrl"> </td>'+
  '</tr>'+
  '<tr>'+
   ' <td class="tg-fq8o" align="center" rowspan="7">Référentiel Unifr</td>'+
    '<td class="tg-7zrl">1.1- Communication organisationnelle et institutionnelle</td>'+
    '<td class="tg-7zrl"> 1.3 - Développement professionnel continu</td>'+
    '<td class="tg-7zrl">2.2 - Adaptation et création de ressources numériques</td>'+
    '<td class="tg-7zrl">6.5- Pensée computationnelle et résolution de problèmes</td>'+
    '<td class="tg-7zrl">4.1 - Stratégies d\'évaluation</td>'+
  '</tr>'+
  '<tr>'+
    '<td class="tg-7zrl">1.2 - Collaboration professionnelle</td>'+
    '<td class="tg-7zrl">1.4 - Ouverture et pensée critique envers l\'utilisation du numérique</td>'+
    '<td class="tg-7zrl">2.3 - Gestion, protection et partage des ressources numériques</td>'+
    '<td class="tg-7zrl"> 3.4 - Résolustion de problème</td>'+
    '<td class="tg-7zrl"> 4.2 - Analyse de l\'activité d\'apprentissage </td>'+
  '</tr>'+
  '<tr>'+
    '<td class="tg-7zrl">3.1 - Dispositifs et méthodes d\'enseignement </td>'+
    '<td class="tg-7zrl">6.1 - Education à l\'information et aux médias </td>'+
    '<td class="tg-7zrl"> 5.3 - Impliquer activement les étudiant.es</td>'+
    '<td class="tg-7zrl"> </td>'+
    '<td class="tg-7zrl"> 4.3 - Rétroaction sur l\'activité d\'apprentissage </td>'+
  '</tr>'+
'<tr>'+
    '<td class="tg-7zrl">6.2 - Communication et collaboration avec le numérique pour l\'apprentissage</td>'+
    '<td class="tg-7zrl">6.4 - Usage responsable du numérique </td>'+
    '<td class="tg-7zrl"></td>'+
    '<td class="tg-7zrl"> </td>'+
    '<td class="tg-7zrl"> 3.2 - Orientation et accompagnement des étudiant.es</td>'+
  '</tr>'+
  '<tr>'+
    '<td class="tg-7zrl">6.6 - Développement professionnel</td>'+
    '<td class="tg-7zrl">2.1 - Sélection de ressources et de l\'information du numérique </td>'+
    '<td class="tg-7zrl"></td>'+
    '<td class="tg-7zrl"> </td>'+
    '<td class="tg-7zrl"> 3.3 - Apprentissage et autonomie</td>'+
  '</tr>'+
	      '<tr>'+
    '<td class="tg-7zrl"></td>'+
    '<td class="tg-7zrl">2.3 - Gestion, protection et partage de ressources numériques</td>'+
    '<td class="tg-7zrl"></td>'+
    '<td class="tg-7zrl"> </td>'+
    '<td class="tg-7zrl"></td>'+
  '</tr>'+
	    	      '<tr>'+
    '<td class="tg-7zrl"></td>'+
    '<td class="tg-7zrl">5.1 - Accessibilité et inclusion</td>'+
    '<td class="tg-7zrl"></td>'+
    '<td class="tg-7zrl"> </td>'+
    '<td class="tg-7zrl"></td>'+
  '</tr>'+
'</tbody>'
	$('#referentiel-table')[0].innerHTML = html_table;
}
