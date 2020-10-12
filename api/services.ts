import "https://deno.land/x/dotenv/load.ts";
import axiod from "https://deno.land/x/axiod/mod.ts";

async function getTweets(username: string) : Promise<any> {
    const bearer: string = Deno.env.get('BEARER')!;
    const totalTweets: string = Deno.env.get('COUNT_TWEETS')!;
    const twitterUrl: string = Deno.env.get('TWITER_URL')!;

    const response = await axiod.get(`${twitterUrl}?screen_name=${username}&count=${totalTweets}`, {
        headers: {
            'Authorization': `Bearer ${bearer}`,
        }
    });
    const tweets = response.data;
    return tweets.map((tweet: any) => {
        return tweet.text
    });
}

async function analyzeTweets({
        username,
    } : {username: string}) : Promise<{username: string, word: string, total: number}> {
    const ignoreWords = ['que', 'com', 'meu', 'de', 'eu', 'e', 'a', 'o'];

    const tweets: Array<string> = await getTweets(username);
    const words: {[key: string]: number} = {};
    let word = '';

    tweets.forEach((tweet: string) => {
        const tweetSplited = tweet.split(' ');
        tweetSplited.forEach(word => {
            if (!ignoreWords.includes(word) && word.length > 2) {
                if (words[word]) {
                    words[word] += 1;
                } else {
                    words[word] = 1;
                }
            }
        });
    });

    if (words || tweets.length > 0) {
        word = Object.keys(words).reduce((previous, currentValue) => words[previous] > words[currentValue] ? previous : currentValue);
    }

    return {
        username,
        word,
        total: words[word] 
    };
}

export {
    analyzeTweets
}