// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nhgcrcpqzdlpebupvgbz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oZ2NyY3BxemRscGVidXB2Z2J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2ODAzMjAsImV4cCI6MjA2MzI1NjMyMH0.guiUQ85DHuQPAA5yPunpKMZScl1hFg9uDHPJJBQMcAo';
export const supabase = createClient(supabaseUrl, supabaseKey);