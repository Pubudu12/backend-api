const sequelize = require('./index');

async function assertDatabaseConnectionOk() {
	console.log(`Checking database connection...`);
	try {
		await sequelize.authenticate();
		console.log('Database connection OK!');
	} catch (error) {
		console.log('Unable to connect to the database :');
		console.log(error);
		console.log(error.message);
		process.exit(1);
	}
}

assertDatabaseConnectionOk();