import { createClient } from "@supabase/supabase-js";



const supabaseUrl = 'https://uvtuhtnvakickgzzhgbz.supabase.co';
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2dHVodG52YWtpY2tnenpoZ2J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI0MDcxMjMsImV4cCI6MjAzNzk4MzEyM30.bs266kqr6EtgLJcKPHCPKmRGNcvRiU8PfptSNcONAyQ";


export const supabase = createClient(supabaseUrl, supabaseAnonKey);