const url = 'https://jsonplaceholder.typicode.com/users'

const getPost = async () => {
    try {
        const response = await fetch(url)
        const post = await response.json ()
        const fran = post
        console.log(post)
        // obtenerMail(fran)
        // usuariosMayores5(post)
        // usuarioTel(post, '024-648-3804')
        
        
        post.forEach(({email}) => {
            console.log(email)
        });

        let losMayores = post.filter(function(user){
            return user.id > 5
        })
        console.log(losMayores)
        

        let elDelTelefono = post.find(function(user){
            return user.phone == '024-648-3804'
        })
        console.log(elDelTelefono)
         
        
    } catch (err) {
        console.log(err)
        console.log('no se puedo obtener el post')
    }
}

getPost();

// const obtenerMail = arr => {
//     arr.forEach(({email}) => {
//         console.log(email)
//     });
// }


// const usuariosMayores5 = arr =>{
//     const results = arr.filter(user => user.id > 5)
//     console.log(results)
 
// }

// const usuarioTel = (arr , queBuscas) =>{
//     const obtener = arr.find(user => user.phone == queBuscas)
//     console.log(obtener)
// }