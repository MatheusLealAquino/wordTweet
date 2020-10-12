import 'https://deno.land/x/dotenv/load.ts';
import * as Service from './services.ts'

async function getTweets(
    { request, response, params } : { request: any, response: any, params: { username: string } }
) {
    try {
        const analyze = await Service.analyzeTweets({ username: params.username });

        response.body = analyze;
        response.status = 200;
    } catch (err) {
        console.error(err);
        response.body = {
            error: true
        };
        response.status = 500;
    }
}

export { getTweets }