//portfolio section

var portfolio = '<div class="col-md-6 pImages"><a href="%data2%"><img src="img/%data%.png" alt="%data3%" class="img-responsive"><p>%data4%</p></a></div>';


var portfolio_array = [
{
	img: 'p1',
	alt: 'townsquare',
	href: 'townsquare.html',
	title: 'townsquare was a community collaboration tool. It was donated to a nonprofit, 100state, who still uses it to manage its community. I managed analytics, customer development, our website, and copy.',
},
{
	img: 'p2',
	alt: 'Fire Light Group',
	href: 'http://firelightgroup.com/',
	title: 'Worked with Fire Light Group during their rebranding and helped them build this new site from scratch.',
},
{
	img: 'p3',
	alt: 'Ladies Clubhouse',
	href: 'http://ladiesclubhouse.com/',
	title: 'Cynthia sells women&#39;s golf apparel. I worked with her to launch her e-commerce site.',
},
{
	img: 'p4',
	alt: 'Make Music Madison',
	href: 'http://makemusicmadison.com/',
	title: 'Make Music Madison is an amazing organization in Madison, WI that celebrates the summer solstice with free live concerts all over the city once a year.',
},
{
	img: 'p5',
	alt: 'Launch Camp',
	href: '',
	title: 'My colleagues put together an entrepreneurship bootcamp for teens.',
},
{
	img: 'p6',
	alt: 'AlphaTech Counsel',
	href: 'http://alphatechcounsel.com/startupdeal.html',
	title: 'AlphaTech, a law firm, recently launched an amazing deal for startups.',
}
];

var portfolio_new = '';

for (var i=0; i < portfolio_array.length; i++) {
	portfolio_new = portfolio.replace('%data%', portfolio_array[i]['img']);
	portfolio_new = portfolio_new.replace('%data3%', portfolio_array[i]['alt']);
	portfolio_new = portfolio_new.replace('%data2%', portfolio_array[i]['href']);
	portfolio_new = portfolio_new.replace('%data4%', portfolio_array[i]['title']);
	$('.portfolioImages').append(portfolio_new);
}


//skills section

var skills = '<div class="col-xs-4 col-md-3"><img src="img/%data%.png" alt="my skills" class="img-responsive img-circle"></div>';

var skills_array = ['skill1','skill2','skill3','skill4','skill5','skill6','skill7','skill8','skill9','skill10','skill11','skill12'];

var skills_new = '';

for (var i=0; i < skills_array.length; i++) {
	skills_new = skills.replace('%data%', skills_array[i]);
	$('.skillsImages').append(skills_new);
}

//experience section

var experience = '<li><h4>%data% &nbsp; &nbsp; &nbsp; ( %data1% )</h4><br><h5>%data2%</h5><hr></li>';

var experience_array = [
{
	name: 'Company Name',
	years: '2012 - 2015',
	info: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popul'
},
{
	name:  'Company Name',
	years: '2010 - 2012',
	info: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popul'
},
{
	name: 'Company Name',
	years: '2008 - 2010',
	info: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popul'
}
];

var experience_new = '';

for (var i=0; i < experience_array.length; i++) {
	experience_new = experience.replace('%data%', experience_array[i]['name']);
	experience_new = experience_new.replace('%data1%', experience_array[i]['years']);
	experience_new = experience_new.replace('%data2%', experience_array[i]['info']);
	$('.experienceInfo').append(experience_new);
}

//projects section

var projects = '<h3>%data%</h3><div class="row"><div class="col-md-3"><img src="img/%data1%.png" alt="" class="img-responsive"></div><div class="col-md-9"><h3>Languages: %data2%</h3><h5>%data3%</h5></div>';

var projects_array = [
{
	name: 'Change',
	img: 'a',
	language: 'swift',
	info: 'when an unknown printer took a galley of type',
},
{
	name: 'Change',
	img: 'a',
	language: 'swift',
	info: 'when an unknown printer took a galley of type',
},
{
	name: 'Change',
	img: 'a',
	language: 'Swift',
	info: 'when an unknown printer took a galley of type',
}
];

var projects_new = '';

for (var i=0; i <projects_array.length; i++) {
	projects_new = projects.replace('%data%', projects_array[i]['name']);
	projects_new = projects_new.replace('%data1%', projects_array[i]['img']);
	projects_new = projects_new.replace('%data2%', projects_array[i]['language']);
	projects_new = projects_new.replace('%data3%', projects_array[i]['info']);
	$('.projectsInfo').append(projects_new);
}

//townsquare section

var townsquare = '<div class="col-xs-12"><img src="img/%data%.png" alt="townquare" class="img-responsive"></div>';

var townsquare_array = ['t1','t2','t3','t4','t5','t6','t7','t8','t9'];

var townsquare_new = '';

for (var i=0; i < townsquare_array.length; i++) {
	townsquare_new = townsquare.replace('%data%', townsquare_array[i]);
	$('.townsquareImages').append(townsquare_new);
}
