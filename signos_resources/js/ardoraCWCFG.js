//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=30;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=true;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#400040"; colorButton="#008040"; colorText="#000000"; colorSele="#008080";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Muy bien lo has logrado "; messageTime="360"; messageError="Hmmm, lee de nuevo e untentalo de nuevo"; messageErrorG="Hmmm, lee de nuevo e untentalo de nuevo"; messageAttempts="30"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#008080";borderError="#FF0000"; borderAttempts="#008080";
var wordsGame="c2lnbm9z"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Qw==","Og==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Og==","Og==","Og==","Og==","Og==","Qw==","Tw==","TQ==","SQ==","TA==","TA==","QQ==","Uw=="],["Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Ug==","Og==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Og==","TA==","Og==","Og==","Og==","Og==","Qw==","Og==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Og==","TA==","Og==","Og==","Og==","Og==","SA==","Og==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","UA==","QQ==","Ug==","RQ==","Tg==","VA==","RQ==","Uw==","SQ==","Uw==","Og==","Og==","Og=="],["Og==","Og==","Og==","Vg==","Og==","Og==","Og==","Og==","VA==","Og==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Og==","RQ==","Og==","Og==","Og==","Og==","RQ==","Og==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Og==","Uw==","Og==","Rw==","Og==","Og==","Uw==","Og==","Qw==","Og==","Og==","Og==","Og=="],["Og==","Og==","Og==","Og==","Og==","VQ==","Og==","Og==","Og==","Og==","Tw==","Og==","Og==","Og==","Og=="],["Og==","Og==","UA==","Og==","Og==","SQ==","Og==","Og==","Og==","Og==","TQ==","Og==","Og==","Og==","Og=="],["Og==","UA==","VQ==","Tg==","VA==","Tw==","WQ==","Qw==","Tw==","TQ==","QQ==","Og==","Og==","Og==","Og=="],["Og==","Og==","Tg==","Og==","Og==","Tg==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","VA==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Tw==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og=="]];
var x1=[8,3,2,9,4,6,11,3];
var y1=[2,6,12,1,4,9,9,11];
var x2=[15,12,11,9,4,6,11,3];
var y2=[2,6,12,9,9,13,12,15];
var imaCW=["","","","","","","",""];
var audioCW=["","","","","","","",""];
var defCW=["se usa delante y detrás de una palabra o un conjunto de palabras y que sirve para indicar que se citan de otro texto o que deben entenderse de un modo especial pueden ser simples o dobles","Sirve para encerrar esta frase o comentario en un texto escrito","Se emplea para señalar una pausa algo mayor que la que representa la coma y menor que la que representa el punto.","Sirve para encerrar un conjunto de palabras o de números","Signo gráfico constituido por dos líneas sinuosas que, al juntarse, forman una pequeña punta en el centro","Se usa para marcar la separación entre las sílabas que componen una palabra","Se utiliza para hacer una breve pausa","Se utiliza para separar parrafos"];
var altCW=["","","","","","","",""];
var colNum=15;
var rowNum=15;
