import React, { useState } from 'react';
import { LIX_LOGO_HELMET } from '../data/mitraData';

interface ProfileTabProps {
  onLogout: () => void;
}

export const ProfileTab: React.FC<ProfileTabProps> = ({ onLogout }) => {
  const [showBlkModal, setShowBlkModal] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);

  return (
    <div className="w-full max-w-[430px] mx-auto min-h-screen bg-[#f8f9fa] text-[#191c1d] flex flex-col pb-24 relative">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md px-4 py-3 border-b border-gray-100 flex items-center justify-between shadow-xs">
        <h1 className="text-base font-bold text-gray-900 leading-tight">Profil Pengguna</h1>
        <span className="text-xs font-bold text-[#ff6200]">ID: LX-USER-4091</span>
      </header>

      {/* Main Container */}
      <div className="px-4 pt-3 flex flex-col gap-3.5">
        {/* User Card */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs flex items-center gap-3.5">
          <div className="w-16 h-16 rounded-2xl bg-orange-100 ring-2 ring-orange-200 overflow-hidden flex items-center justify-center">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjqSKx6bcXRMaIfgEhdE5DLpCbN24vVHtAPHYOvjfPIp6SWAbYz79ZPsfvXNH99Op9QWR9vaec2OWS7ppVcpZRvXyFMlE_GfhHUALtQENitiiOYkzsXB2HJqS82jUXly29wv3ldxmWhdW2ZM0GsRdxQO4FbodITrckemLR8QGaBNfR0PeHEM7tUjZ050mpvrzrTb1XErcSciYeV_aD-NQjoO0CTz5coJKBPb4ELDBuKaFFZXIGy7vCyYON5tOuo598"
              alt="Avatar User"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-gray-900 truncate">Kevin Danuarta</h3>
              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.2 rounded-full">
                Terverifikasi
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-0.5">+62 812 3456 7890</p>
            <span className="text-[11px] text-gray-400 mt-0.5 block">Jakarta Selatan</span>
          </div>
        </div>

        {/* Voucher & Balance Card */}
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-4 text-white shadow-xs flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold text-orange-200">
              Voucher & Promo Aktif
            </span>
            <h4 className="text-base font-extrabold mt-0.5">LIXBARU25 (Diskon 25%)</h4>
            <p className="text-[11px] text-orange-100">Berlaku untuk semua kategori pengerjaan</p>
          </div>
          <span className="px-3 py-1.5 bg-white text-[#ff6200] font-extrabold text-xs rounded-xl shadow-xs">
            Tersedia
          </span>
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden divide-y divide-gray-100">
          <button
            onClick={() => setShowBlkModal(true)}
            className="w-full p-3.5 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-orange-50 text-[#ff6200] flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">school</span>
              </span>
              <div>
                <span className="text-xs font-bold text-gray-900 block">
                  Kemitraan BLK & Kemnaker RI
                </span>
                <span className="text-[10px] text-gray-500">
                  Standar sertifikasi resmi tenaga kerja konstruksi
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined text-gray-400 text-[18px]">
              chevron_right
            </span>
          </button>

          <button
            onClick={() => setShowHelpModal(true)}
            className="w-full p-3.5 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">security</span>
              </span>
              <div>
                <span className="text-xs font-bold text-gray-900 block">
                  Ketentuan Perlindungan Rekber Escrow
                </span>
                <span className="text-[10px] text-gray-500">
                  Bebas ghosting, retensi garansi uang kembali
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined text-gray-400 text-[18px]">
              chevron_right
            </span>
          </button>

          <button
            onClick={() => {
              alert('Customer Care LIX siap melayani Anda 24/7 via WhatsApp: 0811-999-LIX (549)');
            }}
            className="w-full p-3.5 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">support_agent</span>
              </span>
              <div>
                <span className="text-xs font-bold text-gray-900 block">
                  Pusat Bantuan & CS 24 Jam
                </span>
                <span className="text-[10px] text-gray-500">
                  Konsultasi kendala teknis atau pengaduan proyek
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined text-gray-400 text-[18px]">
              chevron_right
            </span>
          </button>
        </div>

        {/* Logout button */}
        <button
          onClick={onLogout}
          className="w-full py-3 bg-red-50 hover:bg-red-100 text-red-600 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors mt-2"
        >
          <span className="material-symbols-outlined text-[18px]">logout</span>
          <span>Keluar dari Akun</span>
        </button>
      </div>

      {/* BLK Info Modal */}
      {showBlkModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-5 max-w-sm w-full shadow-2xl flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <h4 className="text-sm font-bold text-gray-900">Program Binaan BLK & BNSP</h4>
              <button onClick={() => setShowBlkModal(false)} className="text-gray-400 hover:text-gray-600">
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              LIX bekerjasama langsung dengan Balai Latihan Kerja (BLK) di bawah binaan Kementerian Ketenagakerjaan RI serta Badan Nasional Sertifikasi Profesi (BNSP). Seluruh mitra kami telah melalui uji kompetensi kejuruan, verifikasi K3, dan pengawasan berkala.
            </p>
            <button
              onClick={() => setShowBlkModal(false)}
              className="w-full py-2.5 bg-[#ff6200] text-white text-xs font-bold rounded-xl"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      {/* Escrow Help Modal */}
      {showHelpModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-5 max-w-sm w-full shadow-2xl flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <h4 className="text-sm font-bold text-gray-900">Perlindungan Escrow LIX</h4>
              <button onClick={() => setShowHelpModal(false)} className="text-gray-400 hover:text-gray-600">
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Sistem rekening bersama LIX menjamin bahwa mitra konstruksi tidak akan lari meninggalkan pekerjaan yang belum selesai (bebas ghosting). Dana ditahan hingga Anda memeriksa dan menyetujui hasil pengerjaan.
            </p>
            <button
              onClick={() => setShowHelpModal(false)}
              className="w-full py-2.5 bg-emerald-700 text-white text-xs font-bold rounded-xl"
            >
              Saya Mengerti
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
