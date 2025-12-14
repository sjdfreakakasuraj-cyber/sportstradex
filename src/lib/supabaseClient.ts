import { createClient } from '@supabase/supabase-js';

// Define types for our Supabase tables
export interface User {
  id: string;
  email: string;
  name: string;
  created_at: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  created_at: string;
}

// Get Supabase credentials from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Validate environment variables
if (!supabaseUrl) {
  console.warn('Missing NEXT_PUBLIC_SUPABASE_URL environment variable');
}

if (!supabaseAnonKey) {
  console.warn('Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable');
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper functions for common operations
export const getUser = async (userId: string) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();
    
  if (error) {
    console.error('Error fetching user:', error);
    return null;
  }
  
  return data as User;
};

export const getCourses = async () => {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: false });
    
  if (error) {
    console.error('Error fetching courses:', error);
    return [];
  }
  
  return data as Course[];
};

export const signUpUser = async (email: string, password: string, name: string) => {
  // First create the user
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  });
  
  if (error) {
    console.error('Error signing up user:', error);
    return { error };
  }
  
  return { data };
};

export const signInUser = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  if (error) {
    console.error('Error signing in user:', error);
    return { error };
  }
  
  return { data };
};

export const signOutUser = async () => {
  const { error } = await supabase.auth.signOut();
  
  if (error) {
    console.error('Error signing out user:', error);
    return { error };
  }
  
  return { success: true };
};