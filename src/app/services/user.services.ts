import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import { environment } from '../../environments/environment';
import { InsertPostModel } from '../models/InsertPost-model';
import { AddCommentModel } from '../models/addComment-model';
import { AddShareModel } from '../models/addShare-model';
import { AddLikeModel } from '../models/addLike-model';
import { AddFollowerModel } from '../models/addFollower-model';
import { GeneralFeedModel } from '../models/generalFeed-model';
import { NotificationModel } from '../models/notification-model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private baseUrl = `${environment.baseUrl}`;

    constructor(private mainService: MainService) {
    }

    insertPost(insertPostModel: InsertPostModel) {
        return this.mainService
            .post(`${this.baseUrl}posts/add`, insertPostModel).toPromise();
    }
    addComment(addCommentModel: AddCommentModel) {
        return this.mainService
            .post(`${this.baseUrl}comment/add`, addCommentModel).toPromise();
    }

    addShare(addShareModel: AddShareModel) {
        return this.mainService
            .post(`${this.baseUrl}share/add`, addShareModel).toPromise();
    }
    addLike(addLikeModel: AddLikeModel) {

        return this.mainService
        .post(`${this.baseUrl}likes/add` , addLikeModel).toPromise();
    }
    addFollower(addFollowerModel: AddFollowerModel) {

        return this.mainService
        .post(`${this.baseUrl}followings/add` , addFollowerModel).toPromise();
    }
    genFeed(generalFeedModel: GeneralFeedModel) {
        return this.mainService
        .post(`${this.baseUrl}general_feed/show` , generalFeedModel).toPromise();
    }

    notification(notificationModel: NotificationModel) {

        return this.mainService
        .post(`${this.baseUrl}notification/get` , notificationModel).toPromise();
    }
}
