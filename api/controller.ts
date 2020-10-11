import 'https://deno.land/x/dotenv/load.ts';
import * as Service from './services.ts'

async function getTweets(
    { request, response, params } : { request: any, response: any, params: { username: string } }
) {
    console.log(request);
    const word = await Service.analyzeTweets({ username: params.username});

    response.body = { word };
    response.status = 200;
}

export { getTweets }