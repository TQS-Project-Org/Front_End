const express = require('express');
const { userRouter } = require('../routes/user.router');

const main = () => {
	const app = express();
	const PORT = 3000;

	app.use(express.json());

	app.use(userRouter)

	app.listen(PORT, () => {
		console.log('Server is running on port ', PORT);
	});
}

main();