# Configuración de Supabase para Xeus OS

Para que el formulario de newsletter funcione, necesitas configurar Supabase.

## 1. Crear Proyecto
Ve a [supabase.com](https://supabase.com) y crea un nuevo proyecto.

## 2. Base de Datos
Ve al "SQL Editor" en tu dashboard de Supabase y ejecuta este código:

```sql
-- 1. Crear tabla 'leads' con ID UUID seguro
create table leads (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Habilitar seguridad a nivel de fila (RLS)
alter table leads enable row level security;

-- 3. Crear política para permitir que CUALQUIERA inserte datos (el formulario)
create policy "Permitir inserción anónima" 
on leads 
for insert 
to anon 
with check (true);

-- NOTA: No creamos política de SELECT para 'anon', 
-- por lo que las lecturas públicas están bloqueadas por defecto.
```

## 3. Variables de Entorno
Crea un archivo `.env.local` en la raíz del proyecto (`xeus-os/.env.local`) y agrega tus credenciales:

```bash
NEXT_PUBLIC_SUPABASE_URL=tu_project_url_aqui
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key_aqui
```

Puedes encontrar estas claves en: `Project Settings` > `API`.

4. Reiniciar el servidor
Si tienes el servidor corriendo, reinicialo para que tome las nuevas variables.

## 5. (Opcional pero Recomendado) Seguridad Extra
Para evitar que se inserten emails inválidos o basura directamente en la base de datos (saltándose el frontend), ejecuta esto en el SQL Editor:

```sql
-- Validar formato de email en la base de datos
alter table waiting_list
add constraint email_format_check
check (
  email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'
);
```
