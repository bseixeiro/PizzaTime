import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://uyxhwuykiwlhfnvqnqbd.supabase.cov"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5eGh3dXlraXdsaGZudnFucWJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1MDMyMzYsImV4cCI6MjAzMzA3OTIzNn0.L6YuROXi7X1d-7gk1btCMF_YFT31BqCKL-orvGkN6ho"


export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
})


