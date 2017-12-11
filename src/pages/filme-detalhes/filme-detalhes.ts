import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
  providers:[
    MoovieProvider
  ]
})
export class FilmeDetalhesPage {
  public loader;
  public filme;
  public filmeid;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public movieProvider: MoovieProvider,
    public loadingCtrl: LoadingController
  ) {
  }

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando..."
    });
    this.loader.present();
  }

  fechaCarregando(){
    this.loader.dismiss();
  }

  ionViewDidEnter() {
    this.carregarFilme();
  }

  carregarFilme(){
    this.abreCarregando();
    this.filmeid = this.navParams.get("id");
    //console.log("Filme Id: ", this.filmeid);
    this.movieProvider.gettMovieDetails(this.filmeid).subscribe(data=>{
      let retorno = (data as any);
      this.filme= JSON.parse(JSON.stringify(retorno || null ));
      //console.log(retorno);
      this.fechaCarregando();
    }, error=>{
      console.log(error);
      this.fechaCarregando();
    })
  }

}
