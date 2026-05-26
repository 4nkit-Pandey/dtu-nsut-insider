-- Run this in your Supabase SQL editor (Dashboard → SQL Editor → New Query)

create table if not exists branch_predictions (
  id              uuid primary key default gen_random_uuid(),
  crl_rank        integer not null,
  phone_number    text not null,
  dtu_initial     text,
  dtu_upgraded    text,
  nsut_initial    text,
  nsut_upgraded   text,
  created_at      timestamptz default now()
);

-- Index for fast rank lookups / analytics
create index if not exists idx_predictions_rank on branch_predictions (crl_rank);

-- Enable Row Level Security (recommended)
alter table branch_predictions enable row level security;

-- Allow anonymous inserts (from the website form)
create policy "Allow public insert" on branch_predictions
  for insert with check (true);

-- Only authenticated users (admins) can read all data
create policy "Allow auth read" on branch_predictions
  for select using (auth.role() = 'authenticated');
