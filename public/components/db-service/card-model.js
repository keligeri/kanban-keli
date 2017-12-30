
class Card {
    constructor(id, name, description, status, usersList = []) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.status = status;
        this.usersList = usersList;
    }

    get getId() { return this.id; }

    set setId(id) { this.id = id; }

    get getName() { return this.name; }

    set setName(name) { this.name = name; }

    get getDescription() { return this.description; }

    set setDescription(description) { this.description = description; }

    get getStatus() { return this.status; }

    set setStatus(status) { this.status = status; }

    get getUsersList() { return this.usersList; }

    set setUsersList(usersList) { this.usersList = usersList; }

}
