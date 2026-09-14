import React, { useState } from 'react';
import { MitraId, TabType } from '../types';
import { MITRA_DATA_MAP, LIX_LOGO, LIX_LOGO_HELMET } from '../data/mitraData';

interface HomeScreenProps {
  onSelectMitra: (id: MitraId) => void;
  activeTab: TabType;
  onChangeTab: (tab: TabType) => void;
  ordersCount: number;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onSelectMitra,
  activeTab,
  onChangeTab,
  ordersCount
}) => {
  const [selectedLocation, setSelectedLocation] = useState('Jakarta Selatan');
  const [showLocationPicker, setShowLocationPicker] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilterCategory, setSelectedFilterCategory] = useState<string>('all');
  const [voucherClaimed, setVoucherClaimed] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const locations = [
    'Jakarta Selatan',
    'Jakarta Barat',
    'Jakarta Utara',
    'Jakarta Pusat',
    'Jakarta Timur',
    'Tangerang Selatan (BSD/Bintaro)',
    'Kota Bekasi',
    'Depok & Sekitarnya'
  ];

  const mitras = Object.values(MITRA_DATA_MAP);

  const filteredMitras = mitras.filter(m => {
    const matchesSearch =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.shortRole.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.roleCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.fullRole.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedFilterCategory === 'all' ||
      m.id === selectedFilterCategory ||
      m.roleCategory.toLowerCase() === selectedFilterCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full max-w-[430px] mx-auto min-h-screen bg-[#f8f9fa] text-[#191c1d] flex flex-col pb-24 relative">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md px-4 py-3 border-b border-gray-100 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-2">
          <img
            src={LIX_LOGO}
            alt="LIX Logo"
            className="h-7 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 font-medium leading-none">Lokasi Proyek:</span>
            <button
              onClick={() => setShowLocationPicker(!showLocationPicker)}
              className="flex items-center gap-1 text-xs font-bold text-gray-900 mt-0.5 hover:text-[#ff6200] transition-colors"
            >
              <span className="material-symbols-outlined text-[15px] text-[#ff6200]" style={{ fontVariationSettings: "'FILL' 1" }}>
                location_on
              </span>
              <span>{selectedLocation}</span>
              <span className="material-symbols-outlined text-[14px] text-gray-400">
                keyboard_arrow_down
              </span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setNotificationOpen(true)}
            className="w-9 h-9 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-700 relative transition-colors"
            aria-label="Notifikasi"
          >
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#ff6200] ring-2 ring-white"></span>
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-orange-200">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjqSKx6bcXRMaIfgEhdE5DLpCbN24vVHtAPHYOvjfPIp6SWAbYz79ZPsfvXNH99Op9QWR9vaec2OWS7ppVcpZRvXyFMlE_GfhHUALtQENitiiOYkzsXB2HJqS82jUXly29wv3ldxmWhdW2ZM0GsRdxQO4FbodITrckemLR8QGaBNfR0PeHEM7tUjZ050mpvrzrTb1XErcSciYeV_aD-NQjoO0CTz5coJKBPb4ELDBuKaFFZXIGy7vCyYON5tOuo598"
              alt="Avatar"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </header>

      {/* Location Dropdown Modal */}
      {showLocationPicker && (
        <div className="absolute top-14 left-4 right-4 z-50 bg-white rounded-2xl shadow-xl border border-gray-100 p-3 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2">
          <div className="text-xs font-bold text-gray-700 px-2 py-1">Pilih Wilayah Jangkauan Mitra:</div>
          {locations.map(loc => (
            <button
              key={loc}
              onClick={() => {
                setSelectedLocation(loc);
                setShowLocationPicker(false);
              }}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between ${
                selectedLocation === loc
                  ? 'bg-orange-50 text-[#ff6200] font-bold'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span>{loc}</span>
              {selectedLocation === loc && (
                <span className="material-symbols-outlined text-[16px]">check</span>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Main Content Area */}
      <div className="px-4 pt-3 flex flex-col gap-3.5">
        {/* Search Bar with Filter */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-11 bg-white rounded-2xl px-3.5 flex items-center gap-2 border border-gray-200/90 shadow-2xs focus-within:ring-2 focus-within:ring-[#ff6200]">
            <span className="material-symbols-outlined text-gray-400 text-[20px]">search</span>
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Cari Arsitek, Tukang, Mandor, Konsultan"
              className="w-full bg-transparent text-xs font-medium text-gray-800 placeholder:text-gray-400 focus:outline-none"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="text-gray-400 hover:text-gray-600">
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            )}
          </div>
          <button
            onClick={() => setShowFilterModal(true)}
            className="w-11 h-11 bg-white rounded-2xl border border-gray-200/90 flex items-center justify-center text-[#ff6200] hover:bg-orange-50 active:scale-95 transition-all shadow-2xs"
            aria-label="Filter"
          >
            <span className="material-symbols-outlined text-[20px]">tune</span>
          </button>
        </div>

        {/* 100% Sertifikasi BLK Trust Banner */}
        <div className="bg-white rounded-xl p-2.5 border border-gray-200/70 shadow-2xs flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-orange-100 text-[#ff6200] flex items-center justify-center">
              <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
            </span>
            <span className="text-xs font-bold text-gray-800">
              100% Profesional Sertifikasi BLK & BNSP
            </span>
          </div>
          <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            Garansi 100%
          </span>
        </div>

        {/* Voucher Promo Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#ff6200] to-[#e04500] text-white p-4 shadow-md flex items-center justify-between">
          {/* Subtle background circle decoration */}
          <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/10 pointer-events-none"></div>

          <div className="flex flex-col gap-1 z-10 max-w-[240px]">
            <span className="inline-block bg-white/20 backdrop-blur-xs text-[10px] font-mono tracking-wider font-extrabold px-2 py-0.5 rounded-md self-start uppercase">
              VOUCHER: LIXBARU25
            </span>
            <h3 className="text-base font-extrabold leading-tight mt-0.5">
              Diskon 25% Khusus Pengguna Baru
            </h3>
            <p className="text-[11px] text-orange-100 leading-snug">
              Hemat 25% untuk pemesanan pertama jasa Arsitektur, Konsultan Struktur, Mandor & Tukang Ahli.
            </p>
            <button
              onClick={() => {
                setVoucherClaimed(true);
                alert('Voucher LIXBARU25 berhasil diklaim! Diskon 25% otomatis diterapkan saat checkout.');
              }}
              className="mt-2 self-start px-3.5 py-1.5 bg-white text-[#ff6200] hover:bg-orange-50 active:scale-95 text-xs font-extrabold rounded-xl shadow-sm flex items-center gap-1 transition-all"
            >
              <span>{voucherClaimed ? 'Voucher Aktif ✓' : 'Klaim Diskon'}</span>
              {!voucherClaimed && (
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              )}
            </button>
          </div>

          <div className="relative w-24 h-24 flex-shrink-0 flex items-center justify-center z-10">
            <img
              src={LIX_LOGO_HELMET}
              alt="Promo LIX"
              className="w-full h-full object-contain filter drop-shadow-md brightness-110"
            />
          </div>
        </div>

        {/* 4 Pilar Layanan Konstruksi */}
        <div className="flex flex-col gap-2">
          <div>
            <h3 className="text-sm font-bold text-gray-900">4 Pilar Layanan Konstruksi</h3>
            <p className="text-[11px] text-gray-500">
              Didukung tenaga ahli tersertifikasi Balai Latihan Kerja (BLK)
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {/* Tukang Ahli */}
            <div
              onClick={() => onSelectMitra('joko')}
              className="bg-white p-3 rounded-2xl border border-gray-200/80 shadow-2xs hover:border-[#ff6200]/50 hover:shadow-sm transition-all cursor-pointer flex flex-col gap-1.5 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-xl bg-orange-50 text-[#ff6200] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[18px]">handyman</span>
                </div>
                <span className="text-[9px] font-bold text-orange-700 bg-orange-50 px-1.5 py-0.5 rounded">
                  Sertifikasi BLK
                </span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900">Tukang Ahli</h4>
                <p className="text-[10px] text-gray-500 leading-snug mt-0.5">
                  Tukang Bangunan, Finishing, Listrik & Pipa
                </p>
              </div>
            </div>

            {/* Arsitektur */}
            <div
              onClick={() => onSelectMitra('dwi')}
              className="bg-white p-3 rounded-2xl border border-gray-200/80 shadow-2xs hover:border-[#ff6200]/50 hover:shadow-sm transition-all cursor-pointer flex flex-col gap-1.5 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-xl bg-orange-50 text-[#ff6200] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[18px]">architecture</span>
                </div>
                <span className="text-[9px] font-bold text-orange-700 bg-orange-50 px-1.5 py-0.5 rounded">
                  Sertifikasi BLK
                </span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900">Arsitektur</h4>
                <p className="text-[10px] text-gray-500 leading-snug mt-0.5">
                  Desain Denah 2D/3D, IMB/PBG, Visual Fasad
                </p>
              </div>
            </div>

            {/* Konsultan */}
            <div
              onClick={() => onSelectMitra('hendra')}
              className="bg-white p-3 rounded-2xl border border-gray-200/80 shadow-2xs hover:border-[#ff6200]/50 hover:shadow-sm transition-all cursor-pointer flex flex-col gap-1.5 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-xl bg-orange-50 text-[#ff6200] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[18px]">calculate</span>
                </div>
                <span className="text-[9px] font-bold text-orange-700 bg-orange-50 px-1.5 py-0.5 rounded">
                  Sertifikasi BLK
                </span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900">Konsultan</h4>
                <p className="text-[10px] text-gray-500 leading-snug mt-0.5">
                  Audit Struktur Bangunan & Perhitungan RAB
                </p>
              </div>
            </div>

            {/* Mandor Proyek */}
            <div
              onClick={() => onSelectMitra('yanto')}
              className="bg-white p-3 rounded-2xl border border-gray-200/80 shadow-2xs hover:border-[#ff6200]/50 hover:shadow-sm transition-all cursor-pointer flex flex-col gap-1.5 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-xl bg-orange-50 text-[#ff6200] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[18px]">engineering</span>
                </div>
                <span className="text-[9px] font-bold text-orange-700 bg-orange-50 px-1.5 py-0.5 rounded">
                  Sertifikasi BLK
                </span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900">Mandor Proyek</h4>
                <p className="text-[10px] text-gray-500 leading-snug mt-0.5">
                  Supervisi Proyek, Mandor Borongan & K3
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* LIX Instan 30 Menit Darurat */}
        <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[20px]">bolt</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-amber-950">LIX Instan 30 Menit</span>
                <span className="text-[9px] font-extrabold bg-red-500 text-white px-1.5 py-0.2 rounded">
                  DARURAT
                </span>
              </div>
              <p className="text-[10px] text-amber-800 leading-tight mt-0.5">
                Pipa bocor / atap darurat siap datang ke lokasi Anda
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectMitra('joko')}
            className="px-3 py-1.5 bg-[#ff6200] text-white font-bold text-xs rounded-xl shadow-xs hover:bg-[#e05600] active:scale-95 transition-all flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[14px]">call</span>
            <span>Panggil</span>
          </button>
        </div>

        {/* Mitra Terverifikasi BLK Section */}
        <div className="flex flex-col gap-2.5 mt-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-gray-900">Mitra Terverifikasi BLK</h3>
              <p className="text-[11px] text-gray-500">
                Tersedia untuk proyek dan konsultasi langsung
              </p>
            </div>
            <button
              onClick={() => setSelectedFilterCategory('all')}
              className="text-xs font-bold text-[#ff6200] hover:underline"
            >
              Lihat Semua
            </button>
          </div>

          {/* Persona Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 -mx-4 px-4 scrollbar-none">
            <button
              onClick={() => setSelectedFilterCategory('all')}
              className={`px-3 py-1 rounded-full text-xs whitespace-nowrap transition-all ${
                selectedFilterCategory === 'all'
                  ? 'bg-[#ff6200] text-white font-bold shadow-xs'
                  : 'bg-white text-gray-600 border border-gray-200 font-medium'
              }`}
            >
              Semua Mitra
            </button>
            <button
              onClick={() => setSelectedFilterCategory('dwi')}
              className={`px-3 py-1 rounded-full text-xs whitespace-nowrap transition-all flex items-center gap-1 ${
                selectedFilterCategory === 'dwi'
                  ? 'bg-[#ff6200] text-white font-bold shadow-xs'
                  : 'bg-white text-gray-600 border border-gray-200 font-medium'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              <span>Ir. Dwi Prabowo</span>
            </button>
            <button
              onClick={() => setSelectedFilterCategory('hendra')}
              className={`px-3 py-1 rounded-full text-xs whitespace-nowrap transition-all flex items-center gap-1 ${
                selectedFilterCategory === 'hendra'
                  ? 'bg-[#ff6200] text-white font-bold shadow-xs'
                  : 'bg-white text-gray-600 border border-gray-200 font-medium'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              <span>Hendra Wijaya, S.T.</span>
            </button>
            <button
              onClick={() => setSelectedFilterCategory('yanto')}
              className={`px-3 py-1 rounded-full text-xs whitespace-nowrap transition-all flex items-center gap-1 ${
                selectedFilterCategory === 'yanto'
                  ? 'bg-[#ff6200] text-white font-bold shadow-xs'
                  : 'bg-white text-gray-600 border border-gray-200 font-medium'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              <span>Mandor Yanto</span>
            </button>
            <button
              onClick={() => setSelectedFilterCategory('joko')}
              className={`px-3 py-1 rounded-full text-xs whitespace-nowrap transition-all flex items-center gap-1 ${
                selectedFilterCategory === 'joko'
                  ? 'bg-[#ff6200] text-white font-bold shadow-xs'
                  : 'bg-white text-gray-600 border border-gray-200 font-medium'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              <span>Pak Joko Santoso</span>
            </button>
          </div>

          {/* Cards List */}
          <div className="flex flex-col gap-3">
            {filteredMitras.map(mitra => (
              <div
                key={mitra.id}
                className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs hover:shadow-sm transition-all flex flex-col gap-3"
              >
                <div className="flex items-start gap-3">
                  <div className="relative flex-shrink-0">
                    <img
                      src={mitra.avatar}
                      alt={mitra.name}
                      className="w-16 h-16 rounded-2xl object-cover ring-1 ring-orange-200"
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full ring-2 ring-white flex items-center justify-center text-white">
                      <span className="material-symbols-outlined text-[10px]">check</span>
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h4 className="text-sm font-bold text-gray-900 truncate">
                        {mitra.name}
                      </h4>
                      <span className="text-[10px] font-bold text-orange-800 bg-orange-100/70 px-2 py-0.5 rounded-full flex-shrink-0">
                        {mitra.roleCategory}
                      </span>
                    </div>

                    <p className="text-[11px] text-gray-500 truncate mt-0.5">
                      {mitra.certifications[0]?.institution} & {mitra.certifications[1]?.institution}
                    </p>

                    <div className="flex items-center gap-2 mt-1.5 text-xs">
                      <div className="flex items-center gap-0.5 text-amber-500 font-bold">
                        <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                          star
                        </span>
                        <span>{mitra.rating}</span>
                      </div>
                      <span className="text-gray-300">•</span>
                      <span className="text-[11px] text-gray-500">
                        {mitra.completedProjects} Proyek Selesai
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-medium">Mulai Dari</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-extrabold text-[#ff6200]">
                        Rp {mitra.priceDiscounted.toLocaleString('id-ID')}
                      </span>
                      <span className="text-[10px] text-gray-500">/ {mitra.priceUnit}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectMitra(mitra.id)}
                    className="px-3.5 py-2 bg-[#ff6200] hover:bg-[#e05600] active:scale-95 text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-1 transition-all"
                  >
                    <span>Lihat Profil & Portofolio</span>
                    <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Notifications Modal */}
      {notificationOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-4 max-w-sm w-full shadow-xl border border-gray-100 flex flex-col gap-2.5">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ff6200] text-[20px]">notifications</span>
                <h4 className="text-sm font-bold text-gray-900">Notifikasi Pesanan LIX</h4>
              </div>
              <button onClick={() => setNotificationOpen(false)} className="text-gray-400 hover:text-gray-600">
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 bg-orange-50 rounded-xl border border-orange-100">
                <div className="font-bold text-gray-900">Voucher Pengguna Baru Tersedia!</div>
                <p className="text-gray-600 mt-0.5">Gunakan kode LIXBARU25 untuk potongan 25% di pesanan pertama Anda.</p>
              </div>
              <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-100">
                <div className="font-bold text-emerald-950">Jaminan Escrow 100% Aktif</div>
                <p className="text-emerald-800 mt-0.5">Dana Anda terlindungi aman di rekening penampungan LIX sampai pekerjaan tuntas.</p>
              </div>
            </div>
            <button
              onClick={() => setNotificationOpen(false)}
              className="mt-1 w-full py-2 bg-gray-100 font-bold text-xs text-gray-700 rounded-xl hover:bg-gray-200"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      {/* Filter Modal */}
      {showFilterModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-4 max-w-sm w-full shadow-xl border border-gray-100 flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <h4 className="text-sm font-bold text-gray-900">Filter Mitra Binaan BLK</h4>
              <button onClick={() => setShowFilterModal(false)} className="text-gray-400 hover:text-gray-600">
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold text-gray-700">Kategori Pekerjaan:</span>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'all', label: 'Semua Kategori' },
                  { id: 'Arsitektur', label: 'Arsitektur' },
                  { id: 'Konsultan', label: 'Konsultan Struktur' },
                  { id: 'Mandor Proyek', label: 'Mandor Proyek' },
                  { id: 'Tukang Ahli', label: 'Tukang Finishing' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setSelectedFilterCategory(opt.id);
                      setShowFilterModal(false);
                    }}
                    className={`p-2 rounded-xl text-xs font-semibold text-center border transition-all ${
                      selectedFilterCategory === opt.id
                        ? 'bg-orange-50 border-[#ff6200] text-[#ff6200]'
                        : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white/95 backdrop-blur-lg border-t border-gray-200/80 px-4 py-2 z-40 flex items-center justify-between shadow-lg">
        <button
          onClick={() => onChangeTab('cari')}
          className={`flex flex-col items-center gap-0.5 flex-1 ${
            activeTab === 'cari' ? 'text-[#ff6200]' : 'text-gray-500 hover:text-gray-800'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]">search</span>
          <span className="text-[10px] font-bold">Cari</span>
        </button>

        <button
          onClick={() => onChangeTab('favorit')}
          className={`flex flex-col items-center gap-0.5 flex-1 ${
            activeTab === 'favorit' ? 'text-[#ff6200]' : 'text-gray-500 hover:text-gray-800'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]">favorite_border</span>
          <span className="text-[10px] font-semibold">Favorit</span>
        </button>

        <button
          onClick={() => onChangeTab('pesanan')}
          className={`flex flex-col items-center gap-0.5 flex-1 relative ${
            activeTab === 'pesanan' ? 'text-[#ff6200]' : 'text-gray-500 hover:text-gray-800'
          }`}
        >
          <div className="relative">
            <span className="material-symbols-outlined text-[22px]">receipt_long</span>
            {ordersCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-[#ff6200] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {ordersCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-semibold">Pesanan</span>
        </button>

        <button
          onClick={() => onChangeTab('chat')}
          className={`flex flex-col items-center gap-0.5 flex-1 relative ${
            activeTab === 'chat' ? 'text-[#ff6200]' : 'text-gray-500 hover:text-gray-800'
          }`}
        >
          <div className="relative">
            <span className="material-symbols-outlined text-[22px]">chat_bubble_outline</span>
            <span className="absolute -top-1 -right-2 bg-[#ff6200] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </div>
          <span className="text-[10px] font-semibold">Chat</span>
        </button>

        <button
          onClick={() => onChangeTab('profil')}
          className={`flex flex-col items-center gap-0.5 flex-1 ${
            activeTab === 'profil' ? 'text-[#ff6200]' : 'text-gray-500 hover:text-gray-800'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]">person_outline</span>
          <span className="text-[10px] font-semibold">Profil</span>
        </button>
      </nav>
    </div>
  );
};
