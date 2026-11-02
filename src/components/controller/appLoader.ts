import Loader from './loader';

declare const process: any;

class AppLoader extends Loader {
    constructor() {
        const apiUrl = (process.env as any).API_URL || '';
        const apiKey = (process.env as any).API_KEY || '';
        super(apiUrl, {
            apiKey: apiKey,
        });
    }
}

export default AppLoader;
