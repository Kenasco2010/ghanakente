Router.configure({
	layoutTemplate: "masterLayout",
	notFoundTemplate: '404'
	
})

Router.route('/', function(){
	this.render('home');
},
{
	name: 'home'
});

Router.route('/details', function(){
	this.render('details');
},
{
	name: 'details'
});

Router.route('/kente', function(){
	this.render('listOfKente');
},
{
	name: 'kente', //This is name that should called at the {{pathFor '...'}}

	data: function  () {
		return {

			kentes: Kentes.find().fetch()
		}
	}
});

Router.route('/uploadInfo', function(){
	this.render('uploadInfo');
},
{

	name:'uploadInfo'
});