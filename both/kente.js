Kentes = new Mongo.Collection('kente');
Kentes.attachSchema(new SimpleSchema({

	kenteName:{
		type:String,
		label: "Kente Name"
	},

	description: {
		type: String,
		label: "Description",
		max: 200
	},


	phoneNumber: {
		type: Number,
		label: "Phone No"
	},
	email: {
		type: String,
		regEx: SimpleSchema.RegEx.Email,
		label: "Email"
	},
	location: {
		type: String,
		label: 'Location'
	},
	picture: {
		type: String,
		autoform: {
			afFieldInput: {
				type: 'fileUpload',
				collection: 'Images'
			}
		},
		label: 'Choose file'
	}
}));
