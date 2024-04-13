import {createClient} from 'next-sanity';

export const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset : 'production',
    useCdn : false,
    apiVersion : '2024-04-12',
    // token : process.env.SANITY_SECRET_TOKEN
});

