-- Run in Supabase SQL editor for the marketing site recommendation flow.

create table if not exists public.treasure_source_recommendations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  source_name text not null,
  source_type text not null,
  website_or_social text,
  location text,
  contact_name text,
  contact_email text,
  reason text,
  referrer_name text,
  referrer_email text,
  status text not null default 'new'
);

create index if not exists treasure_source_recommendations_status_idx
  on public.treasure_source_recommendations (status);

create index if not exists treasure_source_recommendations_created_at_idx
  on public.treasure_source_recommendations (created_at desc);
