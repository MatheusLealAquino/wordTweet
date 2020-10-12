import { Router } from 'https://deno.land/x/oak/mod.ts';
import { getTweets } from './controller.ts';

const router = new Router();
router.get('/word/:username', getTweets);

export default router;