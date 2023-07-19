import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bomuwhgrujvwagkdtdrd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvbXV3aGdydWp2d2Fna2R0ZHJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk2MTYyODYsImV4cCI6MjAwNTE5MjI4Nn0.2LO4Ex7y-KG9iInHcoK3JPIYZMFR0ZiEW6iWQV9YQt0'
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;