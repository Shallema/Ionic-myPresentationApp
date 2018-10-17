import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SkillsPage } from '../skills/skills';
import { StudiesPage } from '../studies/studies';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  display(item: String){
    console.log('display '+item)
    if (item == 'skills'){
      this.navCtrl.push(SkillsPage);
    } else {
      this.navCtrl.push(StudiesPage);
    }
  }

}

