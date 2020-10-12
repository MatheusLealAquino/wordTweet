import { Router } from 'https://deno.land/x/oak/mod.ts';
import { getWord } from './controller.ts';

const router = new Router();
router.get('/word/:username', getWord);

export default router;