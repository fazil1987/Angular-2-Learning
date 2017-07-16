import {Component, Input } from 'angular2/core'
import {HeartService} from './heart.service'

@Component({
    selector : 'heart',
    template : `
    <button [class.btn-primary]="isClicked" [textContent]="isClicked ? 'Unlike' : 'Like' " (click)="onClick()"></button>
    <h2>{{ noOfLikes }}</h2>
    `,
    providers : [HeartService]

})

export class HeartComponent{

    @Input() isClicked;
    noOfLikes;

    constructor( private heartService : HeartService ){
      this.isClicked = false;
      this.noOfLikes = heartService.getLikes();
    }

    onClick(){
        this.isClicked = !this.isClicked;
        this.heartService.AddLikes(this.isClicked ? 5 : -1);
        this.noOfLikes = this.heartService.getLikes();
    }
}