import React, { useState } from 'react';
import { MitraData } from '../types';
import { MAP_PREVIEW_IMG } from '../data/mitraData';

interface BookingConfirmScreenProps {
  mitra: MitraData;
  onBack: () => void;
  onProceedPayment: (bookingDetails: {
    addressTitle: string;
    addressDesc: string;
    schedule: string;
    notes: string;
    totalAmount: number;
  }) => void;
}

export const BookingConfirmScreen: React.FC<BookingConfirmScreenProps> = ({
  mitra,
  onBack,
  onProceedPayment
}) => {
  const [addressTitle, setAddressTitle] = useState(mitra.defaultAddress.title);
  const [addressDesc, setAddressDesc] = useState(mitra.defaultAddress.desc);
  const [schedule, setSchedule] = useState(mitra.bookingSchedule);
  const [notes, setNotes] = useState(mitra.defaultNote);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [isEditingNotes, setIsEditingNotes] = useState(false);
  const [isEditingSchedule, setIsEditingSchedule] = useState(false);
  const [showEscrowInfo, setShowEscrowInfo] = useState(false);

  const totalPrice = mitra.servicePackagePrice + mitra.serviceFee;

  return (
    <div className="w-full max-w-[430px] mx-auto min-h-screen bg-[#f8f9fa] text-[#191c1d] flex flex-col pb-28 relative">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md px-4 py-3 border-b border-gray-100 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-700 transition-colors"
            aria-label="Kembali"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
          <div className="flex flex-col">
            <h1 className="text-sm font-bold text-gray-900 leading-tight">Konfirmasi Pesanan</h1>
            <span className="text-[10px] text-gray-500 font-medium">Nomor: {mitra.orderNumber}</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-bold border border-emerald-200">
          <span className="material-symbols-outlined text-[13px]">verified_user</span>
          <span>Escrow Aktif</span>
        </div>
      </header>

      {/* Main Container */}
      <div className="px-4 pt-3 flex flex-col gap-3.5">
        {/* LIX Proteksi & Garansi 100% Banner */}
        <div className="bg-gradient-to-r from-emerald-700 to-teal-800 rounded-2xl p-3.5 text-white shadow-xs flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-[20px] text-white">security</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-white">{mitra.serviceProtectionTitle}</h3>
              <span className="text-[9px] font-extrabold bg-emerald-400 text-emerald-950 px-1.5 py-0.2 rounded">
                100% RESMI
              </span>
            </div>
            <p className="text-[11px] text-emerald-100 mt-0.5 leading-relaxed">
              {mitra.serviceProtectionSubtitle}. Dana Anda tertampung aman di rekening bersama Escrow LIX dan baru dicairkan setelah Anda menyetujui hasil pengerjaan.
            </p>
          </div>
        </div>

        {/* Detail Tenaga Ahli Card */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs flex flex-col gap-3">
          <div className="flex items-center justify-between border-b border-gray-100 pb-2">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              {mitra.bookingHeaderLabel}
            </span>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
              Binaan BLK
            </span>
          </div>

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
              <h4 className="text-sm font-bold text-gray-900 leading-snug truncate">
                {mitra.name}
              </h4>
              <p className="text-xs text-gray-500 line-clamp-2 mt-0.5">
                {mitra.fullRole}
              </p>
              <div className="flex items-center gap-2 mt-1 text-xs">
                <div className="flex items-center gap-0.5 text-amber-500 font-bold">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span>{mitra.rating}</span>
                </div>
                <span className="text-gray-300">•</span>
                <span className="text-[11px] text-gray-500">{mitra.completedProjects} Proyek</span>
              </div>
            </div>
          </div>

          {/* Jadwal Pengerjaan */}
          <div className="bg-orange-50/70 rounded-xl p-3 border border-orange-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#ff6200] text-[20px]">
                calendar_today
              </span>
              <div>
                <span className="text-[10px] font-semibold text-gray-500 block">
                  Jadwal Kunjungan & Mulai Kerja
                </span>
                <span className="text-xs font-bold text-gray-900">{schedule}</span>
              </div>
            </div>
            <button
              onClick={() => setIsEditingSchedule(true)}
              className="text-xs font-bold text-[#ff6200] hover:underline"
            >
              Ubah
            </button>
          </div>
        </div>

        {/* Lokasi Pengerjaan / Proyek */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-gray-900">Lokasi Pengerjaan</h3>
            <button
              onClick={() => setIsEditingAddress(true)}
              className="text-xs font-bold text-[#ff6200] hover:underline"
            >
              Ubah Alamat
            </button>
          </div>

          <div className="flex items-start gap-2.5">
            <span className="material-symbols-outlined text-[#ff6200] text-[20px] flex-shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
              location_on
            </span>
            <div className="flex-1">
              <h4 className="text-xs font-bold text-gray-900">{addressTitle}</h4>
              <p className="text-xs text-gray-600 leading-relaxed mt-0.5">{addressDesc}</p>
            </div>
          </div>

          {/* Map Preview Snapshot */}
          <div className="relative w-full h-32 rounded-xl overflow-hidden border border-gray-200">
            <img
              src={MAP_PREVIEW_IMG}
              alt="Lokasi Peta"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
              <div className="w-8 h-8 rounded-full bg-[#ff6200] text-white flex items-center justify-center shadow-lg animate-bounce">
                <span className="material-symbols-outlined text-[18px]">engineering</span>
              </div>
              <span className="bg-white text-gray-900 font-bold text-[9px] px-2 py-0.5 rounded-full shadow-md mt-1 border border-gray-100">
                Titik Proyek
              </span>
            </div>
          </div>
        </div>

        {/* Catatan Pekerjaan & Spesifikasi */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-gray-900">Catatan Pekerjaan & Spesifikasi</h3>
            <button
              onClick={() => setIsEditingNotes(!isEditingNotes)}
              className="text-xs font-bold text-[#ff6200] hover:underline"
            >
              {isEditingNotes ? 'Simpan' : 'Edit Catatan'}
            </button>
          </div>

          {isEditingNotes ? (
            <textarea
              rows={4}
              value={notes}
              onChange={e => setNotes(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-gray-300 text-xs font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#ff6200]"
            />
          ) : (
            <p className="text-xs text-gray-700 leading-relaxed bg-gray-50 p-3 rounded-xl border border-gray-100">
              {notes}
            </p>
          )}

          <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
            <span className="material-symbols-outlined text-[15px] text-gray-400">info</span>
            <span>{mitra.defaultNoteExtra}</span>
          </div>
        </div>

        {/* Rincian Biaya & Rekber Escrow */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-gray-900">Rincian Biaya & Rekber Escrow</h3>
            <button
              onClick={() => setShowEscrowInfo(true)}
              className="text-xs font-semibold text-[#ff6200] flex items-center gap-0.5"
            >
              <span>Cara Kerja Escrow</span>
              <span className="material-symbols-outlined text-[14px]">help_outline</span>
            </button>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between text-gray-700">
              <span>{mitra.servicePackageName}</span>
              <span className="font-bold">
                Rp {mitra.servicePackagePrice.toLocaleString('id-ID')}
              </span>
            </div>

            <div className="flex items-center justify-between text-gray-700">
              <div className="flex items-center gap-1">
                <span>Biaya Layanan & Rekber Escrow</span>
                <span className="material-symbols-outlined text-gray-400 text-[14px]">
                  lock
                </span>
              </div>
              <span className="font-bold">
                Rp {mitra.serviceFee.toLocaleString('id-ID')}
              </span>
            </div>

            <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-sm">
              <span className="font-bold text-gray-900">Total Pembayaran</span>
              <span className="font-extrabold text-[#ff6200] text-base">
                Rp {totalPrice.toLocaleString('id-ID')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Address Modal */}
      {isEditingAddress && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-4 max-w-sm w-full shadow-2xl flex flex-col gap-3">
            <h4 className="text-sm font-bold text-gray-900">Ubah Alamat Proyek</h4>
            <div className="space-y-2">
              <div>
                <label className="text-xs font-bold text-gray-700">Judul / Pemilik:</label>
                <input
                  type="text"
                  value={addressTitle}
                  onChange={e => setAddressTitle(e.target.value)}
                  className="w-full mt-1 p-2 rounded-xl border border-gray-300 text-xs font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#ff6200]"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-700">Detail Alamat Lengkap:</label>
                <textarea
                  rows={3}
                  value={addressDesc}
                  onChange={e => setAddressDesc(e.target.value)}
                  className="w-full mt-1 p-2 rounded-xl border border-gray-300 text-xs font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#ff6200]"
                />
              </div>
            </div>
            <button
              onClick={() => setIsEditingAddress(false)}
              className="w-full py-2.5 bg-[#ff6200] text-white text-xs font-bold rounded-xl hover:bg-[#e05600]"
            >
              Simpan Alamat
            </button>
          </div>
        </div>
      )}

      {/* Edit Schedule Modal */}
      {isEditingSchedule && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-4 max-w-sm w-full shadow-2xl flex flex-col gap-3">
            <h4 className="text-sm font-bold text-gray-900">Pilih Jadwal Kunjungan Mitra</h4>
            <div className="space-y-2 text-xs">
              {[
                'Besok, 08:30 – 17:00 WIB (Kunjungan & Pengerjaan)',
                'Besok, 13:00 – 17:30 WIB (Sesi Siang)',
                'Lusa, 09:00 – 16:30 WIB (Jadwal Lanjutan)',
                'Sabtu ini, 08:00 – 16:00 WIB (Akhir Pekan)'
              ].map((sch, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setSchedule(sch);
                    setIsEditingSchedule(false);
                  }}
                  className={`w-full p-2.5 rounded-xl text-left border transition-all ${
                    schedule === sch
                      ? 'border-[#ff6200] bg-orange-50 text-[#ff6200] font-bold'
                      : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {sch}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsEditingSchedule(false)}
              className="w-full py-2 bg-gray-100 text-gray-700 text-xs font-bold rounded-xl hover:bg-gray-200"
            >
              Batal
            </button>
          </div>
        </div>
      )}

      {/* Escrow Explanation Modal */}
      {showEscrowInfo && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-5 max-w-sm w-full shadow-2xl flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-600 text-[22px]">
                  security
                </span>
                <h4 className="text-sm font-bold text-gray-900">Sistem Rekber Escrow LIX</h4>
              </div>
              <button
                onClick={() => setShowEscrowInfo(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <div className="space-y-2.5 text-xs text-gray-600">
              <div className="p-2.5 bg-gray-50 rounded-xl">
                <span className="font-bold text-gray-900 block">1. Pembayaran Ditahan di Rekber</span>
                <span>Dana yang Anda transfer masuk ke rekening penampungan resmi LIX, bukan langsung ke tukang.</span>
              </div>
              <div className="p-2.5 bg-gray-50 rounded-xl">
                <span className="font-bold text-gray-900 block">2. Pekerjaan Sesuai Standar BLK</span>
                <span>Mitra mengerjakan pekerjaan sesuai klausul spesifikasi dan gambar kerja tanpa risiko kabur / ghosting.</span>
              </div>
              <div className="p-2.5 bg-gray-50 rounded-xl">
                <span className="font-bold text-gray-900 block">3. Konfirmasi & Garansi Retensi</span>
                <span>Dana baru dicairkan setelah Anda menyetujui hasil pengerjaan, disertai jaminan retensi hingga {mitra.guaranteeDays} hari.</span>
              </div>
            </div>

            <button
              onClick={() => setShowEscrowInfo(false)}
              className="w-full py-2.5 bg-[#ff6200] text-white text-xs font-bold rounded-xl hover:bg-[#e05600]"
            >
              Saya Mengerti
            </button>
          </div>
        </div>
      )}

      {/* Sticky Bottom Confirmation Bar */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white/95 backdrop-blur-md border-t border-gray-200/90 px-4 py-3 z-40 flex items-center justify-between shadow-lg">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-500 font-medium">Total Pembayaran</span>
          <span className="text-lg font-extrabold text-[#ff6200]">
            Rp {totalPrice.toLocaleString('id-ID')}
          </span>
          <span className="text-[10px] text-emerald-700 font-semibold">
            Termasuk Rekber Escrow & Garansi
          </span>
        </div>

        <button
          onClick={() =>
            onProceedPayment({
              addressTitle,
              addressDesc,
              schedule,
              notes,
              totalAmount: totalPrice
            })
          }
          className="px-5 py-3 bg-[#ff6200] hover:bg-[#e05600] active:scale-95 text-white font-extrabold text-xs rounded-xl shadow-md shadow-orange-500/25 flex items-center gap-1.5 transition-all cursor-pointer"
        >
          <span>Lanjut ke Pembayaran</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
