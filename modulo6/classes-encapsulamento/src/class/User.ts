export class User{
    constructor(private id: string, private email: string, private password: string){
        this.id = id;
        this.email = email;
        this.password = password;
    }

    public getId(){
        return this.id
    }

    public getEmail(){
        return this.email
    }

    public getPassword(){
        return this.password
    }
}