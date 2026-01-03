// ==========================================
// أحمد أكرم - تكوين ملف السمة والإعدادات الرئيسية
// Ahmed Akram - Theme & Main Configuration
// ==========================================

// الإعدادات الأساسية للموقع
// Basic Website Configuration
export const config = {
  // نطاق الموقع الأساسي
  // Base URL Domain
  baseURL: "ahmed-akram-automation.com",
  
  // معلومات صاحب المحفظة
  // Portfolio Owner Information
  owner: {
    name: "Ahmed Akram",
    title: "Automation & Network Specialist",
    description: "Expert in network infrastructure, automation solutions, and system optimization",
    email: "contact@ahmed-akram-automation.com"
  },

  // ==========================================
  // إعدادات المظهر والألوان
  // Theme & Color Configuration
  // ==========================================
  theme: {
    // نمط المظهر الرئيسي - مظهر داكن
    // Main Theme Mode - Dark Theme
    mode: "dark",
    
    // الألوان الأساسية للمظهر
    // Primary Theme Colors
    colors: {
      // اللون الرمادي المحايد - لخلفيات والنصوص الثانوية
      // Neutral Slate - for backgrounds and secondary text
      neutral: {
        primary: "#0f172a",    // خلفية داكنة جداً | Very dark background
        secondary: "#1e293b",  // خلفية داكنة | Dark background
        tertiary: "#64748b",   // نص رمادي | Gray text
        light: "#cbd5e1",      // نص فاتح | Light text
        lighter: "#f1f5f9"     // نص فاتح جداً | Very light text
      },
      
      // اللون الأزرق للعناصر الأساسية والأزرار
      // Blue Brand - for primary elements and buttons
      brand: {
        primary: "#0ea5e9",    // أزرق مشرق | Bright blue
        dark: "#0369a1",       // أزرق داكن | Dark blue
        light: "#bfdbfe"       // أزرق فاتح | Light blue
      },
      
      // اللون السماوي للعناصر البارزة والتأكيد
      // Cyan Accent - for highlights and emphasis
      accent: {
        primary: "#06b6d4",    // سماوي مشرق | Bright cyan
        dark: "#0891b2",       // سماوي داكن | Dark cyan
        light: "#cffafe"       // سماوي فاتح | Light cyan
      }
    },

    // ==========================================
    // إعدادات الخطوط والنصوص
    // Typography Configuration
    // ==========================================
    typography: {
      // عائلات الخطوط المستخدمة
      // Font Families
      fonts: {
        // الخط الأساسي للنصوص
        // Main body font
        body: "'Segoe UI', 'Helvetica Neue', sans-serif",
        
        // الخط للعناوين
        // Heading font
        heading: "'Inter', 'Poppins', sans-serif"
      },
      
      // أحجام الخطوط
      // Font Sizes
      sizes: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem"
      }
    }
  },

  // ==========================================
  // إعدادات الملف الشخصي والتجربة
  // Profile & Experience Configuration
  // ==========================================
  profile: {
    // الخبرة المهنية بالسنوات
    // Years of Professional Experience
    yearsExperience: 8,
    
    // المهارات الرئيسية
    // Main Skills
    skills: [
      "Network Infrastructure",
      "Automation & Scripting",
      "System Administration",
      "Cloud Solutions",
      "Cybersecurity",
      "DevOps"
    ],
    
    // اللغات المدعومة
    // Supported Languages
    languages: ["en", "ar"]
  },

  // ==========================================
  // إعدادات الميزات والوظائف
  // Features & Functionality Configuration
  // ==========================================
  features: {
    // تفعيل نمط الليل/النهار
    // Enable Dark/Light Mode Toggle
    darkModeToggle: true,
    
    // تفعيل الرسوم المتحركة
    // Enable Animations
    animations: true,
    
    // تفعيل الاستجابية الكاملة
    // Enable Full Responsiveness
    responsive: true,
    
    // تفعيل نموذج الاتصال
    // Enable Contact Form
    contactForm: true,
    
    // تفعيل المدونة
    // Enable Blog Section
    blog: false
  },

  // ==========================================
  // إعدادات الوسائط والشبكات الاجتماعية
  // Social Media & External Links
  // ==========================================
  socialLinks: {
    linkedin: "https://linkedin.com/in/ahmed-akram",
    github: "https://github.com/ahmed-akram",
    twitter: "https://twitter.com/ahmed_akram",
    email: "contact@ahmed-akram-automation.com"
  },

  // ==========================================
  // إعدادات الأداء والتحسينات
  // Performance & Optimization Settings
  // ==========================================
  performance: {
    // تفعيل ضغط الصور
    // Enable Image Compression
    imageOptimization: true,
    
    // تفعيل التخزين المؤقت
    // Enable Caching
    caching: true,
    
    // تفعيل التحميل البطيء
    // Enable Lazy Loading
    lazyLoading: true
  }
};

export default config;
