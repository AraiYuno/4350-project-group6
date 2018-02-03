import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Advertisement } from '../api/advertisement';
import { User } from '../api/user';

@Injectable()
export class MysqlService{

    constructor(public http: HttpClient){
    }

    private url:string;

    getAllAdvertisements(){
        this.url = "http://ec2-18-217-86-148.us-east-2.compute.amazonaws.com:9000/ads";
        return this.http.get<Advertisement[]>(this.url);
    }

    getAdvertisementById(advertisementId){
        this.url = "http://ec2-18-217-86-148.us-east-2.compute.amazonaws.com:9000/ads/"+advertisementId;
        return this.http.get<Advertisement[]>(this.url);
    }

    getUserById(userId){
        this.url = "http://ec2-18-217-86-148.us-east-2.compute.amazonaws.com:9000/users/"+userId;
        return this.http.get<User[]>(this.url);
    }
}
