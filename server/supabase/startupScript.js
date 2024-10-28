import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const url = process.env.SUPABASE_URL
const key = process.env.SUPABASE_KEY
const supabase = createClient(url, key)

export const startupScript = () => {
};