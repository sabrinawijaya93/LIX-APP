import React, { useState } from 'react';
import { MitraId } from '../types';
import { MITRA_DATA_MAP, COVER_LIX_LOGO, DWI_PRABOWO_IMG, JOKO_SANTOSO_IMG, VILLA_FASAD_4K_IMG } from '../data/mitraData';

interface ProjectTrackingScreenProps {
  initialOrderId?: string;
  onBack?: () => void;
  onNavigateToHistory: () => void;
  onOpenChatWithMitra: (mitraId: MitraId) => void;
}

export const ProjectTrackingScreen: React.FC<ProjectTrackingScreenProps> = ({
  initialOrderId = 'LX-TKG-5102',
  onBack,
  onNavigateToHistory,
  onOpenChatWithMitra
}) => {
  const [activeProjectId, setActiveProjectId] = useState<string>(initialOrderId);

  // States for interactive actions
  const [showReleaseModal, setShowReleaseModal] = useState<boolean>(false);
  const [jokoFundReleased, setJokoFundReleased] = useState<boolean>(false);

  const [mandorReportVerified, setMandorReportVerified] = useState<boolean>(false);
  const [mandorVerifying, setMandorVerifying] = useState<boolean>(false);

  const [dwiMilestoneApproved, setDwiMilestoneApproved] = useState<boolean>(false);
  const [dwiApproving, setDwiApproving] = useState<boolean>(false);
  const [showRevisionModal, setShowRevisionModal] = useState<boolean>(false);
  const [revisionNotes, setRevisionNotes] = useState<string>('');

  // Toast State
  const [toastMessage, setToastMessage] = useState<{ title: string; desc: string } | null>(null);

  // Lightbox Modal for live documentation photos
  const [lightboxPhoto, setLightboxPhoto] = useState<{
    url: string;
    title: string;
    caption: string;
  } | null>(null);

  const triggerToast = (title: string, desc: string) => {
    setToastMessage({ title, desc });
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const projects = [
    {
      id: 'LX-TKG-5102',
      mitraId: 'joko' as MitraId,
      code: 'LX-TKG-5102',
      mitraName: 'Pak Joko Santoso',
      role: 'Tukang Granit & Nat',
      title: 'Pasang Granit Lantai 60x60',
      badge: 'Escrow Lunas'
    },
    {
      id: 'LX-MND-7820',
      mitraId: 'yanto' as MitraId,
      code: 'LX-MND-7820',
      mitraName: 'Pak Yanto Subagyo',
      role: 'Mandor Pelaksana',
      title: 'Supervisi Renovasi 2 Lantai',
      badge: 'Supervisi Aktif'
    },
    {
      id: 'LX-ARC-8821',
      mitraId: 'dwi' as MitraId,
      code: 'LX-ARC-8821',
      mitraName: 'Ir. Dwi Prabowo, IAI',
      role: 'Arsitek Utama',
      title: 'Desain Modern Tropis',
      badge: 'Tahap 2 (70%)'
    },
    {
      id: 'LX-STR-9421',
      mitraId: 'hendra' as MitraId,
      code: 'LX-STR-9421',
      mitraName: 'Hendra Wijaya, S.T.',
      role: 'Konsultan Struktur',
      title: 'Audit Struktur & Sondir',
      badge: 'Audit 85%'
    }
  ];

  return (
    <div className="w-full max-w-[430px] mx-auto min-h-screen bg-[#f8f9fa] text-[#191c1d] flex flex-col pb-28 relative font-sans">
      {/* Fixed App Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl px-4 py-3 border-b border-gray-100 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-2">
          {onBack && (
            <button
              onClick={onBack}
              aria-label="Kembali"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-800 hover:bg-gray-100 transition-colors"
            >
              <span className="material-symbols-outlined text-[22px]">arrow_back</span>
            </button>
          )}
          <div className="flex items-center gap-2">
            <img
              referrerPolicy="no-referrer"
              src={COVER_LIX_LOGO}
              alt="LIX Logo"
              className="h-8 w-auto max-w-[34px] object-contain drop-shadow-2xs"
            />
            <span className="font-bold text-base tracking-tight text-gray-950">LIX</span>
          </div>
        </div>

        <h1 className="text-sm font-bold text-gray-900 text-center flex-1 px-2 truncate">
          Monitoring Proyek
        </h1>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => triggerToast('Bantuan Pengawasan LIX', 'Tim QC & Auditor Konstruksi LIX siap membantu Anda via Hotline 24/7.')}
            aria-label="Bantuan LIX"
            className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100"
          >
            <span className="material-symbols-outlined text-[20px]">help_outline</span>
          </button>
          <div className="w-7 h-7 rounded-full bg-[#a53d00] flex items-center justify-center text-white text-xs font-bold">
            <span className="material-symbols-outlined text-[16px]">person</span>
          </div>
        </div>
      </header>

      {/* Project Switcher Bar */}
      <div className="bg-white border-b border-gray-100 px-3 py-2 flex items-center gap-1.5 overflow-x-auto scrollbar-none sticky top-[53px] z-30 shadow-xs">
        {projects.map(p => {
          const isSelected = activeProjectId === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setActiveProjectId(p.id)}
              className={`px-2.5 py-1 rounded-full text-xs whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer flex-shrink-0 ${
                isSelected
                  ? 'bg-[#ff6200] text-white font-bold shadow-xs'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/80"></span>
              <span>{p.code}</span>
              <span className="text-[10px] opacity-85">({p.mitraName.split(' ')[1] || p.role})</span>
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* 1. VIEW PAK JOKO SANTOSO (LX-TKG-5102) */}
      {/* ========================================================================= */}
      {activeProjectId === 'LX-TKG-5102' && (
        <div className="flex flex-col gap-3.5 pt-3">
          {/* Live Project Header Card */}
          <div className="px-4">
            <div className="bg-white rounded-2xl p-4 shadow-xs border border-gray-100">
              <div className="flex items-center justify-between pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-[11px] font-mono font-bold tracking-wide">
                    LX-TKG-5102
                  </span>
                  <span className="flex items-center gap-1 bg-orange-50 text-[#ff6200] px-2 py-0.5 rounded text-[11px] font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#ff6200] animate-pulse"></span>
                    Sedang Berjalan
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                  <span className="material-symbols-outlined text-[14px]">verified_user</span>
                  <span>Escrow Lunas</span>
                </div>
              </div>

              <h2 className="text-base font-bold text-gray-900 leading-snug">
                Pasang Granit Lantai 60x60 &amp; Nat Epoxy Presisi
              </h2>
              <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px] text-[#a53d00]">meeting_room</span>
                <span>Area Pengerjaan: Kamar Mandi &amp; Ruang Tengah</span>
              </p>

              {/* Escrow Tagihan Highlight */}
              <div className="mt-3 bg-gray-50 p-3 rounded-xl flex items-center justify-between border border-gray-100">
                <div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider block font-bold">
                    Saldo Rekber Tertampung
                  </span>
                  <span className="text-xl text-[#ff6200] font-extrabold leading-none mt-1 block">
                    Rp 175.000
                  </span>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-emerald-800 font-bold text-[11px] bg-white px-2.5 py-1 rounded-lg shadow-2xs border border-gray-100">
                    <span className="material-symbols-outlined text-[15px] text-emerald-600">lock</span>
                    <span>Aman Terlindungi</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mitra Tukang Profile Card */}
          <div className="px-4">
            <div className="bg-white rounded-2xl p-4 shadow-xs border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 shrink-0">
                  <img
                    referrerPolicy="no-referrer"
                    src={JOKO_SANTOSO_IMG}
                    alt="Pak Joko Santoso"
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-100"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop';
                    }}
                  />
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full ring-2 ring-white" title="Aktif di Lokasi"></span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h3 className="text-sm font-bold text-gray-900 truncate">Pak Joko Santoso</h3>
                    <span className="bg-orange-100 text-[#541b00] text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5 shrink-0">
                      <span className="material-symbols-outlined text-[12px]">verified</span>
                      <span>Mitra Ahli</span>
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 truncate mt-0.5">Tukang Spesialis Finishing Keramik &amp; Marmer</p>
                  <div className="flex items-center gap-2 mt-1 text-xs">
                    <span className="flex items-center text-amber-500 font-bold">
                      <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="ml-0.5">4.9</span>
                    </span>
                    <span className="text-gray-400 text-[11px]">(128 Ulasan)</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-emerald-700 font-bold text-[11px] flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[13px]">workspace_premium</span>
                      <span>Grade A</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-gray-100">
                <a
                  href="tel:081234567890"
                  className="flex items-center justify-center gap-1.5 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px] text-gray-600">call</span>
                  <span>Telepon</span>
                </a>
                <button
                  onClick={() => onOpenChatWithMitra('joko')}
                  className="flex items-center justify-center gap-1.5 h-10 rounded-xl bg-orange-100 hover:bg-orange-200 text-[#541b00] text-xs font-bold transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#ff6200]">chat_bubble</span>
                  <span>Kirim Pesan</span>
                </button>
              </div>
            </div>
          </div>

          {/* Presensi & Jam Kerja Lapangan */}
          <div className="px-4">
            <div className="bg-white rounded-2xl p-4 shadow-xs border border-gray-100">
              <div className="flex items-center justify-between pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#ff6200] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">schedule</span>
                  </div>
                  <h4 className="text-sm font-bold text-gray-900">Presensi &amp; Jam Kerja</h4>
                </div>
                <span className="text-[11px] font-bold bg-gray-100 text-gray-700 px-2 py-0.5 rounded">Hari Ke-1</span>
              </div>

              <div className="mt-2 bg-gray-50 rounded-xl p-3 flex flex-col gap-2 border border-gray-100">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ff6200] text-[18px]">my_location</span>
                    <div>
                      <span className="text-xs font-bold text-gray-900 block">Check-in GPS Lapangan</span>
                      <span className="text-[11px] text-gray-500">Jl. Bintaro Melati Indah No. 12</span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="inline-flex items-center gap-1 text-xs text-[#a53d00] font-bold">
                      08:15 WIB
                    </span>
                    <span className="block text-[10px] text-emerald-700 font-bold">On Time ✓</span>
                  </div>
                </div>

                <div className="pt-1">
                  <span className="text-[10px] text-gray-400 font-bold uppercase block">Aktivitas Real-time Terkini:</span>
                  <div className="mt-1 flex items-start gap-2 bg-white p-2.5 rounded-lg border border-gray-200/70 shadow-2xs">
                    <span className="material-symbols-outlined text-[17px] text-[#ff6200] shrink-0 mt-0.5">handyman</span>
                    <span className="text-xs text-gray-800 leading-snug font-medium">
                      Sedang Memasang Granite Leveling Clip &amp; Pengeringan Mortar Perekat
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Checklist Kualitas Kerja LIX (SOP Kontrol Mutu) */}
          <div className="px-4">
            <div className="bg-white rounded-2xl p-4 shadow-xs border border-gray-100">
              <div className="flex items-center justify-between pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#ff6200] text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">fact_check</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Inspeksi Standar LIX</h4>
                    <span className="text-[11px] text-gray-500">SOP Pemasangan Presisi &amp; Anti-Kopong</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#ff6200]">2/4 Selesai</span>
              </div>

              {/* Linear SOP Progress Bar */}
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mt-1">
                <div className="bg-[#ff6200] h-full rounded-full transition-all duration-500 w-1/2"></div>
              </div>

              {/* Checklist Items */}
              <div className="mt-3 flex flex-col gap-2">
                <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[15px]">check</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-gray-900">Persiapan Kerataan Dasar Semen</span>
                      <span className="text-[11px] text-gray-500">Kemiringan waterpass &amp; leveling dasar lantai</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-800 font-bold bg-emerald-100 px-2 py-0.5 rounded shrink-0">
                    Lulus ✓
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[15px]">check</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-gray-900">Pemasangan Klip Presisi Leveling</span>
                      <span className="text-[11px] text-gray-500">Rata nat 1.5mm tanpa tonjolan bibir keramik</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-800 font-bold bg-emerald-100 px-2 py-0.5 rounded shrink-0">
                    Lulus ✓
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-orange-50/60 rounded-xl border border-orange-100 shadow-2xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-[#ff6200] text-white flex items-center justify-center shrink-0 animate-pulse">
                      <span className="material-symbols-outlined text-[14px]">sync</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-[#a53d00]">Aplikasi Nat Epoxy Anti-Bocor</span>
                      <span className="text-[11px] text-gray-600">Campuran resin 2-komponen kedap air</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-[#ff6200] font-bold bg-orange-100 px-2 py-0.5 rounded shrink-0">
                    Diproses
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-gray-50/70 rounded-xl opacity-75 border border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[15px]">hourglass_empty</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-gray-600">Pembersihan &amp; Proteksi Akhir</span>
                      <span className="text-[11px] text-gray-400">Poles residu nat &amp; lapisan karton pelindung</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-gray-500 bg-gray-200 px-2 py-0.5 rounded shrink-0">
                    Menunggu
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Live Foto Lapangan (Dokumentasi Progres Ubin) */}
          <div className="px-4">
            <div className="bg-white rounded-2xl p-4 shadow-xs border border-gray-100">
              <div className="flex items-center justify-between pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#ff6200] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Dokumentasi Progres Ubin</h4>
                    <span className="text-[11px] text-gray-500">Diperbarui pukul 11:20 WIB oleh Pak Joko</span>
                  </div>
                </div>
                <button
                  onClick={() => setLightboxPhoto({
                    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4D-dxeWDGKayPWnaxNxoTqQEXcjC2yyiVnTeKJPsXIadrN0XtWjmuWLf2hCT4dPZJIHxXWJSTw0-vXadNzlZo2bT-WyUGlpYewDk6z0H1TwNofr-82XCwAmWvUYJDT6-wojMagijq-G12srAHLgTxjCCtup4vHg3u-hJQLsBOseAWaY5BQ8rVpMF3tfRpGqhwKNM0M5vEHqrR9B4hRpqxOnn2RmMIwjc2CCNHgeRdEPIMsQWNWIY',
                    title: 'Pemasangan Granit 60x60 & Leveling Spacer Klip',
                    caption: 'LIX QC VERIFIED • GPS Lat -6.284 • 11:20 WIB'
                  })}
                  className="text-[#ff6200] text-xs font-bold flex items-center gap-0.5 hover:underline"
                >
                  <span>Perbesar</span>
                  <span className="material-symbols-outlined text-[15px]">fullscreen</span>
                </button>
              </div>

              {/* Photo View with QC Stamp */}
              <div className="relative w-full h-52 rounded-xl overflow-hidden mt-1 shadow-inner group">
                <img
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4D-dxeWDGKayPWnaxNxoTqQEXcjC2yyiVnTeKJPsXIadrN0XtWjmuWLf2hCT4dPZJIHxXWJSTw0-vXadNzlZo2bT-WyUGlpYewDk6z0H1TwNofr-82XCwAmWvUYJDT6-wojMagijq-G12srAHLgTxjCCtup4vHg3u-hJQLsBOseAWaY5BQ8rVpMF3tfRpGqhwKNM0M5vEHqrR9B4hRpqxOnn2RmMIwjc2CCNHgeRdEPIMsQWNWIY"
                  alt="Progres Granit Pak Joko"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&auto=format&fit=crop';
                  }}
                />
                {/* QC Stamp Watermark Overlay */}
                <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg flex items-center gap-1.5 shadow-md">
                  <span className="material-symbols-outlined text-[#ff6200] text-[16px]">verified</span>
                  <div>
                    <span className="text-[10px] text-gray-900 font-bold block uppercase tracking-wider">LIX QC VERIFIED</span>
                    <span className="text-[9px] text-gray-500 block leading-tight">GPS Lat -6.284 • 11:20 WIB</span>
                  </div>
                </div>

                {/* Status Tag */}
                <div className="absolute bottom-2.5 right-2.5 bg-gray-900/85 backdrop-blur-xs text-white px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1.5 shadow">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Granit 60x60 Terpasang 78%</span>
                </div>
              </div>

              <p className="text-[11px] text-gray-500 mt-2 italic">
                *Klip perata oranye akan dilepas setelah 24 jam pengeringan mortar sebelum nat epoxy diaplikasikan menyeluruh.
              </p>
            </div>
          </div>

          {/* Jaminan Garansi LIX */}
          <div className="px-4">
            <div className="bg-gradient-to-r from-orange-100 via-orange-50 to-amber-50 rounded-2xl p-3.5 flex items-center gap-3 border border-orange-200/70">
              <div className="w-11 h-11 rounded-full bg-[#ff6200] text-white flex items-center justify-center shrink-0 shadow-xs">
                <span className="material-symbols-outlined text-[24px]">shield</span>
              </div>
              <div className="flex-1">
                <h5 className="text-xs font-bold text-[#541b00] leading-tight">
                  Garansi 14 Hari Anti-Kopong
                </h5>
                <p className="text-[11px] text-[#5a4137] mt-0.5 leading-snug">
                  Bebas pecah, amblas, retak rambut, &amp; popping. Klaim perbaikan gratis 100% didukung Rekber LIX.
                </p>
              </div>
            </div>
          </div>

          {/* Action Trigger Buttons */}
          <div className="px-4 pt-1 flex flex-col gap-2.5 mb-6">
            <button
              onClick={() => {
                if (jokoFundReleased) {
                  triggerToast('Dana Telah Dicairkan', 'Dana Rp 175.000 sudah diteruskan ke dompet Pak Joko Santoso.');
                } else {
                  setShowReleaseModal(true);
                }
              }}
              className={`w-full h-12 rounded-xl text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-all ${
                jokoFundReleased
                  ? 'bg-emerald-600 hover:bg-emerald-700'
                  : 'bg-[#ff6200] hover:bg-[#e05600] active:scale-95'
              }`}
            >
              <span className="material-symbols-outlined text-[19px]">task_alt</span>
              <span>
                {jokoFundReleased
                  ? 'Dana Telah Dirilis ke Pak Joko ✓'
                  : 'Konfirmasi Pekerjaan Selesai (Rilis Dana)'}
              </span>
            </button>

            <button
              onClick={onNavigateToHistory}
              className="w-full h-11 bg-white hover:bg-gray-100 text-gray-700 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 border border-gray-200 transition-colors shadow-2xs"
            >
              <span className="material-symbols-outlined text-[17px]">history</span>
              <span>Kembali ke Riwayat Pesanan</span>
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. VIEW PAK YANTO SUBAGYO (LX-MND-7820) */}
      {/* ========================================================================= */}
      {activeProjectId === 'LX-MND-7820' && (
        <div className="flex flex-col gap-3.5 pt-3">
          {/* Live Project Header Card */}
          <div className="px-4">
            <div className="bg-white rounded-2xl p-4 shadow-xs border border-gray-100">
              <div className="flex items-center justify-between pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-[11px] font-mono font-bold tracking-wide">
                    LX-MND-7820
                  </span>
                  <span className="flex items-center gap-1 bg-orange-50 text-[#ff6200] px-2 py-0.5 rounded text-[11px] font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#ff6200] animate-pulse"></span>
                    Supervisi Aktif (08:00 - 17:00)
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                  <span className="material-symbols-outlined text-[14px]">verified_user</span>
                  <span>Escrow Lunas</span>
                </div>
              </div>

              <h2 className="text-base font-bold text-gray-900 leading-snug">
                Supervisi Renovasi &amp; Bangun Rumah 2 Lantai
              </h2>
              <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px] text-[#a53d00]">location_on</span>
                <span>Bpk. Budi Rahardjo • Bintaro Sektor 9</span>
              </p>

              {/* Escrow Tagihan Highlight */}
              <div className="mt-3 bg-gray-50 p-3 rounded-xl flex items-center justify-between border border-gray-100">
                <div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider block font-bold">
                    Saldo Rekber Tertampung
                  </span>
                  <span className="text-xl text-[#ff6200] font-extrabold leading-none mt-1 block">
                    Rp 220.000
                  </span>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-emerald-800 font-bold text-[11px] bg-white px-2.5 py-1 rounded-lg shadow-2xs border border-gray-100">
                    <span className="material-symbols-outlined text-[15px] text-emerald-600">lock</span>
                    <span>Aman Terlindungi</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mitra Mandor Profile Card */}
          <div className="px-4">
            <div className="bg-white rounded-2xl p-4 shadow-xs border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 shrink-0">
                  <img
                    referrerPolicy="no-referrer"
                    src={MITRA_DATA_MAP.yanto.avatar}
                    alt="Pak Yanto Subagyo"
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-100"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=300&h=300&fit=crop';
                    }}
                  />
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full ring-2 ring-white" title="Aktif di Lokasi"></span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h3 className="text-sm font-bold text-gray-900 truncate">Pak Yanto Subagyo</h3>
                    <span className="bg-orange-100 text-[#541b00] text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5 shrink-0">
                      <span className="material-symbols-outlined text-[12px]">verified</span>
                      <span>Mandor Terverifikasi</span>
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 truncate mt-0.5">Mandor Kepala Pelaksana Sipil &amp; Bangunan</p>
                  <div className="flex items-center gap-2 mt-1 text-xs">
                    <span className="flex items-center text-amber-500 font-bold">
                      <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="ml-0.5">4.95</span>
                    </span>
                    <span className="text-gray-400 text-[11px]">(142 Proyek)</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-emerald-700 font-bold text-[11px] flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[13px]">workspace_premium</span>
                      <span>Grade A</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-gray-100">
                <a
                  href="tel:081298765432"
                  className="flex items-center justify-center gap-1.5 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px] text-gray-600">call</span>
                  <span>Telepon</span>
                </a>
                <button
                  onClick={() => onOpenChatWithMitra('yanto')}
                  className="flex items-center justify-center gap-1.5 h-10 rounded-xl bg-orange-100 hover:bg-orange-200 text-[#541b00] text-xs font-bold transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#ff6200]">chat_bubble</span>
                  <span>Kirim Pesan</span>
                </button>
              </div>
            </div>
          </div>

          {/* Live Field Photographic Documentation */}
          <div className="px-4">
            <div className="bg-white rounded-2xl p-4 shadow-xs border border-gray-100 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#ff6200] text-[19px]">camera_outdoor</span>
                  <h3 className="text-sm font-bold text-gray-900">Dokumentasi Lapangan Real-Time</h3>
                </div>
                <span className="bg-orange-100 text-[#541b00] text-[10px] font-bold px-2 py-0.5 rounded">
                  Hari Ini 11:30 WIB
                </span>
              </div>

              {/* Verified Visual */}
              <div className="relative rounded-xl overflow-hidden bg-gray-100 h-50 group">
                <img
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1Vu716Rq-HJ-nVABnHQV_85UQ1QbhFZkl0FgcRbnheOHTXB7xrM3Ggid6atq_CIAfAXvGKdw0XWdIxPwwY9diH_LZLM1PbgenHrUevowlYukcKDv4XdUh5CXqo-sBXry3bxpjdOIFJp0UXcmGJ7NkF2upfhLhQT4AQyykzcFgyRWOSsXrTv4tF489u93wDuhHcNGvXaTVXZujSOQ222CBAG9V5YezU_25B5yQfrM7mRiAG8cW2K4LJOiw"
                  alt="Supervisi Mandor Lapangan"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=1200&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-950/90 via-gray-900/40 to-transparent p-3 flex items-end justify-between">
                  <div className="text-white">
                    <p className="text-xs font-bold flex items-center gap-1 text-white">
                      <span className="material-symbols-outlined text-[15px] text-teal-400">verified_user</span>
                      <span>Diverifikasi Mandor Yanto di Lokasi</span>
                    </p>
                    <p className="text-[11px] text-gray-200 truncate">Pengerjaan struktur canopy &amp; elevasi fasad lantai 2</p>
                  </div>
                  <span className="bg-white/20 backdrop-blur-md text-white px-2 py-0.5 rounded text-[10px] font-bold">
                    GPS Lock ±3m
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1: Live Logbook Tenaga & Material */}
          <div className="px-4">
            <div className="bg-white rounded-2xl p-4 shadow-xs border border-gray-100 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#541b00] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">assignment_turned_in</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Live Logbook Tenaga &amp; Material</h3>
                  <p className="text-[11px] text-gray-500">Tercatat terpadu dalam sistem LIX Site-Ops</p>
                </div>
              </div>

              {/* Presensi Tim Tukang Card */}
              <div className="bg-gray-50 rounded-xl p-3 flex flex-col gap-1.5 border border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-900 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[#ff6200] text-[16px]">groups</span>
                    <span>Presensi Tim Tukang (6 Pekerja)</span>
                  </span>
                  <span className="bg-emerald-100 text-emerald-900 text-[10px] font-bold px-2 py-0.5 rounded">
                    Hadir Lengkap
                  </span>
                </div>
                <p className="text-xs text-gray-600">
                  6 Tukang hadir lengkap tercatat via <span className="font-bold text-gray-900">LIX Biometric GPS</span> pada pukul <span className="font-bold text-[#ff6200]">07:45 WIB</span>.
                </p>
                <div className="grid grid-cols-3 gap-1.5 pt-1">
                  <div className="bg-white rounded-lg p-2 text-center border border-gray-200/70 shadow-2xs">
                    <span className="text-[10px] text-gray-400 block font-bold">Tukang Bata</span>
                    <span className="text-xs font-bold text-gray-900">3 Orang</span>
                  </div>
                  <div className="bg-white rounded-lg p-2 text-center border border-gray-200/70 shadow-2xs">
                    <span className="text-[10px] text-gray-400 block font-bold">Tukang Besi</span>
                    <span className="text-xs font-bold text-gray-900">2 Orang</span>
                  </div>
                  <div className="bg-white rounded-lg p-2 text-center border border-gray-200/70 shadow-2xs">
                    <span className="text-[10px] text-gray-400 block font-bold">Helper/Laden</span>
                    <span className="text-xs font-bold text-gray-900">1 Orang</span>
                  </div>
                </div>
              </div>

              {/* Log Material Harian */}
              <div className="bg-gray-50 rounded-xl p-3 flex flex-col gap-1.5 border border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-900 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[#a53d00] text-[16px]">local_shipping</span>
                    <span>Log Material Masuk Hari Ini</span>
                  </span>
                  <span className="text-emerald-700 text-[10px] font-bold">Terverifikasi Mandor</span>
                </div>
                <div className="flex flex-col gap-1.5 mt-1">
                  <div className="flex items-center justify-between bg-white p-2 px-2.5 rounded-lg border border-gray-200/70 shadow-2xs text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-gray-100 flex items-center justify-center text-gray-600 shrink-0">
                        <span className="material-symbols-outlined text-[14px]">inventory_2</span>
                      </div>
                      <span className="font-medium text-gray-800">Semen Mortar Plester/Acian</span>
                    </div>
                    <span className="font-bold text-gray-900">40 Sak (Sesuai Spek)</span>
                  </div>
                  <div className="flex items-center justify-between bg-white p-2 px-2.5 rounded-lg border border-gray-200/70 shadow-2xs text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-amber-50 flex items-center justify-center text-amber-700 shrink-0">
                        <span className="material-symbols-outlined text-[14px]">grain</span>
                      </div>
                      <span className="font-medium text-gray-800">Pasir Pasang Bangka</span>
                    </div>
                    <span className="font-bold text-gray-900">2 Truk Engkel (Cukup)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Inspeksi Mutu & K3 Mandor */}
          <div className="px-4">
            <div className="bg-white rounded-2xl p-4 shadow-xs border border-gray-100 flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#ff6200] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">Inspeksi Mutu &amp; K3 Mandor</h3>
                    <p className="text-[11px] text-gray-500">Checklist standar teknis keselamatan kerja LIX</p>
                  </div>
                </div>
              </div>

              {/* Checklist 1 */}
              <div className="flex items-start gap-2.5 bg-gray-50 p-3 rounded-xl border border-gray-100">
                <div className="w-6 h-6 rounded-full bg-[#ff6200] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[15px]">check</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-gray-900">Vertikalitas Dinding Bata Ringan</h4>
                    <span className="bg-white text-[#ff6200] text-[10px] font-bold px-2 py-0.5 rounded border border-orange-200">
                      Lolos Uji ✓
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-600 mt-0.5 leading-relaxed">
                    Pengecekan lot &amp; bandul waterpass presisi 0°, tidak ada kemiringan dinding sekat kamar tidur utama.
                  </p>
                </div>
              </div>

              {/* Checklist 2 */}
              <div className="flex items-start gap-2.5 bg-gray-50 p-3 rounded-xl border border-gray-100">
                <div className="w-6 h-6 rounded-full bg-[#ff6200] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[15px]">check</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-gray-900">Bekisting &amp; Penulangan Canopy</h4>
                    <span className="bg-white text-[#ff6200] text-[10px] font-bold px-2 py-0.5 rounded border border-orange-200">
                      Lolos Inspeksi ✓
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-600 mt-0.5 leading-relaxed">
                    Kerapian spesi beton decking 2.5cm terpasang aman dan ikatan kawat bendrat pembesian solid sebelum cor.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Status Proteksi & Garansi */}
          <div className="px-4">
            <div className="bg-teal-900 text-white rounded-2xl p-3.5 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-teal-200">
                  <span className="material-symbols-outlined text-[20px]">shield_with_heart</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Jaminan Retensi 60 Hari</span>
                  <span className="text-[11px] text-teal-200">Dana aman di Rekber hingga hasil tervalidasi</span>
                </div>
              </div>
              <span className="bg-white text-teal-950 px-2.5 py-1 rounded-full text-[10px] font-bold shadow-2xs">
                Terlindungi
              </span>
            </div>
          </div>

          {/* Action CTA Buttons Area */}
          <div className="px-4 flex flex-col gap-2.5 mb-6">
            <button
              onClick={() => {
                if (mandorReportVerified) return;
                setMandorVerifying(true);
                setTimeout(() => {
                  setMandorVerifying(false);
                  setMandorReportVerified(true);
                  triggerToast(
                    'Laporan Diverifikasi ✓',
                    'Catatan mandor hari ini telah disetujui untuk rilis termin escrow berikutnya.'
                  );
                }, 900);
              }}
              disabled={mandorVerifying}
              className={`w-full h-12 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all ${
                mandorReportVerified
                  ? 'bg-teal-700 text-white cursor-default'
                  : 'bg-[#ff6200] hover:bg-[#e05600] active:scale-95 text-white'
              }`}
            >
              {mandorVerifying ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
                  <span>Memverifikasi Laporan...</span>
                </>
              ) : mandorReportVerified ? (
                <>
                  <span className="material-symbols-outlined text-[19px]">check_circle</span>
                  <span>Laporan Terverifikasi Sore Ini ✓</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[19px]">fact_check</span>
                  <span>Verifikasi Laporan Harian Sore Ini</span>
                </>
              )}
            </button>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onOpenChatWithMitra('yanto')}
                className="w-full h-11 rounded-xl bg-white text-[#ff6200] font-bold text-xs flex items-center justify-center gap-1 shadow-2xs border border-gray-200 hover:bg-orange-50 transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Chat Mandor</span>
              </button>
              <button
                onClick={onNavigateToHistory}
                className="w-full h-11 rounded-xl bg-gray-100 text-gray-700 font-bold text-xs flex items-center justify-center gap-1 shadow-2xs hover:bg-gray-200 transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                <span>Riwayat Pesanan</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. VIEW IR. DWI PRABOWO (LX-ARC-8821) */}
      {/* ========================================================================= */}
      {activeProjectId === 'LX-ARC-8821' && (
        <div className="flex flex-col gap-3.5 pt-3">
          {/* Live Project Header Card */}
          <div className="px-4">
            <div className="bg-white rounded-2xl p-4 shadow-xs border border-gray-100">
              <div className="flex items-center justify-between pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-[11px] font-mono font-bold tracking-wide">
                    LX-ARC-8821
                  </span>
                  <span className="flex items-center gap-1 bg-orange-50 text-[#ff6200] px-2 py-0.5 rounded text-[11px] font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#ff6200] animate-pulse"></span>
                    Tahap 2 Sedang Berjalan
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                  <span className="material-symbols-outlined text-[14px]">verified_user</span>
                  <span>Escrow Lunas</span>
                </div>
              </div>

              <h2 className="text-base font-bold text-gray-900 leading-snug">
                Desain Arsitektur Modern Tropis 2 Lantai
              </h2>
              <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px] text-[#a53d00]">location_on</span>
                <span>Bpk. Budi Rahardjo • Bintaro Sektor 9</span>
              </p>

              {/* Progress Metric */}
              <div className="mt-3 bg-gray-50 rounded-xl p-3 border border-gray-100">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-xs font-bold text-gray-800">Pengerjaan DED &amp; Gambar Kerja</span>
                  <span className="text-base font-extrabold text-[#ff6200]">70%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#ff6200] h-full rounded-full transition-all duration-700 w-[70%]"></div>
                </div>
                <div className="flex justify-between items-center mt-2 text-[11px] text-gray-500 font-medium">
                  <span>Target: 3 Hari Lagi</span>
                  <span className="font-bold text-gray-700">Tahap 2 dari 3</span>
                </div>
              </div>

              {/* Escrow Tagihan Highlight */}
              <div className="mt-3 bg-gray-50 p-3 rounded-xl flex items-center justify-between border border-gray-100">
                <div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider block font-bold">
                    Saldo Rekber Tertampung (Termin 2)
                  </span>
                  <span className="text-xl text-[#ff6200] font-extrabold leading-none mt-1 block">
                    Rp 937.500
                  </span>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-emerald-800 font-bold text-[11px] bg-white px-2.5 py-1 rounded-lg shadow-2xs border border-gray-100">
                    <span className="material-symbols-outlined text-[15px] text-emerald-600">lock</span>
                    <span>Aman Terlindungi</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Architect Profile Snapshot */}
          <div className="px-4">
            <div className="bg-white rounded-2xl p-4 shadow-xs border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 shrink-0">
                  <img
                    referrerPolicy="no-referrer"
                    src={DWI_PRABOWO_IMG}
                    alt="Ir. Dwi Prabowo, IAI"
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-100"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop';
                    }}
                  />
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full ring-2 ring-white" title="Online Studio"></span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h3 className="text-sm font-bold text-gray-900 truncate">Ir. Dwi Prabowo, IAI</h3>
                    <span className="bg-orange-100 text-[#541b00] text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5 shrink-0">
                      <span className="material-symbols-outlined text-[12px]">verified</span>
                      <span>Arsitek Utama IAI</span>
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 truncate mt-0.5">Arsitektur Tropis, DED &amp; Masterplan</p>
                  <div className="flex items-center gap-2 mt-1 text-xs">
                    <span className="flex items-center text-amber-500 font-bold">
                      <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="ml-0.5">4.98</span>
                    </span>
                    <span className="text-gray-400 text-[11px]">(89 Proyek)</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-emerald-700 font-bold text-[11px] flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[13px]">workspace_premium</span>
                      <span>Master IAI</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-gray-100">
                <a
                  href="tel:081311223344"
                  className="flex items-center justify-center gap-1.5 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px] text-gray-600">call</span>
                  <span>Telepon</span>
                </a>
                <button
                  onClick={() => onOpenChatWithMitra('dwi')}
                  className="flex items-center justify-center gap-1.5 h-10 rounded-xl bg-orange-100 hover:bg-orange-200 text-[#541b00] text-xs font-bold transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#ff6200]">chat_bubble</span>
                  <span>Kirim Pesan</span>
                </button>
              </div>
            </div>
          </div>

          {/* Preview Latest Work Asset */}
          <div className="px-4">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#ff6200] text-[19px]">visibility</span>
                <h3 className="text-sm font-bold text-gray-900">Pratinjau Hasil Desain Terbaru</h3>
              </div>
              <span className="px-2 py-0.5 rounded bg-orange-100 text-[#541b00] text-[10px] font-bold font-mono">
                v2.4
              </span>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-xs border border-gray-100">
              <div className="relative aspect-video w-full bg-gray-100 group">
                <img
                  referrerPolicy="no-referrer"
                  src={VILLA_FASAD_4K_IMG}
                  alt="Preview Render Desain Arsitektur Modern Tropis"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent"></div>
                <span className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-gray-900 flex items-center gap-1 shadow-xs">
                  <span className="material-symbols-outlined text-[#ff6200] text-[15px]">draw</span>
                  <span>Revisi Render Eksterior v2.4</span>
                </span>
                <button
                  onClick={() => setLightboxPhoto({
                    url: VILLA_FASAD_4K_IMG,
                    title: 'Render 3D Desain Villa Modern Tropis v2.4',
                    caption: 'Diupload Hari Ini 10:15 WIB • Area Teras & Kolam Renang'
                  })}
                  className="absolute bottom-2.5 right-2.5 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-md flex items-center justify-center text-gray-900 hover:bg-white transition-colors shadow-sm"
                  aria-label="Perbesar Pratinjau 3D"
                >
                  <span className="material-symbols-outlined text-[18px]">fullscreen</span>
                </button>
                <div className="absolute bottom-2.5 left-2.5 text-white">
                  <p className="text-[10px] text-gray-300">Diupload Hari Ini • 10:15 WIB</p>
                  <p className="text-xs font-bold drop-shadow-sm">Area Teras &amp; Kolam Renang Modern Tropis</p>
                </div>
              </div>

              <div className="p-3 bg-white flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-[#ff6200] shrink-0">
                    <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-bold text-gray-900 truncate">Draft_DED_Arsitektur_R2.4.pdf</p>
                    <p className="text-[10px] text-gray-500">24.8 MB • Dokumen Lengkap</p>
                  </div>
                </div>
                <button
                  onClick={() => triggerToast('Mendownload Dokumen DED', 'Mengunduh file Draft_DED_Arsitektur_R2.4.pdf (24.8 MB)...')}
                  className="shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">download</span>
                  <span>Draft PDF</span>
                </button>
              </div>
            </div>
          </div>

          {/* Milestone Workflow Timeline */}
          <div className="px-4">
            <div className="flex items-center justify-between mb-1.5">
              <h3 className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#ff6200] text-[19px]">checklist</span>
                <span>Rincian Tahapan Desain</span>
              </h3>
              <span className="text-[11px] text-gray-500 font-bold">3 Milestone</span>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-xs border border-gray-100 flex flex-col gap-4">
              {/* Stage 1 */}
              <div className="flex items-start gap-3 relative">
                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0 shadow-2xs">
                    <span className="material-symbols-outlined text-[15px]">check</span>
                  </div>
                  <div className="w-0.5 h-14 bg-emerald-300 my-1"></div>
                </div>
                <div className="flex-1 pb-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-gray-900">Tahap 1: Konsep Denah &amp; Moodboard 3D</h4>
                    <span className="text-emerald-800 font-bold text-[10px] bg-emerald-100 px-2 py-0.5 rounded">Selesai</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    Zonasi ruang lantai 1 &amp; 2, mood visual material tropis, dan orientasi bukaan matahari disetujui klien.
                  </p>
                  <div className="mt-1.5 inline-flex items-center gap-1 text-[10px] text-gray-400 font-medium">
                    <span className="material-symbols-outlined text-[13px]">event_available</span>
                    <span>Disetujui 24 Mei 2024</span>
                  </div>
                </div>
              </div>

              {/* Stage 2 */}
              <div className="flex items-start gap-3 relative">
                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-[#ff6200] flex items-center justify-center text-white shrink-0 shadow-xs">
                    <span className="material-symbols-outlined text-[15px]">engineering</span>
                  </div>
                  <div className="w-0.5 h-14 bg-gray-200 my-1"></div>
                </div>
                <div className="flex-1 pb-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-gray-900">Tahap 2: DED &amp; Gambar Kerja</h4>
                    <span className="text-[#541b00] font-bold text-[10px] bg-orange-200 px-2 py-0.5 rounded animate-pulse">
                      70% Proses
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    Penggambaran potongan melintang/membujur, denah perletakan kusen, dan rencana pola plafon/lantai.
                  </p>
                  <div className="mt-1.5 flex items-center gap-2 text-[10px]">
                    <span className="inline-flex items-center gap-0.5 text-[#ff6200] font-bold">
                      <span className="material-symbols-outlined text-[13px]">schedule</span>
                      <span>Estimasi: 3 Hari Kerja</span>
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-500 font-medium">16 Lembar DED Siap</span>
                  </div>
                </div>
              </div>

              {/* Stage 3 */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 shrink-0">
                  <span className="material-symbols-outlined text-[15px]">lock</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-medium text-gray-500">Tahap 3: Render 4K &amp; Berkas PBG</h4>
                    <span className="text-gray-400 text-[10px] bg-gray-100 px-2 py-0.5 rounded">Menunggu</span>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    Paket final visualisasi fotorealistis 4K, RAB estimasi tender kontraktor, dan gambar arsitektur prasyarat PBG.
                  </p>
                  <p className="text-[10px] text-gray-400 mt-1">Menunggu penyelesaian &amp; review Tahap 2</p>
                </div>
              </div>
            </div>
          </div>

          {/* Persetujuan Hasil Pengerjaan */}
          <div className="px-4">
            <div className="bg-white rounded-2xl p-4 shadow-xs border border-gray-100 flex flex-col gap-2.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center text-[#ff6200]">
                  <span className="material-symbols-outlined text-[16px]">fact_check</span>
                </div>
                <h3 className="text-xs font-bold text-gray-900">Persetujuan Hasil Pengerjaan</h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Setelah memeriksa file DED dan revisi gambar 3D, Anda dapat menyetujui milestone untuk mencairkan termin ke Ir. Dwi Prabowo.
              </p>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => onOpenChatWithMitra('dwi')}
                  className="flex items-center justify-center gap-1.5 h-11 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#ff6200]">chat</span>
                  <span>Chat Arsitek</span>
                </button>
                <button
                  onClick={() => {
                    if (dwiMilestoneApproved) return;
                    setDwiApproving(true);
                    setTimeout(() => {
                      setDwiApproving(false);
                      setDwiMilestoneApproved(true);
                      triggerToast('Tahap 2 Disetujui!', 'Termin Rp 937.500 telah diverifikasi untuk dicairkan ke arsitek.');
                    }, 1000);
                  }}
                  disabled={dwiApproving}
                  className={`flex items-center justify-center gap-1.5 h-11 rounded-xl text-white text-xs font-bold shadow-xs transition-colors ${
                    dwiMilestoneApproved
                      ? 'bg-emerald-600 cursor-default'
                      : 'bg-[#ff6200] hover:bg-[#e05600] active:scale-95'
                  }`}
                >
                  {dwiApproving ? (
                    <>
                      <span className="material-symbols-outlined text-[18px] animate-spin">sync</span>
                      <span>Memverifikasi...</span>
                    </>
                  ) : dwiMilestoneApproved ? (
                    <>
                      <span className="material-symbols-outlined text-[18px]">check_circle</span>
                      <span>Tahap 2 Disetujui!</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[18px]">task_alt</span>
                      <span>Setujui Tahap 2</span>
                    </>
                  )}
                </button>
              </div>

              <button
                onClick={() => setShowRevisionModal(true)}
                className="w-full py-1.5 text-center text-xs font-bold text-gray-500 hover:text-[#ff6200] transition-colors flex items-center justify-center gap-1"
              >
                <span className="material-symbols-outlined text-[15px]">edit_note</span>
                <span>Minta Catatan Revisi Minor (Maks. 2x)</span>
              </button>
            </div>
          </div>

          {/* Back Navigation */}
          <div className="px-4 pb-6 text-center">
            <button
              onClick={onNavigateToHistory}
              className="inline-flex items-center gap-1.5 text-gray-600 hover:text-gray-900 text-xs font-bold px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              <span>Kembali ke Riwayat Pesanan</span>
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. VIEW HENDRA WIJAYA (LX-STR-9421) */}
      {/* ========================================================================= */}
      {activeProjectId === 'LX-STR-9421' && (
        <div className="flex flex-col gap-3.5 pt-3">
          {/* Live Project Header Card */}
          <div className="px-4">
            <div className="bg-white rounded-2xl p-4 shadow-xs border border-gray-100">
              <div className="flex items-center justify-between pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-[11px] font-mono font-bold tracking-wide">
                    LX-STR-9421
                  </span>
                  <span className="flex items-center gap-1 bg-orange-50 text-[#ff6200] px-2 py-0.5 rounded text-[11px] font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#ff6200] animate-pulse"></span>
                    Audit Lapangan (85%)
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                  <span className="material-symbols-outlined text-[14px]">verified_user</span>
                  <span>Escrow Lunas</span>
                </div>
              </div>

              <h2 className="text-base font-bold text-gray-900 leading-snug">
                Audit Struktur Bangunan &amp; Pengujian Sondir
              </h2>
              <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px] text-[#a53d00]">location_on</span>
                <span>Bpk. Budi Rahardjo • Bintaro Sektor 9</span>
              </p>

              {/* Escrow Tagihan Highlight */}
              <div className="mt-3 bg-gray-50 p-3 rounded-xl flex items-center justify-between border border-gray-100">
                <div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider block font-bold">
                    Saldo Rekber Tertampung
                  </span>
                  <span className="text-xl text-[#ff6200] font-extrabold leading-none mt-1 block">
                    Rp 765.000
                  </span>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-emerald-800 font-bold text-[11px] bg-white px-2.5 py-1 rounded-lg shadow-2xs border border-gray-100">
                    <span className="material-symbols-outlined text-[15px] text-emerald-600">lock</span>
                    <span>Aman Terlindungi</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mitra Konsultan Profile Card */}
          <div className="px-4">
            <div className="bg-white rounded-2xl p-4 shadow-xs border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 shrink-0">
                  <img
                    referrerPolicy="no-referrer"
                    src={MITRA_DATA_MAP.hendra.avatar}
                    alt="Hendra Wijaya, S.T."
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-100"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop';
                    }}
                  />
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full ring-2 ring-white" title="Aktif di Lokasi"></span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h3 className="text-sm font-bold text-gray-900 truncate">Hendra Wijaya, S.T.</h3>
                    <span className="bg-orange-100 text-[#541b00] text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5 shrink-0">
                      <span className="material-symbols-outlined text-[12px]">verified</span>
                      <span>Konsultan LPJK</span>
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 truncate mt-0.5">Konsultan Struktur, Soil Test &amp; Sondir</p>
                  <div className="flex items-center gap-2 mt-1 text-xs">
                    <span className="flex items-center text-amber-500 font-bold">
                      <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="ml-0.5">4.96</span>
                    </span>
                    <span className="text-gray-400 text-[11px]">(96 Proyek)</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-emerald-700 font-bold text-[11px] flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[13px]">workspace_premium</span>
                      <span>Grade A LPJK</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-gray-100">
                <a
                  href="tel:081234567890"
                  className="flex items-center justify-center gap-1.5 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px] text-gray-600">call</span>
                  <span>Telepon</span>
                </a>
                <button
                  onClick={() => onOpenChatWithMitra('hendra')}
                  className="flex items-center justify-center gap-1.5 h-10 rounded-xl bg-orange-100 hover:bg-orange-200 text-[#541b00] text-xs font-bold transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#ff6200]">chat_bubble</span>
                  <span>Kirim Pesan</span>
                </button>
              </div>
            </div>
          </div>

          {/* Real-Time Status & Progress Meter */}
          <div className="px-4">
            <div className="bg-white rounded-2xl p-4 shadow-xs border border-gray-100 flex flex-col gap-2">
              <div className="flex justify-between items-baseline">
                <span className="text-xs font-bold text-gray-900">Progres Audit Lapangan</span>
                <span className="text-base font-extrabold text-[#ff6200]">85%</span>
              </div>
              <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#ff6200] rounded-full transition-all duration-700 w-[85%]"></div>
              </div>

              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-orange-50/70 border border-orange-100 text-xs mt-1">
                <span className="material-symbols-outlined text-[18px] text-[#ff6200] shrink-0 mt-0.5">query_stats</span>
                <div className="text-gray-700 leading-snug">
                  <span className="font-bold block text-[#a53d00]">Uji Lapangan &amp; Sondir Selesai 100%</span>
                  Sedang menyiapkan laporan kalkulasi pembebanan struktur melalui SAP2000.
                </div>
              </div>
            </div>
          </div>

          {/* GPS Verified Field Documentation Photo */}
          <div className="px-4">
            <div className="bg-white rounded-2xl p-4 shadow-xs border border-gray-100 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px] text-[#ff6200]">photo_camera</span>
                  <h3 className="text-xs font-bold text-gray-900">Dokumentasi Terverifikasi GPS</h3>
                </div>
                <span className="text-[10px] font-bold text-gray-500 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#ff6200] animate-pulse"></span>
                  <span>Live Geotag</span>
                </span>
              </div>

              <div className="relative rounded-xl overflow-hidden bg-gray-100 aspect-video group">
                <img
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1Ugzj4MVH_oEthZEVpdbC55a6aj-uZKuOOSokYwpe5F96eFM6A0PIDhEngPs0Cz5E-1exN5dYiQznMbxPNs83AIjpvOykqCBaTM9ffncNzuHm7nD_jdWIT2XDLGPouYUEz6imxYUEvaq6c3m0pM-kLNcgSVUqm_XvbiFTcSVy3AcCHoKeJk5243HApOPu6S17fU1F1r_WqEAsFpe2q75UO4I6ziHvsN33QU9Gt0HZtT6WhW6pYo-sA_og"
                  alt="Audit struktur beton bertulang proyek Bintaro Sektor 9"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-900/20 to-transparent"></div>

                <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold text-gray-900 flex items-center gap-1 shadow-2xs">
                  <span className="material-symbols-outlined text-[13px] text-teal-600">check_circle</span>
                  <span>SNI-2847-2019 Sesuai Standar</span>
                </div>

                <button
                  onClick={() => setLightboxPhoto({
                    url: 'https://lh3.googleusercontent.com/aida/AEtjO1Ugzj4MVH_oEthZEVpdbC55a6aj-uZKuOOSokYwpe5F96eFM6A0PIDhEngPs0Cz5E-1exN5dYiQznMbxPNs83AIjpvOykqCBaTM9ffncNzuHm7nD_jdWIT2XDLGPouYUEz6imxYUEvaq6c3m0pM-kLNcgSVUqm_XvbiFTcSVy3AcCHoKeJk5243HApOPu6S17fU1F1r_WqEAsFpe2q75UO4I6ziHvsN33QU9Gt0HZtT6WhW6pYo-sA_og',
                    title: 'Inspeksi Pembesian Balok Tie Beam A-1',
                    caption: 'Lat -6.2841, Long 106.7123 • 14:28 WIB Terenkripsi LPJK'
                  })}
                  className="absolute top-2.5 right-2.5 w-7 h-7 rounded-lg bg-white/90 backdrop-blur-md flex items-center justify-center text-gray-900"
                  aria-label="Perbesar"
                >
                  <span className="material-symbols-outlined text-[16px]">fullscreen</span>
                </button>

                <div className="absolute bottom-2.5 inset-x-2.5 flex items-end justify-between text-white text-xs">
                  <div className="space-y-0.5">
                    <p className="text-[11px] font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-[#ff6200]">pin_drop</span>
                      <span>Lat -6.2841, Long 106.7123</span>
                    </p>
                    <p className="text-[10px] text-gray-200">Bintaro Sektor 9 • Titik Balok Tie Beam A-1</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] block opacity-80">14:28 WIB</span>
                    <span className="text-[9px] font-bold px-1.5 py-0.5 bg-white/20 rounded">Terenkripsi LPJK</span>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                Pemeriksaan jarak sengkang &amp; ketebalan selimut beton bertulang pondasi cakar ayam telah diverifikasi langsung di lapangan oleh tim teknis.
              </p>
            </div>
          </div>

          {/* Field Audit Stepper Timeline */}
          <div className="px-4">
            <div className="bg-white rounded-2xl p-4 shadow-xs border border-gray-100 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-gray-900">Timeline Monitoring Lapangan</h3>
                <span className="text-[11px] text-[#ff6200] font-bold">3 Tahap Audit</span>
              </div>

              <div className="space-y-3 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-gray-200">
                {/* Stage 1 */}
                <div className="relative flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#ff6200] text-white flex items-center justify-center shrink-0 z-10 shadow-2xs">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                  </div>
                  <div className="flex-1 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs font-bold text-gray-900">Uji Titik Sondir 1–10</span>
                      <span className="text-[10px] text-emerald-700 font-bold">Selesai ✓</span>
                    </div>
                    <p className="text-[11px] text-gray-600 mt-0.5">
                      Kedalaman daya dukung tanah keras tercapai pada <span className="font-bold text-gray-900">4.2 meter</span>.
                    </p>
                    <div className="mt-1.5 inline-flex items-center gap-1 text-[10px] text-[#a53d00] bg-white px-2 py-0.5 rounded border border-gray-200 shadow-2xs">
                      <span className="material-symbols-outlined text-[12px]">table_view</span>
                      <span>Grafik Qc / Tf terunggah</span>
                    </div>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="relative flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#ff6200] text-white flex items-center justify-center shrink-0 z-10 shadow-2xs">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                  </div>
                  <div className="flex-1 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs font-bold text-gray-900">Uji Hammer Test Mutu Beton</span>
                      <span className="text-[10px] text-emerald-700 font-bold">Selesai ✓</span>
                    </div>
                    <p className="text-[11px] text-gray-600 mt-0.5">
                      Spesifikasi K-250 teruji rata-rata <span className="font-bold text-gray-900">26.4 MPa</span> (Memenuhi SNI).
                    </p>
                    <div className="mt-1.5 inline-flex items-center gap-1 text-[10px] text-emerald-700 bg-white px-2 py-0.5 rounded border border-gray-200 shadow-2xs">
                      <span className="material-symbols-outlined text-[12px]">shield</span>
                      <span>10 Titik Uji Rebound Valid</span>
                    </div>
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="relative flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#a53d00] text-white flex items-center justify-center shrink-0 z-10 ring-4 ring-orange-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                  </div>
                  <div className="flex-1 bg-orange-50/60 p-2.5 rounded-xl border-l-2 border-[#ff6200]">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs font-bold text-gray-900">Resume Rekomendasi SNI</span>
                      <span className="text-[10px] text-[#ff6200] font-bold animate-pulse">Sedang Berlangsung</span>
                    </div>
                    <p className="text-[11px] text-gray-600 mt-0.5">
                      Kalkulasi defleksi balok lentur &amp; penulangan kolom portal. Target rilis <span className="font-bold text-gray-900">Sore Ini, 17:00 WIB</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="px-4 flex flex-col gap-2.5 mb-6">
            <button
              onClick={() => onOpenChatWithMitra('hendra')}
              className="w-full h-12 bg-[#ff6200] hover:bg-[#e05600] active:scale-95 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <span className="material-symbols-outlined text-[19px]">forum</span>
              <span>Konsultasi Hasil Uji via Chat</span>
            </button>

            <button
              onClick={() => triggerToast('Lembar Data Sondir (PDF)', 'Membuka dokumen hasil laboratorium uji tanah & sondir SNI (14 Halaman)...')}
              className="w-full h-11 bg-white text-[#a53d00] rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-2xs border border-gray-200 hover:bg-orange-50 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">description</span>
              <span>Lihat Lembar Data Sondir (PDF)</span>
            </button>

            <button
              onClick={onNavigateToHistory}
              className="w-full h-10 text-gray-500 hover:text-gray-800 font-bold text-xs flex items-center justify-center gap-1 transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              <span>Kembali ke Riwayat Pesanan</span>
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: Rilis Dana Pak Joko */}
      {/* ========================================================================= */}
      {showReleaseModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-5 shadow-2xl flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-[#ff6200] mb-3">
              <span className="material-symbols-outlined text-[30px]">payments</span>
            </div>
            <h3 className="text-base font-bold text-gray-900">Rilis Dana ke Pak Joko?</h3>
            <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
              Pastikan Anda sudah mengecek seluruh kerataan lantai &amp; kerapian nat sebelum mencairkan <strong className="text-gray-900">Rp 175.000</strong>.
            </p>
            <div className="grid grid-cols-2 gap-2 w-full mt-4">
              <button
                onClick={() => setShowReleaseModal(false)}
                className="h-10 rounded-xl bg-gray-100 text-gray-700 font-bold text-xs hover:bg-gray-200 transition-colors"
              >
                Periksa Lagi
              </button>
              <button
                onClick={() => {
                  setJokoFundReleased(true);
                  setShowReleaseModal(false);
                  triggerToast('Dana Berhasil Dicairkan ✓', 'Terima kasih! Dana Rp 175.000 telah berhasil diteruskan ke dompet Pak Joko Santoso.');
                }}
                className="h-10 rounded-xl bg-[#ff6200] text-white font-bold text-xs hover:bg-[#e05600] transition-colors shadow-xs"
              >
                Ya, Rilis Dana
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: Catatan Revisi Minor Arsitek */}
      {/* ========================================================================= */}
      {showRevisionModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-5 shadow-2xl flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#ff6200] text-[20px]">edit_note</span>
                <h3 className="text-sm font-bold text-gray-900">Catatan Revisi Minor</h3>
              </div>
              <button onClick={() => setShowRevisionModal(false)} className="text-gray-400 hover:text-gray-600">
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <p className="text-xs text-gray-600">
              Kirim catatan revisi DED (denah bukaan, pola lantai, perletakan kusen) maksimal 2 kali sesuai garansi kontrak LIX.
            </p>

            <textarea
              rows={3}
              value={revisionNotes}
              onChange={(e) => setRevisionNotes(e.target.value)}
              placeholder="Contoh: Mohon bukaan pintu kamar utama digeser 20cm ke kanan..."
              className="w-full p-2.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6200]"
            />

            <div className="grid grid-cols-2 gap-2 mt-1">
              <button
                onClick={() => setShowRevisionModal(false)}
                className="h-9 rounded-xl bg-gray-100 text-gray-700 font-bold text-xs"
              >
                Batal
              </button>
              <button
                onClick={() => {
                  setShowRevisionModal(false);
                  setRevisionNotes('');
                  triggerToast('Revisi Terkirim', 'Catatan revisi telah dikirimkan langsung ke Ir. Dwi Prabowo.');
                }}
                className="h-9 rounded-xl bg-[#ff6200] text-white font-bold text-xs hover:bg-[#e05600]"
              >
                Kirim Revisi
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* LIGHTBOX MODAL (Full View Photo) */}
      {/* ========================================================================= */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-between p-4"
          onClick={() => setLightboxPhoto(null)}
        >
          <div className="w-full max-w-sm flex items-center justify-between text-white pb-2">
            <div className="min-w-0 pr-2">
              <h4 className="text-xs font-bold text-white truncate">{lightboxPhoto.title}</h4>
              <p className="text-[10px] text-gray-400 truncate">{lightboxPhoto.caption}</p>
            </div>
            <button
              onClick={() => setLightboxPhoto(null)}
              className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>

          <div className="relative flex-1 max-h-[70vh] flex items-center justify-center">
            <img
              referrerPolicy="no-referrer"
              src={lightboxPhoto.url}
              alt={lightboxPhoto.title}
              className="w-full h-auto max-h-[70vh] object-contain rounded-xl shadow-2xl border border-white/10"
            />
          </div>

          <p className="text-[11px] text-gray-400 pt-2 text-center">
            Foto terenkripsi geotag digital LIX • Klik di luar untuk menutup
          </p>
        </div>
      )}

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-gray-900 text-white p-3 rounded-xl shadow-2xl flex items-center gap-2.5 z-50 border border-gray-800 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span className="material-symbols-outlined text-[#ff6200] text-[22px]">check_circle</span>
          <div className="flex-1 text-left min-w-0">
            <p className="text-xs font-bold text-white truncate">{toastMessage.title}</p>
            <p className="text-[11px] text-gray-300 leading-snug">{toastMessage.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
};
