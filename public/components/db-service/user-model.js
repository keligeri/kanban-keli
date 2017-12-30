let idCounter = 1;

class User {

    constructor(id, username, role, ssoId, pictureUrl) {
        this.id = idCounter++;
        this.username = username;
        this.role = role;
        this.ssoId = ssoId;
        this.pictureUrl = pictureUrl;
    }

    get getId() { return this.id; }

    set setId(id) {this.id = id; }

    get getUsername() { return this.username; }

    set setUsername(username) { this.username = username; }

    get getRole() { return this.role; }

    set setRole(role) { this.role = role; }

    get getSsoId() { return this.ssoId; }

    set setSsoId(ssoId) { this.ssoId = ssoId; }

    get getPictureUrl() { return this.pictureUrl; }

    set setPictureUrl(pictureUrl) { this.pictureUrl = pictureUrl; }

}
