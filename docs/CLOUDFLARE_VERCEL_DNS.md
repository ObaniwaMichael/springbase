# Cloudflare + Vercel DNS – Site Not Loading / Redirect Issues

If the site was working on Vercel and stopped after changing DNS on Cloudflare, use this to get **springbase.com.ng** (and www) pointing correctly to Vercel again.

---

## 1. DNS records in Cloudflare

In **Cloudflare Dashboard → your domain → DNS → Records**, you need the domain to point to **Vercel**, not to an old IP or another host.

### Option A – Recommended (CNAME to Vercel)

| Type  | Name | Target                 | Proxy status |
|-------|------|------------------------|--------------|
| CNAME | `www` | `cname.vercel-dns.com` | Proxied (orange) or DNS only (grey) – both work |
| CNAME | `@`  | `cname.vercel-dns.com` | Proxied (orange) – Cloudflare will flatten this at root |

- **Name `@`** = root domain (e.g. `springbase.com.ng`).
- **Name `www`** = `www.springbase.com.ng`.
- Leave **TTL** on Auto unless you have a reason to change it.

If your host (e.g. Vercel) gave you a **different** CNAME target (e.g. `xxx.vercel.app`), use that instead of `cname.vercel-dns.com`.

### Option B – A/AAAA (if CNAME at root is a problem)

Some setups use A/AAAA for the root:

| Type | Name | Content        | Proxy |
|------|------|----------------|-------|
| A    | `@`  | `76.76.21.21`  | Proxied or DNS only |
| AAAA | `@`  | `2606:50c0:8001::153` (or current Vercel IPv6) | Same |
| CNAME | `www` | `cname.vercel-dns.com` | Same |

Check [Vercel’s docs](https://vercel.com/docs/concepts/projects/domains#dns-records) for the latest A/AAAA values.

---

## 2. Cloudflare SSL/TLS (important when proxied)

If the **orange cloud (Proxy)** is ON for your records:

1. Go to **SSL/TLS**.
2. Set encryption mode to **Full** or **Full (strict)**.
   - **Flexible** = browser → Cloudflare is HTTPS, Cloudflare → Vercel is HTTP. That can break redirects and make the site not “come up” properly. Don’t use Flexible when the origin is Vercel.

---

## 3. Vercel domain configuration

Vercel must know about your domain:

1. **Vercel Dashboard** → your project → **Settings** → **Domains**.
2. Add:
   - `springbase.com.ng`
   - `www.springbase.com.ng`
3. Leave **Redirect** as you prefer (e.g. `www` → root or root → `www`).
4. Wait until both show **Valid Configuration**. If they don’t, Vercel will show what record it expects; that must match what you set in Cloudflare (e.g. CNAME to `cname.vercel-dns.com`).

---

## 4. Typical “redirect / site not coming up” causes

| Cause | What to do |
|-------|------------|
| CNAME/A record points to old host or wrong target | Change target to `cname.vercel-dns.com` (or the CNAME Vercel shows in Domains). |
| SSL mode **Flexible** with proxy ON | Set SSL to **Full** or **Full (strict)**. |
| Only `www` added, not root (or vice versa) | Add both in Vercel and in Cloudflare so the one you want to use is correct. |
| DNS not propagated yet | After saving in Cloudflare, wait 5–30 minutes (sometimes up to 48h). Use [whatsmydns.net](https://www.whatsmydns.net) for `springbase.com.ng` and `www.springbase.com.ng`. |
| Wrong project or domain in Vercel | In Vercel Domains, confirm the domain is on this project and not another. |

---

## 5. Quick checklist

- [ ] In Cloudflare: **CNAME** for `www` and `@` (or A/AAAA for `@`) pointing to **Vercel**.
- [ ] In Cloudflare: **SSL/TLS** = **Full** or **Full (strict)** if proxy is ON.
- [ ] In Vercel: **Domains** include `springbase.com.ng` and `www.springbase.com.ng`, both **Valid Configuration**.
- [ ] No conflicting records (e.g. old A record for `@` pointing to a different IP).
- [ ] After changes, wait a few minutes and test in an incognito window; clear cache if needed.

---

## 6. Verify

- Open `https://springbase.com.ng` and `https://www.springbase.com.ng` in a private/incognito window.
- If one of them should redirect to the other, test both directions (e.g. www → non-www or non-www → www) according to how you set redirects in Vercel.

Your app and redirects are already configured in **Vercel** (e.g. in `vercel.json`); once DNS in Cloudflare points correctly to Vercel and SSL is **Full**, the “redirect to the website itself” and site-not-loading issues from DNS changes should be resolved.
