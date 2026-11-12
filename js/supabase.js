import { createClient } from
'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://aghagmyzhewnhuneuqkq.supabase.co/';
const SUPABASE_KEY = 'sb_publishable_itO1LhoVWIrhdRygJ53Sng_bko7yWn0';

export const supabase = createClient(
SUPABASE_URL,
SUPABASE_KEY
);