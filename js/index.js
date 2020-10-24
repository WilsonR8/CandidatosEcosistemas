const ident = document.getElementById('ident');
const nombre = document.getElementById('nombre');
const ident2 = document.getElementById('ident2');

const database=firebase.database();





registrar= () => {

    let i = ident.value;
    let n = nombre.value;
    let v= 0;
    

    let objetuser={
        nombre:n,
        ident:i,
        v

    };


    let json= JSON.stringify(objetuser);
    /*console.log(json);*/
    database.ref('users/'+objetuser.nombre).set(objetuser);




    alert(objetuser);



    console.log(objetuser);
}

vote=()=>{

    let ii = ident2.value;

database.ref('users').on('value',function(data){
    data.forEach(
        function(user){
        let valor=user.val();
        console.log(valor.ident);
        if(valor.ident==ii){
        alert("aaaaaaaaa");
            console.log("aaaa");
        }
        }
    );
    /*console.log(data.val());*/
});
  

    
 console.log("ss");
}
 






registBtn.addEventListener('click',registrar);
votebtn.addEventListener('click',vote);
