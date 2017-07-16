
import {Component, Input, EventEmitter, Output } from 'angular2/core'


@Component({
    selector : 'favorites',
    template : `
    <button [class.btn-primary]="isFavorite" (click) = "toggle()">Rating</button>
    `
})

export class FavoritesComponent{
    @Input() isFavorite = false;

    @Output() change = new EventEmitter();

    toggle(){
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue : this.isFavorite });
    }
}