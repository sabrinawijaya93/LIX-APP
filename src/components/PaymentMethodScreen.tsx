import React, { useState } from 'react';
import { MitraData, BankOption } from '../types';
import { BANK_OPTIONS } from '../data/mitraData';

interface PaymentMethodScreenProps {
  mitra: MitraData;
  totalAmount: number;
  onBack: () => void;
  onConfirmPayment: (selectedBank: BankOption) => void;
}

export const PaymentMethodScreen: React.FC<PaymentMethodScreenProps> = ({
  mitra,
  totalAmount,
  onBack,
  onConfirmPayment
}) => {
  const [selectedBankId, setSelectedBankId] = useState<string>('bca');
  const [isProcessing, setIsProcessing] = useState(false);

  const selectedBank = BANK_OPTIONS.find(b => b.id === selectedBankId) || BANK_OPTIONS[0];

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onConfirmPayment(selectedBank);
    }, 900);
  };

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
            <h1 className="text-sm font-bold text-gray-900 leading-tight">Metode Pembayaran</h1>
            <span className="text-[10px] text-gray-500 font-medium">Rekber Escrow Resmi LIX</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-emerald-700 text-xs font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
          <span className="material-symbols-outlined text-[14px]">lock</span>
          <span>Aman</span>
        </div>
      </header>

      {/* Main Container */}
      <div className="px-4 pt-3 flex flex-col gap-3.5">
        {/* Escrow Guarantee Notice Card */}
        <div className="bg-emerald-50 border border-emerald-200/90 rounded-2xl p-3.5 flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-[20px]">verified_user</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xs font-bold text-emerald-950">
              Jaminan Rekening Bersama (Escrow) LIX
            </h3>
            <p className="text-[11px] text-emerald-900/90 leading-relaxed mt-0.5">
              Dana Anda 100% aman di penampungan resmi LIX. Mitra hanya menerima bayaran setelah Anda mengonfirmasi hasil pengerjaan selesai sesuai standar BLK.
            </p>
          </div>
        </div>

        {/* Order Summary Snapshot */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={mitra.avatar}
              alt={mitra.name}
              className="w-12 h-12 rounded-xl object-cover ring-1 ring-orange-200"
            />
            <div>
              <span className="text-[10px] font-bold text-orange-700 uppercase tracking-wider block">
                {mitra.shortRole}
              </span>
              <h4 className="text-xs font-bold text-gray-900">{mitra.name}</h4>
              <span className="text-[11px] text-gray-500">
                {mitra.orderNumber}
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-gray-500 block">Total Tagihan</span>
            <span className="text-sm font-extrabold text-[#ff6200]">
              Rp {totalAmount.toLocaleString('id-ID')}
            </span>
          </div>
        </div>

        {/* Bank Transfer / VA List */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-gray-900">
              Transfer Virtual Account (Verifikasi Otomatis)
            </h3>
            <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
              Bebas Biaya Admin
            </span>
          </div>

          <div className="flex flex-col gap-2.5">
            {BANK_OPTIONS.map(bank => {
              const isSelected = selectedBankId === bank.id;
              return (
                <div
                  key={bank.id}
                  onClick={() => setSelectedBankId(bank.id)}
                  className={`bg-white rounded-2xl p-3.5 border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'border-[#ff6200] ring-2 ring-orange-500/20 shadow-xs'
                      : 'border-gray-200/90 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-9 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center p-1">
                      <img
                        src={bank.logo}
                        alt={bank.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-gray-900">{bank.name}</span>
                        {bank.isPopular && (
                          <span className="text-[9px] font-bold text-orange-700 bg-orange-100 px-1.5 py-0.2 rounded">
                            Populer
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-gray-500 leading-tight mt-0.5">
                        {bank.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Radio indicator */}
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'border-[#ff6200] bg-[#ff6200]'
                        : 'border-gray-300 bg-white'
                    }`}
                  >
                    {isSelected && (
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Security Seals */}
        <div className="bg-gray-50 rounded-2xl p-3 border border-gray-200/80 flex items-center justify-around text-center">
          <div className="flex flex-col items-center gap-1">
            <span className="material-symbols-outlined text-[#ff6200] text-[20px]">
              verified
            </span>
            <span className="text-[10px] font-bold text-gray-700">Mitra BLK Terverifikasi</span>
          </div>
          <div className="w-px h-8 bg-gray-200"></div>
          <div className="flex flex-col items-center gap-1">
            <span className="material-symbols-outlined text-emerald-600 text-[20px]">
              security
            </span>
            <span className="text-[10px] font-bold text-gray-700">Escrow Proteksi 100%</span>
          </div>
          <div className="w-px h-8 bg-gray-200"></div>
          <div className="flex flex-col items-center gap-1">
            <span className="material-symbols-outlined text-blue-600 text-[20px]">
              handshake
            </span>
            <span className="text-[10px] font-bold text-gray-700">Garansi Bebas Ghosting</span>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Pay Bar */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white/95 backdrop-blur-md border-t border-gray-200/90 px-4 py-3 z-40 flex items-center justify-between shadow-lg">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-500 font-medium">Total Tagihan</span>
          <span className="text-lg font-extrabold text-[#ff6200]">
            Rp {totalAmount.toLocaleString('id-ID')}
          </span>
          <span className="text-[10px] text-gray-500">{selectedBank.name}</span>
        </div>

        <button
          onClick={handlePay}
          disabled={isProcessing}
          className="px-6 py-3 bg-[#ff6200] hover:bg-[#e05600] active:scale-95 text-white font-extrabold text-xs rounded-xl shadow-md shadow-orange-500/25 flex items-center gap-2 transition-all cursor-pointer select-none"
        >
          {isProcessing ? (
            <>
              <span className="material-symbols-outlined animate-spin text-[18px]">
                progress_activity
              </span>
              <span>Memproses Escrow...</span>
            </>
          ) : (
            <>
              <span>Bayar Sekarang</span>
              <span className="material-symbols-outlined text-[16px]">check</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
