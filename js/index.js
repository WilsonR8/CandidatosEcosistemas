const ident = document.getElementById('ident');
const nombre = document.getElementById('nombre');
const ident2 = document.getElementById('ident2');
const seecan= document.getElementById('seecan');

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
        console.log(ii);
        console.log(valor.v);
        if(valor.ident==ii){
            valor.v++;
           
            /*aqui deberia esta el push, profe realmente no se como hacer para que 
            Firebase guerde el cambio en el voto, en consola funciona pero como toma
            el valor que hay en fire base por eso no cambia de 1 voto, se que debe
            ser un error re tonto pero no se que seria y el tiempo esta en mi contra.

            Aun asi, estuve muy cerca de lograrlo... pero no todo pueden ser goles.
            */
           
        alert("aaaaaaaaa");
            console.log(valor.v);
        }
        }
    );
    /*console.log(data.val());*/
});
  

    
 console.log("ss");
}
 
alluser=()=>{
    json = JSON.stringify(showarray)
    alert(json);
}

registBtn.addEventListener('click',registrar);
votebtn.addEventListener('click',vote);
seecan.addEventListener('click',alluser);


database.ref('users').on('value',function(data){
    var arryuser=[];
    data.forEach(
        function(user){
        arryuser.push(user.val().nombre);
        showarray=arryuser;

        }
    );
   
});







