import { Component } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  newTitle: string = "";
  newImage: string = "";
  newContent: string = "";
  newDate: string = "";
  arrNews: Noticia[] = [];
  constructor() {
    this.arrNews = new Array(
      {
        title: "EL CONSUMO DE AZÚCARES EN NIÑOS",
        content: "En los últimos años se ha observado un incremento en el número de caries en niños menores de 6 años. Todas las investigaciones apuntan a que este aumento podría deberse al consumo  de azúcares en la dieta. Actualmente existe una gran variedad de productos alimenticios destinados a la infancia con un alto contenido de azucares entre sus ingredientes principales. Todo ello nos lleva a un índice de caries muy alto entre pacientes de muy corta edad.",
        image: "https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/eliminar_azucar_de_la_dieta_1_0.jpg.webp?itok=JqfGrPNB",
        date: "04/02/2023"
      },
      {
        title: "¿QUÉ CHUPETE ES MÁS RECOMENDABLE?",
        content: "Muchos padres se preguntan si el uso del chupete es recomendable, y en ese caso qué modelo sería el más adecuado. El uso de un chupete demasiado grande puede acabar provocando malposiciones dentarias e incluso un déficit en el desarrollo maxilofacial del niño. Idealmente, los odontopediatras recomiendan llevar a cabo una lactancia materna durante el primer año de vida.",
        image: "https://www.alaiaclinica.com/wp-content/uploads/2020/12/alaia-clinica-dental-hernani-el-chupete-1030x558.jpg",
        date: "25/11/2022"
      }
    )
  }
  save(): void {
    if(this.newTitle !== "" && this.newImage !== "" && this.newContent !== "" && this.newDate !== ""){
      this.arrNews.push({
        title: this.newTitle,
        image: this.newImage,
        content: this.newContent,
        date: this.newDate
      })
      this.newTitle = "";
      this.newImage = "";
      this.newContent = "";
      this.newDate = "";
    } else {
      alert("Todos los campos son obligatorios, por favor, rellénalos antes de publicar la noticia.")
    }
  }
}