# 🔄 Springbase Portal Redirect Setup

## 📋 **Project Overview**

- **Main Website:** React + Vite + TypeScript (hosted on Vercel)
- **Domain:** springbase.com.ng (points to Vercel)
- **Portals:** PHP-based (hosted on cPanel subdomains)
- **Setup:** Redirects from main domain to subdomains

## 🎯 **How It Works**

Users access portals through your main domain:
- `https://springbase.com.ng/students/` → Redirects to `https://students.springbase.com.ng/`
- `https://springbase.com.ng/parents/` → Redirects to `https://parents.springbase.com.ng/`
- `https://springbase.com.ng/admin/` → Redirects to `https://admin.springbase.com.ng/`

## ✅ **What I've Set Up**

### 1. **Vercel Redirects (Primary Method)**
Updated `vercel.json` with redirect rules:
```json
"redirects": [
  {
    "source": "/students",
    "destination": "https://students.springbase.com.ng",
    "permanent": false
  },
  {
    "source": "/students/(.*)",
    "destination": "https://students.springbase.com.ng/$1",
    "permanent": false
  },
  // ... similar for parents and admin
]
```

### 2. **HTML Fallback Redirects (Backup Method)**
Created redirect pages in `public/`:
- `public/students/index.html`
- `public/parents/index.html`
- `public/admin/index.html`

These provide instant redirects with a loading animation.

## 🚀 **Deployment Steps**

### **Step 1: Deploy to Vercel**
1. **Commit and push changes to GitHub:**
   ```bash
   git add .
   git commit -m "Add portal redirects"
   git push origin main
   ```

2. **Vercel will automatically deploy** (if auto-deploy is enabled)

### **Step 2: Verify Subdomains Work**
Test the subdomains directly:
- `https://students.springbase.com.ng/`
- `https://parents.springbase.com.ng/`
- `https://admin.springbase.com.ng/`

### **Step 3: Test Redirects**
After Vercel deployment, test:
- `https://springbase.com.ng/students/`
- `https://springbase.com.ng/parents/`
- `https://springbase.com.ng/admin/`

## 🔧 **File Structure**

```
springbase/ (React Project)
├── vercel.json              ← Updated with redirects
├── public/
│   ├── students/index.html  ← Fallback redirect
│   ├── parents/index.html   ← Fallback redirect
│   └── admin/index.html     ← Fallback redirect
└── ... (your React app)

cPanel Hosting (Separate)
├── students.springbase.com.ng/  ← PHP portal files
├── parents.springbase.com.ng/   ← PHP portal files
└── admin.springbase.com.ng/     ← PHP portal files
```

## 🎯 **Benefits of This Setup**

1. **Clean URLs:** Users access portals through main domain
2. **Separate Hosting:** Portals stay on cPanel, main site on Vercel
3. **No GitHub Integration:** Portals don't go through your React workflow
4. **Fallback Support:** HTML redirects work if Vercel redirects fail
5. **Professional:** Seamless user experience

## 🚨 **Troubleshooting**

### **If Redirects Don't Work:**
1. **Check Vercel deployment** - Make sure changes are deployed
2. **Test subdomains directly** - Ensure they're working
3. **Check DNS propagation** - Subdomains might need time
4. **Use HTML fallbacks** - They should work immediately

### **If You See 404 Errors:**
- The redirects haven't taken effect yet
- Use the direct subdomain URLs temporarily
- Check that files are in the right cPanel directories

## 🎉 **Ready to Deploy!**

Your setup is complete. Just push to GitHub and Vercel will handle the rest!

**Next Steps:**
1. `git add . && git commit -m "Add portal redirects" && git push`
2. Wait for Vercel deployment
3. Test the redirects
4. Enjoy your integrated portal system!
