let users = [];

class UserController {
	getUsers(request, response) {
		return response.json(users);
	}

	createUser(request, response) {
		const { name } = request.body;
		const newUser = {
			id: users.length + 1,
			name: name,
		}
		users.push(newUser);
		return response.json(newUser);
	}

	deleteUser(request, response) {
		const { id } = request.params;
		const userToDelete = users.find(user => user.id === Number(id));
		if (!userToDelete) {
			return response.status(404).json({ message: 'User not found' });
		} else {
			users = users.filter(user => user.id !== Number(id)); 
		}
		return response.json({ message: 'user deleted with success!', deletedUser: userToDelete});
	}

	updateUser(request, response) {
		const { id } = request.params;
		const { name } = request.body;
		const userToUpdate = users.find(user => user.id === Number(id));
		if (!userToUpdate) {
			return response.status(404).json({ message: 'User not found', input: { id, name } });
		} else {
			userToUpdate.name = name;
		}
		return response.json({ message: 'user updated with success!', updatedUser: userToUpdate});
	}
}

const userController = new UserController();

module.exports = {
	userController,
}