export class Serie{
    numero: number;
    nombre: string;
    canal: string;
    temporada: number;
    descripcion :string;
    pagina:string;
    imagen:string;
    constructor(numero: number, nombre: string, canal: string, temporadas: number, descripcion: string, pagina:string, imagen:string){
        this.numero = numero;
        this.nombre = nombre;
        this.canal = canal;
        this.temporada = temporadas;
        this.descripcion = descripcion;
        this.pagina = pagina;
        this.imagen = imagen;
    }
}