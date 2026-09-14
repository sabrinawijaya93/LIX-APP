import React from 'react';
import { OrderRecord } from '../types';

interface PaymentSuccessScreenProps {
  order: OrderRecord;
  onViewOrderTracking: () => void;
  onReturnHome: () => void;
}

export const PaymentSuccessScreen: React.FC<PaymentSuccessScreenProps> = ({
  order,
  onViewOrderTracking,
  onReturnHome
}) => {
  return (
    <div className="w-full max-w-[430px] mx-auto min-h-screen bg-[#ff6200] text-white flex flex-col justify-between p-4 relative overflow-hidden">
      {/* Background soft circles */}
      <div className="absolute -top-16 -right-16 w-60 h-60 rounded-full bg-white/10 pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-black/10 pointer-events-none"></div>

      {/* Top Header & Big Checkmark */}
      <div className="flex flex-col items-center text-center pt-8 pb-4 z-10">
        <div className="w-20 h-20 rounded-full bg-white text-[#ff6200] flex items-center justify-center shadow-xl shadow-black/15 mb-4 animate-in zoom-in-90 duration-300">
          <span
            className="material-symbols-outlined text-[44px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
        </div>

        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-xs text-white text-[11px] font-extrabold rounded-full mb-2 tracking-wide uppercase">
          Terverifikasi Aman Escrow
        </span>

        <h1 className="text-2xl font-extrabold tracking-tight">Pembayaran Berhasil!</h1>
        <p className="text-xs text-orange-100 mt-1 max-w-[280px] leading-relaxed">
          Dana Anda telah diamankan di Rekening Bersama (Escrow) LIX dan siap digunakan untuk pengerjaan proyek.
        </p>
      </div>

      {/* White Receipt Card */}
      <div className="w-full bg-white rounded-2xl shadow-xl text-[#191c1d] p-5 flex flex-col gap-3.5 z-10 animate-in fade-in slide-in-from-bottom-4 duration-300">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
              Status Transaksi
            </span>
            <span className="inline-flex items-center gap-1 text-emerald-700 font-extrabold text-xs mt-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>LUNAS ESCROW</span>
            </span>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
              Nomor Pesanan
            </span>
            <span className="text-xs font-mono font-bold text-gray-800 block mt-0.5">
              {order.orderNumber}
            </span>
          </div>
        </div>

        {/* Mitra snapshot */}
        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
          <img
            src={order.mitraAvatar}
            alt={order.mitraName}
            className="w-11 h-11 rounded-xl object-cover ring-1 ring-orange-200"
          />
          <div className="flex-1 min-w-0">
            <span className="text-[10px] font-bold text-[#ff6200] block">
              {order.mitraRole}
            </span>
            <h4 className="text-xs font-bold text-gray-900 truncate">
              {order.mitraName}
            </h4>
            <span className="text-[10px] text-gray-500 truncate block">
              {order.serviceName}
            </span>
          </div>
        </div>

        {/* Breakdown table */}
        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between text-gray-600">
            <span>Metode Bayar</span>
            <span className="font-semibold text-gray-900">{order.bankName}</span>
          </div>
          <div className="flex items-center justify-between text-gray-600">
            <span>Waktu Transaksi</span>
            <span className="font-semibold text-gray-900">{order.createdAt}</span>
          </div>
          <div className="flex items-center justify-between text-gray-600">
            <span>Jadwal Kunjungan</span>
            <span className="font-semibold text-gray-900 truncate max-w-[200px]">
              {order.schedule.split('(')[0]}
            </span>
          </div>
          <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-sm">
            <span className="font-bold text-gray-900">Total Terbayar</span>
            <span className="text-base font-extrabold text-[#ff6200]">
              Rp {order.totalAmount.toLocaleString('id-ID')}
            </span>
          </div>
        </div>

        {/* Guarantee Pill */}
        <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center gap-2 text-emerald-950 text-xs">
          <span className="material-symbols-outlined text-emerald-700 text-[18px]">
            verified_user
          </span>
          <span className="text-[11px] font-semibold leading-tight">
            Garansi Retensi {order.guaranteeDays} Hari aktif sejak pekerjaan disetujui.
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-2.5 pt-4 pb-2 z-10">
        <button
          onClick={onViewOrderTracking}
          className="w-full h-12 rounded-xl bg-white text-[#ff6200] hover:bg-orange-50 active:scale-[0.99] font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">receipt_long</span>
          <span>Pantau Status Pesanan & Chat Mitra</span>
        </button>

        <button
          onClick={onReturnHome}
          className="w-full h-11 rounded-xl bg-black/15 hover:bg-black/25 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
        >
          <span>Kembali ke Beranda Utama</span>
        </button>
      </div>
    </div>
  );
};
