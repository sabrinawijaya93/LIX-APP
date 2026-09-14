import { MitraData, BankOption, MitraId } from '../types';

export const LIX_LOGO = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCldHZgPzqODh0te_U0SrGYZ3k5H3xe160m6UR29nMt2E2ERXUZYhne4OnIe8ZpNrySy40jPS7XbNaZ6cwsnOFnSOKTGkLCAsYwcwEhcZzRoXXtmCv4szuF5I6J23YCnuujcHih968QXCIIjo4r7J8jp9OEYKz15AfLzpmaeH2ZhuAhLmdeOeWu6UnWwnF7ZOkDW5SDycT61Cv03HUslEhU5w5bR_Tq4BRxnucPqqt4aiUzNl-QcSowFlL5W7tGf4Mu';
export const LIX_LOGO_HELMET = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjqSKx6bcXRMaIfgEhdE5DLpCbN24vVHtAPHYOvjfPIp6SWAbYz79ZPsfvXNH99Op9QWR9vaec2OWS7ppVcpZRvXyFMlE_GfhHUALtQENitiiOYkzsXB2HJqS82jUXly29wv3ldxmWhdW2ZM0GsRdxQO4FbodITrckemLR8QGaBNfR0PeHEM7tUjZ050mpvrzrTb1XErcSciYeV_aD-NQjoO0CTz5coJKBPb4ELDBuKaFFZXIGy7vCyYON5tOuo598';
export const MAP_PREVIEW_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDG8uoxWn9bgOwOY1E_2rnWeA0Me9lSyOlJCYQCFtKtv7RmBxYFjLu4RDTeZZ_-PinAchMhqNUV_d00swzRP4g-fCVx18bEWzVnwLrAinoaDQqKLCcgs0Y9isyG2hRwG5k1F4DwA5CWgn4FnNwVBChsq-F5rkJA6FyLQ-d2L-VsXTk1M3fSJFXbfLkcu5fSVh9Gsjff59yN-4Jdi-YfF54v3VjuKggQhBNjgu_EcfPxbEuiqJSLG64';

export const BANK_OPTIONS: BankOption[] = [
  {
    id: 'bca',
    name: 'Bank Central Asia (BCA)',
    subtitle: 'VA Otomatis 24 Jam • Bebas Antre',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS1Q2zE0Ej43EnOS95A5Ik5AQMjGN5Dj-NeRfHN9pMetmamnSWRibp1aqkFgdigrFMBH1_IjTSB39kbCn1_Dx23yCGBtsybGG2H09vixxnwsmHjug1yDVjGGZ0zOkJa-fPbL6uV5I0DOaiEX3pHk8bLSW5hmGIlteBy3jN0OEOUB6jhHSMata7pF3RcHf0RdqtWlLiqWwhmpOmtiTFA0fIPjy2W6HQ5ztheXDocVPqM-32gFwGFm2OTtIrnMgBen3v',
    isPopular: true
  },
  {
    id: 'bni',
    name: 'Bank Negara Indonesia (BNI)',
    subtitle: 'BNI Mobile Banking & ATM',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDngb9WpHW5KLkCly2yIBCLGbPlhqeEnYN-yIgOqbzjV2jyBvOqalaZWdMj02xa0EdSUa5EaL52S-fVW_jySZNgot5yOJ2Aurw2gaZcgns_rEjgf0nLJQkY3Nuf_2-C4qhjPHyEaKZFMeO-ubx_lxKqQW0WrWyxHdxwFEKWejMokBCUsI6nXp2kEfn39GyYKDNHzpNZpbXeRrtkallGC0FMiDbhPy3W499FU02-c9Lv_xaepxmfSUPewgBJZm4NjdRE'
  },
  {
    id: 'jago',
    name: 'Bank Jago',
    subtitle: 'Transfer Cepat & Bebas Biaya Admin',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDo3t2dfJuEQzU0l-2NoJbPyZBseM5CpQRgQ5yJ39RS4ThiMkCC6f1wurMrQ4eUxQLeOxowV0CnKFBECwVM2qUGMGjsKiF477xcZs_R-G7q7cOraimVYh5NDH54O4jKrO-IsSiE7u_5rKa1S_wi9v8fGtlCskfZIPGRLBnCHEABWe4O8LGDYyYtKq84ZPNo6FxHORajgzL1zpcApMQEaLearB5e3mLOG__8OHI7IO0OgvpZ4fCKCojISuyaK8t009bv'
  },
  {
    id: 'bri',
    name: 'Bank Rakyat Indonesia (BRI)',
    subtitle: 'BRImo & BRIVA Virtual Account',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDt65S4P5-98y4bywcAXsaJtsqEJmCelj0jZuNx5MLYbpZ5UNAJMICcIX5ti3WUp3Mz7vCbmCGdaSW6E0nkdlHgtmoFwK1R9MQ8cIfCrqi2iJVcYbIKFXOYrChP6M4pB6laTHHmMYuQu3vxrQwCUdEOQQcd3Lz_nHKIhgBTNs7hO3sfGUZNH4WU0gQ6ZWT2e6tVA4rbcfhZc9LdPtcnnd11TFE1DdTAN6rbaxYcycRRR0TAy5P-yNa7IPM7rf769NHB'
  },
  {
    id: 'mandiri',
    name: 'Bank Mandiri',
    subtitle: "Mandiri Livin' & Virtual Account",
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKDpxtWgHmEmN0rm8hzykvBSqeSjwPJszXZnijaYLDGOXLswg3B810EWzjVYlwAmckcdfK7OerfzEqzwV3Tcd0MHIrKZctli5a0_yvQtNewdh53JjCND_W9VMV3zGLpZazvvULJX5fZt-CYEPYQcmWPQfwws9YY8IKF7T5yYo0ozowPQaPXbnd1ZzXhF2M_h5ic69sbD69005TP1csgi2yWLZ10cXw3vNYz_Be97M_8uR6wL-NHVGDl2bThr3ltYRa'
  }
];

export const MITRA_DATA_MAP: Record<MitraId, MitraData> = {
  // 1. IR. DWI PRABOWO (ARSITEK)
  dwi: {
    id: 'dwi',
    name: 'Ir. Dwi Prabowo, IAI',
    shortRole: 'Arsitek',
    fullRole: 'Arsitek Utama & Perencana Bangunan (Mitra Binaan BLK)',
    roleCategory: 'Arsitektur',
    binaanText: 'Mitra Binaan BLK',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvKwc9Bf-hnI4faD7fAfakZgqBpNJWveMXPG8dIJHQDyWDFjz_-30ULDZQNc3eH23OUvFwaTUTXVDerBJfm5vI2Pe3PmSS9m9owBpuBe0dSZgGFEGheVve1-BMK5fjniQV8GXEq5zBGQkydAEsw_zhQlStxiZvJ4XiX-aqH9HgWGE3-7yNtY-lxvydQP_LEBvwU4O60gGvyr5pocuGVA3eJT3nQMBs76gB4CfwgMRfYt0i9c4G4tU',
    badgeTopText: '✓ Mitra Tersertifikasi Resmi BLK & BNSP',
    rating: 4.98,
    reviewCount: 114,
    location: 'Jakarta & Sekitarnya',
    experienceYears: 12,
    completedProjects: 42,
    guaranteeDays: 30,
    guaranteeTitle: 'Jaminan Standar Kualitas & Legalitas LIX',
    guaranteeDesc: 'Seluruh gambar kerja memenuhi standar IMB/PBG & SNI Bangunan.',
    certifications: [
      {
        institution: 'Balai Latihan Kerja (BLK)',
        badge: 'Kemnaker RI',
        title: 'Ahli Gambar Bangunan & Perencana Konstruksi',
        iconName: 'school'
      },
      {
        institution: 'Badan Nasional Sertifikasi Profesi (BNSP)',
        badge: 'Standar Nasional',
        title: 'Arsitek Madya Indonesia (SKA / PBG Ready)',
        iconName: 'assignment_turned_in'
      },
      {
        institution: 'Surat Izin Bekerja Perencana (SIPA / PBG)',
        badge: 'Teregistrasi IAI',
        title: 'Otoritas sah tanda tangan & stempel dokumen perizinan PBG',
        iconName: 'draw'
      }
    ],
    verifiedStatusText: 'Terverifikasi Aktif oleh Kementerian Ketenagakerjaan & IAI',
    portfolioCategories: [
      { id: 'all', label: 'Semua', count: 42 },
      { id: 'f1', label: 'Rumah Tinggal', count: 28 },
      { id: 'f2', label: 'Ruko & Fasad', count: 8 },
      { id: 'f3', label: 'Interior & 3D', count: 6 }
    ],
    portfolioProjects: [
      {
        id: 'dwi-proj-1',
        title: 'Desain Villa Modern Tropis - Cilandak',
        category: 'f1',
        categoryLabel: 'Rumah Tinggal',
        location: 'Jakarta Selatan · Selesai Januari 2024',
        completionDate: 'Januari 2024',
        costEstimate: 'Rp 850 Jt',
        duration: '45 Hari Kerja',
        precisionLabel: 'Izin PBG / SKA',
        precisionValue: 'Disetujui 100%',
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSBzFpWDWrDMRihQO7ViT_Gbdvw4BqTFuBfO24OnMpD7theV28wnKBk0Qf9XfVvA7DjdcOLsqSPqNNe_hdtbwLHTpXZMdItck4ZDj3H4-cj3tNOygyDb8DfBdp5FbddwfXbZHIupuxA46gRzluGtig2dxitBnOMUdWCOxzAvsVowTIJZ3vVKxHJ6SnBAYpXmqgB_orHjchJAVQ5bzarHaFyot8f7kStNnJTh-8asH1fKWJjxd__6I',
        fallbackImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&auto=format&fit=crop',
        specs: [
          'Gambar Kerja Detail (DED Arsitektur, MEP, Sanitasi Standar BLK)',
          'Render Fasad 3D Photoreal 4K Exterior & Courtyard Cahaya Alami',
          'Perhitungan Struktur Pondasi & Beton Bertulang Tahan Gempa'
        ],
        galleryPreviews: [
          { label: 'Fasad 4K', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSBzFpWDWrDMRihQO7ViT_Gbdvw4BqTFuBfO24OnMpD7theV28wnKBk0Qf9XfVvA7DjdcOLsqSPqNNe_hdtbwLHTpXZMdItck4ZDj3H4-cj3tNOygyDb8DfBdp5FbddwfXbZHIupuxA46gRzluGtig2dxitBnOMUdWCOxzAvsVowTIJZ3vVKxHJ6SnBAYpXmqgB_orHjchJAVQ5bzarHaFyot8f7kStNnJTh-8asH1fKWJjxd__6I' },
          { label: 'Courtyard', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop' },
          { label: 'DED / PBG', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop' }
        ],
        clientQuote: '"Gambar kerja Pak Dwi sangat detail dan disetujui PTSP tanpa revisi berulang. Desain sirkulasi udaranya membuat rumah tetap sejuk tanpa AC berlebih!"',
        clientAuthor: 'Bpk. Hendra S. (Pemilik Rumah)',
        tagBottomRight: 'LT 350m² · LB 280m²',
        statusTag: 'Selesai 100%'
      },
      {
        id: 'dwi-proj-2',
        title: 'Renovasi Fasad Minimalis Ruko 3 Lantai - Kelapa Gading',
        category: 'f2',
        categoryLabel: 'Ruko & Fasad',
        location: 'Jakarta Utara · Selesai November 2023',
        completionDate: 'November 2023',
        costEstimate: 'Rp 320 Jt',
        duration: '25 Hari Kerja',
        precisionLabel: 'Efisiensi Material ACP',
        precisionValue: 'Hemat 18% RAB',
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4HKuqC6slPkfFtBxRwzVpy9YL_Fg0IciENmwrY1KxDFXQdgmdvWjsYdcIYloYnFT1mTZLVY8MwVBLvPqgaHspA-wPtrGP-ybYFY6m5Mx-ktpFHVP-eKVw_FU7g7K2k5IrrBrVCMxJR70S9RfUlK9KfEbezE_5NLyZ6sAbfQ8CbJzqOO8rmK6NoAXUZXkXsPI1Cp4WOXKWcMnpQPlS6Nxo50rSU3xFD3jTDTU18py9810gCEKm0wY',
        fallbackImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop',
        specs: [
          'Re-layout Ruang Usaha Efisien & Aksesibilitas Publik Ramah Kursi Roda',
          'Pengajuan Berkas IMB / PBG Perubahan Fungsional Resmi DKI Jakarta',
          'Supervisi Pemilihan Material ACP, Louver Kayu & Curtain Wall Hemat Energi'
        ],
        galleryPreviews: [
          { label: 'Fasad Penuh 3 Lt', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4HKuqC6slPkfFtBxRwzVpy9YL_Fg0IciENmwrY1KxDFXQdgmdvWjsYdcIYloYnFT1mTZLVY8MwVBLvPqgaHspA-wPtrGP-ybYFY6m5Mx-ktpFHVP-eKVw_FU7g7K2k5IrrBrVCMxJR70S9RfUlK9KfEbezE_5NLyZ6sAbfQ8CbJzqOO8rmK6NoAXUZXkXsPI1Cp4WOXKWcMnpQPlS6Nxo50rSU3xFD3jTDTU18py9810gCEKm0wY' },
          { label: 'Perspektif Sudut', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop' },
          { label: 'Detail Kisi & ACP', image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=800&auto=format&fit=crop' }
        ],
        tagBottomRight: 'Ruko 3 Lantai · LB 240m²',
        statusTag: 'Selesai 100%'
      },
      {
        id: 'dwi-proj-3',
        title: 'Rumah Skandinavia Tipe 90 & Interior Mezzanine - Bintaro',
        category: 'f3',
        categoryLabel: 'Interior & 3D',
        location: 'Tangerang Selatan · Selesai September 2023',
        completionDate: 'September 2023',
        costEstimate: 'Rp 490 Jt',
        duration: '30 Hari Kerja',
        precisionLabel: 'Akurasi Deviasi RAB',
        precisionValue: '< 3.5% (Sangat Presisi)',
        mainImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=350&fit=crop',
        specs: [
          'Denah Sirkulasi Udara Alami & Pencahayaan Skylight Ruang Keluarga',
          'Estimasi Bill of Quantity (BOQ) Akurat dengan Material Ramah Lingkungan',
          'Desain Mezzanine Multifungsi & Tata Cahaya Warm Minimalis 3000K'
        ],
        tagBottomRight: 'Tipe 90 · 2 Lantai',
        statusTag: 'Selesai 100%'
      },
      {
        id: 'dwi-proj-4',
        title: 'Desain Rumah Tingkat Japandi Kontemporer - BSD City',
        category: 'f1',
        categoryLabel: 'Rumah Tinggal',
        location: 'BSD Tangerang · Selesai Februari 2024',
        completionDate: 'Februari 2024',
        costEstimate: 'Rp 720 Jt',
        duration: '38 Hari Kerja',
        precisionLabel: 'Penghematan Material',
        precisionValue: 'Hemat Rp 42 Juta',
        mainImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=350&fit=crop',
        specs: [
          'Gambar Kerja DED Arsitektur, Sanitasi, dan Elektrikal Terpadu',
          'Simulasi Pencahayaan Natural & Fasad Kisi-kisi Kayu Komposit Tahan Cuaca',
          'Penyusunan RAB Rinci dengan Efisiensi Pemotongan Keramik & Besi'
        ],
        tagBottomRight: 'LT 200m² · LB 210m²',
        statusTag: 'Baru Selesai'
      }
    ],
    reviews: [
      {
        id: 'rev-dwi-1',
        authorName: 'Hendra Sasmita',
        authorInitials: 'HS',
        projectTitle: 'Proyek Desain Villa Modern Cilandak · 12 Jan 2024',
        date: '12 Jan 2024',
        stars: 5,
        escrowTag: 'Lunas via Escrow Garansi LIX (Jaminan 30 Hari)',
        comment: '"Sangat puas dengan Pak Dwi! Pemahaman regulasi PBG DKI cepat sekali beres, dan desain fasad tropisnya sesuai budget RAB. Sertifikasi BLK & IAI beliau benar-benar membuktikan profesionalisme kelas satu. Gambar kerja sangat presisi dan dipuji oleh mandor pelaksana."',
        photos: [
          { label: 'Hasil Fasad', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSBzFpWDWrDMRihQO7ViT_Gbdvw4BqTFuBfO24OnMpD7theV28wnKBk0Qf9XfVvA7DjdcOLsqSPqNNe_hdtbwLHTpXZMdItck4ZDj3H4-cj3tNOygyDb8DfBdp5FbddwfXbZHIupuxA46gRzluGtig2dxitBnOMUdWCOxzAvsVowTIJZ3vVKxHJ6SnBAYpXmqgB_orHjchJAVQ5bzarHaFyot8f7kStNnJTh-8asH1fKWJjxd__6I' },
          { label: 'Surat PBG', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=350&fit=crop' }
        ],
        hasPhoto: true,
        mitraReply: {
          author: 'Tanggapan Resmi Ir. Dwi Prabowo:',
          date: '13 Jan 2024',
          text: '"Terima kasih banyak atas kepercayaannya Bpk. Hendra. Senang sekali bisa membantu mewujudkan hunian tropis yang ramah lingkungan dan legalitas IMB/PBG beres tuntas. Sukses selalu untuk keluarga!"'
        }
      },
      {
        id: 'rev-dwi-2',
        authorName: 'Maya Anggraini',
        authorInitials: 'MA',
        projectTitle: 'Renovasi Ruko Kelapa Gading · 28 Nov 2023',
        date: '28 Nov 2023',
        stars: 5,
        escrowTag: 'Lunas via Escrow Garansi LIX (Jaminan 30 Hari)',
        comment: '"Komunikasi enak, revisi 3D dilayani sabar dan responsif. Berkas izin alih fungsi ruko disetujui tanpa kendala. Garansi 30 hari dari platform LIX juga bikin makin tenang berproyek. Hasil fasad ACP membuat ruko terlihat jauh lebih modern dan ramai pengunjung."',
        photos: [
          { label: 'Fasad Ruko', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4HKuqC6slPkfFtBxRwzVpy9YL_Fg0IciENmwrY1KxDFXQdgmdvWjsYdcIYloYnFT1mTZLVY8MwVBLvPqgaHspA-wPtrGP-ybYFY6m5Mx-ktpFHVP-eKVw_FU7g7K2k5IrrBrVCMxJR70S9RfUlK9KfEbezE_5NLyZ6sAbfQ8CbJzqOO8rmK6NoAXUZXkXsPI1Cp4WOXKWcMnpQPlS6Nxo50rSU3xFD3jTDTU18py9810gCEKm0wY' }
        ],
        hasPhoto: true,
        mitraReply: {
          author: 'Tanggapan Resmi Ir. Dwi Prabowo:',
          date: '29 Nov 2023',
          text: '"Sama-sama Ibu Maya. Desain komersial yang menarik memang kunci omzet usaha. Semoga ruko usahanya semakin maju dan berkah!"'
        }
      },
      {
        id: 'rev-dwi-3',
        authorName: 'Dimas Pratama',
        authorInitials: 'DP',
        projectTitle: 'Rumah Skandinavia Bintaro · 15 Okt 2023',
        date: '15 Okt 2023',
        stars: 5,
        escrowTag: 'Lunas via Escrow Garansi LIX (Jaminan 30 Hari)',
        comment: '"Penyusunan RAB dari Pak Dwi sangat akurat, deviasi belanja material di lapangan tidak sampai 3%. Rekomendasi material SNI membuat budget pembangunan rumah pertama kami tidak membengkak. Sangat kami rekomendasikan untuk keluarga muda!"',
        hasPhoto: false
      }
    ],
    ratingBreakdown: {
      fiveStar: 94,
      fourStar: 6,
      threeStar: 0,
      twoStar: 0,
      oneStar: 0,
      stat1Label: 'Ketepatan Waktu',
      stat1Value: '99% On-Time',
      stat2Label: 'Komunikasi & Revisi',
      stat2Value: '100% Responsif',
      stat3Label: 'Kualitas PBG / SNI',
      stat3Value: '100% Lolos Izin'
    },
    priceOriginal: 2500000,
    priceDiscounted: 1875000,
    priceUnit: 'Paket Lengkap',
    discountBadge: 'Diskon 25%',
    priceSubtext: 'Paket Lengkap IMB + 3D Render',
    ctaButtonText: 'Pesan Jasa Arsitek Sekarang',
    bookingHeaderLabel: 'ARSITEK PILIHAN ANDA',
    availabilityText: 'Tersedia Konsultasi & DED',
    bookingSchedule: 'Besok, 09:30 – 12:00 WIB (Online & Studio)',
    orderNumber: 'LX-ARC-8821',
    servicePackageName: 'Paket Jasa Gambar & Konsep Arsitektur DED',
    servicePackagePrice: 1850000,
    serviceFee: 25000,
    defaultAddress: {
      title: 'Proyek Hunian (Ibu Ratna)',
      desc: 'Jl. Kencana Asri No. 18, Kebayoran Baru, Jakarta Selatan (Luas Lahan: 150 m²)'
    },
    defaultNote: 'Rencana perancangan arsitektur hunian 2 lantai gaya Modern Tropis. Kebutuhan: denah DED 2D, fasad 3D render fotorealistis, dan gambar siap pengajuan legalitas PBG/IMB.',
    defaultNoteExtra: 'Catatan khusus: Denah batas kavling & GSJ eksisting siap ditinjau bersama arsitek.',
    serviceProtectionTitle: 'LIX Proteksi Arsitektur & Garansi 100%',
    serviceProtectionSubtitle: 'Arsitek Bersertifikasi IAI & Berlisensi Legalitas IMB/PBG'
  },

  // 2. HENDRA WIJAYA, S.T. (KONSULTAN STRUKTUR)
  hendra: {
    id: 'hendra',
    name: 'Hendra Wijaya, S.T.',
    shortRole: 'Konsultan',
    fullRole: 'Konsultan Struktur Utama & Audit SNI (Mitra Binaan BLK)',
    roleCategory: 'Konsultan',
    binaanText: 'Mitra Binaan BLK',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_PGHSd0TyB5aX3y_02EO5r6dTmLx_-Cm_tl7l_RXdbNb52DBrZuCLCrK_uE40ZCMAeD3sakUH5sB5Jr3EZPHAyi4nvtQRVq_xCVU13xye0i1iWIpzkzw02bGK4sGRkz8ucQcDxYFLh2Pe-zUFLd6usbg_YtFx4AM1R23VbGz2zZqeuxAyl0ar7QjmaUJq9sfgmZVPQvL5peTtuhc1X0LMESq-fUe4dhLcNuPogpWeJw6cwXDPTkWCDDINK_-ihtqywaOs9VrqLpdy',
    badgeTopText: '✓ Mitra Tersertifikasi Resmi BLK & BNSP',
    rating: 4.96,
    reviewCount: 98,
    location: 'Jakarta & Tangerang',
    experienceYears: 10,
    completedProjects: 56,
    guaranteeDays: 30,
    guaranteeTitle: 'Jaminan Standar Kualitas & Legalitas LIX',
    guaranteeDesc: 'Seluruh perhitungan struktur mengacu pada SNI 1726 (Gempa) & SNI 2847 (Beton Bertulang) dengan garansi tanda tangan SKA/STRA resmi.',
    certifications: [
      {
        institution: 'Balai Latihan Kerja (BLK)',
        badge: 'Resmi Kemnaker',
        title: 'Ahli Perhitungan Struktur Beton Bertulang & Baja',
        iconName: 'school'
      },
      {
        institution: 'Badan Nasional Sertifikasi Profesi (BNSP)',
        badge: 'Standar Nasional',
        title: 'Ahli Teknik Bangunan Gedung (Level 7 Madya)',
        iconName: 'assignment_turned_in'
      },
      {
        institution: 'Surat Tanda Registrasi Insinyur (STRA / PII)',
        badge: 'Teregistrasi PII',
        title: 'Otoritas tanda tangan perhitungan & kajian teknis kelayakan struktur izin PBG/SLF',
        iconName: 'draw'
      }
    ],
    verifiedStatusText: 'Terverifikasi Aktif oleh Kementerian Ketenagakerjaan & LPJK',
    portfolioCategories: [
      { id: 'all', label: 'Semua', count: 56 },
      { id: 'f1', label: 'Audit Struktur', count: 24 },
      { id: 'f2', label: 'Perhitungan Gempa', count: 18 },
      { id: 'f3', label: 'Gudang & Gedung', count: 14 }
    ],
    portfolioProjects: [
      {
        id: 'hendra-proj-1',
        title: 'Audit Keretakan Balok & Penguatan Kolom Gedung 4 Lantai',
        category: 'f1',
        categoryLabel: 'Gedung Komersial',
        location: 'Kelapa Gading, Jakarta Utara · Selesai Januari 2024',
        completionDate: 'Januari 2024',
        costEstimate: 'Rp 45 Jt',
        duration: '14 Hari Kerja',
        precisionLabel: 'Izin PBG / SLF',
        precisionValue: 'Disetujui 100%',
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm85TCCL41caakOZJ9is3PYxWu68em30K53w_SFkuHQAMw0CIi_WbnRlO4uahE5EbKaNV2GhexsQ3xSamfLfIOYtGaQLPtIjDsTRSCzdYrXYVFB6shjAvix7XmOcFSE2fpsah3M70y5fGHHF7v2Us0d8v06-Jdbdj_b9q9G4Bd6NGwmO3xmPGGe1B0zRTCrFryIr1UMF7q4WC1jUc1a3_IScN4vi113VPFclzXZNBtRQMR1NazWzU',
        specs: [
          'Pengujian NDT Uji Palu Beton (Rebound Hammer) & Ultrasonic Pulse Velocity',
          'Pemodelan Analisis Beban Gempa 3D Software ETABS & SAP2000',
          'Rekomendasi Penguatan Kolom dengan Injeksi Epoxy & Carbon Fiber (CFRP)'
        ],
        galleryPreviews: [
          { label: 'NDT Hammer Test', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAn_2z5t6KBzl__-fzmkUC4KRV9I6f14KdHwKWZ2yfLI1sOO5zxJ1aXaig4cOmwjh0OYkT8nTNHmeMGAE1SnjIeh-LmmhxhlFogotZwQ_PrtFz3m8zIGOtWs-Q6SDGR4WR1i4R0qYXwlr0BaGT5PfgCAhVcJSvE14mzw7ZZUbdJEIDQQF_TREKfK7bKW86sH7LMd2HtJU2UaxNhJ_sL72kTO1CV_BaT53QOUslK1B33RC4_vwzMoc0' },
          { label: 'Scan Rebar Uji Tulangan', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEJycAQO292cKUWZnIcR1prKft5yON2eCtrpnljF5732cnytK2fuuObLXnN22rRa_SBg0CuHHhWuaEhhLSPON5DtF7vGB4URYKoZw7AgEOHC_1mWyG6EwClFJBlV5A7P2GwjZILb1TWTWJDERGOlA2_NomjoZAJQZQ0V7az_Vh6WfkgrP2HIahKYgJIbmISoXPWDSphlJlp1akBl9g2gHwdWOJM9kHh2tuef24SgbLEocOVJfUNl4' },
          { label: 'Sertifikat SLF', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkiI5BRvZZ61PEVxQwofvrwiA1dHdtl5NpiQfIC8IK1T1nD4ADbQ9L-tPhCcLdsKg53zI_4jLrNnt7fpKPZc_JElZisWBblVNA8WlwOcKpf6blhgmcxNK_WVdOaj6aX2FikrEWLlW4EBVPLbg0Xr9QrAZKu-luZt4_Idxqh438ZtHWsblnieg1RdWSc25Y1AZxGwsRp4iRqfAI7ZXrJjzNyPYD5jmlgyh9aEW59hDCi6DeNPZa-Ls' }
        ],
        clientQuote: '“Pak Hendra sangat teliti. Keretakan gedung kantor kami teratasi tanpa perlu bongkar total, hemat biaya renovasi puluhan juta dan izin SLF langsung lolos.”',
        clientAuthor: 'Bpk. Hendra Sasmita (Pemilik Gedung)',
        tagBottomRight: 'Gedung 4 Lantai · Kelapa Gading',
        statusTag: 'Selesai 100%'
      },
      {
        id: 'hendra-proj-2',
        title: 'Desain Rangka Baja Tahan Gempa Gudang Logistik Modern',
        category: 'f3',
        categoryLabel: 'Struktur Baja',
        location: 'Kawasan Industri GIIC, Cikarang · Selesai November 2023',
        completionDate: 'November 2023',
        costEstimate: 'Rp 1.8 Miliar',
        duration: '30 Hari Kerja',
        precisionLabel: 'Efisiensi Tonase Baja',
        precisionValue: 'Hemat 14% Tonase',
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkOVA83V6FsYIP5JtKWn8Z6VdqjJcrGnJvwVLKu3jFR9KOTG7D5jsz2DeIwn6hEsLMTgj2ImpUraleyod3naqcEaYJJk7oa9fKkrvxH378PH-Xuf5nMwni00dynAgUCBeBWfsLDSMm6p9vtF_lhBLHX--vg4MeszQpnYfFyZyc9NrbhDCL6SUtLNdnRSKZa40mkk9N6W2Fk7vpmDjDQ41F-oeSFjPCXOEV4xDGxmh7YjKkgqqq1BM',
        specs: [
          'Kalkulasi Beban Gempa SNI 1726:2019 & Desain Portal Baja WF',
          'Optimasi Profil Baja & Sambungan Baut High Tensile',
          'Penerbitan Gambar Kerja DED Struktur Siap Sidang TABG/PUPR'
        ],
        tagBottomRight: 'Bentang 36m · Luas 2.400m²',
        statusTag: 'Selesai 100%'
      },
      {
        id: 'hendra-proj-3',
        title: 'Perhitungan Struktur & Pondasi Bored Pile Rumah Mewah 3 Lantai + Basement',
        category: 'f2',
        categoryLabel: 'Hunian Bertingkat',
        location: 'Pondok Indah, Jakarta Selatan · Selesai September 2023',
        completionDate: 'September 2023',
        costEstimate: 'Rp 950 Jt',
        duration: '20 Hari Kerja',
        precisionLabel: 'Akurasi Beban',
        precisionValue: '< 2.8% Deviasi',
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYz6bLRXtUvhGHJbkaxjLUG5Ju1yS_v2GP_fwYHAKYmcG2m-gWwWxNQ-AMk6Jf1S4LZ9il3I8emxjgerMj2oHD6ygp1oY9_ljuRpuXWT3CEj4TP7_L-vbXVzI4XNdLqTyBZYCr6CjbAI08Jtsn7lfHp81JFuo3_90_zCSM2FPXHE-lFvIrgzPcCJAWNrs4XLJUEq2Ds0Z1X5yzVhmc2ONdfnpUdqgCn8TRCA1BfQox-y0t4r2OHmg',
        specs: [
          'Analisis Daya Dukung Tanah dari Data Soil Boring Test SPT',
          'Perencanaan Dinding Penahan Tanah (Retaining Wall Basement) Anti-Rembes',
          'Supervisi Berkala Pembesian dan Uji Slump Beton Ready Mix'
        ],
        tagBottomRight: 'LT 450m² · 3 Lantai + Basement',
        statusTag: 'Selesai 100%'
      }
    ],
    reviews: [
      {
        id: 'rev-hendra-1',
        authorName: 'Hendra Sasmita',
        authorInitials: 'HS',
        projectTitle: 'Proyek Audit Gedung 4 Lantai · 18 Jan 2024',
        date: '18 Jan 2024',
        stars: 5,
        escrowTag: 'Lunas via Rekber Escrow Garansi LIX (30 Hari)',
        comment: '"Pak Hendra sangat teliti, hasil perhitungan cepat dan langsung lolos sidang teknis dinas PUPR untuk persetujuan PBG. Tidak perlu bongkar total, sangat menghemat biaya renovasi. Terima kasih LIX!"',
        hasPhoto: true,
        mitraReply: {
          author: 'Tanggapan Resmi Hendra Wijaya, S.T.:',
          date: '19 Jan 2024',
          text: '"Sama-sama Pak Hendra, senang bisa membantu audit kekuatan lentur baloknya agar gedung tetap kokoh dan aman digunakan operasional."'
        }
      },
      {
        id: 'rev-hendra-2',
        authorName: 'PT Pratama Bangun Nusantara',
        authorInitials: 'PB',
        authorBadge: 'Kontraktor Sipil Jakarta',
        projectTitle: 'Audit & Penguatan Struktur Ruko · 05 Des 2023',
        date: '05 Des 2023',
        stars: 5,
        escrowTag: 'Lunas via Rekber Escrow Garansi LIX (30 Hari)',
        comment: '"Audit struktur ruko kami sangat detail, biaya pengerjaan injeksi beton jadi hemat puluhan juta karena ada perhitungan beban eksisting yang presisi."'
      }
    ],
    ratingBreakdown: {
      fiveStar: 92,
      fourStar: 8,
      threeStar: 0,
      twoStar: 0,
      oneStar: 0,
      stat1Label: 'Ketepatan Waktu',
      stat1Value: '100% On-Time',
      stat2Label: 'Responsif & Konsultatif',
      stat2Value: '100% Responsif',
      stat3Label: 'Kualitas SNI',
      stat3Value: '100% Lolos PUPR/PBG'
    },
    priceOriginal: 1020000,
    priceDiscounted: 765000,
    priceUnit: 'Sesi',
    discountBadge: 'Diskon 25%',
    priceSubtext: 'Termasuk Resume Analisis SNI',
    ctaButtonText: 'Pesan Konsultan Struktur',
    bookingHeaderLabel: 'KONSULTAN STRUKTUR PILIHAN ANDA',
    availabilityText: 'Tersedia Audit Struktur & PBG',
    bookingSchedule: 'Besok, 10:00 – 12:30 WIB (Online & Visit Lapangan)',
    orderNumber: 'LX-STR-9421',
    servicePackageName: 'Paket Jasa Audit Struktur & Analisis Gempa SNI',
    servicePackagePrice: 740000,
    serviceFee: 25000,
    defaultAddress: {
      title: 'Proyek Ruko & Gedung Komersial (Bpk. Hendra Sasmita)',
      desc: 'Jl. Boulevard Barat Raya No. 24, Kelapa Gading, Jakarta Utara (Luas Bangunan: 450 m²)'
    },
    defaultNote: 'Audit teknis keretakan balok beton lantai 2 & pengujian NDT (Rebound Hammer Test). Kebutuhan: Resume analisis kapasitas beban gempa SNI 1726, rekomendasi perkuatan kolom, dan berkas kajian teknis rekomendasi izin SLF.',
    defaultNoteExtra: 'Catatan khusus: Gambar as-built drawing eksisting telah disiapkan untuk review awal.',
    serviceProtectionTitle: 'LIX Proteksi Konsultan Struktur & Garansi 100%',
    serviceProtectionSubtitle: 'Konsultan Bersertifikasi STRA/PII & Terdaftar LPJK KemenPUPR'
  },

  // 3. MANDOR YANTO SUBAGYO (MANDOR PROYEK)
  yanto: {
    id: 'yanto',
    name: 'Mandor Yanto Subagyo',
    shortRole: 'Mandor',
    fullRole: 'Mandor Kepala Pelaksana Sipil & Bangunan (Mitra Binaan BLK)',
    roleCategory: 'Mandor Proyek',
    binaanText: 'Mitra Binaan BLK',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNGpCYtUJsTaEMULSmLEN_n3Uy6-ZAnvHnuMNrsqnHQxED_kUAstFsEASAnW1jkI1smYD5Ho9aGPpKn_J6DSzEFDhZC1NM7-Su601WRl3AmpP471ut32cwDZJ_6rXUs0KAgg4UV0vjY2JgphXA_OFPAojCgRrQnSjntDfH5kgrf5JaQaGdU756Wup0JZuQse2t04Jf7lDuX2RpmVta7gGO1Xqcly5YXimXKXM0yszc5BlvJMG6DhYuuSrExCUdLANvQ9x6GTdM3BNJ',
    badgeTopText: '✓ Mitra Tersertifikasi Resmi BLK & BNSP',
    rating: 4.97,
    reviewCount: 142,
    location: 'Jabodetabek & Banten',
    experienceYears: 15,
    completedProjects: 88,
    guaranteeDays: 60,
    guaranteeTitle: 'Jaminan Mutu Bangunan & Supervisi Disiplin LIX',
    guaranteeDesc: 'Supervisi ketat mandor bersertifikat K3, absensi tukang terverifikasi GPS, kepatuhan gambar kerja teknis arsitek, dan garansi retensi struktur tanpa bocor.',
    certifications: [
      {
        institution: 'Balai Latihan Kerja (BLK)',
        badge: 'Resmi Kemnaker',
        title: 'Ahli Manajemen Tukang & Supervisi Konstruksi Sipil',
        iconName: 'school'
      },
      {
        institution: 'Badan Nasional Sertifikasi Profesi (BNSP)',
        badge: 'Standar Nasional',
        title: 'Pelaksana Lapangan Perumahan Tingkat Mahir',
        iconName: 'verified'
      },
      {
        institution: 'Sertifikat Keselamatan Konstruksi (K3)',
        badge: 'Teregistrasi PUPR',
        title: 'Lisensi Ahli K3 Lapangan & Pengawasan Prosedur Kerja Aman',
        iconName: 'health_and_safety'
      }
    ],
    verifiedStatusText: 'Terverifikasi Aktif oleh Kementerian Ketenagakerjaan & LPJK',
    portfolioCategories: [
      { id: 'all', label: 'Semua', count: 88 },
      { id: 'f1', label: 'Bangun Baru', count: 46 },
      { id: 'f2', label: 'Renovasi Total', count: 42 }
    ],
    portfolioProjects: [
      {
        id: 'yanto-proj-1',
        title: 'Pembangunan Rumah Kost 3 Lantai (18 Kamar)',
        category: 'f1',
        categoryLabel: 'Kost 3 Lantai',
        location: 'Palmerah, Jakarta Barat · Selesai Nov 2023',
        completionDate: 'Nov 2023',
        costEstimate: 'Rp 45 Jt',
        contractorFee: 'Jasa Mandor: Rp 45 Jt',
        projectValue: 'Nilai Proyek: ~Rp 680 Jt',
        duration: '120 Hari Kalender',
        precisionLabel: 'Efisiensi Belanja',
        precisionValue: 'Hemat Rp 35 Juta',
        mainImage: 'https://lh3.googleusercontent.com/aida/AEtjO1Wxe3fmMW-Uf3pHmitGBFhOFP0mEtR8b_nKc2QHwUYXpOT92tQ-BSAlr6xv2yGATHO5krvatmpQ4fzIC1r4dDH7OnNZQqpNDtFYl5T9iliLIptBvBMFledAaZQTDVN-8xhFte0Ar-ez8vhuURGfjsY_pO0YZ6dzRXzJ76kBvH8GSMPPQhoaIcjsCg2d-fyNO0qRWzGGpu5dwbunizcjb_CpJEGWMSafnAKd5kVzGSXXdh35jhg2eAEyLw',
        specs: [
          'Pembesian Kolom & Balok Siku Presisi',
          'Pengecoran Ready Mix Mutu K-250 Bersertifikat',
          'Dinding Bata Ringan Presisi Plester Acian Halus',
          'Manajemen 12 Tukang Profesional Bersertifikasi'
        ],
        clientQuote: '"Pak Yanto memimpin tukang sangat disiplin. Rumah kost kami rampung 2 minggu lebih cepat dari jadwal tanpa ada pembengkakan biaya material sedikitpun!"',
        clientAuthor: 'Bpk. Budi Rahardjo (Pemilik Kost)',
        tagBottomRight: '18 Kamar Selesai - Palmerah',
        statusTag: 'Selesai 100%'
      },
      {
        id: 'yanto-proj-2',
        title: 'Renovasi Total Hunian Tinggal 2 Lantai & Kanopi Mezzanine',
        category: 'f2',
        categoryLabel: 'Renovasi Total',
        location: 'Bintaro Sektor 9, Tangsel · Selesai Jan 2024',
        completionDate: 'Januari 2024',
        costEstimate: 'Rp 28 Jt',
        contractorFee: 'Jasa Mandor: Rp 28 Jt',
        projectValue: 'Nilai Proyek: ~Rp 420 Jt',
        duration: '75 Hari Kerja',
        precisionLabel: 'Tingkat Presisi',
        precisionValue: '99% Sesuai Gambar DED',
        mainImage: 'https://lh3.googleusercontent.com/aida/AEtjO1W1Q-5XI3kgFXzyQbf-e3sgjbsKIamVqTSOZMMd140int2ucwGKRukVS3OUlfcYCAYX0FT6XBqw2eZqM_wLpp3LjdWyNuI45B3Xsi0-r_E_gyXTxtBNBPshAK2Pi6eJvW8EFPjYK_KEh1YAsUk90_CBE-5IX8PHhrDUQeUWjESvckv7XSzd5c9mnjy5xPLPKU8UBsHiesYJYL9GPk4h_EK09Y1RgmWNcVolelOHxeRpOQCbgGXhHT6ZUg',
        specs: [
          'Perombakan Struktur Dinding Tanpa Mengganggu Beban Atap',
          'Instalasi Rangka Atap Baja Ringan & Waterproofing Anti Bocor',
          'Finishing Cat Tembok Eksterior & Plafon Gypsum Drop Ceiling',
          'Pembersihan Harian Area Proyek Tanpa Debu Mengganggu Tetangga'
        ],
        tagBottomRight: 'LT 250m² - LB 320m²',
        statusTag: 'Selesai 100%'
      },
      {
        id: 'yanto-proj-3',
        title: 'Pekerjaan Struktur & Pondasi Cakar Ayam Cluster',
        category: 'f1',
        categoryLabel: 'Bangun Rumah',
        location: 'Sentul, Bogor · Selesai Sep 2023',
        completionDate: 'September 2023',
        costEstimate: 'Rp 18,5 Jt',
        contractorFee: 'Jasa Mandor: Rp 18,5 Jt',
        projectValue: 'Nilai Proyek: ~Rp 285 Jt',
        duration: '45 Hari Kerja',
        precisionLabel: 'Uji Slump Beton',
        precisionValue: 'Lolos Standar SNI',
        mainImage: 'https://lh3.googleusercontent.com/aida/AEtjO1Ugzj4MVH_oEthZEVpdbC55a6aj-uZKuOOSokYwpe5F96eFM6A0PIDhEngPs0Cz5E-1exN5dYiQznMbxPNs83AIjpvOykqCBaTM9ffncNzuHm7nD_jdWIT2XDLGPouYUEz6imxYUEvaq6c3m0pM-kLNcgSVUqm_XvbiFTcSVy3AcCHoKeJk5243HApOPu6S17fU1F1r_WqEAsFpe2q75UO4I6ziHvsN33QU9Gt0HZtT6WhW6pYo-sA_og',
        specs: [
          'Galian & Pemadatan Tanah Menggunakan Stamper Kodok',
          'Pondasi Plat Setempat (Cakar Ayam) Besi Ulir 13 SNI',
          'Sloof Beton Bertulang Anti Ambles Berspesifikasi Tahan Gempa',
          'Kolom Utama 13 Ulir dengan Pengecoran Padat Tanpa Keropos'
        ],
        tagBottomRight: 'Pondasi Cakar Ayam & Struktur',
        statusTag: 'Selesai 100%'
      }
    ],
    reviews: [
      {
        id: 'rev-yanto-1',
        authorName: 'Budi Rahardjo',
        authorInitials: 'BR',
        authorBadge: 'Aktif 2025',
        projectTitle: 'Pembangunan Kost 3 Lantai · Garansi LIX 60 Hari',
        date: '2 hari lalu',
        stars: 5,
        escrowTag: 'Lunas via Escrow Garansi LIX (Jaminan 60 Hari)',
        comment: '"Pak Yanto memimpin tukang sangat disiplin. Setiap pagi ada briefing K3 dan pengecekan material. Rumah kost 18 kamar kami selesai 2 minggu lebih cepat dari kontrak, dinding plesteran lurus siku, instalasi air buangan lancar jaya."',
        hasPhoto: true,
        mitraReply: {
          author: 'Tanggapan Resmi Mandor Yanto:',
          date: '2 hari lalu',
          text: '"Matur nuwun sanget Pak Budi atas kepercayaannya. Menjadi komitmen kami menjaga kebersihan proyek dan hasil konstruksi yang awet jangka panjang."'
        }
      },
      {
        id: 'rev-yanto-2',
        authorName: 'Sarah Wijaya',
        authorInitials: 'SW',
        authorBadge: 'Aktif 2025',
        projectTitle: 'Renovasi Total Rumah Tinggal · Garansi LIX 60 Hari',
        date: '10 Jan 2024',
        stars: 5,
        escrowTag: 'Lunas via Escrow Garansi LIX (Jaminan 60 Hari)',
        comment: '"Sangat puas dengan kejujuran dan ketelitian Pak Yanto. Pembelian semen dan besi dilaporkan transparan dengan nota toko bangunan resmi tanpa mark up. Garansi 60 hari retensi bikin hati tenang."'
      }
    ],
    ratingBreakdown: {
      fiveStar: 96,
      fourStar: 4,
      threeStar: 0,
      twoStar: 0,
      oneStar: 0,
      stat1Label: 'Disiplin Waktu',
      stat1Value: '100% On-Time',
      stat2Label: 'Kerapian Kerja',
      stat2Value: '99% Rapi',
      stat3Label: 'Biaya Siluman',
      stat3Value: '100% Bebas'
    },
    priceOriginal: 293333,
    priceDiscounted: 220000,
    priceUnit: 'Hari',
    discountBadge: 'Diskon 25%',
    priceSubtext: 'Standar PUPR Jabodetabek · Retensi 60 Hari',
    ctaButtonText: 'Pesan Mandor Sekarang',
    bookingHeaderLabel: 'MANDOR PELAKSANA PILIHAN ANDA',
    availabilityText: 'Tersedia Supervisi & Tukang',
    bookingSchedule: 'Besok, 08:00 – 16:30 WIB (Visit & Briefing Lapangan)',
    orderNumber: 'LX-MND-7820',
    servicePackageName: 'Paket Jasa Supervisi Mandor Harian (1 Hari)',
    servicePackagePrice: 195000,
    serviceFee: 25000,
    defaultAddress: {
      title: 'Proyek Renovasi & Bangun Rumah (Bpk. Budi Rahardjo)',
      desc: 'Jl. Bintaro Melati Indah No. 12, Sektor 9, Tangerang Selatan (Luas Bangunan: 240 m²)'
    },
    defaultNote: 'Supervisi harian regu tukang, perapian dinding bata ringan presisi, pengecoran plat lantai, dan inspeksi K3 konstruksi. Kebutuhan: Laporan absensi tukang terverifikasi GPS, checklist material harian, dan koordinasi gambar kerja teknis.',
    defaultNoteExtra: 'Catatan khusus: Material semen instan mortar & pasir telah tiba di lokasi proyek.',
    serviceProtectionTitle: 'LIX Proteksi Mandor Konstruksi & Garansi 100%',
    serviceProtectionSubtitle: 'Mandor Bersertifikasi K3 & LPJK Kemnaker • Absensi GPS'
  },

  // 4. PAK JOKO SANTOSO (TUKANG AHLI FINISHING)
  joko: {
    id: 'joko',
    name: 'Pak Joko Santoso',
    shortRole: 'Tukang Ahli',
    fullRole: 'Tukang Ahli Finishing & Pasang Keramik Presisi (Mitra Binaan BLK)',
    roleCategory: 'Tukang Ahli',
    binaanText: 'Mitra Binaan BLK',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVL_yq5UdB34ojTbzDqsFkCj87RVw8iR34WiP1yiJEY6OjMN1kaQR5H3aQQjE03Butlcq5zCHYIWLvcnpKYkMv6gjmogqtMndn3G63pNalaccEYlCqbd0wqhKAK7QTxL0mzrYa0AqyQn5PM5zGpZoVB6JZTeOj6eCe6VqvIsBSdERf_wpx-NYYv3TGmw1C-3tLG30EbuKeTzUcCsIrSJk11svEa-bK0EBRSgksrdhNRcDwRzocyvIQsWHix02QK0Vjbj-qnOUbTQXd',
    badgeTopText: '✓ Mitra Tersertifikasi Resmi BLK & BNSP',
    rating: 4.95,
    reviewCount: 168,
    location: 'Jabodetabek & Sekitarnya',
    experienceYears: 14,
    completedProjects: 112,
    guaranteeDays: 14,
    guaranteeTitle: 'Jaminan Standar Pasang Presisi & Anti-Kopong LIX',
    guaranteeDesc: 'Pemasangan keramik dan granit dengan waterpass laser 3D, adukan semen instan perekat khusus, nat anti-jamur presisi, dan garansi retensi bebas keramik meledak (popping).',
    certifications: [
      {
        institution: 'Balai Latihan Kerja (BLK)',
        badge: 'Resmi Kemnaker',
        title: 'Tukang Pasang Keramik & Finishing Lantai-Dinding Tingkat Lanjut',
        iconName: 'school'
      },
      {
        institution: 'Badan Nasional Sertifikasi Profesi (BNSP)',
        badge: 'Standar Nasional',
        title: 'Sertifikasi Kompetensi Kejuruan Konstruksi - Pemasang Ubin/Keramik (Tile Setter Level 2)',
        iconName: 'assignment_turned_in'
      },
      {
        institution: 'Sertifikat Keahlian Khusus',
        badge: 'Tersertifikasi Asosiasi',
        title: 'Spesialis Pemasangan Granit Large Format & Batu Alam Basah',
        iconName: 'handyman'
      }
    ],
    verifiedStatusText: 'Terverifikasi Aktif oleh LPJK & Balai Pelatihan Vokasi Kemnaker',
    portfolioCategories: [
      { id: 'all', label: 'Semua', count: 112 },
      { id: 'f1', label: 'Pasang Granit', count: 64 },
      { id: 'f2', label: 'Perbaikan Keramik Kopong', count: 48 }
    ],
    portfolioProjects: [
      {
        id: 'joko-proj-1',
        title: 'Pemasangan Marmer & Granit Large Format Kamar Mandi Mewah',
        category: 'f1',
        categoryLabel: 'Kamar Mandi Mewah',
        location: 'Kebayoran Baru, Jakarta Selatan · Selesai Feb 2024',
        completionDate: 'Februari 2024',
        costEstimate: 'Rp 8.500.000',
        duration: '6 Hari Kerja',
        precisionLabel: 'Presisi Permukaan',
        precisionValue: 'Laser Level 100% Flat',
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAulfVbHEZ738bwJo_crBkeCdOqaNb6xq6xQ_CBHojR_NK-S2OAkGs0jGQ5t_FiohcgjxI2kB39MfAOCVm7tTItDr7mUF3VwzFTh1IkC0Kpo6JvE26z2gcbL119UpH4SKgzDI7tAMrjnHOljw5bKETLKElgmKxsHjRCVhuBRvfI4ap7qC6J85DfgL4NA1_xmrcezlNks_E4mH7GG-Bnj4IdTLnfwTzP9dt2BL5VKkYXXRubz_ofxK0',
        specs: [
          'Nat Epoxy Anti-Bocor & Tahan Jamur Kelembaban Tinggi',
          'Potong Sudut Adu Manis 45° Presisi Tanpa Gompal',
          'Laser Leveling 3D & Leveling Spacer Tile System'
        ],
        clientQuote: '"Hasil potong adu manis rapi sekali tanpa gompal. Garis nat lurus presisi dan kemiringan air ke floor drain sempurna!"',
        clientAuthor: 'Ibu Cindy (Pemilik Rumah)',
        tagBottomRight: 'Granit 120x60 & Marmer',
        statusTag: 'Selesai 100%'
      },
      {
        id: 'joko-proj-2',
        title: 'Pasang Baru Granit Lantai 60×60 Ruang Tamu & Koridor',
        category: 'f1',
        categoryLabel: 'Ruang Tamu & Koridor',
        location: 'Kelapa Gading, Jakarta Utara · Selesai Des 2023',
        completionDate: 'Desember 2023',
        costEstimate: 'Rp 12.000.000',
        duration: '8 Hari Kerja',
        precisionLabel: 'Efisiensi Material',
        precisionValue: 'Zero Waste Keramik (98.5%)',
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBomlonV2XCU-TA-koJjxmT5SGFbMMyQTAJZ1spkghYVAzGxhi85pAH_R-gmoICXVXuXqalSAW2DRzHf5m_0Gvz3xWa4pthyytLj4bbu9-L0gQZDCo5NcGCMx24IwQORTyjq1CtG0P1jn_ZZfJ8AXq_73VDxqTDIQFYDb5BWLxMj2HbPn9kz8eNFJvMY9I9BEHm0oXgylhO1DhAKxQ0Ny7_sf4o6D0aSWB9cbfMJ6R1xQMVhhOiMNw',
        specs: [
          'Aplikasi Semen Mortar Khusus Perekat Granit Homogenous',
          'Uji Ketuk Padat 100% Bebas Suara Kopong',
          'Finishing Skirting / Plint Tepi Rapi & Polishing Bersih'
        ],
        tagBottomRight: 'Granit Tile 60x60 · 90m²',
        statusTag: 'Selesai 100%'
      },
      {
        id: 'joko-proj-3',
        title: 'Pemasangan Keramik Anti-Slip & Batu Alam Teras Kolam Renang',
        category: 'f2',
        categoryLabel: 'Teras Kolam Renang',
        location: 'BSD City, Tangerang Selatan · Selesai Nov 2023',
        completionDate: 'November 2023',
        costEstimate: 'Rp 6.200.000',
        duration: '5 Hari Kerja',
        precisionLabel: 'Standar Mutu',
        precisionValue: 'Nat Tahan Cuaca & Klorin',
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_Er3MYXwSHNL9rh5_5zGwqiXxVVODsWAq-rT4NxLVb7Z5SodZtEw8qQ_pgOzKcIJOWIV0htnWW1LuhpzzVGqi_FWEjv6pQMDRLq1somObXRaOjPAV2_jcqGoInPs-PjDhWnmWN6cN7EYpuXjKPpGlCKPRjbylNlQAppUrzX7y7MvU5fQ5cHkyYv-ZM5u2mIT7KlUdTkhci-xVBcEbTJ48Mexjfty8AoC4fJ9PeIeLXXUi8Dv_s_s',
        specs: [
          'Pemasangan Tile Anti-Slip Outdoor Grade R11 Aman Anak-Anak',
          'Drainase Presisi & Grating Saluran Air Tanpa Genangan',
          'Coating Pelindung Batu Candi & Andesit Anti-Lumut'
        ],
        tagBottomRight: 'Batu Alam & R11 Anti-Slip',
        statusTag: 'Selesai 100%'
      }
    ],
    reviews: [
      {
        id: 'rev-joko-1',
        authorName: 'Kevin Danuarta',
        authorInitials: 'KD',
        projectTitle: 'Pasang Granit 60x60 Ruang Tamu · 18 Feb 2024',
        date: '18 Feb 2024',
        stars: 5,
        escrowTag: 'Lunas via Escrow Garansi LIX (Jaminan Retensi 14 Hari)',
        comment: '"Kerja Pak Joko luar biasa rapi. Setiap keping granit diketok dan dipastikan padat tanpa kopong. Pake waterpass laser jadi nat-nya lurus sempurna. Setelah selesai kerjaan juga ruang tamu disapu dan dipel bersih. Sangat profesional!"',
        photos: [
          { label: 'Hasil Granit', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBomlonV2XCU-TA-koJjxmT5SGFbMMyQTAJZ1spkghYVAzGxhi85pAH_R-gmoICXVXuXqalSAW2DRzHf5m_0Gvz3xWa4pthyytLj4bbu9-L0gQZDCo5NcGCMx24IwQORTyjq1CtG0P1jn_ZZfJ8AXq_73VDxqTDIQFYDb5BWLxMj2HbPn9kz8eNFJvMY9I9BEHm0oXgylhO1DhAKxQ0Ny7_sf4o6D0aSWB9cbfMJ6R1xQMVhhOiMNw' }
        ],
        hasPhoto: true,
        mitraReply: {
          author: 'Tanggapan Resmi Pak Joko Santoso:',
          date: '19 Feb 2024',
          text: '"Matur nuwun atas kepercayaannya Bpk. Kevin. Menjaga kualitas kerapian nat, kepadatan semen, dan kebersihan lantai selalu jadi prioritas saya. Semoga awet dan nyaman ditinggali!"'
        }
      },
      {
        id: 'rev-joko-2',
        authorName: 'Linda Kusuma',
        authorInitials: 'LK',
        projectTitle: 'Renovasi Kamar Mandi Marmer · 24 Jan 2024',
        date: '24 Jan 2024',
        stars: 5,
        escrowTag: 'Lunas via Escrow Garansi LIX (Jaminan Retensi 14 Hari)',
        comment: '"Potongan adu manis sudut kamar mandi bener-bener presisi banget, nat epoxy rapi gak ada bocor rembes ke lantai bawah. Pak Joko sangat teliti dan komunikatif tentang takaran semen perekatnya."',
        photos: [
          { label: 'Kamar Mandi', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAulfVbHEZ738bwJo_crBkeCdOqaNb6xq6xQ_CBHojR_NK-S2OAkGs0jGQ5t_FiohcgjxI2kB39MfAOCVm7tTItDr7mUF3VwzFTh1IkC0Kpo6JvE26z2gcbL119UpH4SKgzDI7tAMrjnHOljw5bKETLKElgmKxsHjRCVhuBRvfI4ap7qC6J85DfgL4NA1_xmrcezlNks_E4mH7GG-Bnj4IdTLnfwTzP9dt2BL5VKkYXXRubz_ofxK0' }
        ],
        hasPhoto: true,
        mitraReply: {
          author: 'Tanggapan Resmi Pak Joko Santoso:',
          date: '25 Jan 2024',
          text: '"Terima kasih banyak Ibu Linda. Pemasangan granit large format memang butuh presisi laser dan perekat khusus agar bebas popping selamanya. Sukses selalu!"'
        }
      }
    ],
    ratingBreakdown: {
      fiveStar: 94,
      fourStar: 6,
      threeStar: 0,
      twoStar: 0,
      oneStar: 0,
      stat1Label: 'Kerapian & Level',
      stat1Value: '100% Nat Rata',
      stat2Label: 'Kepadatan Mortar',
      stat2Value: '100% Anti-Kopong',
      stat3Label: 'Area Kerja',
      stat3Value: '100% Bersih Rapi'
    },
    priceOriginal: 233333,
    priceDiscounted: 175000,
    priceUnit: 'Hari',
    discountBadge: 'Diskon 25%',
    priceSubtext: 'Tersedia Borongan m² · Garansi 14 Hari',
    ctaButtonText: 'Pesan Tukang Sekarang',
    bookingHeaderLabel: 'TUKANG AHLI PILIHAN ANDA',
    availabilityText: 'Tersedia Pasang & Finishing Presisi',
    bookingSchedule: 'Besok, 08:30 – 17:00 WIB (Kunjungan & Pengerjaan Presisi)',
    orderNumber: 'LX-TKG-5102',
    servicePackageName: 'Paket Jasa Tukang Finishing Harian (1 Hari)',
    servicePackagePrice: 150000,
    serviceFee: 25000,
    defaultAddress: {
      title: 'Proyek Renovasi Pasang Keramik (Bpk. Kevin Danuarta)',
      desc: 'Jl. Boulevard Bukit Gading Raya No. 8, Kelapa Gading, Jakarta Utara (Luas Lantai: 45 m²)'
    },
    defaultNote: 'Pemasangan dan perapian granit tile 60×60 ruang tamu & koridor dengan leveling laser 3D. Kebutuhan: Uji ketuk padat 100% bebas kopong, nat epoxy rapat anti-jamur, dan pembersihan residu semen setelah pengerjaan.',
    defaultNoteExtra: 'Catatan khusus: Material granit dan perekat mortar instan telah tersedia di lokasi.',
    serviceProtectionTitle: 'LIX Proteksi Tukang Ahli & Garansi 100%',
    serviceProtectionSubtitle: 'Tukang Bersertifikasi BLK & BNSP • Garansi Anti-Kopong 14 Hari'
  }
};
