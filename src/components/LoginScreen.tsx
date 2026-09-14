import React, { useState } from 'react';
import { LIX_LOGO_HELMET } from '../data/mitraData';

interface LoginScreenProps {
  onLoginSuccess: () => void;
  onContinueAsGuest?: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess, onContinueAsGuest }) => {
  const [phoneNumber, setPhoneNumber] = useState('812 3456 7890');
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [showMitraRegisterModal, setShowMitraRegisterModal] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.startsWith('0')) val = val.substring(1);
    if (val.startsWith('62')) val = val.substring(2);

    let formatted = '';
    if (val.length > 0) {
      formatted = val.substring(0, 3);
      if (val.length > 3) formatted += ' ' + val.substring(3, 7);
      if (val.length > 7) formatted += ' ' + val.substring(7, 12);
    }
    setPhoneNumber(formatted);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.replace(/\s+/g, '').length < 8) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSentSuccess(true);
      setTimeout(() => {
        onLoginSuccess();
      }, 700);
    }, 900);
  };

  const handleGoogleLogin = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      onLoginSuccess();
    }, 600);
  };

  return (
    <div className="w-full max-w-[430px] mx-auto min-h-screen bg-[#f8f9fa] flex flex-col justify-between px-4 py-6 text-[#191c1d] relative">
      {/* Top Graphic & Header */}
      <div className="flex flex-col items-center justify-center pt-4 pb-3 text-center">
        <div className="relative w-36 h-36 flex items-center justify-center mb-3">
          <img
            alt="Logo Resmi LIX Tukang Bangunan"
            className="w-full h-full object-contain select-none mix-blend-multiply"
            src={LIX_LOGO_HELMET}
          />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffdbcd] text-[#541b00] text-xs font-bold mb-3 shadow-xs">
          <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            verified
          </span>
          <span>Mitra Tukang Bangunan Terpercaya</span>
        </div>

        <h1 className="text-2xl font-bold text-[#191c1d] tracking-tight max-w-[290px] leading-tight">
          Solusi Anti Ghosting Jasa Tenaga Konstruksi
        </h1>
        <p className="text-sm text-[#555f6f] mt-1.5 max-w-[290px] leading-relaxed">
          Panggil tenaga kerja konstruksi untuk memecahkan masalah Anda.
        </p>
      </div>

      {/* Login Card Form */}
      <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col gap-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone-input" className="text-xs font-bold text-[#191c1d] flex items-center gap-1">
              <span>Nomor WhatsApp / HP</span>
              <span className="text-[#a53d00]">*</span>
            </label>
            <div className="flex items-center h-12 w-full rounded-xl bg-[#f3f4f5] px-3 transition-all focus-within:bg-white focus-within:ring-2 focus-within:ring-[#ff6200] border border-transparent focus-within:border-transparent">
              <div className="flex items-center gap-1.5 pr-2 mr-2">
                <span className="text-sm font-bold text-[#191c1d]">🇮🇩 +62</span>
                <span className="w-px h-5 bg-gray-300"></span>
              </div>
              <input
                id="phone-input"
                type="tel"
                maxLength={14}
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="812 3456 7890"
                className="w-full bg-transparent text-base font-medium text-[#191c1d] placeholder:text-gray-400 focus:outline-none"
              />
              <span className="material-symbols-outlined text-gray-400 text-xl select-none">
                phone_iphone
              </span>
            </div>
            <p className="text-[11px] text-[#555f6f]">
              Kode verifikasi OTP instan akan dikirim via WhatsApp.
            </p>
          </div>

          <button
            type="submit"
            id="btn-login-submit"
            disabled={isSending}
            className="w-full h-12 rounded-xl bg-[#ff6200] hover:bg-[#e05600] active:scale-[0.99] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-orange-500/20 transition-all cursor-pointer select-none"
          >
            {isSending ? (
              <>
                <span className="material-symbols-outlined animate-spin text-[20px]">
                  progress_activity
                </span>
                <span>Mengirim OTP Instan...</span>
              </>
            ) : sentSuccess ? (
              <>
                <span className="material-symbols-outlined text-[20px]">
                  check_circle
                </span>
                <span>Terkirim ke WhatsApp!</span>
              </>
            ) : (
              <>
                <span>Masuk / Lanjut</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </>
            )}
          </button>
        </form>

        <div className="flex items-center gap-3 my-0.5">
          <span className="h-px flex-1 bg-gray-200"></span>
          <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase">
            atau masuk dengan
          </span>
          <span className="h-px flex-1 bg-gray-200"></span>
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full h-12 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-[#191c1d] font-bold text-sm flex items-center justify-center gap-3 shadow-xs active:scale-[0.99] transition-all cursor-pointer select-none"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              fill="#EA4335"
            />
          </svg>
          <span>Akun Google</span>
        </button>

        {onContinueAsGuest && (
          <button
            type="button"
            onClick={onContinueAsGuest}
            className="text-xs font-semibold text-[#a53d00] hover:underline text-center mt-1 py-1"
          >
            Lihat Layanan & Mitra Tanpa Login →
          </button>
        )}
      </div>

      {/* Ingin Jadi Mitra Tukang Box */}
      <div className="mt-4 bg-[#f3f4f5] rounded-2xl p-4 flex items-center justify-between border border-gray-200/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#ffdbcd] flex items-center justify-center text-[#ff6200]">
            <span className="material-symbols-outlined text-[22px]">engineering</span>
          </div>
          <div>
            <p className="text-xs font-bold text-[#191c1d]">Ingin jadi Mitra Tukang?</p>
            <p className="text-[11px] text-[#555f6f]">Dapat order proyek harian di area Anda</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setShowMitraRegisterModal(true)}
          className="px-3.5 py-1.5 rounded-lg bg-white border border-gray-200 text-[#ff6200] font-bold text-xs hover:bg-orange-50 active:scale-95 transition-all shadow-xs"
        >
          Daftar
        </button>
      </div>

      {/* Footer Disclaimer */}
      <div className="mt-5 flex flex-col items-center text-center gap-1.5">
        <p className="text-xs text-[#555f6f] max-w-xs leading-relaxed">
          Dengan menekan Masuk atau Daftar, Anda menyetujui{' '}
          <span className="text-[#a53d00] font-semibold cursor-pointer hover:underline">
            Syarat & Ketentuan
          </span>{' '}
          serta{' '}
          <span className="text-[#a53d00] font-semibold cursor-pointer hover:underline">
            Kebijakan Privasi LIX
          </span>
          .
        </p>
        <div className="flex items-center gap-1.5 text-gray-500 mt-1">
          <span className="material-symbols-outlined text-[14px]">lock</span>
          <span className="text-[11px] font-semibold">Enkripsi Data 256-bit Terproteksi</span>
        </div>
      </div>

      {/* Modal Mitra Register */}
      {showMitraRegisterModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-5 max-w-sm w-full shadow-2xl border border-gray-100 flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ff6200] text-[22px]">
                  engineering
                </span>
                <h3 className="font-bold text-sm text-gray-900">Pendaftaran Mitra BLK & LIX</h3>
              </div>
              <button
                onClick={() => setShowMitraRegisterModal(false)}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Bergabunglah dengan ratusan tenaga kerja konstruksi berlisensi resmi Kemnaker dan asosiasi profesi.
            </p>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 bg-orange-50 rounded-xl border border-orange-100 text-orange-950 font-medium">
                ✓ Pelatihan sertifikasi resmi Balai Latihan Kerja (BLK)
              </div>
              <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-100 text-emerald-950 font-medium">
                ✓ Pembayaran terjamin aman via Rekber Escrow LIX
              </div>
              <div className="p-2.5 bg-blue-50 rounded-xl border border-blue-100 text-blue-950 font-medium">
                ✓ Perlindungan asuransi kerja dan retensi proyek
              </div>
            </div>
            <button
              onClick={() => {
                setShowMitraRegisterModal(false);
                alert('Pendaftaran mitra berhasil diajukan. Tim seleksi verifikasi BLK LIX akan menghubungi WhatsApp Anda!');
              }}
              className="w-full py-3 bg-[#ff6200] text-white font-bold text-xs rounded-xl shadow hover:bg-[#e05600] transition-colors mt-2"
            >
              Lanjutkan Registrasi Mitra
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
