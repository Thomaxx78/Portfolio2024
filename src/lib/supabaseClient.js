import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nxibtlizynflesdpccbp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54aWJ0bGl6eW5mbGVzZHBjY2JwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxMDI2NzksImV4cCI6MjA2MTY3ODY3OX0.euULzGZMqhf0yzvOTrRHzRq21PkDp57QfH9Ve9h7mkU';
export const supabase = createClient(supabaseUrl, supabaseKey);
