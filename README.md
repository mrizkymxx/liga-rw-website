# ⚽ Liga RW - Football Tournament Management System

A modern, responsive web application for managing neighborhood football tournaments with an intuitive admin panel and clean Notion-inspired design.

## ✨ Overview

Liga RW adalah platform web yang dirancang khusus untuk mengelola turnamen sepak bola tingkat RW/kelurahan. Dengan antarmuka yang bersih dan fitur lengkap, website ini memudahkan pengelolaan data pertandingan, klasemen, dan statistik pemain secara real-time.

## 🌟 Key Features

### For Visitors
- **Live Standings** - Klasemen real-time untuk Grup A dan Grup B
- **Match Schedule** - Jadwal lengkap dengan hasil pertandingan
- **Top Scorer Board** - Statistik pencetak gol terbanyak
- **Disciplinary Records** - Data kartu kuning dan statistik disiplin
- **Mobile Responsive** - Tampilan optimal di semua perangkat

### For Administrators
- **Match Management** - Tambah, edit, dan update hasil pertandingan
- **Live Score Updates** - Update skor secara real-time
- **Player Statistics** - Kelola data top scorer dan kartu kuning
- **Team Management** - Organisasi tim dalam grup
- **Data Backup** - Export/import data dalam format JSON

## 🎨 Design Philosophy

Website ini mengadopsi desain modern yang terinspirasi dari Notion dengan:
- **Clean Typography** - Font yang mudah dibaca dan profesional
- **Floating Animations** - Animasi bola sepak yang halus dan tidak mengganggu
- **Color Consistency** - Skema warna yang konsisten dan eye-friendly
- **Intuitive Navigation** - Navigasi yang sederhana dan mudah dipahami

## � Project Architecture

```
liga-rw-website/
├── index.html          # Homepage dengan semua fitur utama
├── admin.html          # Dashboard admin untuk pengelolaan data
├── style.css           # Styling dengan tema Notion modern
├── script.js           # Frontend logic untuk halaman utama
├── admin.js            # Admin panel functionality
├── netlify.toml        # Netlify deployment configuration
├── _redirects          # Netlify redirect rules
└── data/
    ├── teams.json      # Database tim dan grup
    ├── matches.json    # Jadwal dan hasil pertandingan
    ├── standings.json  # Klasemen terkini
    ├── topscorer.json  # Statistik top scorer
    └── yellowcard.json # Data kartu kuning
```

## 🚀 Getting Started

### Quick Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/mrizkymxx/liga-rw-website.git
   cd liga-rw-website
   ```

2. **Open in browser**
   - Double-click `index.html` untuk membuka langsung
   - Atau gunakan live server untuk development

3. **Access admin panel**
   - Buka `/admin.html` atau tambahkan `#admin` di URL
   - Default password: `admin123`

### Development Server
Untuk menghindari CORS issues saat development:
```bash
# Menggunakan Python
python -m http.server 8000

# Menggunakan Node.js
npx live-server --port=3000

# Menggunakan PHP
php -S localhost:8000
```

## 🌐 Deployment to Netlify

### One-Click Deployment
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/mrizkymxx/liga-rw-website)

### Manual Deployment
1. **Connect to GitHub**:
   - Login ke [netlify.com](https://netlify.com)
   - Klik "New site from Git"
   - Pilih repository Anda
   - Deploy settings otomatis terdeteksi ✨

2. **Custom Domain** (opsional):
   - Buka site settings
   - Tambahkan custom domain
   - Update DNS records

3. **Go Live**: Site akan live dalam 1-2 menit! 🚀

**Lihat [NETLIFY-DEPLOY.md](NETLIFY-DEPLOY.md) untuk panduan lengkap**

### Features on Netlify
- ⚡ Lightning fast with global CDN
- 🔒 HTTPS otomatis
- 🔄 Auto-deploy dari GitHub
- 📊 Form handling (untuk kontak)
- 📈 Analytics built-in

## � Configuration

### Admin Access
Edit file `admin.js` untuk mengubah password:
```javascript
// Line ~15
const ADMIN_PASSWORD = 'your-new-password';
```

### Team Configuration
Edit `data/teams.json` untuk mengatur tim dan grup:
```json
{
  "grupA": [
    {"id": 1, "name": "Tim Alpha", "logo": "🔴"},
    {"id": 2, "name": "Tim Beta", "logo": "🟡"}
  ],
  "grupB": [
    {"id": 3, "name": "Tim Gamma", "logo": "🟢"},
    {"id": 4, "name": "Tim Delta", "logo": "🔵"}
  ]
}
```

## � Data Management

Semua data disimpan dalam format JSON yang mudah di-maintain:

- **teams.json** - Struktur tim dan grup
- **matches.json** - Jadwal dan hasil lengkap
- **standings.json** - Klasemen dengan poin, gol, dan selisih gol
- **topscorer.json** - Statistik individu pemain
- **yellowcard.json** - Catatan pelanggaran dan kartu

## 📱 Browser Support

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Kontribusi sangat diterima! Untuk berkontribusi:

1. **Fork** repository ini
2. **Create feature branch**: `git checkout -b feature/AmazingFeature`
3. **Commit changes**: `git commit -m 'Add some AmazingFeature'`
4. **Push to branch**: `git push origin feature/AmazingFeature`
5. **Open Pull Request**

## � License

Distributed under the MIT License. See `LICENSE` for more information.

## 🙏 Acknowledgments

- Design inspiration dari [Notion](https://notion.so)
- Icons dari Unicode Emoji
- Tested pada Liga RW Kecamatan Tahunan 2025

---

**Made with ❤️ for local football communities**

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/mrizkymxx/liga-rw-website)
