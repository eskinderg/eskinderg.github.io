import { FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
    const baseURL = config.projects[0].use.baseURL;
    console.log('==============================================');
    console.log('Starting tests with Base URL: ', baseURL);
    console.log('==============================================');
}

export default globalSetup;
