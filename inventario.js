class Inventario {
    constructor (){
        this.productos = [];
    }
    agregar (producto){
        this.productos.push(producto);
    }
    mostrar(){
        return this.productos;
    }
    mostrar_inverso(){
        let aux = [];
        for(let i = this.productos.length ; i > 0 ; i--){
            aux = this.productos[i];
        }
        return aux;
    }
    buscar(id){
        if(this.productos!=null){
            for(let i = 0; i < this.productos.length ; i++){
                if(id == this.productos[i].codigo){
                    return i;
                }
            }
        }else
             return 0;
    }
    eliminar(id){
        console.log("hola");
        let posicion;
        if(this.productos!=null){
            for(let i = 0; i < this.productos.length ; i++){
                if(id == this.productos[i].codigo){
                    posicion= i;
                    console.log(posicion);
                }
            }
        }else
             return "El inventario esta vacio";

        let aux =this.productos;
        console.log(posicion);
        for(let a = posicion ; a < this.productos.length; a++){
                           aux[a] = this.productos[a+1];
                           console.log("aux");
                        }
                       
                        this.productos = aux;
                        this.productos.pop();

                //reduce js 
                //maps js 
    }
    modificar(id,nombre,precio,cantidad){
        this.posicion = this.buscar(id);
        this.productos[this.posicion].nombre = nombre;
        this.productos[this.posicion].precio =precio;
        this.productos[this.posicion].cantidad = cantidad;    
    }
    
}