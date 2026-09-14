import React from 'react';
import { MitraId } from '../types';
import { MITRA_DATA_MAP } from '../data/mitraData';

interface FavoritesTabProps {
  onSelectMitra: (id: MitraId) => void;
  onExplore: () => void;
}

export const FavoritesTab: React.FC<FavoritesTabProps> = ({ onSelectMitra, onExplore }) => {
  const favoriteMitraIds: MitraId[] = ['joko', 'dwi', 'yanto'];

  return (
    <div className="w-full max-w-[430px] mx-auto min-h-screen bg-[#f8f9fa] text-[#191c1d] flex flex-col pb-24 relative">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md px-4 py-3 border-b border-gray-100 flex items-center justify-between shadow-xs">
        <div>
          <h1 className="text-base font-bold text-gray-900 leading-tight">Mitra Favorit Anda</h1>
          <p className="text-[11px] text-gray-500">Tersimpan untuk pemesanan cepat proyek Anda</p>
        </div>
        <span className="material-symbols-outlined text-[#ff6200] text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
          favorite
        </span>
      </header>

      {/* Content */}
      <div className="px-4 pt-3 flex flex-col gap-3">
        {favoriteMitraIds.map(id => {
          const mitra = MITRA_DATA_MAP[id];
          return (
            <div
              key={id}
              className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs flex flex-col gap-3"
            >
              <div className="flex items-start gap-3">
                <img
                  referrerPolicy="no-referrer"
                  src={mitra.avatar}
                  alt={mitra.name}
                  className="w-14 h-14 rounded-2xl object-cover ring-1 ring-orange-200"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-gray-900 truncate">{mitra.name}</h3>
                    <span className="text-[10px] font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded-full">
                      {mitra.roleCategory}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 truncate mt-0.5">{mitra.fullRole}</p>
                  <div className="flex items-center gap-2 mt-1 text-xs font-bold text-amber-500">
                    <div className="flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span>{mitra.rating}</span>
                    </div>
                    <span className="text-gray-300">•</span>
                    <span className="text-emerald-700 font-semibold text-[11px]">
                      Garansi {mitra.guaranteeDays} Hari
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100 flex items-center justify-between gap-2">
                <div className="min-w-0 shrink">
                  <span className="text-[10px] text-gray-400 block leading-tight mb-0.5">Tarif Mulai</span>
                  <span className="text-xs sm:text-sm font-extrabold text-[#ff6200] whitespace-nowrap leading-tight block">
                    Rp {mitra.priceDiscounted.toLocaleString('id-ID')}
                  </span>
                  <span className="text-[10px] font-semibold text-gray-500 whitespace-nowrap leading-none mt-0.5 block">
                    / {mitra.priceUnit}
                  </span>
                </div>

                <button
                  onClick={() => onSelectMitra(id)}
                  className="px-3 sm:px-4 py-2 bg-[#ff6200] hover:bg-[#e05600] active:scale-95 text-white text-xs font-bold rounded-xl shadow-xs transition-all whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span className="whitespace-nowrap">Pesan & Lihat Portofolio</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
