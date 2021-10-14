

function validator(options){
	let formElement = document.querySelector(options.form) ;
	if(formElement){
		options.rules.forEach((rule) => {
			let inputElement = formElement.querySelector(rule.selector) ;
			
			inputElement.onblur = function(){
				let errMessage = rule.test(inputElement.value) ; 
				let errElement = inputElement.parentElement.querySelector(options.formMessage)
				if(errMessage){
					inputElement.parentElement.classList.add('invalid')
					errElement.innerText = errMessage ; 
				}else{
					inputElement.parentElement.classList.remove('invalid')
					errElement.innerText = '' ; 
				}
			}
			inputElement.oninput = function(){
				let errElement = inputElement.parentElement.querySelector(options.formMessage);
				if(errElement){
					inputElement.parentElement.classList.remove('invalid')
					errElement.innerText = '' ; 
				}
			}
		})
	}
}

validator.isRequired = function(selector,message){
	return {
		selector : selector ,
		test : function(value){
			return value.trim() ? undefined : message ; 
		}
	}
}

validator.isEmail = function(selector,message){
	return {
		selector : selector ,
		test : function(value){
			let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ; 
			return regex.test(value) ? undefined : message ; 
		}
	}
}

validator.minLength = function(selector,min,message){
	return {
		selector: selector ,
		test: function(value){
			if(value.search(' ') !== -1 ){
				return 'không sử dụng khoảng trắng cho mật khẩu!' ; 
			}
			return value.length >= min ? undefined : message ;  
		}
	}
}

validator.isConfirmedPassword = function(selector,check,message){
	return {
		selector:selector ,
		test: function(value){
			return check(value) ? undefined : message ; 
		}
	}
}