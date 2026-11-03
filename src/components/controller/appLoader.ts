import Loader from './loader';

declare const process: {
    env: Record<string, string | undefined>;
};

class AppLoader extends Loader {
    constructor() {
        const apiUrl = process.env.API_URL || '';
        const apiKey = process.env.API_KEY || '';

        super(apiUrl, {
            apiKey: apiKey,
        });
    }
}

export default AppLoader;
