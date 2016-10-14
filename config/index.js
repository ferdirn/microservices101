var config = {
	// store default list of presentations
	presentations : {
		'demo' : { // demo presentation
			id : 'demo',  // id for each presentation, currently same as the url
			title : 'Demo Presentation',
			indexh : 0,  // initial slide horizontal index
			indexv : 0,  // initial slide veriticlal index
		},
		'myppt' : { // powerpoint presentation
			id : 'myppt',
			title : 'My Presentation',
			indexh : 0,  // initial slide horizontal index
			indexv : 0,  // initial slide veriticlal index
		},
		'microservices101' : {
			id : 'microservices101',
			title : 'Microservices 101',
			indexh : 0,
			indexv : 0,
		}

	}

};

exports.config = config;
