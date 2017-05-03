
import { Component, ViewChild, ElementRef } from '@angular/core'
import { NavController } from 'ionic-angular'
import { PaperProvider } from '../../providers/paper'

import { Game } from '../../logic/game'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('gameCanvas') canvas: ElementRef

  constructor(public navCtrl: NavController, private paper: PaperProvider) { }

  ionViewDidLoad() {
    // setup the paper.js environment
    this.paper.setup(this.canvas)
    let game = new Game(this.paper)

    this.paper.startAnimating()
    game.start()
  }
}
