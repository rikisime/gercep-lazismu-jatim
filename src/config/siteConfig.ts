/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Konfigurasi Utama Shine Our School (SOS) - GERCEP PWM Jawa Timur
 * Semua teks, kontak, dan tautan dapat diedit dengan mudah melalui berkas ini.
 */

export interface PillarData {
  id: 'aum' | 'siswa' | 'gtk';
  title: string;
  focus: string;
  color: string;
  badgeBg: string;
  badgeText: string;
  glowColor: string;
  description: string;
  quote: string;
  points: string[];
}

export const SITE_CONFIG = {
  // Identitas Program, Logo & Organisasi
  brand: {
    // 💡 Tautan URL Gambar Logo Lazismu Jawa Timur (Bisa URL online, Google Drive direct link, atau path lokal)
    // Cukup tempel link gambar Anda di dalam tanda kutip berikut:
    logoUrl: '', // Contoh: 'https://example.com/logo-lazismu-jatim.png'
    shortName: 'SOS • GERCEP',
    fullProgramName: 'Shine Our School (SOS): Kilaukan Sekolah Kita',
    movementName: 'Gerakan Cahaya Pendidikan (GERCEP)',
    organization: 'Pimpinan Wilayah Muhammadiyah & Lazismu Jawa Timur',
    tagline: 'Kilaukan Sekolah Kita',
    subtagline: 'Gerak cepat, tepat, dan berdampak untuk sekolah, murid, dan guru kita.',
  },

  // Warna Brand Utama (Muhammadiyah Green & Lazismu Orange)
  colors: {
    muhammadiyahGreen: '#00A82A',
    muhammadiyahGreenDark: '#007A1E',
    lazismuOrange: '#F26522',
    lazismuOrangeDark: '#D44E0E',
    warmGold: '#F5B700',
  },

  // Kontak & WhatsApp Integrasi Resmi Lazismu Jawa Timur
  contact: {
    whatsappNumber: '6285136834242',
    whatsappDisplay: '0851-3683-4242',
    pedoman: '0851-3683-4242',
    ambulan: '0821-4315-9825',
    email: 'Lazismujatim@gmail.com',
    addressSidoarjo: 'Jl. Jawa No 5 Buduran, Sidoarjo',
    addressSurabaya: 'Jl. Kerto Menanggal IV No. 1 Surabaya',
    socials: [
      { name: 'Facebook', handle: 'Lazismu Jatim', url: 'https://facebook.com' },
      { name: 'Instagram', handle: '@lazismujatim', url: 'https://instagram.com/lazismujatim' },
      { name: 'YouTube', handle: 'Lazismu Jatim Channel', url: 'https://youtube.com' },
      { name: 'LinkedIn', handle: 'Lazismu Jawa Timur', url: 'https://linkedin.com' },
      { name: 'TikTok', handle: '@lazismujatim', url: 'https://tiktok.com' },
    ],
  },

  // Rekening Donasi Resmi Placeholder
  donationAccounts: [
    {
      bankName: 'Bank Syariah Indonesia (BSI)',
      accountNumber: '777 999 1912',
      accountHolder: 'Lazismu PWM Jatim - Program SOS GERCEP',
      code: '451',
    },
    {
      bankName: 'Bank Muamalat',
      accountNumber: '101 098 7654',
      accountHolder: 'Lazismu PWM Jawa Timur - Pendidikan',
      code: '147',
    },
  ],

  // Menu Navigasi
  navigation: [
    { label: 'Tentang', href: '#tentang' },
    { label: 'Makna GERCEP', href: '#makna-gercep' },
    { label: 'Tiga Pilar', href: '#tiga-pilar' },
    { label: 'Tujuan', href: '#tujuan' },
  ],

  // Hero Section
  hero: {
    badge: 'Pimpinan Wilayah Muhammadiyah Jawa Timur',
    title: 'Kilaukan Sekolah Kita',
    subtitle:
      'Gerakan Cahaya Pendidikan (GERCEP) Muhammadiyah Jawa Timur: gerak cepat, tepat, dan berdampak untuk sekolah, murid, dan guru kita.',
    ctaPrimary: 'Mulai Berbagi Cahaya',
    ctaSecondary: 'Pelajari Gerakan Ini',
  },

  // Section Kesenjangan
  disparity: {
    title: 'Cahaya Belum Sampai ke Semua Sekolah',
    narrative:
      'Pendidikan adalah amal usaha tertua Muhammadiyah, sekolahnya tersebar hingga pelosok Jawa Timur, tetapi pertumbuhan belum merata.',
    cards: [
      {
        id: 'fasilitas',
        title: 'Fasilitas Sekolah yang Belum Layak',
        description:
          'Masih ada ruang kelas dan sarana belajar yang memerlukan perbaikan mendesak agar proses belajar mengajar dapat berjalan aman, sehat, dan bermartabat.',
        iconName: 'Building2',
      },
      {
        id: 'murid',
        title: 'Murid yang Terancam Putus Sekolah',
        description:
          'Keterbatasan ekonomi keluarga menempatkan anak-anak berpotensi pada risiko kehilangan masa depan pendidikan mereka di sekolah Muhammadiyah.',
        iconName: 'GraduationCap',
      },
      {
        id: 'gtk',
        title: 'Guru & Tenaga Kependidikan Butuh Dukungan',
        description:
          'Pendidik dan staf di garis depan memerlukan penguatan kompetensi, fasilitas penunjang, dan apresiasi yang layak untuk terus berdedikasi.',
        iconName: 'HeartHandshake',
      },
    ],
  },

  // Section Apa itu GERCEP
  aboutGercep: {
    kicker: 'Mengenal Gerakan',
    title: 'Apa Itu GERCEP?',
    description:
      'GERCEP adalah gerakan filantropi Persyarikatan yang memberi dukungan nyata bagi AUM pendidikan, murid, serta guru dan tenaga kependidikan, dengan menghimpun kepedulian warga Persyarikatan dan masyarakat luas.',
    flipCard: {
      front: {
        tag: 'Filosofi Gerakan',
        title: 'Gerakan Cahaya Pendidikan',
        description:
          'Ikhtiar menyalakan cahaya ilmu di setiap sekolah Muhammadiyah hingga ke pelosok daerah, menerangi jalan generasi masa depan.',
        hint: 'Klik untuk melihat makna lainnya ↻',
      },
      back: {
        tag: 'Aksi Nyata',
        title: 'Gerak Cepat',
        description:
          'Kepedulian yang diwujudkan, bukan sekadar wacana. Menghadirkan solusi konkret tepat saat sekolah, guru, dan murid membutuhkan uluran tangan.',
        hint: 'Klik untuk membalik kartu ↺',
      },
    },
  },

  // Section Tiga Prinsip: Cepat • Tepat • Berdampak
  principles: [
    {
      id: 'cepat',
      title: 'Cepat',
      subtitle: 'Merespons Tanpa Menunda',
      description: 'Merespons kebutuhan tanpa menunda.',
      iconName: 'Zap',
      accentColor: '#F5B700',
    },
    {
      id: 'tepat',
      title: 'Tepat',
      subtitle: 'Sasaran Sesuai Kebutuhan',
      description: 'Bantuan sampai kepada yang benar-benar membutuhkan.',
      iconName: 'Target',
      accentColor: '#4CAF7A',
    },
    {
      id: 'berdampak',
      title: 'Berdampak',
      subtitle: 'Perubahan Nyata Dirasakan',
      description: 'Setiap dukungan menghasilkan perubahan yang dirasakan.',
      iconName: 'Sparkles',
      accentColor: '#4FB3E8',
    },
  ],

  // Section Tiga Pilar (Interaktif)
  pillars: [
    {
      id: 'aum',
      title: 'Cahaya AUM',
      focus: 'Fokus pada Lembaga Pendidikan',
      color: '#F26522',
      badgeBg: 'bg-orange-500/10 border-orange-500/30',
      badgeText: 'text-[#F26522]',
      glowColor: 'rgba(242, 101, 34, 0.45)',
      description:
        'Fokus pada lembaga pendidikan. Dukungan untuk transformasi, peningkatan kelayakan lingkungan, dan perbaikan fasilitas.',
      quote:
        'Gedung yang layak, ruang belajar yang nyaman, dan sarana yang memadai menjadi fondasi proses pendidikan.',
      points: [
        'Renovasi ruang kelas dan atap sekolah yang membutuhkan perbaikan.',
        'Penyediaan meja, kursi, dan sarana sanitasi yang bersih dan sehat.',
        'Penguatan laboratorium dan media pembelajaran digital di daerah.',
      ],
    },
    {
      id: 'siswa',
      title: 'Cahaya Siswa',
      focus: 'Fokus pada Murid',
      color: '#00A82A',
      badgeBg: 'bg-emerald-500/10 border-emerald-500/30',
      badgeText: 'text-[#00A82A]',
      glowColor: 'rgba(0, 168, 42, 0.45)',
      description:
        'Fokus pada murid. Akses lebih luas untuk melanjutkan pendidikan, mengembangkan potensi, dan memperoleh apresiasi atas prestasi.',
      quote:
        'Tidak boleh ada murid Muhammadiyah yang berhenti sekolah hanya karena keterbatasan ekonomi.',
      points: [
        'Beasiswa keberlanjutan sekolah bagi anak dhuafa dan yatim.',
        'Perlengkapan sekolah, seragam, buku teks, dan alat tulis belajar.',
        'Apresiasi bakat, kejuaraan akademik, sains, seni, dan olahraga.',
      ],
    },
    {
      id: 'gtk',
      title: 'Cahaya GTK',
      focus: 'Fokus pada Pendidik & Tenaga Kependidikan',
      color: '#0284C7',
      badgeBg: 'bg-sky-500/10 border-sky-500/30',
      badgeText: 'text-sky-600',
      glowColor: 'rgba(2, 132, 199, 0.45)',
      description:
        'Fokus pada pendidik. Peningkatan kualifikasi, kompetensi, dan profesionalitas guru dan tenaga kependidikan, serta apresiasi atas prestasi.',
      quote:
        'Guru yang berdaya dan dihargai menjadi kunci lahirnya pendidikan yang bermutu.',
      points: [
        'Pelatihan pedagogik modern, literasi numerasi, dan media pembelajaran digital.',
        'Dukungan kualifikasi akademik dan sertifikasi profesi guru.',
        'Tunjangan apresiasi dan penghargaan bagi guru berprestasi dan berdedikasi tinggi.',
      ],
    },
  ] as PillarData[],

  // Section Tujuan Gerakan (Timeline)
  timeline: {
    title: 'Tujuan Gerakan',
    subtitle: 'Langkah strategis menjangkau seluruh penjuru Jawa Timur',
    steps: [
      {
        number: '01',
        title: 'Kepedulian',
        subtitle: 'Peka Terhadap Sekitar',
        description: 'Warga peka terhadap kondisi sekolah sekitar.',
        iconName: 'Eye',
        imageUrl:
          'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=900&auto=format&fit=crop',
        accentColor: '#F26522',
      },
      {
        number: '02',
        title: 'Solidaritas',
        subtitle: 'Saling Menopang & Menguatkan',
        description: 'Sekolah yang mapan menopang yang masih berjuang.',
        iconName: 'Users2',
        imageUrl:
          'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=900&auto=format&fit=crop',
        accentColor: '#00A82A',
      },
      {
        number: '03',
        title: 'Pemerataan',
        subtitle: 'Kualitas Adil & Menyeluruh',
        description: 'Kualitas pendidikan baik dinikmati sekolah di kota maupun daerah.',
        iconName: 'Award',
        imageUrl:
          'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=900&auto=format&fit=crop',
        accentColor: '#0284C7',
      },
    ],
    regions: [
      { name: 'Surabaya', x: 62, y: 46, status: 'Mapan & Menopang' },
      { name: 'Sidoarjo', x: 64, y: 52, status: 'Aktif Berkolaborasi' },
      { name: 'Malang Raya', x: 57, y: 68, status: 'Jejaring Sentra' },
      { name: 'Jember', x: 74, y: 73, status: 'Pemerataan Wilayah Timur' },
      { name: 'Banyuwangi', x: 88, y: 76, status: 'Ujung Timur Bercahaya' },
      { name: 'Madiun', x: 30, y: 53, status: 'Penyangga Wilayah Barat' },
      { name: 'Bojonegoro', x: 39, y: 35, status: 'Sentra Pendampingan' },
      { name: 'Tuban', x: 44, y: 28, status: 'Pantura Menguat' },
      { name: 'Lamongan', x: 53, y: 38, status: 'Basis Berkemajuan' },
      { name: 'Gresik', x: 58, y: 41, status: 'Kolaborasi Pesisir' },
      { name: 'Kediri', x: 45, y: 62, status: 'Pemerataan Tengah' },
      { name: 'Madura (Bangkalan - Sumenep)', x: 75, y: 34, status: 'Akselerasi Cahaya' },
    ],
  },

  // Section Kutipan Visi
  visionQuote: {
    text: 'Pendidikan Muhammadiyah yang bersih, berkemajuan, dan merata.',
    source: 'Amanah Gerakan Cahaya Pendidikan • PWM Jawa Timur',
  },

  // Section Simulasi Dampak
  simulation: {
    title: 'Simulasi Dampak Kebaikan',
    subtitle:
      'Pilih pilar dan tentukan nominal dukungan untuk melihat perkiraan dampak nyata yang dihasilkan.',
    disclaimer:
      'Catatan: Angka dan rincian ini merupakan simulasi ilustratif dan dapat disesuaikan oleh panitia pengelola berdasarkan kebutuhan mendesak di lapangan.',
  },

  // Section Ajakan Bergabung (3 Peran & Modal)
  roles: [
    {
      id: 'donatur',
      title: 'Saya Donatur',
      roleKey: 'Donatur / Sahabat Cahaya',
      description:
        'Berbagi sebagian rezeki untuk menyalakan harapan di sekolah, murid, atau guru yang membutuhkan.',
      iconName: 'Heart',
      buttonText: 'Salurkan Bantuan',
      accentColor: '#F5B700',
      whatsappSubject: 'Halo Tim SOS GERCEP PWM Jatim, saya ingin berkontribusi sebagai Donatur.',
    },
    {
      id: 'sekolah',
      title: 'Sekolah Saya Membutuhkan',
      roleKey: 'Pengelola / Perwakilan Sekolah',
      description:
        'Ajukan permohonan pendampingan fasilitas, kebutuhan beasiswa murid, atau pengembangan guru sekolah Anda.',
      iconName: 'School',
      buttonText: 'Ajukan Kebutuhan',
      accentColor: '#4CAF7A',
      whatsappSubject: 'Halo Tim SOS GERCEP PWM Jatim, sekolah kami membutuhkan dukungan program.',
    },
    {
      id: 'relawan',
      title: 'Saya Ingin Jadi Relawan',
      roleKey: 'Relawan / Mitra Penggerak',
      description:
        'Bergabung menjadi bagian dari tim peninjau, pendamping teknis, pelatih guru, atau relawan lapangan.',
      iconName: 'Users',
      buttonText: 'Daftar Relawan',
      accentColor: '#4FB3E8',
      whatsappSubject: 'Halo Tim SOS GERCEP PWM Jatim, saya ingin mendaftar sebagai relawan gerakan.',
    },
  ],

  // Footer
  footer: {
    organization: 'Pimpinan Wilayah Muhammadiyah Jawa Timur',
    tagline: 'Gerakan Cahaya Pendidikan (GERCEP) Persyarikatan Muhammadiyah',
    copyright: '© 2026 Majelis Pendidikan Dasar Menengah dan Pendidikan Nonformal PWM Jawa Timur & Lembaga Filantropi Persyarikatan.',
  },
};
