# 🚀 Mwesh Developers Global - Quick Start Guide

## ⚡ Quick Setup (Windows PowerShell)

### Step 1: Add Node.js to PATH
```powershell
$env:Path = "C:\Program Files\nodejs;C:\Windows\System32;C:\Windows"
```

### Step 2: Start Development Server
```powershell
cd "c:\Users\mary2\Downloads\material-tailwind-event-1.0.0\material-tailwind-event-1.0.0"
& "C:\Program Files\nodejs\npm.cmd" run dev
```

### Step 3: Open Browser
Visit: **http://localhost:3000** (or the next available port if 3000 is in use)

---

## 📖 How to Use the Portal

### 1. **Home Page**
- Start at the main landing page
- Click "Get Started" to create account
- Or "Learn More" to explore services

### 2. **Create Account**
- Go to `/signup`
- Fill in: Name, Email, Password, Confirm Password
- Click "Sign Up"
- Automatically logged in → Dashboard

### 3. **Login**
- Go to `/login`
- Enter: Email and Password
- Click "Sign In"
- Access protected dashboard

### 4. **Explore Pages**
- **Services** (`/services`) - See all company services
- **Team** (`/team`) - Meet the team members
- **Blog** (`/blog`) - Read company blog posts
- **Contact** (`/contact`) - Send a message

### 5. **Dashboard**
- View your profile and avatar
- See your stats and projects
- Check recent activity
- Click "Logout" to sign out

---

## 🎯 Test Credentials

You can create any account since it's a demo:
- **Email**: test@example.com
- **Password**: password123
- **Name**: John Doe

---

## 📂 File Locations

### Important Files:
- **Home Page**: `src/app/page.tsx`
- **Navbar**: `src/components/navbar.tsx`
- **Auth Context**: `src/context/AuthContext.tsx`
- **Styles**: `src/app/globals.css`
- **Login**: `src/app/login/page.tsx`
- **Signup**: `src/app/signup/page.tsx`
- **Dashboard**: `src/app/dashboard/page.tsx`

---

## 🎨 Customization

### Change Company Name
- Update `src/components/navbar.tsx` - Change "Mwesh" logo
- Update `src/app/layout.tsx` - Change metadata title
- Update `src/app/hero.tsx` - Change company name in text

### Change Colors
- Edit `src/app/globals.css` - Modify color values
- Check Tailwind classes (from-blue-600, to-indigo-600, etc.)

### Add New Pages
1. Create folder: `src/app/new-page/`
2. Create file: `src/app/new-page/page.tsx`
3. Add to navbar: Edit `src/components/navbar.tsx`

---

## ✨ Features

✅ **User Authentication** - Sign up, login, logout
✅ **Protected Routes** - Dashboard requires login
✅ **Responsive Design** - Works on mobile, tablet, desktop
✅ **Beautiful UI** - Modern gradients and animations
✅ **3D Effects** - Floating animations and visual effects
✅ **Multiple Pages** - Services, Team, Blog, Contact
✅ **Contact Form** - Send messages
✅ **User Dashboard** - Profile and activity tracking

---

## 🛠️ Troubleshooting

### ❌ Port 3000 already in use?
- App automatically uses next port (3001, 3002, etc.)
- Check the terminal output for the actual port

### ❌ npm command not found?
```powershell
& "C:\Program Files\nodejs\npm.cmd" run dev
```

### ❌ Page not loading?
- Clear browser cache (Ctrl + Shift + Delete)
- Wait for compilation to complete
- Check console for errors (F12)

### ❌ Logout not working?
- Check if localStorage is enabled
- Try incognito/private mode

---

## 📱 Page Routes

| Page | URL | Auth Required |
|------|-----|---------------|
| Home | `/` | ❌ No |
| Login | `/login` | ❌ No |
| Signup | `/signup` | ❌ No |
| Services | `/services` | ❌ No |
| Team | `/team` | ❌ No |
| Blog | `/blog` | ❌ No |
| Contact | `/contact` | ❌ No |
| Dashboard | `/dashboard` | ✅ Yes |

---

## 🚀 Building for Production

```powershell
# Build the project
& "C:\Program Files\nodejs\npm.cmd" run build

# Start production server
& "C:\Program Files\nodejs\npm.cmd" run start
```

---

## 📞 Support

For issues or questions, contact:
- 📧 hello@mweshdevelopers.com
- 🌐 www.mweshdevelopers.com (coming soon)

---

**Happy Coding! 🎉**
