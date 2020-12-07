var display ;
var display_content



function add_to_display(){

	const btn = document.getElementById(event.target.id);
	const btn_text = btn.textContent


	display = document.getElementById('display');
	display_content = display.textContent
	

	if (display_content == 0){
	display.textContent = btn_text
}

else{
	display.textContent = display_content + btn_text
}
	
}

function general_btn(){
	const btn = event.target.id

	if (btn == 'clear-btn'){

		display.textContent = 0
	}

	else if (btn == 'del-btn'){
	
       display.textContent = display.textContent.toString().substring(0,display.textContent.toString().length-1)
       console.log(display.textContent)
	}

	else if (btn == 'equal-btn'){
        display.textContent = eval(display.textContent.toString())
	}
}
