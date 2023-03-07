class Team {
    id;
    name;

    constructor(id, name) {
        if (!id) {
            throw new RequiredFieldError('id'); 
        }

        if (!name) {
            throw new RequiredFieldError('name'); 
        }

        this.id = id;
        this.name = name;
    }
}