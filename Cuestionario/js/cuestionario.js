const MOSTRAR_RESPUESTAS_MODAL = 'mostrarRespuestasModal';
const CHECKEAR_RESPUESTAS_MODAL = 'checkearRespuestasModal'

//Funcion que se activa al presionar el boton Generar, capta el input del usuario.
function generarPreguntas(){
    var cantidadPreguntas = +document.getElementById('cantidadInput').value;
	if(cantidadPreguntas>4){
    mostrarPreguntas(cantidadPreguntas + 1);
	}
}

//Muestra la cantidad de preguntas que recibe.
function mostrarPreguntas(cantidadPreguntas){
    for(let numeroPregunta = 1; numeroPregunta < cantidadPreguntas; ++numeroPregunta){
		document.getElementById('pregunta' + numeroPregunta).style.display = "block";
    }
	for(let numeroPregunta = cantidadPreguntas; numeroPregunta <= 20; ++numeroPregunta){
		document.getElementById('pregunta' + numeroPregunta).style.display = "none";
    }
    document.getElementById('exercise-items').style.display = "block";
}

//Muestra las respuestas correctas.
function mostrarRespuestas(){
	document.getElementById(MOSTRAR_RESPUESTAS_MODAL).style.display = "none";

    for(let pregunta = 1; pregunta <= 20; ++pregunta){
        let tagPregunta = document.getElementById("pregunta" + pregunta);
        if (window.getComputedStyle(tagPregunta).display != "none") {
			document.getElementById("inputSolucion" + pregunta).style.display = "none";
			document.getElementById("solucion" + pregunta).style.display = "inline-block";
        }
    }  
}

//Verificar las respuestas ingresadas.
function checkAnswers(){
	document.getElementById(CHECKEAR_RESPUESTAS_MODAL).style.display = "none";
    let correctAnswers = 0;
    let totalQuestions = 0;

    for(let question = 1; question <= 20; ++question){
        let questionTag = document.getElementById("pregunta" + question.toString());
        if (window.getComputedStyle(questionTag).display != "none") {
            let userInput = parseInt(document.getElementById("inputSolucion" + question).value);
            let answer = document.getElementById("solucion" + question).innerHTML;
            if(userInput == answer){
                ++correctAnswers;
				document.getElementById("inputSolucion" + question).style.display = "none";
            }else{
                let inputSolution = document.getElementById("inputSolucion" + question);
                inputSolution.style.border = "solid red";
                inputSolution.style.color = "red";
				document.getElementById("respuesta" + question).style.display = "inline-block";
            }
			document.getElementById("solucion" + question).style.display = "inline-block";
            ++totalQuestions;
        }
    }
}

//Ocultar elemento.
function hide(id){
    document.getElementById(id).style.display = "none";
}