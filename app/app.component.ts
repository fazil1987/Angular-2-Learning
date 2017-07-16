import {Component} from 'angular2/core'
import {FavoritesComponent} from './Favorites/Favorites.component'
import {HeartComponent} from './Exercise2/heart.component'
import {LikeComponent} from './like.component'
import {VoterComponent} from './VoterComponent/voter.component'

@Component({
    selector: 'my-app',
    template: ` <favorites [isFavorite]="post.isFavorite" (change)="handle($event)"></favorites>
                <label>{{message}}</label>
                <heart [isClicked] = "false" ></heart>
                <heart [isClicked] = "false" ></heart>
                <like [totalLikes] = 70></like>

                <voter></voter>
                `,
    directives : [ FavoritesComponent, HeartComponent, LikeComponent, VoterComponent]
})
export class AppComponent { 
    post={
        title: "Title",
        isFavorite: true
    }

    message = "test";

    handle($event)
    {
        console.log($event);
        this.message = $event.newValue;
    }
}