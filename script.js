console.log('Le Js fonctionne ~ Agathe');
cercle();
wordpressHate();
//calendrier();
//j'ai réduit le nb de cercle ~Agathe
function cercle() {
	for (var i = 0; i < 8; i++) {
		var $parent = document.querySelector('main');
		var $enfant = document.createElement('div');
		var $couleur = ["Lila est nulle",
			"#F9B233",
			"#5F1D5E",
			"#ECD04B"
		];


		$enfant.classList.add('box', 'flex');
		$parent.appendChild($enfant);

		$randomTop = Math.random() * (document.querySelector('main').clientHeight - 700) + document.querySelector('.box').offsetHeight;
		$randomLeft = Math.random() * (document.querySelector('main').clientWidth - document.querySelector('.box').offsetWidth) + document.querySelector('.box').offsetWidth;
		$randomSize = Math.random() * (15 - 1) + 1;
		$randomCouleur = Math.random() * (3 - 0);
		$randomCouleurRounded = Math.ceil($randomCouleur);

		console.log("index couleur " + $randomCouleurRounded);
		console.log("Position TL " + $randomTop, $randomLeft);

		$enfant.style.top = $randomTop + "px";
		$enfant.style.left = $randomLeft + "px";
		$enfant.style.width = $randomSize + "vw";
		$enfant.style.height = $randomSize + "vw";
		$enfant.style.backgroundColor = $couleur.at($randomCouleurRounded);

	}


}

function wordpressHate() {
	var $replacer = "<a href='https://huot.etu.mmi-unistra.fr/CommuMMI/events/' rel='bookmark' class='flex bouton_cld'>Voir le calendrier</a>"
	var $lien = document.querySelector('.entry-title');
	//$lien.classList.add('flex','bouton_cld')
	$lien.outerHTML = $replacer;


}
//trouver comment alterer la date de wp 

// function calendrier(){

// 	var $calendrier = document.querySelector('.calendrier_mmi')

// 	var $ctn_btn = document.createElement('div')
// 	var $boutonD = document.createElement('div')
// 	var $boutonG = document.createElement('div')
// 	const $date = new Date();
// 	$ctn_btn.classList.add('containeur_btn', 'flex');
// 	$boutonD.classList.add('selecteur_mois_fut', 'flex');
// 	$boutonG.classList.add('selecteur_mois_pass', 'flex');

// 	$calendrier.appendChild($ctn_btn)
// 	$ctn_btn.appendChild($boutonG);
// 	$ctn_btn.appendChild($boutonD);
// 	$boutonG.innerHTML +="<input type ='button'class='btn_prec' value='mois précédent'>"
// 	$boutonD.innerHTML +="<input type ='button' class='btn_sui'value='mois suivant'>"


// 	var $actionG = document.querySelector('.btn_prec')
// 	var $actionD = document.querySelector('.btn_sui')


// 	$actionG.onclick =  function() {

// 		console.log("click !" + $date);
// 		$date.setMonth($date.getMonth() - 1)

// 		$default_date = $date;


// 								   };

// 	$actionD.onclick =  function() { 

// 		console.log("cluck !"+ $date);
// 					$date.setMonth($date.getMonth() + 1)

// 	};
// };