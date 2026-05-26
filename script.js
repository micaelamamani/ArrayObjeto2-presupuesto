let presupuesto=[];
document.getElementById('BtnIngresar').addEventListener('click', ()=>{
    let vehiculo=document.getElementById('IDVeh').value;
    let cliente=document.getElementById('IDCliente').value;
    let precio=parseFloat(document.getElementById('IDPrecio').value);
    let iva=precio*0.21;
    let precioCon=precio+iva;
    let interes=precioCon*0.10;
    let precioInt= precioCon+interes;
    let cuota24=precioInt/24;
    let cuota36=precioInt/36;

    let clientePresupuesto={
        vehiculo: vehiculo,
        cliente: cliente,
        precio: precio,
        iva: iva,
        precioCon: precioCon,
        interes: interes,
        precioInt: precioInt,
        cuota24: cuota24,
        cuota36: cuota36
    };
    presupuesto.push(clientePresupuesto);
    console.log(presupuesto);

});

document.getElementById('BtnMostrar').addEventListener('click', ()=>{
    let div=document.getElementById('pepe');
    div.innerHTML= "";

    let tabla= document.createElement('table');
    let thead= document.createElement('thead');
    let tbody= document.createElement('tbody');
    let filaTitulo= document.createElement('tr');
    let thVeh= document.createElement('th');
    let thCli= document.createElement('th');
    let thPre= document.createElement('th');
    let thIva= document.createElement('th');
    let thCont= document.createElement('th');
    let thInt= document.createElement('th');
    let thPreInt= document.createElement('th');
    let th24= document.createElement('th');
    let th36= document.createElement('th');

    thVeh.textContent= "Vehiculo";
    thCli.textContent= "Cliente";
    thPre.textContent= "Precio";
    thIva.textContent= "IVA";
    thCont.textContent= "Precio Contado";
    thInt.textContent= "Interes";
    thPreInt.textContent= "Precio con Interes";
    th24.textContent= "24 Cuotas";
    th36.textContent= "36 Cuotas";

    filaTitulo.appendChild(thVeh);
    filaTitulo.appendChild(thCli);
    filaTitulo.appendChild(thPre);
    filaTitulo.appendChild(thIva);
    filaTitulo.appendChild(thCont);
    filaTitulo.appendChild(thInt);
    filaTitulo.appendChild(thPreInt);
    filaTitulo.appendChild(th24);
    filaTitulo.appendChild(th36);

    thead.appendChild(filaTitulo);
    tabla.appendChild(thead);
    presupuesto.forEach(pre =>{

        let filaDetalle= document.createElement('tr');

        let tdVeh= document.createElement('td');
        let tdCli= document.createElement('td');
        let tdPre= document.createElement('td');
        let tdIva= document.createElement('td');
        let tdCont= document.createElement('td');
        let tdInt= document.createElement('td');
        let tdPreInt= document.createElement('td');
        let td24= document.createElement('td');
        let td36= document.createElement('td');

        tdVeh.textContent= pre.vehiculo;
        tdCli.textContent= pre.cliente;
        tdPre.textContent= pre.precio;
        tdIva.textContent= pre.iva;
        tdCont.textContent= pre.precioCon;
        tdInt.textContent= pre.interes;
        tdPreInt.textContent= pre.precioInt;
        td24.textContent= pre.cuota24;
        td36.textContent= pre.cuota36;

        if(pre.precio>50){
            tdPre.style.color= "red";
            tdPre.style.fontWeight= "bold";
        }

        filaDetalle.appendChild(tdVeh);
        filaDetalle.appendChild(tdCli);
        filaDetalle.appendChild(tdPre);
        filaDetalle.appendChild(tdIva);
        filaDetalle.appendChild(tdCont);
        filaDetalle.appendChild(tdInt);
        filaDetalle.appendChild(tdPreInt);
        filaDetalle.appendChild(td24);
        filaDetalle.appendChild(td36);
        tbody.appendChild(filaDetalle);

    });
    tabla.appendChild(tbody);
    div.appendChild(tabla);

});

