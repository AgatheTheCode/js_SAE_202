console.log('Le Js fonctionne ~ Agathe');
	cercle();

    function cercle() { 
        for (var i = 0; i < 12; i++) {
			var $parent = document.querySelector('main');
			var $enfant = document.createElement('div');	
			var $couleur =["Lila Est nulle",
						  "#F9B233",
						  "#5F1D5E",
						  "#ECD04B"];
        
        $enfant.classList.add('box', 'flex');
        $parent.appendChild($enfant);

        $randomTop = Math.random() * (document.querySelector('main').clientHeight - 1000) + document.querySelector('.box').offsetHeight;
        $randomLeft =  Math.random() * (document.querySelector('main').clientWidth  - document.querySelector('.box').offsetWidth) + document.querySelector('.box').offsetWidth;
		$randomSize = Math.random() * (15 - 1) + 1;
		$randomCouleur = Math.random() * (3 - 0);
		$randomCouleurRounded = Math.ceil($randomCouleur);
			
			console.log("index couleur " + $randomCouleurRounded);
			console.log("Position TL " + $randomTop , $randomLeft);
    
        $enfant.style.top = $randomTop +"px";
        $enfant.style.left = $randomLeft +"px";
		$enfant.style.width = $randomSize +"vw";
		$enfant.style.height = $randomSize +"vw";
		$enfant.style.backgroundColor = $couleur.at($randomCouleurRounded);
    }

		
    }
	
	
	
	//liliaPrank();
	//function liliaPrank(){	
	//alert("Promis c'est pas moi !!!!!!");}