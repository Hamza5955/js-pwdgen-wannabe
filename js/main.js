/*Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21*/
var Name = prompt("Dimmi il tuo nome?");

var cognome = prompt("Dimmi il tuo cognome?");

var Color = prompt("Dimmi il tuo colore preferito?");

var Year = 21;

document.getElementById("password").innerHTML = Name + cognome + Color + Year;
