# Cloudflare DNS – Vercel app only (springbase.com.ng main site)

Use these **two records** so the main Vercel site is what loads for the root domain and www. Leave all other records (admin, parents, students, mail, cPanel, etc.) as they are.

---

## Records for the Vercel app

| Type | Name | Content / Target | Proxy |
|------|------|------------------|--------|
| **A** | `@` (or `springbase.com.ng`) | `76.76.21.21` | **Proxied** (orange cloud) |
| **CNAME** | `www` | `cname.vercel-dns.com` | **Proxied** (orange cloud) |

- **Root:** `springbase.com.ng` → A record `76.76.21.21` (Vercel apex IP), **Proxied**.
- **www:** `www.springbase.com.ng` → CNAME `cname.vercel-dns.com`, **Proxied**.

If Vercel gave you a **project-specific** CNAME for www (e.g. `xxxx.vercel-dns-017.com`), use that instead of `cname.vercel-dns.com` for the **www** record. Your current `4e668db041920d5a.vercel-dns-017.com` is fine — keep it.

---

## What to change (if anything)

1. **Root (springbase.com.ng)**  
   - One A record: **Name** `@`, **Content** `76.76.21.21`, **Proxy** = Proxied.  
   - Remove any other A or CNAME for the root that points elsewhere.

2. **www**  
   - One CNAME: **Name** `www`, **Target** either:
     - `cname.vercel-dns.com`, or  
     - The value from Vercel (e.g. `4e668db041920d5a.vercel-dns-017.com`).  
   - **Proxy** = Proxied.

3. **Everything else**  
   - Do **not** change admin, parents, students, mail, cpanel, autoconfig, etc. Those stay on `185.234.21.198` (or whatever your cPanel/server IP is) so only the main site goes to Vercel.

---

## SSL/TLS (Cloudflare)

- **SSL/TLS** → Encryption mode: **Full** or **Full (strict)**.  
- Do **not** use **Flexible** for the domain that goes to Vercel.

---

## Summary

- **Only** the root and www records above send traffic to Vercel.  
- All other hostnames (admin, parents, students, mail, etc.) keep pointing to your server; no change needed for “only the Vercel app” on the main domain.

After saving DNS, wait a few minutes and test in an incognito window:  
`https://springbase.com.ng` and `https://www.springbase.com.ng` should both show the Vercel app.
