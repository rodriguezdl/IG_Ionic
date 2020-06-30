import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ProfileInfo} from './profile-info';

@Injectable()
export class ProfileService {
    private pInfo: ProfileInfo = {username: '', url: '', bio: ''}; // Where the stuff is actually stored
    // tslint:disable-next-line:variable-name
    private _profileInfo: BehaviorSubject<ProfileInfo> =
        new BehaviorSubject<ProfileInfo>(this.pInfo); // For publishing (changing and announcing the change to data)

    public readonly profileInfo: Observable<ProfileInfo> = this._profileInfo.asObservable(); // For subscribers who want to read the data


    constructor(private profileService: ProfileService) {}

    updateProfileInfo(info: ProfileInfo){

    }

    modifyProfile(info: ProfileInfo){
      this.pInfo.username = info.username;
      this.pInfo.bio = info.bio;
      this.pInfo.url = info.url;
    }
}
