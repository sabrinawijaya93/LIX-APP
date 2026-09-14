import React, { useState } from 'react';
import { MitraId, MitraData, PortfolioProject } from '../types';
import { MITRA_DATA_MAP } from '../data/mitraData';

interface MitraProfileScreenProps {
  mitraId: MitraId;
  onSelectMitra: (id: MitraId) => void;
  onBack: () => void;
  onProceedBooking: (mitra: MitraData) => void;
  onOpenChat: (mitra: MitraData) => void;
}

export const MitraProfileScreen: React.FC<MitraProfileScreenProps> = ({
  mitraId,
  onSelectMitra,
  onBack,
  onProceedBooking,
  onOpenChat
}) => {
  const mitra = MITRA_DATA_MAP[mitraId];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isFavorite, setIsFavorite] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'photo' | 'five'>('all');
  const [previewModal, setPreviewModal] = useState<{
    url: string;
    title: string;
    subtitle?: string;
    project?: (typeof mitra.portfolioProjects)[0];
  } | null>(null);
  const [activeImages, setActiveImages] = useState<Record<string, string>>({});
  const [fitModes, setFitModes] = useState<Record<string, 'cover' | 'contain'>>({});

  const allMitraIds: MitraId[] = ['joko', 'dwi', 'yanto', 'hendra'];

  const filteredProjects = mitra.portfolioProjects.filter(p => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  const filteredReviews = mitra.reviews.filter(r => {
    if (reviewFilter === 'photo') return r.hasPhoto;
    if (reviewFilter === 'five') return r.stars === 5;
    return true;
  });

  return (
    <div className="w-full max-w-[430px] mx-auto min-h-screen bg-[#f8f9fa] text-[#191c1d] flex flex-col pb-28 relative">
      {/* Top Navigation Bar */}
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
            <h1 className="text-sm font-bold text-gray-900 leading-tight">Profil Mitra BLK</h1>
            <span className="text-[10px] text-gray-500 font-medium">LIX Tenaga Terverifikasi</span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => onOpenChat(mitra)}
            className="w-9 h-9 rounded-full hover:bg-orange-50 flex items-center justify-center text-[#ff6200] transition-colors"
            title="Chat Konsultasi"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
          </button>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: `${mitra.name} - Mitra LIX`,
                  text: `Lihat profil dan portofolio terverifikasi ${mitra.name} di LIX`,
                  url: window.location.href
                }).catch(() => {});
              } else {
                navigator.clipboard?.writeText(window.location.href);
                alert('Tautan profil mitra telah disalin ke clipboard!');
              }
            }}
            className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-700 transition-colors"
            aria-label="Bagikan"
          >
            <span className="material-symbols-outlined text-[20px]">share</span>
          </button>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors ${
              isFavorite ? 'text-red-500' : 'text-gray-700'
            }`}
            aria-label="Simpan Favorit"
          >
            <span
              className="material-symbols-outlined text-[20px]"
              style={{ fontVariationSettings: isFavorite ? "'FILL' 1" : "'FILL' 0" }}
            >
              favorite
            </span>
          </button>
        </div>
      </header>

      {/* Persona Quick Switcher Chips */}
      <div className="bg-white border-b border-gray-100 px-4 py-2.5">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
            Ganti Mitra Konstruksi:
          </span>
          <span className="text-[10px] text-[#ff6200] font-semibold">4 Tenaga Binaan</span>
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {allMitraIds.map(id => {
            const m = MITRA_DATA_MAP[id];
            const isCurrent = m.id === mitraId;
            return (
              <button
                key={id}
                onClick={() => onSelectMitra(id)}
                className={`px-3 py-1.5 rounded-xl text-xs whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isCurrent
                    ? 'bg-[#ff6200] text-white font-bold shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium'
                }`}
              >
                <img
                  referrerPolicy="no-referrer"
                  src={m.avatar}
                  alt={m.name}
                  className="w-4 h-4 rounded-full object-cover"
                />
                <span>{m.name.split(',')[0]}</span>
                <span className="text-[10px] opacity-80">({m.shortRole})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Container */}
      <div className="px-4 pt-3 flex flex-col gap-3.5">
        {/* Profile Info Card */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs flex flex-col gap-3">
          {/* Top verified ribbon */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-50 border border-orange-200/70 text-[#541b00] text-xs font-bold self-start">
            <span className="material-symbols-outlined text-[#ff6200] text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
            <span>{mitra.badgeTopText}</span>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="relative flex-shrink-0">
              <img
                referrerPolicy="no-referrer"
                src={mitra.avatar}
                alt={mitra.name}
                className="w-20 h-20 rounded-2xl object-cover ring-2 ring-orange-200 shadow-sm"
              />
              <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full ring-2 ring-white flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[12px]">check</span>
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <h2 className="text-base font-extrabold text-gray-900 leading-snug truncate">
                  {mitra.name}
                </h2>
              </div>
              <p className="text-xs font-semibold text-gray-600 mt-0.5 leading-snug">
                {mitra.fullRole}
              </p>

              <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
                <span className="material-symbols-outlined text-[14px] text-gray-400">
                  location_on
                </span>
                <span>{mitra.location}</span>
              </div>

              <div className="flex items-center gap-1 text-xs mt-1 font-bold text-amber-500">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                <span>{mitra.rating}</span>
                <span className="text-gray-400 font-normal">({mitra.reviewCount} ulasan klien)</span>
              </div>
            </div>
          </div>

          {/* Stats 4 Grid */}
          <div className="grid grid-cols-4 gap-2 pt-2 border-t border-gray-100 text-center">
            <div className="p-2 rounded-xl bg-gray-50 flex flex-col items-center justify-center">
              <span className="text-sm font-extrabold text-gray-900">{mitra.experienceYears} Thn</span>
              <span className="text-[10px] text-gray-500">Pengalaman</span>
            </div>
            <div className="p-2 rounded-xl bg-gray-50 flex flex-col items-center justify-center">
              <span className="text-sm font-extrabold text-[#ff6200]">{mitra.completedProjects}</span>
              <span className="text-[10px] text-gray-500">Proyek Beres</span>
            </div>
            <div className="p-2 rounded-xl bg-gray-50 flex flex-col items-center justify-center">
              <span className="text-sm font-extrabold text-amber-600">{mitra.rating}</span>
              <span className="text-[10px] text-gray-500">Rating</span>
            </div>
            <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-100 flex flex-col items-center justify-center">
              <span className="text-sm font-extrabold text-emerald-700">{mitra.guaranteeDays} Hari</span>
              <span className="text-[10px] text-emerald-800">Garansi LIX</span>
            </div>
          </div>
        </div>

        {/* Jaminan Standar Kualitas Card */}
        <div className="bg-emerald-50/70 border border-emerald-200/90 rounded-2xl p-3.5 flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-[18px]">verified_user</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xs font-bold text-emerald-950">{mitra.guaranteeTitle}</h3>
            <p className="text-[11px] text-emerald-900/90 leading-relaxed mt-0.5">
              {mitra.guaranteeDesc}
            </p>
          </div>
        </div>

        {/* Sertifikasi Resmi & Akreditasi Card */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs flex flex-col gap-3">
          <div>
            <h3 className="text-sm font-bold text-gray-900">Sertifikasi Resmi & Akreditasi</h3>
            <p className="text-[11px] text-emerald-700 font-medium mt-0.5 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">task_alt</span>
              <span>{mitra.verifiedStatusText}</span>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {mitra.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-gray-50 border border-gray-100 flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#ff6200] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">{cert.iconName}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[11px] font-bold text-gray-900 truncate">
                      {cert.institution}
                    </span>
                    <span className="text-[9px] font-extrabold text-orange-800 bg-orange-100 px-2 py-0.5 rounded-full flex-shrink-0">
                      {cert.badge}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mt-0.5 leading-snug">{cert.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portofolio Proyek Terverifikasi */}
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-gray-900">Portofolio Proyek Terverifikasi</h3>
              <p className="text-[11px] text-gray-500">Hasil pengerjaan nyata dengan uji mutu BLK</p>
            </div>
            <span className="text-xs font-bold text-gray-500">
              {mitra.portfolioProjects.length} Proyek
            </span>
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {mitra.portfolioCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1 rounded-full text-xs whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#ff6200] text-white font-bold shadow-xs'
                    : 'bg-white text-gray-600 border border-gray-200 font-medium'
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>

          {/* Portfolio Projects Cards */}
          <div className="flex flex-col gap-3.5">
            {filteredProjects.map(project => {
              const activeImg = activeImages[project.id] || project.mainImage;
              // Default to 'contain' (Foto Utuh) so photos are 100% visible and never cropped in half
              const isContain = fitModes[project.id] !== 'cover';

              return (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-2xs flex flex-col"
                >
                  {/* Image Container with Badges */}
                  <div
                    className="relative w-full aspect-[16/10] sm:aspect-[16/9] min-h-[220px] max-h-[300px] bg-slate-900 cursor-pointer group overflow-hidden select-none"
                    onClick={() => {
                      setPreviewModal({
                        url: activeImg,
                        title: project.title,
                        subtitle: `${project.categoryLabel} • ${project.location}`,
                        project: project
                      });
                    }}
                  >
                    {/* Ambient Blurred Background to seamlessly fill margins without ugly black bars */}
                    <div
                      className="absolute inset-0 bg-cover bg-center filter blur-md opacity-30 scale-110 pointer-events-none"
                      style={{ backgroundImage: `url(${activeImg})` }}
                    />

                    <img
                      referrerPolicy="no-referrer"
                      src={activeImg}
                      alt={project.title}
                      className={`relative z-10 w-full h-full transition-transform duration-300 ${
                        isContain
                          ? 'object-contain p-2'
                          : 'object-cover object-center group-hover:scale-103'
                      }`}
                      onError={(e) => {
                        const target = e.currentTarget;
                        const fallback = project.fallbackImage || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop';
                        if (target.src !== fallback) {
                          target.src = fallback;
                        }
                      }}
                    />
                    {/* Subtle gradient vignette at top & bottom only */}
                    <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-10"></div>
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10"></div>

                    {/* Top Bar on Image */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none z-20">
                      <span className="px-2.5 py-1 bg-[#ff6200] text-white text-[10px] font-bold rounded-lg shadow-sm">
                        {project.categoryLabel}
                      </span>

                      <div className="flex items-center gap-1.5 pointer-events-auto">
                        {/* Toggle Foto Utuh / Penuh */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setFitModes(prev => ({
                              ...prev,
                              [project.id]: prev[project.id] === 'cover' ? 'contain' : 'cover'
                            }));
                          }}
                          className="px-2.5 py-1 bg-black/65 hover:bg-black/85 backdrop-blur-xs text-white text-[10px] font-medium rounded-lg flex items-center gap-1 transition-colors border border-white/20"
                          title="Ganti mode gambar antara Foto Utuh (Contain) dan Zoom (Cover)"
                        >
                          <span className="material-symbols-outlined text-[13px]">
                            {isContain ? 'crop_free' : 'aspect_ratio'}
                          </span>
                          <span>{isContain ? 'Mode Zoom' : 'Foto Utuh'}</span>
                        </button>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setPreviewModal({
                              url: activeImg,
                              title: project.title,
                              subtitle: `${project.categoryLabel} • ${project.location}`,
                              project: project
                            });
                          }}
                          className="px-2.5 py-1 bg-black/65 hover:bg-black/85 backdrop-blur-xs text-white text-[10px] font-medium rounded-lg flex items-center gap-1 border border-white/20 transition-colors"
                        >
                          <span className="material-symbols-outlined text-[13px]">zoom_in</span>
                          <span>Perbesar</span>
                        </button>
                      </div>
                    </div>

                    {/* Bottom Info on Image */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-xs pointer-events-none z-20">
                      <span className="font-semibold truncate drop-shadow-md max-w-[65%]">
                        {project.location}
                      </span>
                      <span className="text-[10px] font-mono bg-black/40 backdrop-blur-xs border border-white/20 px-2 py-0.5 rounded text-white flex-shrink-0">
                        {project.tagBottomRight}
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-4 flex flex-col gap-3">
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 leading-snug">
                        {project.title}
                      </h4>
                      {project.statusTag && (
                        <span className="inline-flex items-center gap-1 text-[10px] text-emerald-600 font-bold mt-1">
                          <span className="material-symbols-outlined text-[13px]">verified</span>
                          <span>Proyek Disetujui Escrow ({project.statusTag})</span>
                        </span>
                      )}
                    </div>

                    {/* Metrics bar */}
                    <div className="grid grid-cols-3 gap-2 bg-gray-50 rounded-xl p-2.5 text-center">
                      <div>
                        <span className="text-[10px] text-gray-500 block">Nilai/Biaya</span>
                        <span className="text-xs font-bold text-gray-900">{project.costEstimate}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-500 block">Durasi Kerja</span>
                        <span className="text-xs font-bold text-gray-900">{project.duration}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-500 block">{project.precisionLabel}</span>
                        <span className="text-xs font-bold text-[#ff6200]">
                          {project.precisionValue}
                        </span>
                      </div>
                    </div>

                    {/* Specs List */}
                    <div className="space-y-1 text-xs text-gray-600">
                      {project.specs.map((spec, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-[#ff6200] text-[15px] flex-shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>

                    {/* Gallery previews - Interactive Thumbnail Selector */}
                    {project.galleryPreviews && project.galleryPreviews.length > 0 && (
                      <div className="flex flex-col gap-1.5 pt-1 border-t border-gray-100">
                        <div className="flex items-center justify-between text-[11px] text-gray-500">
                          <span className="font-semibold text-gray-700">Galeri Foto ({project.galleryPreviews.length} Sudut):</span>
                          <span className="text-[10px] text-[#ff6200] font-medium">Klik untuk mengganti tampilan</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {project.galleryPreviews.map((gal, gIdx) => {
                            const isSelected = activeImg === gal.image;
                            return (
                              <button
                                key={gIdx}
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveImages(prev => ({ ...prev, [project.id]: gal.image }));
                                  setFitModes(prev => ({ ...prev, [project.id]: 'contain' }));
                                }}
                                className={`flex-1 h-14 rounded-lg overflow-hidden border relative cursor-pointer group transition-all text-left ${
                                  isSelected
                                    ? 'ring-2 ring-[#ff6200] border-transparent shadow-xs scale-102'
                                    : 'border-gray-200 hover:border-gray-300 opacity-80 hover:opacity-100'
                                }`}
                              >
                                <img
                                  referrerPolicy="no-referrer"
                                  src={gal.image}
                                  alt={gal.label}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                  onError={(e) => {
                                    const target = e.currentTarget;
                                    const fb = project.fallbackImage || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop';
                                    if (target.src !== fb) target.src = fb;
                                  }}
                                />
                                <span className={`absolute inset-x-0 bottom-0 text-[9px] text-center py-0.5 font-bold truncate px-1 transition-colors ${
                                  isSelected ? 'bg-[#ff6200] text-white' : 'bg-black/65 text-white'
                                }`}>
                                  {gal.label}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Client Quote */}
                    {project.clientQuote && (
                      <div className="p-3 bg-orange-50/50 rounded-xl border border-orange-100 text-xs">
                        <p className="italic text-gray-700 leading-relaxed">{project.clientQuote}</p>
                        {project.clientAuthor && (
                          <p className="text-[11px] font-bold text-[#541b00] mt-1 text-right">
                            — {project.clientAuthor}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Verified Reviews Section */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-gray-900">Ulasan Klien Terverifikasi</h3>
              <p className="text-[11px] text-gray-500">Transparansi pembayaran melalui Escrow LIX</p>
            </div>
            <div className="flex items-center gap-1 text-amber-500 font-extrabold text-sm">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <span>{mitra.rating} / 5.0</span>
            </div>
          </div>

          {/* Rating Breakdown & Stats */}
          <div className="p-3 bg-gray-50 rounded-xl flex flex-col gap-2">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-white p-2 rounded-lg border border-gray-200/60">
                <span className="text-[10px] text-gray-500 block">{mitra.ratingBreakdown.stat1Label}</span>
                <span className="text-xs font-bold text-gray-900">{mitra.ratingBreakdown.stat1Value}</span>
              </div>
              <div className="bg-white p-2 rounded-lg border border-gray-200/60">
                <span className="text-[10px] text-gray-500 block">{mitra.ratingBreakdown.stat2Label}</span>
                <span className="text-xs font-bold text-gray-900">{mitra.ratingBreakdown.stat2Value}</span>
              </div>
              <div className="bg-white p-2 rounded-lg border border-gray-200/60">
                <span className="text-[10px] text-gray-500 block">{mitra.ratingBreakdown.stat3Label}</span>
                <span className="text-xs font-bold text-emerald-700">{mitra.ratingBreakdown.stat3Value}</span>
              </div>
            </div>

            {/* Filter review buttons */}
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={() => setReviewFilter('all')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  reviewFilter === 'all'
                    ? 'bg-[#ff6200] text-white'
                    : 'bg-white border border-gray-200 text-gray-700'
                }`}
              >
                Semua ({mitra.reviews.length})
              </button>
              <button
                onClick={() => setReviewFilter('photo')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                  reviewFilter === 'photo'
                    ? 'bg-[#ff6200] text-white'
                    : 'bg-white border border-gray-200 text-gray-700'
                }`}
              >
                <span className="material-symbols-outlined text-[13px]">image</span>
                <span>Dengan Foto</span>
              </button>
              <button
                onClick={() => setReviewFilter('five')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                  reviewFilter === 'five'
                    ? 'bg-[#ff6200] text-white'
                    : 'bg-white border border-gray-200 text-gray-700'
                }`}
              >
                <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                <span>Bintang 5</span>
              </button>
            </div>
          </div>

          {/* Review List */}
          <div className="flex flex-col gap-3">
            {filteredReviews.map(rev => (
              <div
                key={rev.id}
                className="p-3 rounded-xl border border-gray-100 bg-white flex flex-col gap-2"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-orange-100 text-[#ff6200] font-bold text-xs flex items-center justify-center">
                      {rev.authorInitials}
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-gray-900">{rev.authorName}</span>
                        {rev.authorBadge && (
                          <span className="text-[9px] bg-gray-100 text-gray-600 px-1.5 py-0.2 rounded font-medium">
                            {rev.authorBadge}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-gray-400">{rev.projectTitle}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-amber-500">
                    {[...Array(rev.stars)].map((_, sIdx) => (
                      <span
                        key={sIdx}
                        className="material-symbols-outlined text-[14px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-bold self-start border border-emerald-100">
                  <span className="material-symbols-outlined text-[12px]">security</span>
                  <span>{rev.escrowTag}</span>
                </div>

                <p className="text-xs text-gray-700 leading-relaxed">{rev.comment}</p>

                {/* Review Photos */}
                {rev.photos && rev.photos.length > 0 && (
                  <div className="flex items-center gap-2 pt-1">
                    {rev.photos.map((ph, pIdx) => (
                      <div
                        key={pIdx}
                        onClick={() => setPreviewModal({
                          url: ph.image,
                          title: rev.projectTitle,
                          subtitle: `Hasil Pekerjaan • ${ph.label}`
                        })}
                        className="w-16 h-16 rounded-lg overflow-hidden border border-gray-200 cursor-pointer hover:opacity-90 transition-opacity"
                      >
                        <img
                          referrerPolicy="no-referrer"
                          src={ph.image}
                          alt={ph.label}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop';
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Mitra Official Reply */}
                {rev.mitraReply && (
                  <div className="p-2.5 rounded-lg bg-gray-50 border-l-2 border-[#ff6200] text-xs text-gray-600 flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#541b00] text-[11px]">
                        {rev.mitraReply.author}
                      </span>
                      <span className="text-[10px] text-gray-400">{rev.mitraReply.date}</span>
                    </div>
                    <p className="text-[11px] leading-relaxed italic">{rev.mitraReply.text}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Image Preview Lightbox Modal */}
      {previewModal && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 select-none"
          onClick={() => setPreviewModal(null)}
        >
          {/* Top Bar */}
          <div
            className="w-full max-w-lg flex items-center justify-between text-white pb-3 pt-1"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col min-w-0 pr-3">
              <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px]">photo_camera</span>
                <span>Foto Portofolio Utuh (100% Full View)</span>
              </span>
              <h3 className="text-sm font-bold text-white truncate mt-0.5">
                {previewModal.title}
              </h3>
              {previewModal.subtitle && (
                <p className="text-[11px] text-gray-400 truncate">{previewModal.subtitle}</p>
              )}
            </div>

            <button
              type="button"
              onClick={() => setPreviewModal(null)}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer flex-shrink-0"
              aria-label="Tutup"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          {/* Main Photo View Area */}
          <div
            className="relative flex-1 w-full max-w-lg flex items-center justify-center my-auto px-1"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              referrerPolicy="no-referrer"
              src={previewModal.url}
              alt={previewModal.title}
              className="w-auto h-auto max-w-full max-h-[66vh] rounded-2xl shadow-2xl object-contain border border-white/15"
              onError={(e) => {
                const target = e.currentTarget;
                const fb = previewModal.project?.fallbackImage || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop';
                if (target.src !== fb) {
                  target.src = fb;
                }
              }}
            />
          </div>

          {/* Bottom Thumbnails Carousel if Project has multiple gallery previews */}
          {previewModal.project?.galleryPreviews && previewModal.project.galleryPreviews.length > 0 && (
            <div
              className="w-full max-w-lg pt-3 flex flex-col items-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 scrollbar-none px-1">
                {/* Main image thumbnail */}
                <button
                  type="button"
                  onClick={() => {
                    setPreviewModal(prev => prev ? ({
                      ...prev,
                      url: previewModal.project!.mainImage,
                      subtitle: `${previewModal.project!.categoryLabel} • Foto Utama`
                    }) : null);
                    setActiveImages(prev => ({ ...prev, [previewModal.project!.id]: previewModal.project!.mainImage }));
                  }}
                  className={`h-14 w-20 rounded-lg overflow-hidden border relative flex-shrink-0 cursor-pointer transition-all ${
                    previewModal.url === previewModal.project.mainImage
                      ? 'ring-2 ring-[#ff6200] border-transparent scale-105'
                      : 'border-white/20 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    referrerPolicy="no-referrer"
                    src={previewModal.project.mainImage}
                    alt="Utama"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (previewModal.project?.fallbackImage) target.src = previewModal.project.fallbackImage;
                    }}
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-black/70 text-[8px] text-white text-center py-0.5">
                    Utama
                  </span>
                </button>

                {/* Gallery previews */}
                {previewModal.project.galleryPreviews.map((g, idx) => {
                  const isSelected = previewModal.url === g.image;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setPreviewModal(prev => prev ? ({
                          ...prev,
                          url: g.image,
                          subtitle: `${previewModal.project!.title} • ${g.label}`
                        }) : null);
                        setActiveImages(prev => ({ ...prev, [previewModal.project!.id]: g.image }));
                      }}
                      className={`h-14 w-20 rounded-lg overflow-hidden border relative flex-shrink-0 cursor-pointer transition-all ${
                        isSelected
                          ? 'ring-2 ring-[#ff6200] border-transparent scale-105'
                          : 'border-white/20 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        referrerPolicy="no-referrer"
                        src={g.image}
                        alt={g.label}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (previewModal.project?.fallbackImage) target.src = previewModal.project.fallbackImage;
                        }}
                      />
                      <span className={`absolute inset-x-0 bottom-0 text-[8px] text-center py-0.5 font-bold ${
                        isSelected ? 'bg-[#ff6200] text-white' : 'bg-black/70 text-white'
                      }`}>
                        {g.label}
                      </span>
                    </button>
                  );
                })}
              </div>
              <span className="text-[10px] text-gray-400">
                Pilih foto untuk beralih tampilan • Klik di luar untuk menutup
              </span>
            </div>
          )}
        </div>
      )}

      {/* Sticky Bottom Booking Bar */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white/95 backdrop-blur-md border-t border-gray-200/90 px-4 py-3 z-40 flex items-center justify-between shadow-lg">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-gray-400 line-through">
              Rp {mitra.priceOriginal.toLocaleString('id-ID')}
            </span>
            <span className="text-[10px] font-extrabold text-[#ff6200] bg-orange-50 px-1.5 py-0.2 rounded">
              {mitra.discountBadge}
            </span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-base font-extrabold text-gray-900">
              Rp {mitra.priceDiscounted.toLocaleString('id-ID')}
            </span>
            <span className="text-xs text-gray-500">/ {mitra.priceUnit}</span>
          </div>
          <span className="text-[10px] text-emerald-700 font-semibold">{mitra.priceSubtext}</span>
        </div>

        <button
          onClick={() => onProceedBooking(mitra)}
          className="px-5 py-3 bg-[#ff6200] hover:bg-[#e05600] active:scale-95 text-white font-extrabold text-xs rounded-xl shadow-md shadow-orange-500/25 flex items-center gap-1.5 transition-all cursor-pointer"
        >
          <span>{mitra.ctaButtonText}</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
