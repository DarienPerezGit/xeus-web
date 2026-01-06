import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Debugging: Verificar si las claves se cargan (No mostrar la clave completa en producción por seguridad, solo los primeros caracteres)
if (typeof window !== 'undefined') {
    console.log('Supabase URL:', supabaseUrl);
    console.log('Supabase Key Loaded:', !!supabaseAnonKey);
    console.log('Supabase Key Prefix:', supabaseAnonKey ? supabaseAnonKey.substring(0, 10) + '...' : 'MISSING');
}

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Faltan las variables de entorno de Supabase. El formulario de contacto no funcionará correctamente.');
}

export const supabase = createClient(
    supabaseUrl || '',
    supabaseAnonKey || ''
);
