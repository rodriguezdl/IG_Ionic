import {Injectable} from '@angular/core';
import {AccountRepositoryLoginResponseLogged_in_user, DirectInboxFeedResponse, IgApiClient} from 'instagram-private-api';
import {IgApiClientRealtime, withRealtime} from 'instagram_mqtt';
import {environment} from '../../../../environments/environment';
import {ThreadInfo} from '../messages/thread-info';

@Injectable({
    providedIn: 'root'
})
export class TingService {
    ig: IgApiClientRealtime;


    constructor() {
        (async () => {
            this.ig = withRealtime(new IgApiClient());
            this.ig.state.generateDevice(environment.user_name);
            let auth: AccountRepositoryLoginResponseLogged_in_user;
            try {
                auth = await this.ig.account.login(environment.user_name, environment.pass);
            } catch (error) {
                console.log('AUTH ERROR (see below): \n\n' + error);
            }
        })();
    }

    async listThreads() {
        const threads: DirectInboxFeedResponse = await this.ig.feed.directInbox().request();
        return threads.inbox.threads.map((thd) => {
            const tinfo: ThreadInfo = {
                threadId: thd.thread_id,
                users: thd.users.map((user) => {
                    return user.username;
                }),
                threadTitle: thd.thread_title
            };
            return tinfo;
        });

    }

}
