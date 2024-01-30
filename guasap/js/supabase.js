import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://rymbjlnurawwfwrzrkym.supabase.co', 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5bWJqbG51cmF3d2Z3cnpya3ltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY2MzY1MjIsImV4cCI6MjAyMjIxMjUyMn0.qf3ZKbKgAwGU8Am8QeDKK5cm54qILs8mMtEZg74cPe0')


const { data, error } = await supabase.auth.signInWithPassword({
    email: 'rugolop.avascript.course@gmail.com',
    password: 'Agc150611@23',
  })

  console.log( data);

  const { data, error } = await supabase
  .from('countries')
  .select()