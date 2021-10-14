// header section . 
header__left = function(){
	const topics = ['Development','IT & Software','Design','Marketing','Music'] ;
	const topics1 = ['Web Development','Mobile Development','Game Development'] ; 
	const menuMain = '.header__menu--mainMenu .header__menu-list' ;
	const menuSub = '.header__menu--subMenu .header__menu-list' ; 
	renderMenuMain = function(){
		let tag = topics.map(topic =>{
			return (
		 		`
		 		<li class="header__meunu-item link">
					<span class="header__menu-select">${topic}</span>
					<i class=" header__menu-icon fas fa-chevron-right"></i>
				</li>
				`
			)
		})
		document.querySelector(menuMain).innerHTML = tag.join('') ; 
	}
	renderMenuSub = function(){
		let tag = topics1.map(topic =>{
			return (
		 		`
		 		<li class="header__meunu-item link">
					<span class="header__menu-select">${topic}</span>
					<i class=" header__menu-icon fas fa-chevron-right"></i>
				</li>
				`
			)
		})
		document.querySelector(menuSub).innerHTML = tag.join('') ; 
	}
	renderMenuSub() ; 
	renderMenuMain() ; 
}
header__input = function(){
	const coursesName = {
	"development":["javascript","javascript mobile application",
		"javascript developer desktops","html css javascript",
		"html/css","css","Web developer: html/css","html5 css3",
		"python","python for beginner","machine learning python",
		"python Programming","excel","microsoft excel","excel vba",
		"advanced excel"],
	"default":["javascript","Web development:html/css","python","Microsoft Excel"]
	};
	renderResultSearch = function(option){
		const menu = document.querySelector('.header__input-list');
		menu.parentElement.style.display = 'block' ; 
		let html = option.map((name)=>{
			return `
				<li class="header__input-item link">
					<i class="fas fa-search"></i>
					<span class="header__input-select">${name}</span>
				</li>
			`;
		})
		menu.innerHTML = html.join('');
	};
	handleResultSearch = function(){
	    let input, filter, i, content ,contains ;
	    input = document.querySelector("#header__input-check");
	    input.oninput = function(){
	    	filter = input.value.toUpperCase();
		   	content = coursesName.development;
		   	contains = [];
		    for (i = 0; i < content.length; i++) {
		    	content[i];
		    	if(filter === ''){
		    		continue ; 
		    	}
				else if (content[i].toUpperCase().indexOf(filter) !== -1) {
		        	contains.push(content[i]);
		    	}
		    }
		    if(contains.length === 0 ){
		    	renderResultSearch(coursesName.default)
		    }else{
		    	renderResultSearch(contains)
		    }
	    }
	   
	};
	handleOnblur = function(){
		document.querySelector('#header__input-check').onblur = function(){
			let menuElement = document.querySelector('.header__input-menu')
			menuElement.style.display = 'none' ; 
		}
	};
	handleResultSearch();
	handleOnblur();
}
header__right = function(){
	displayBox = function(element1,element2){
		document.querySelector(element1).style.display = 'block' ;
		document.querySelector(element2).style.display = 'block' ;
	};
	closedBox = function(element1,element2){
		document.querySelector(element1).style.display = 'none' ;
		document.querySelector(element2).style.display = 'none' ;
	}
	selectLanguage= function(){
		let languageElement = document.querySelectorAll('.language__text');
		languageElement.forEach(value => {
			value.onclick = function(){
				for (i = 0; i < languageElement.length; i++) {
	    			languageElement[i].className = languageElement[i].className.replace("active","");
	  			}
				this.classList.add('active');
			}
		})
	}
}
header__left() ; 
header__input() ; 
header__right() ; 
// sign-up 
//handle sing-up . 
// prevent default submit form . 

handleSubmit = function(){
	const form1 = document.querySelector('#form-1 .form-submit') ;
	const form2 = document.querySelector('#form-2 .form-submit') ; 
	let email , password ; 
	render = function(name){

	}
	form1.addEventListener("click",function(e){
		e.preventDefault() ; 
		email = document.querySelector('#form-1 #email').value ; 
		password = document.querySelector('#form-1 #password').value ;
		if(password && email){
			document.querySelector('#form-1').innerHTML = `
				<h2 style="padding: 80px 0;color: green;text-align: center;">Xin chúc mừng bạn, Đã đăng ký thành công!</h2>
				<span class="form-close" title="close" style="top : -222px ;" onclick="closedBox('#id01','#form-1')"><i class="fas fa-times"></i></span>
			` ; 
		}else{
			console.log('nhap sai roi ban oi~~ loi o trong nay ne .');
		}
	})
	if(form2){
		const form3 = document.querySelector('#form-2 .form-submit') ;
		const form4 = document.querySelector('#form-2 .form-submit') ; 
		form2.addEventListener("click",function(e){
			e.preventDefault() ;
			let emailForm2 = document.querySelector('#form-2 #email').value ; 
			if(email === emailForm2){
				document.querySelector('#form-2').innerHTML = 
				`
					<h2 style="padding: 80px 0;color: green;text-align: center;">Chào mừng bạn đã đăng nhập thành công!</h2>
					<span class="form-close" title="close" style="top : -222px ;" onclick="closedBox('#id02','#form-2')"><i class="fas fa-times"></i></span>
				`
			}else{
				console.log('nhap sai roi ban oi~~ loi o trong nay ne .')
			}
		})
	}
}
handleSubmit() ; 

// tab link and tab content 
let courses = {
	"titleCourses":{
		"python":{
			"heading":"Expand your career opportunities with Python",
			"content":"Whether you work in machine learning or finance, or are pursuing a career in web development or data science, Python is one of the most important skills you can learn. Python's simple syntax is especially suited for desktop, web, and business applications. Python's design philosophy emphasizes readability and usability. Python was developed upon the premise that there should be only one way (and preferably one obvious way) to do things, a philosophy that has resulted in a strict level of code standardization. The core programming language is quite small and the standard library is also large. In fact, Python's large library is one of its greatest benefits, providing a variety of different tools for programmers suited for many different tasks.",
			"exploreBtn":"Explore Python"
		},
		"excel":{
			"heading":"Analyze and visualize data with Excel",
			"content":"Regardless of the industry you work in, Microsoft Office Excel is an invaluable spreadsheet program for organizing and representing data. Excel offers functions, formulas, and pivot tables to help you aggregate and then analyze large sets of information. Excel first truly appeared on the scene way back in 1987, when a version",
			"exploreBtn":"Explore Excel"
		},
		"webDevelopment":{
			"heading":"Build websites and applications with Web Development",
			"content":"The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on.",
			"exploreBtn":"Explore Web Development"
		},
		"javascript":{
			"heading":"Grow your software development skills with JavaScript",
			"content":"JavaScript is one of the most ubiquitous programming languages on the planet, mostly because it's the backbone of interactive web applications. On top of that, JavaScript is a great language for beginners because it gives them a chance to write code that does something visual, which is exciting and helpful when you're just",
			"exploreBtn":"Explore Javascript"
		}
	},
	"javascript":[
		{	
			"id" : 1,
			"imgSrc": "./assets/image/courses/javascript/javascript.jpg" , 
			"heading" : "The Complete JavaScript Course 2021: From Zero to Expert!",
			"content":"The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
			"youCan":["Become an advanced, confident, and modern JavaScript developer from scratch","Build 6 beautiful real-world projects for your portfolio (not boring toy apps)","Become job-ready by understanding how JavaScript really works behind the scenes"],
			"author" : "Josan Schmedtmann" ,
			"price": "0",
			"star": 5 ,
			"topic":"React",
			"level":"Expert",
			"state":"Highest Rated"
		},
		{	
			"id" : 2,
			"imgSrc" : "./assets/image/courses/javascript/javascript1.jpg" , 
			"heading" : "JavaScript: Understanding the Weird Parts",
			"content":"An advanced JavaScript course for everyone! Scope, closures, prototypes, 'this', build your own framework, and more.",
			"youCan":["Grasp how Javascript works and it's fundamental concepts","Write solid, good Javascript code","Understand advanced concepts such as closures, prototypal inheritance, IIFEs, and much more."],
			"author" : "Anthony Alicea" ,
			"price" : "$89.99",
			"star": 4 ,
			"topic":"Front End Web Development",
			"level":"Intermediate",
			"state":"Most Popular"
		},
		{	
			"id" : 3,
			"imgSrc" : "./assets/image/courses/javascript/javascript2.jpg" , 
			"heading" : "Modern JavaScript From The Beginning",
			"content":"Learn and build projects with pure JavaScript (No frameworks or libraries)",
			"youCan":["Modular learning sections & 10 real world projects with pure JavaScript","Master the DOM (document object model) WITHOUT jQuery","Asynchronous programming with Ajax, Fetch API, Promises & Async / Await"],
			"author" : "Jose Portilla" ,
			"price" : "$89.99",
			"star": 3.5 ,
			"topic":"Node.Js",
			"level":"Beginner",
			"state":"Newest"
		},
		{	
			"id" : 4,
			"imgSrc" : "./assets/image/courses/javascript/javascript3.jpg" , 
			"heading" : "JavaScript - The Complete Guide 2021 (Beginner + Advanced)",
			"content":"Modern JavaScript from the beginning - all the way up to JS expert level! THE must-have JavaScript resource in 2021.",
			"youCan":["JavaScript from scratch - beginner to advanced","All core features and concepts you need to know in modern JavaScript development","Everything you need to become a JavaScript expert and apply for JavaScript jobs"],
			"author" : "Jose Portilla" ,
			"price" : "0",
			"star": 5 ,
			"topic":"Javascript",
			"level":"Intermediate",
			"state":"Most Popular"
		},
		{	
			"id" : 5,
			"imgSrc" : "./assets/image/courses/javascript/javascript4.jpg" , 
			"heading" : "JavaScript: The Advanced Concepts (2021)",
			"content":"Learn modern advanced JavaScript practices and be in the top 10% of JavaScript developers",
			"youCan":["Advanced JavaScript Practices","Object Oriented Programming","Functional Programming"],
			"author" : "Jose Portilla" ,
			"price" : "$89.99",
			"star": 4 ,
			"topic":"Front End Web Development",
			"level":"Expert",
			"state":"Highest Rated"
		}
	],
	"python":[
		{	
			"id" : 1,
			"imgSrc" : "./assets/image/courses/python/python.jpg" , 
			"heading" : "2021 Complete Python Bootcamp From Zero to Hero ",
			"content":"Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
			"youCan":["Learn to use Python professionally, learning both Python 2 and Python 3!","Create games with Python, like Tic Tac Toe and Blackjack!","Learn advanced Python features, like the collections module and how to work with timestamps!"],
			"author" : "Jose Portilla" ,
			"price" : "$89.99",
			"star": 3 ,
			"topic":"Machine Learning",
			"level":"Intermediate",
			"state":"Most Popular"
		},
		{	
			"id" : 2,
			"imgSrc" : "./assets/image/courses/python/python1.jpg" , 
			"heading" : "Machine Learning A-Z: Hands-On Python & R In Data Science",
			"content":"Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included.",
			"youCan":["Master Machine Learning on Python & R","Have a great intuition of many Machine Learning models","Make accurate predictions"],
			"author" : "Jose Portilla" ,
			"price" : "$99.00",
			"star": 3.5 ,
			"topic":"Data Science",
			"level":"Intermediate",
			"state":"Newest"
		},
		{	
			"id" : 3,
			"imgSrc" : "./assets/image/courses/python/python2.jpg" , 
			"heading" : "Python for Data Science and Machine Learning Bootcamp",
			"content":"Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!",
			"youCan":["Use Python for Data Science and Machine Learning","Use Spark for Big Data Analysis","Implement Machine Learning Algorithms"],
			"author" : "Jose Portilla" ,
			"price" : "$66.00",
			"star": 5 ,
			"topic":"Machine Learning",
			"level":"Beginner",
			"state":"Highest Rated"
		},
		{	
			"id" : 4,
			"imgSrc" : "./assets/image/courses/python/python3.jpg" , 
			"heading" : "Learn Python Programming Masterclass",
			"content":"This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
			"youCan":["Acquire the pre-requisite Python skills to move into specific branches - Machine Learning, Data Science, etc..","Have the skills and understanding of Python to confidently apply for Python programming jobs.","Have a fundamental understanding of the Python programming language."],
			"author" : "Jose Portilla" ,
			"price" : "$20.89",
			"star": 4.5 ,
			"topic":"Python GUI",
			"level":"Intermediate",
			"state":"Most Popular"
		},
		{	
			"id" : 5,
			"imgSrc" : "./assets/image/courses/python/python4.jpg" , 
			"heading" : "The Python Mega Course: Build 10 Real World Applications",
			"content":"Go from zero to hero in Python in weeks! Learn Python the easy way by building real-life Python programs!",
			"youCan":["Go from a total beginner to a confident Python programmer","Create 10 real-world Python programs (no toy programs)","Strengthen your skills with bonus practice activities throughout the course"],
			"author" : "Jose Portilla" ,
			"price" : "0",
			"star": 3 ,
			"topic":"Django",
			"level":"Expert",
			"state":"Newest"
		}
	],
	"excel":[
		{	
			"id" : 1,
			"imgSrc" : "./assets/image/courses/excel/excel.jpg" ,
			"heading" :"Microsoft Excel - Excel from Beginner to Advanced",
			"content":"Excel with this A-Z Microsoft Excel Course. Microsoft Excel 2010, 2013, 2016, Excel 2019 and Office 365",
			"youCan":["Master Microsoft Excel from Beginner to Advanced","Build a solid understanding on the Basics of Microsoft Excel","Learn the most common Excel functions used in the Office"],
			"author" :"Kyle Pew,Office Newb",
			"price" :"$13.99",
			"star": 4.5 ,
			"topic":"Excel Charts",
			"level":"Intermediate",
			"state":"Highest Rated"
		},
		{	
			"id" : 2,
			"imgSrc" : "./assets/image/courses/excel/excel1.jpg" ,
			"heading" :"Beginner to Pro in Excel: Financial Modeling and Valuation",
			"content":"Financial Modeling in Excel that would allow you to walk into a job and be a rockstar from day one!",
			"youCan":["Master Microsoft Excel and many of its advanced features","Become one of the top Excel users in your team","Carry out regular tasks faster than ever before"],
			"author" :"365 Careers",
			"price" :"$9.00",
			"star": 3 ,
			"topic":"Microsoft Word",
			"level":"Expert",
			"state":"Most Popular"
		},
		{	
			"id" : 3,
			"imgSrc" : "./assets/image/courses/excel/excel2.jpg", 
			"heading" :"Microsoft Excel - Data Analysis with Excel Pivot Tables",
			"content":"Master Excel pivots & learn data analysis w/ advanced Excel cases from a top Excel & business intelligence instructor",
			"youCan":["Take your data analysis skills from ZERO to PRO with Excel Pivot Tables","Learn how to use Pivot Tables and Pivot Charts to streamline and absolutely revolutionize your workflow in Excel","Master unique Pivot Table tips, tools and case studies that you won't find in ANY other course, guaranteed"],
			"author" :"Daniel Strong",
			"price" :"$13.99",
			"star": 3.5 ,
			"topic":"Excel Macros",
			"level":"Beginner",
			"state":"Highest Rated"
		},
		{	
			"id" : 4,
			"imgSrc" : "./assets/image/courses/excel/excel3.jpg" ,
			"heading" :"Excel Essentials: The Complete Excel Series - Level 1, 2 & 3",
			"content":"Excel: The WHOLE Excel Mastery Series In One! From Excel Novice To VBA Programmer - Excel 2013, 2016, 2019 & Excel 365",
			"youCan":["By the end of Level 1:","Master all the basics of Excel, even if you've never seen a spreadsheet before!","Build your own spreadsheets from scratch, and actually understand how they work!"],
			"author" :"Alan Jarvis",
			"price" :"$13.99",
			"star": 4 ,
			"topic":"Microsoft Word",
			"level":"Beginner",
			"state":"Newest"
		},
		{	
			"id" : 5,
			"imgSrc" : "./assets/image/courses/excel/excel4.jpg" ,
			"heading" :"Microsoft Excel - Excel from Beginner to Advanced",
			"content":"Learn Excel VBA from Scratch with Dan Strong, Bestselling Excel Expert with Over 180K Students Worldwide!",
			"youCan":["Automate and Customize data entry forms","Choose the right Loop for each task","Master the CELLS and RANGE objects in multiple scenarios"],
			"author" :"Kyle Pew,Office Newb",
			"price" :"$9.00",
			"star": 3 ,
			"topic":"Excel Shortcut",
			"level":"Intermediate",
			"state":"Most Popular"
		}
	],
	"webDevelopment":[
		{	
			"id" : 1,
			"imgSrc" : "./assets/image/courses/webDevelopment/webDevelopment.jpg" ,
			"heading" :"COMPLETELY REDONE - The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
			"content":"Become a full-stack web developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB and more!",
			"youCan":["Be able to build ANY website you want.","Craft a portfolio of websites to apply for junior developer jobs.","Build fully-fledged websites and web apps for your startup or business."],
			"author" :"Colt Steele",
			"price" :"$13.99",
			"star": 4 ,
			"topic":"CSS",
			"level":"Beginner",
			"state":"Highest Rated"
		},
		{	
			"id" : 2,
			"imgSrc" : "./assets/image/courses/webDevelopment/webDevelopment1.jpg" ,
			"heading" :"The Complete 2021 Web Development Bootcamp",
			"content":"COMPLETELY REDONE - The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
			"youCan":["The ins and outs of HTML5, CSS3, and Modern JavaScript for 2021","Make REAL web applications using cutting-edge technologies","Create responsive, accessible, and beautiful layouts"],
			"author" :"Dr. Angela Yu",
			"price" :"$9.00",
			"star": 5 ,
			"topic":"Javascript",
			"level":"Expert",
			"state":"Highest Rated"
		},
		{	
			"id" : 3,
			"imgSrc" : "./assets/image/courses/webDevelopment/webDevelopment2.jpg" ,
			"heading" :"The Complete Web Developer Course 2.0",
			"content":"COMPLETELY REDONE - The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
			"youCan":["The ins and outs of HTML5, CSS3, and Modern JavaScript for 2021","Make REAL web applications using cutting-edge technologies","Create responsive, accessible, and beautiful layouts"],
			"author" :"Rob Percival",
			"price" :"$13.99",
			"star": 3.5 ,
			"topic":"Front End Web Development",
			"level":"Beginner",
			"state":"Most Popular"
		},
		{	
			"id" : 4,
			"imgSrc" : "./assets/image/courses/webDevelopment/webDevelopment3.jpg" ,
			"heading" :"The Complete Web Developer Course 2.0",
			"content":"Learn Web Development by building 25 websites and mobile apps using HTML, CSS, Javascript, PHP, Python, MySQL & more!",
			"youCan":["Build websites and webapps","Build HTML-based mobile apps","Get a job as a junior web developer"],
			"author" :"Andrei Neagoie",
			"price" :"$9.00",
			"star": 4.5 ,
			"topic":"HTML",
			"level":"Intermediate",
			"state":"Newest"
		},
		{	
			"id" : 5,
			"imgSrc" : "./assets/image/courses/webDevelopment/webDevelopment4.jpg" ,
			"heading" :"The Advanced Web Developer Bootcamp",
			"content":"Learn React 16, Redux, D3, ES2015, Testing, CSS Flexbox, Animations, SVG, AJAX, and more!",
			"youCan":["Make REAL web applications using cutting-edge technologies","Build responsive applications using modern CSS technologies like flexbox","Build JSON APIs using Node, Express and MongoDB"],
			"author" :"Colt Steele, Elie Schoppik",
			"price" :"$13.99",
			"star": 3.5 ,
			"topic":"CSS",
			"level":"Beginner",
			"state":"Highest Rated"
		}
	]
}

function handleRenderCourses(){
	const tabInfo = document.querySelector('.tab-info') ;
	let popUpElement = document.querySelector('.tab-pop-up') ; 
	this.renderTitle = function (object){
		tabInfo.innerHTML = 
			`
				<h2>${object.heading}</h2>
				<p>${object.content}</p>
				<button>${object.exploreBtn}</button>
			`; 
		}
	this.renderCourses = function(element,object){
			let html = object.map((course)=>{
				return `
					<div class="tab-courses-content">
						<div class="tab-img">
							<img src="${course.imgSrc}" alt="course-img" class="course-img">
						</div>					
						<h2>${course.heading}</h2>
						<p>${course.author}</p>
						<div class="tab-rate">
							<p>4.5</p>
							<ul class="tab-rate-list">
								<li class="tab-rate-icon"><i class="fas fa-star"></i></li>
								<li class="tab-rate-icon"><i class="fas fa-star"></i></li>
								<li class="tab-rate-icon"><i class="fas fa-star"></i></li>
								<li class="tab-rate-icon"><i class="fas fa-star"></i></li>
								<li class="tab-rate-icon"><i class="fas fa-star"></i></li>
							</ul>
							<p class="tab-count">(150,999)</p>
						</div>
						<h3 class="tab-price">${course.price}</h3>
						<span class="tab-best">Bestseller</span>
						<div class="tab-pop-up ${course.id <= 3? 'right' : 'left'}">
							<a href="#">${course.heading}</a>
							<div class="tab-updated">
								<span>Updated <h2>March 2021</h2></span>
								<ul>
									<li>22 total hours</li><li>All Levels</li><li>Subtitles</li>
								</ul>
							</div>
							<p>${course.content}</p>
							<div><i class="fas fa-check icon"></i><span>${course.youCan[0]}</span></div>
							<div><i class="fas fa-check icon"></i><span>${course.youCan[1]}</span></div>
							<div><i class="fas fa-check icon"></i><span>${course.youCan[2]}</span></div>
							<div class="button"><p>Add to cart</p><span><i class="far fa-heart"></i></span></div>
						</div>
		 			</div>
				`
			});
			element.innerHTML = html.join('');
	}
}

function handleTabList(){
	let tab = document.querySelector('.tab') ; 
	if(tab){
		const listCourses = document.querySelector('.tab-courses') ;
		const listCourses1 = document.querySelector('.tab-courses1') ;
		let render = new handleRenderCourses() ; 
		console.log(render) ;
		render.renderTitle(courses.titleCourses.python);
		render.renderCourses(listCourses,courses.python) ;
		render.renderCourses(listCourses1,courses.webDevelopment) ;  
		let tabLink = tab.querySelectorAll('.tab-btn');
		let tabContent = tab.querySelector('.tab-content')
		tabLink.forEach((tab) =>{
			tab.onclick = function(e){
				let className = this.className ;
				if(className.indexOf('active') === -1){
					for(var i = 0 ; i < tabLink.length ;i++){
						if(tabLink[i].className.indexOf('active') !== -1){
							tabLink[i].classList.remove('active') ; 
							break; 
						}
					}
					this.classList.add('active') ;
				}
				if(e.target.classList.contains('excel')){
					render.renderTitle(courses.titleCourses.excel);
					render.renderCourses(listCourses,courses.excel) ; 
				}else if(e.target.classList.contains('webDevelopment')){
					render.renderTitle(courses.titleCourses.webDevelopment);
					render.renderCourses(listCourses,courses.webDevelopment) ; 
				}else if(e.target.classList.contains('javascript')){
					render.renderTitle(courses.titleCourses.javascript);
					render.renderCourses(listCourses,courses.javascript) ; 
				}else if(e.target.classList.contains('python')){
					render.renderTitle(courses.titleCourses.python);
					render.renderCourses(listCourses,courses.python) ;	
				}
			}
		})
	}
}
handleTabList() ; 


// categories render 

const categories = {
	"topics1" : [
		{
			"heading":"Design",
			"imgSrc":"./assets/image/category/design.jpg"
		},
		{
			"heading":"Development",
			"imgSrc":"./assets/image/category/development.jpg"
		},
		{
			"heading":"Marketing",
			"imgSrc":"./assets/image/category/marketing.jpg"
		},
		{
			"heading":"IT and Software",
			"imgSrc":"./assets/image/category/it-and-software.jpg"
		},
	],
	"topics2" : [
		{
			"heading":"Personal Development",
			"imgSrc":"./assets/image/category/personal-development.jpg"
		},
		{
			"heading":"Business",
			"imgSrc":"./assets/image/category/business.jpg"
		},
		{
			"heading":"Photography",
			"imgSrc":"./assets/image/category/photography.jpg"
		},
		{
			"heading":"Music",
			"imgSrc":"./assets/image/category/music.jpg"
		},
	]
}

function handleRenderCategories(categories){
	let topics1 = document.querySelector('.topics1');
	let topics2 = document.querySelector('.topics2') ;
	if(topics1){
		let html = categories.topics1.map(category=>{
			return `
				<div class="topic__course">
					<div class="topic__course--img">
						<img src="${category.imgSrc}" class="category__img" alt="category">
					</div>
					<h4 class="topic__course--heading">${category.heading}</h4>
				</div>
			`
		})
		topics1.innerHTML = html.join() ; 
	}
	if(topics2){
		let html1 = categories.topics2.map(category=>{
			return `
				<div class="topic__course">
					<div class="topic__course--img">
						<img src="${category.imgSrc}" class="category__img" alt="category">
					</div>
					<h4 class="topic__course--heading">${category.heading}</h4>
				</div>
			`
		})
		topics2.innerHTML = html1.join() ; 
	}
	else{
		console.log('error!!!-categories-');
	}
}

handleRenderCategories(categories);

// featured Render . 

const featured = {
	"categories":[
		{
			"heading":"Development",
			"category1":["Python","30,424,872"],
			"category2":["Web Development","9,781,377"],
			"category3":["Machine Learning","6,104,112"]
		},
		{
			"heading":"Business",
			"category1":["Financial Anylysis","1,102,758"],
			"category2":["SQL","4,563,246"],
			"category3":["PMP","1,417,607"]
		},
		{
			"heading":"IT and Software",
			"category1":["AWS Certification","4,559,690"],
			"category2":["Ethical Hacking","9,329,346"],
			"category3":["Cyber Security","3,353,982"]
		},
		{
			"heading":"Design",
			"category1":["Photoshop","9,885,662"],
			"category2":["Graphic Design","2,899,761"],
			"category3":["Drawing","2,221,974"]
		},
	]
}

function handleRenderFeatured(featured){
	let featuredContent = document.querySelector('.featured-content') ; 
	if(featuredContent){
		let html = featured.categories.map(category=>{
			return `
				<div class="featured__category">
					<h4 class="featured__title">${category.heading}</h4>
					<a href="#" class="featured__link">${category.category1[0]}</a>
					<p class="featured__student">${category.category1[1]} students</p>
					<a href="#" class="featured__link">${category.category2[0]}</a>
					<p class="featured__student">${category.category2[1]} students</p>
					<a href="#" class="featured__link">${category.category3[0]}</a>
					<p class="featured__student">${category.category3[1]} students</p>
				</div>
			`
		})
		featuredContent.innerHTML = html.join("");
	}else{
		console.log('Error!-featured-');
	}
}

handleRenderFeatured(featured)

// handle render intructor

const intructor = {
	"intructor1":{
		"imgSrc":"./assets/image/intructor/intructor.jpg",
		"title":"Become an intructor",
		"content":"Intructors from around the world teach millions of students on Udemy.We provide the tools and skills to teach what you love.",
		"button":"Start teaching today"
	},
	"intructor2":[
		{
			"imgSrc":"./assets/image/intructor/intructor1.jpg",
			"title":"<svg viewBox=\"0 0 470 80\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M33.067 19.093L16.533 9.547 0 19.093V9.547L16.533 0l16.534 9.547v9.546z\" fill=\"#A435F0\"/><path d=\"M0 27.093h8.667v21.04c0 5.44 4.053 8.08 7.866 8.08 3.84 0 7.867-2.72 7.867-8.16v-20.96h8.667V48.64c0 5.013-1.574 8.88-4.72 11.52-3.147 2.64-7.094 3.947-11.867 3.947-4.8 0-8.72-1.28-11.813-3.947C1.6 57.52.027 53.787.027 48.853v-21.76H0zM107.946 53.253a12.993 12.993 0 01-9.013 3.467c-6.213 0-10.373-3.547-10.853-9.013h27.973s.187-1.76.187-3.44c0-5.147-1.654-9.44-5.014-12.96-3.28-3.494-7.573-5.227-12.8-5.227-5.52 0-10.026 1.707-13.6 5.227-3.493 3.493-5.306 8.08-5.306 13.813v.293c0 5.654 1.786 10.16 5.306 13.52 3.494 3.36 8.16 5.094 13.814 5.094 6.586 0 11.813-2.587 15.733-7.067l-6.427-3.707zM91.493 35.68c2-1.52 4.427-2.32 6.933-2.293a9.241 9.241 0 016.374 2.373c1.706 1.44 2.64 3.2 2.72 5.227h-19.2c.266-2.107 1.306-3.867 3.173-5.307zM195.12 68.88C191.6 77.173 187.92 80 182.294 80H178.4v-7.68h3.147c1.947 0 3.733-.72 5.467-4.693l1.706-3.974-14.826-36.56h8.8L193.2 53.44 204 27.093h8.8c.027 0-14.08 33.254-17.68 41.787zM66.773 13.28v17.067c-2.826-2.534-7.253-4.054-11.52-4.054-5.093 0-9.386 1.787-12.88 5.44-3.44 3.574-5.146 8.027-5.146 13.387 0 5.36 1.706 9.813 5.146 13.44 3.494 3.573 7.814 5.36 12.88 5.36 5.867 0 9.574-2.293 11.52-4.107v3.334h8.587V13.28h-8.587zm-2.56 39.733c-2.08 2.08-4.72 3.147-7.813 3.147a10.425 10.425 0 01-7.653-3.147c-2-2.08-3.014-4.72-3.014-7.866 0-3.147 1.014-5.787 3.014-7.867 2-2.08 4.773-3.2 7.653-3.147 3.067 0 5.733 1.067 7.813 3.147 2.16 2.08 3.227 4.72 3.227 7.867 0 3.146-1.093 5.786-3.227 7.866zM160.533 26.373c-6.533 0-9.92 2.72-12.24 5.307-.933-1.76-3.546-5.307-9.653-5.307-5.173 0-8.213 2.614-9.733 4.48v-3.76H120.4v36.054h8.507v-20.72c0-4.854 3.013-8.374 7.013-8.374 4.08 0 6.453 3.067 6.453 8.027V63.2h8.507V42.427c0-4.934 2.933-8.374 7.147-8.374 4.08 0 6.453 3.067 6.453 8.027V63.2h8.587V40.88c0-9.44-5.04-14.507-12.534-14.507z\" fill=\"#000\"/><path d=\"M245.6 26.267c-6.027 0-9.84 3.386-11.52 6.773V11.76h-4.72v51.413h4.693v-5.92c2.08 4.294 6.4 6.827 11.68 6.827 9.307 0 15.094-7.2 15.094-18.773 0-11.76-5.84-19.04-15.227-19.04zm-.693 33.706c-6.987 0-11.014-5.386-11.014-14.773 0-9.44 3.947-14.827 10.854-14.827 7.093 0 11.146 5.387 11.146 14.774.027 9.413-4 14.826-10.986 14.826zM277.547 64.08c-3.787 0-6.907-1.2-8.96-3.493-2.24-2.48-3.2-5.76-3.2-10.907V27.147h4.693v20.586c0 4.96.667 7.867 2.213 9.68 1.387 1.547 3.44 2.294 6.294 2.294 4.613 0 10.026-2.934 10.026-11.147V27.147h4.694V63.2h-4.694v-5.36c-1.466 3.093-5.066 6.24-11.066 6.24zM312.026 64.08c-7.626 0-12.773-4.053-14.853-7.52l-.053-.107 3.813-2.72.08.107c2.453 3.947 6.56 6.107 11.547 6.107 5.546-.08 8.746-2.427 8.746-6.48 0-3.92-3.226-5.014-7.413-6.054l-4.96-1.2c-6.293-1.493-10.187-3.653-10.187-9.76 0-6.106 5.067-10.213 12.614-10.213 6.773 0 10.88 3.227 13.12 5.92l.08.107-3.6 3.04-.08-.107a11.64 11.64 0 00-9.6-4.907c-4.854 0-7.76 2.107-7.76 5.654 0 3.76 2.48 5.013 7.04 6.026l4.746 1.12c5.6 1.254 10.774 3.36 10.774 10.054 0 6.666-5.387 10.853-14.054 10.933zM335.173 63.173h-4.693v-36.08h4.693v36.08zm0-43.786h-4.693V11.76h4.693v7.627zM370.347 63.173h-4.693V43.787c0-5.52-.347-8.88-2.214-10.88-1.36-1.52-3.493-2.294-6.293-2.294-3.014 0-5.44.96-7.2 2.88-1.894 1.947-2.987 4.96-2.987 8.267v21.413h-4.693v-36.08h4.693v5.44c1.44-3.013 5.12-6.266 11.227-6.266 3.813 0 6.907 1.2 8.96 3.493 2.24 2.56 3.2 4.933 3.2 13.013v20.4zM404.027 51.867l-.053.133c-1.414 2.96-4.827 7.893-11.921 7.893-5.786 0-11.973-3.626-11.973-13.786v-.4h27.227v-.72c0-11.547-6.053-18.72-15.787-18.72-9.6 0-16.293 7.653-16.293 18.64 0 12 6.24 19.173 16.666 19.173 8.934 0 13.467-5.307 15.681-9.787l.053-.106-3.6-2.32zM391.52 30.213c5.147 0 10.64 4.08 10.693 11.627h-22c.667-7.173 4.96-11.627 11.307-11.627zM424.827 64.08c-7.627 0-12.774-4.053-14.854-7.52l-.053-.107 3.813-2.72.08.107c2.454 3.947 6.56 6.107 11.547 6.107 5.547-.08 8.747-2.427 8.747-6.48 0-3.92-3.227-5.014-7.414-6.054l-4.96-1.2c-6.293-1.493-10.186-3.653-10.186-9.76 0-6.106 5.066-10.213 12.613-10.213 6.773 0 10.88 3.227 13.12 5.92l.08.107-3.6 3.04-.08-.107a11.638 11.638 0 00-9.6-4.907c-4.853 0-7.76 2.107-7.76 5.654 0 3.76 2.48 5.013 7.04 6.026l4.747 1.12c5.6 1.254 10.773 3.36 10.773 10.054-.027 6.666-5.413 10.853-14.053 10.933zM455.813 64.08c-7.626 0-12.773-4.053-14.853-7.52l-.053-.107 3.813-2.72.08.107c2.453 3.947 6.56 6.107 11.547 6.107 5.546-.08 8.746-2.427 8.746-6.48 0-3.92-3.226-5.014-7.413-6.054l-4.96-1.2c-6.293-1.493-10.187-3.653-10.187-9.76 0-6.106 5.067-10.213 12.614-10.213 6.773 0 10.88 3.227 13.12 5.92l.08.107-3.6 3.04-.08-.107a11.64 11.64 0 00-9.6-4.907c-4.854 0-7.76 2.107-7.76 5.654 0 3.76 2.48 5.013 7.04 6.026l4.746 1.12c5.6 1.254 10.774 3.36 10.774 10.054 0 6.666-5.387 10.853-14.054 10.933z\" fill=\"#A435F0\"/></svg>",
			"content":"Get unlimited access to 6,000+ of Udemy’s top courses for your team. Learn and improve skills across business, tech, design, and more.",
			"button":"Get Udemy Business"
		},
		{
			"imgSrc":"./assets/image/intructor/intructor2.jpg",
			"title":"Transform your life </br>through education",
			"content":"Learners around the world are launching new careers, advancing in their fields, and enriching their lives.",
			"button":"Find out how"
		}
	]
}

function handleRenderIntructor(intructor){
	let intructor1 = document.querySelector('#intructor-id1');
	let intructor2 = document.querySelector('#intructor-id2');
	let intructor3 = document.querySelector('#intructor-id3');
	if(intructor1){
		intructor1.innerHTML =
		`
			<div class="intructor__img">
				<img src="${intructor.intructor1.imgSrc}" alt="intructor" class="intructor-teach-img">
			</div>
			<div class="intructor__opportunity">
				<h4 class="intructor__title">${intructor.intructor1.title}</h4>
				<p class="intructor__content">${intructor.intructor1.content}</p>
				<button class="intructor__btn btn">${intructor.intructor1.button}</button>
			</div>
		`;
	}
	if(intructor2){
		intructor2.innerHTML = 
		`	
			<div class="intructor__img">
				<img src="${intructor.intructor2[0].imgSrc}" alt="intructor" class="intructor-teach-img">
			</div>
			<div class="intructor__opportunity">
				<h4 class="intructor__title intructor__logo">
				${intructor.intructor2[0].title}
				</h4>
				<p class="intructor__content">${intructor.intructor2[0].content}</p>
				<button class="intructor__btn btn">${intructor.intructor2[0].button}</button>
			</div>
		`;
	}
	if(intructor3){
		intructor3.innerHTML =
		`
			<div class="intructor__img">
				<img src="${intructor.intructor2[1].imgSrc}" alt="intructor" class="intructor-img">
			</div>
			<div class="intructor__opportunity">
				<h4 class="intructor__title">${intructor.intructor2[1].title}</h4>
				<p class="intructor__content">${intructor.intructor2[1].content}</p>
				<button class="intructor__btn btn">${intructor.intructor2[1].button}</button>
			</div>
		`
	}
	else{
		console.log('Error!-inductor-')
	}
}

handleRenderIntructor(intructor)

// handle display box 
