# 🚀 GitHub Deployment Guide

## Step 1: Setup Repository

1. **Create GitHub Repository**
   ```bash
   # Di GitHub.com, buat repository baru bernama "liga-rw-website"
   # Jangan centang "Add README file" karena kita sudah punya
   ```

2. **Initialize Git & Push**
   ```bash
   # Di folder project ini
   git init
   git add .
   git commit -m "Initial commit - Liga RW website"
   git branch -M main
   git remote add origin https://github.com/mrizkymxx/liga-rw-website.git
   git push -u origin main
   ```

## Step 2: Enable GitHub Pages

1. **Go to Repository Settings**
   - Buka repository di GitHub
   - Klik tab "Settings"
   - Scroll ke bagian "Pages" di sidebar kiri

2. **Configure GitHub Pages**
   - Source: pilih "Deploy from a branch"
   - Branch: pilih "main"
   - Folder: pilih "/ (root)"
   - Klik "Save"

3. **Wait for Deployment**
   - GitHub akan deploy website dalam 2-5 menit
   - URL akan tersedia: `https://mrizkymxx.github.io/liga-rw-website`

## Step 3: Update Repository Info

1. **Edit package.json**
   ```json
   {
     "homepage": "https://mrizkymxx.github.io/liga-rw-website"
   }
   ```

2. **Update README.md**
   - Ganti `https://username.github.io/repository-name` dengan URL asli
   - Update semua link yang sesuai

## Step 4: Custom Domain (Optional)

1. **Add CNAME File**
   ```bash
   echo "yourdomain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. **Configure DNS**
   - A Record: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - atau CNAME: `mrizkymxx.github.io`

## Step 5: Admin Access

- **Public URL**: `https://mrizkymxx.github.io/liga-rw-website`
- **Admin Panel**: `https://mrizkymxx.github.io/liga-rw-website/admin.html`
- **Default Password**: `admin123`

## Step 6: Data Management

### JSON Files Structure:
```
data/
├── teams.json      - Tim dan grup
├── standings.json  - Klasemen
├── matches.json    - Jadwal & hasil
├── topscorer.json  - Top scorer
└── yellowcard.json - Kartu kuning
```

### Update Data:
1. Edit file JSON di GitHub repository
2. Commit changes
3. Website otomatis update dalam 1-2 menit

## Step 7: Future Updates

```bash
# Untuk update website
git add .
git commit -m "Update data atau fitur baru"
git push

# GitHub Pages akan auto-deploy perubahan
```

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Run local server
npm start
# atau
npx live-server --port=3000

# Open: http://localhost:3000
```

## 📱 Mobile Testing

- Test di berbagai device menggunakan browser DevTools
- Responsive design sudah dioptimasi untuk semua screen size

## 🎯 Performance Tips

1. **Optimize Images**: Gunakan format WebP untuk gambar
2. **Minify Code**: Gunakan tools seperti Terser untuk production
3. **Cache Headers**: GitHub Pages sudah handle caching

## 🔒 Security

- Admin password bisa diubah di `admin.js`
- Untuk security lebih baik, consider menggunakan GitHub authentication
- JSON files bersifat public, jangan simpan data sensitif

## 📊 Analytics (Optional)

Tambahkan Google Analytics:
```html
<!-- Di head section index.html dan admin.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

**Website Liga RW siap di-deploy ke GitHub Pages! 🏆**
