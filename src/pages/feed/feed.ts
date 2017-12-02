import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nome_usuario:string = "Robson Kaio";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public alertasoma(nome:string, num1:number, num2:number): void{
    alert(nome+", o resultado da soma é: "+(num1+num2));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    //this.alertasoma(this.nome_usuario, 2,5);
  }

}