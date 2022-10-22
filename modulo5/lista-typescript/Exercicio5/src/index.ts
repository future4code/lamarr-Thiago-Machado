enum ROLE{
    ADMIN="admin",
    USER="user",
  
}

type Usuarios={
    name: string,
    email: string,
    role: ROLE
}

const usuarios:Usuarios[]=[
        {name: "Rogério", email: "roger@email.com", role: ROLE.USER},
        {name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
        {name: "Aline", email: "aline@email.com", role: ROLE.USER},
        {name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
        {name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
        {name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}       
]
function emailAdmin (object:Usuarios[]){
    function filtro(object:Usuarios){
        return object.role == ROLE.ADMIN 
    }
    function map(object:Usuarios){
        return object.email
    }
    const admin = object.filter(filtro)

    return admin.map(map)
}
    

console.table(emailAdmin(usuarios))