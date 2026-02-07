# MixOnAir Site (mixonair.com)

This project is a static recreation of the old DJ livestream platform style.

## Local preview

```bash
cd "/Users/digitalgorithms/Documents/New project"
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Recreated routes

- `http://localhost:8080/events/` (events hub)
- `http://localhost:8080/dj/` (DJ tools/overview)
- `http://localhost:8080/user/` (user profile/mixes)
- `http://localhost:8080/live/synthetic-pleasures/` (live room mock)

## Deploy quickly

### Option A: Vercel
1. Push this folder to GitHub.
2. Import repo into Vercel.
3. Framework preset: `Other` (static site).
4. Deploy.
5. In Vercel project settings, add domain `mixonair.com`.
6. At your DNS provider, create:
   - `A` record for root (`@`) -> `76.76.21.21`
   - `CNAME` for `www` -> `cname.vercel-dns.com`

### Option B: Netlify
1. Push this folder to GitHub.
2. Import repo into Netlify.
3. Build command: none.
4. Publish directory: `.`
5. Add custom domain `mixonair.com`.
6. Update DNS with Netlify-provided records (usually CNAME for `www`, A/ALIAS for root).

## Next phase ideas
- Real DJ auth + dashboard
- Streaming via Mux/Livepeer + HLS player
- Event chat and reactions
- Artist profile pages and archives
