async function getTweets(username: string) : Promise<any> {

}

async function analyzeTweets({
    username,
    } : {username: string}) : Promise<string> {
    const tweets = await getTweets(username);
    return '';
}

export {
    analyzeTweets
}