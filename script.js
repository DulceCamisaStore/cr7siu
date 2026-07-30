const jugadores=[

{
nombre:"Stephen Curry",
equipo:"Golden State Warriors",
media:98,
rareza:"legendaria",
imagen:"curri.jpg",
ataque:99,
defensa:86,
triple:99
},

{
nombre:"LeBron James",
equipo:"c",
media:97,
rareza:"legendaria",
imagen:"lebron james.jpg",
ataque:98,
defensa:92,
triple:85
},

{
nombre:"Kevin Durant",
equipo:"Phoenix Suns",
media:96,
rareza:"epica",
imagen:"kevin.jpg",
ataque:98,
defensa:88,
triple:93
},

{
nombre:"Nikola Jokic",
equipo:"Denver Nuggets",
media:97,
rareza:"legendaria",
imagen:"nikola.jpg",
ataque:97,
defensa:90,
triple:88
},

{
nombre:"Luka Doncic",
equipo:"Dallas Mavericks",
media:97,
rareza:"legendaria",
imagen:"luka.jpg",
ataque:98,
defensa:84,
triple:91
},

{
nombre:"Giannis Antetokounmpo",
equipo:"Milwaukee Bucks",
media:96,
rareza:"legendaria",
imagen:"mamada.jpg",
ataque:96,
defensa:97,
triple:75
},

{
nombre:"Jayson Tatum",
equipo:"Boston Celtics",
media:95,
rareza:"epica",
imagen:"JASON.jpg",
ataque:96,
defensa:90,
triple:89
},

{
nombre:"Ja Morant",
equipo:"Memphis Grizzlies",
media:92,
rareza:"rara",
imagen:"morant.jpg",
ataque:94,
defensa:80,
triple:82
},

{
nombre:"Kyrie Irving",
equipo:"Dallas Mavericks",
media:94,
rareza:"epica",
imagen:"KYRIE.jpg",
ataque:96,
defensa:83,
triple:92
},

{
nombre:"Damian Lillard",
equipo:"Milwaukee Bucks",
media:93,
rareza:"epica",
imagen:"dani.jpg",
ataque:95,
defensa:82,
triple:97
},

{
nombre:"Joel Embiid",
equipo:"Philadelphia 76ers",
media:95,
rareza:"epica",
imagen:"JOEL.jpg",
ataque:96,
defensa:94,
triple:85
},

{
nombre:"Anthony Edwards",
equipo:"Minnesota Timberwolves",
media:94,
rareza:"epica",
imagen:"ejej.jpg",
ataque:95,
defensa:87,
triple:86
},

{
nombre:"Devin Booker",
equipo:"Phoenix Suns",
media:93,
rareza:"rara",
imagen:"devin bookeck.jpg",
ataque:94,
defensa:82,
triple:91
},

{
nombre:"Jimmy Butler",
equipo:"Miami Heat",
media:92,
rareza:"rara",
imagen:"jimi.jpg",
ataque:90,
defensa:95,
triple:80
},
{
  nombre: "uriel figueroa",
  equipo: "Los Angeles Lakers",
  media: 95,
  rareza: "epica",
  imagen: "uriel.jpg.jpg",
  ataque: 97,
  defensa: 87,
  triple: 90
},

{
  nombre: "Dylan stvens",
  equipo: "Los Angeles Lakers",
  media: 100,
  rareza: "legendaria",
  imagen: "dylan.jpg",
  ataque: 100,
  defensa: 58,
  triple: 69
},

{
nombre:"Kawhi Leonard",
equipo:"LA Clippers",
media:94,
rareza:"epica",
imagen:"kawh.jpg",
ataque:93,
defensa:98,
triple:86
},

{
nombre:"Victor Wembanyama",
equipo:"San Antonio Spurs",
media:91,
rareza:"especial",
imagen:"victor.jpg",
ataque:90,
defensa:97,
triple:82
},

{
nombre:"Shai Gilgeous-Alexander",
equipo:"OKC Thunder",
media:95,
rareza:"epica",
imagen:"shai.jpg",
ataque:96,
defensa:91,
triple:88
},

{
nombre:"Trae Young",
equipo:"Atlanta Hawks",
media:91,
rareza:"rara",
imagen:"rae.jpg",
ataque:93,
defensa:75,
triple:94
},

{
nombre:"Anthony Davis",
equipo:"Los Angeles Lakers",
media:94,
rareza:"epica",
imagen:"davis.jpg",
ataque:92,
defensa:98,
triple:80
},

{
nombre:"Carmelo Anthony",
equipo:"NBA Legends",
media:95,
rareza:"legendaria",
imagen:"divisjr.jpg",
ataque:97,
defensa:85,
triple:90
} 



];


let contenedor=document.getElementById("cartas");


function mostrar(lista){

contenedor.innerHTML="";


lista.forEach(jugador=>{

contenedor.innerHTML += `

<div class="carta ${jugador.rareza}">

<img src="${jugador.imagen}">

<h2>${jugador.nombre}</h2>

<p>${jugador.equipo}</p>

<h1>⭐ ${jugador.media}</h1>

<h3>${jugador.rareza}</h3>

<div class="stats">

🏀 Ataque: ${jugador.ataque}<br>
🛡 Defensa: ${jugador.defensa}<br>
🎯 Triple: ${jugador.triple}

</div>

</div>

`;

});

}


mostrar(jugadores);



document.getElementById("buscar")
.addEventListener("keyup",function(){

let texto=this.value.toLowerCase();

let filtrados=jugadores.filter(j =>
j.nombre.toLowerCase().includes(texto)
);

mostrar(filtrados);

});