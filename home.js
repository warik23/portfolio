import { motto, panelBackgrounds } from "./assets.js";
export const home=()=>{
		document.querySelector(".panels").addEventListener("click", toggleOpen);
	
		motto.forEach(item =>
			document.querySelector('.panels').innerHTML += `
		<div class="panel">${item}</div>
		`
		)
	
		const panelsNodeLista = document.querySelectorAll('.panel');
		panelsNodeLista.forEach((panel, i) =>
			panel.style.backgroundImage = `url(${panelBackgrounds[i]})`);
	
	
		function toggleOpen(e) {
	
	
			if (e.target.classList.contains('open')) {
				e.target.classList.remove('open');
			}
	
			else {
				panelsNodeLista.forEach(obj => obj.classList.remove('open'));
				e.target.classList.add('open');
			}
	
	
		}

}
