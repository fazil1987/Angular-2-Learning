export class HeartService{

    noOfLikes = 10;

    getLikes() : number{
        return this.noOfLikes;
    }

    AddLikes(likes : number) : void{
       this.noOfLikes+= likes;
    }

}