import { environment } from 'src/environments/environment';

export class Service {
    apiUrl: string;
    constructor() {
        this.apiUrl = environment.apiURL;
    }
}
