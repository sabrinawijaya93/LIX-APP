import React from 'react';
import { MitraId } from '../types';
import { DWI_PRABOWO_IMG, JOKO_SANTOSO_IMG } from '../data/mitraData';

interface OrderDetailScreenProps {
  orderId: string;
  onBack: () => void;
  onTrackProject: (orderId: string) => void;
  onOpenChatWithMitra: (mitraId: MitraId) => void;
}

export const OrderDetailScreen: React.FC<OrderDetailScreenProps> = ({
  orderId,
  onBack,
  onTrackProject,
  onOpenChatWithMitra
}) => {
  // Map data according to the selected orderId
  const getOrderData = () => {
    switch (orderId) {
      case 'LX-MND-7820':
        return {
          orderNumber: '#LX-MND-7820',
          mitraId: 'yanto' as MitraId,
          mitraName: 'Pak Yanto Subagyo',
          roleTitle: 'Mandor Pelaksana Sipil & Bangunan',
          rating: '4.97',
          completedCount: '88 Proyek Selesai',
          specialBadge: 'K3 Certified',
          avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMMBzfj2J3-myzOfieKi3tNqy19DKztKLy88WcX4OD0VQLYTuVhtYV1EJgsyiutOw3gnT1cHcw6l0vugSRB9_KgeLI7Y9L8i3AKuk35jWeohm9yQW5Kc0VT3TUUxNnAZ_tJMXWLoAEBYkqNmoroKO0lTKDGRuWwb-P-o2zVLXK9jUnP8G81-0KdqNStqdhYl2_wSK_tT53PyTY_LmohMUWt0s97tGjdiUlfz-aNeHaUe0RN56MtNU',
          fallbackAvatar: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=300&h=300&fit=crop',
          statusCheckin: 'Check-in Presensi (07.45 WIB) • Fase Supervisi Lapangan',
          serviceName: 'Supervisi Mandor Harian (Sipil & Struktur)',
          portfolioRefTitle: 'Renovasi Hunian 2 Lantai - Cilandak Barat',
          imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1Vu716Rq-HJ-nVABnHQV_85UQ1QbhFZkl0FgcRbnheOHTXB7xrM3Ggid6atq_CIAfAXvGKdw0XWdIxPwwY9diH_LZLM1PbgenHrUevowlYukcKDv4XdUh5CXqo-sBXry3bxpjdOIFJp0UXcmGJ7NkF2upfhLhQT4AQyykzcFgyRWOSsXrTv4tF489u93wDuhHcNGvXaTVXZujSOQ222CBAG9V5YezU_25B5yQfrM7mRiAG8cW2K4LJOiw',
          fallbackImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=1200&auto=format&fit=crop',
          scopes: [
            'Pengawasan harian 6 orang tukang bangunan & presensi biometrik',
            'Kontrol mutu adukan pasir-semen & kerapian bekisting plat cor',
            'Logbook material masuk & dokumentasi progress harian ber-geotag'
          ],
          totalAmount: 220000,
          paymentMethod: 'QRIS Instan',
          guaranteeText: 'Garansi Retensi 60 Hari & Bebas Biaya Ganti Mandor',
          milestones: [
            { title: 'Mandor Check-in & Briefing Pagi (07:45 WIB)', status: 'Selesai ✓' },
            { title: 'Supervisi Pengerjaan Struktur Kanopi & Bata Lantai 2', status: 'Sedang Berlangsung' },
            { title: 'Verifikasi Logbook Harian Sore & Rekomendasi Material', status: 'Menunggu' }
          ]
        };

      case 'LX-ARC-8821':
        return {
          orderNumber: '#LX-ARC-8821',
          mitraId: 'dwi' as MitraId,
          mitraName: 'Ir. Dwi Prabowo, IAI',
          roleTitle: 'Arsitek Utama & Principal Designer',
          rating: '4.98',
          completedCount: '156 Desain Selesai',
          specialBadge: 'Anggota IAI Utama',
          avatarUrl: DWI_PRABOWO_IMG,
          fallbackAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvKwc9Bf-hnI4faD7fAfakZgqBpNJWveMXPG8dIJHQDyWDFjz_-30ULDZQNc3eH23OUvFwaTUTXVDerBJfm5vI2Pe3PmSS9m9owBpuBe0dSZgGFEGheVve1-BMK5fjniQV8GXEq5zBGQkydAEsw_zhQlStxiZvJ4XiX-aqH9HgWGE3-7yNtY-lxvydQP_LEBvwU4O60gGvyr5pocuGVA3eJT3nQMBs76gB4CfwgMRfYt0i9c4G4tU',
          statusCheckin: 'Fase Gambar Kerja DED (Tahap 2 dari 3) • 70% Progress',
          serviceName: 'Paket Desain Arsitektur Modern Tropis 2 Lantai',
          portfolioRefTitle: 'Villa Modern Tropis - Cilandak',
          imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1VstRJKtFDRbtIma18pf0M3zOxeKkBvelsuiMIW9oMX--vq86whXXsrLEPqqTHTRI4Kpk3_tgtbCMwVKUJ2ukVuXWW9bcpUA0gQ859PBG1kfzBOOko-uHU_pW2Q8XCq1OQBrsg5YJ2S9GKTSZqv_RzW8VAE5nnbnzn91ZBcVcWkoNIivKvKzr1mXgNrWvj_VEKIbQtdULuautiVswDP-xJuKSv5W246tlDQOZ4zZ9ot56bHPs1vrSrrsw',
          fallbackImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop',
          scopes: [
            'Konsep denah zonasi & visualisasi moodboard 3D',
            'Detail Engineering Drawing (DED) lengkap 16 lembar siap tender',
            'Render eksterior/interior fotorealistis 4K & kelengkapan PBG'
          ],
          totalAmount: 1875000,
          paymentMethod: 'BCA Virtual Account (Termin Escrow)',
          guaranteeText: 'Garansi Bebas Revisi Minor 2x & Proteksi Dana Termijn',
          milestones: [
            { title: 'Konsep Denah & Moodboard 3D', status: 'Selesai ✓' },
            { title: 'DED & Gambar Kerja Potongan Struktur', status: '70% Berjalan' },
            { title: 'Paket Render 4K & Berkas Syarat PBG', status: 'Menunggu Review' }
          ]
        };

      case 'LX-STR-9421':
        return {
          orderNumber: '#LX-STR-9421',
          mitraId: 'hendra' as MitraId,
          mitraName: 'Hendra Wijaya, S.T.',
          roleTitle: 'Konsultan Struktur & Audit Lapangan SNI',
          rating: '4.99',
          completedCount: '342 Audit Selesai',
          specialBadge: 'LPJK Bersertifikasi',
          avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
          fallbackAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
          statusCheckin: 'Uji Lapangan Sondir Selesai • Penyusunan Resume SAP2000',
          serviceName: 'Paket Analisis Struktur Beton Bertulang & Sondir SNI 2024',
          portfolioRefTitle: 'Audit Balok Tie Beam Blok D-14 Bintaro Sektor 9',
          imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1Ugzj4MVH_oEthZEVpdbC55a6aj-uZKuOOSokYwpe5F96eFM6A0PIDhEngPs0Cz5E-1exN5dYiQznMbxPNs83AIjpvOykqCBaTM9ffncNzuHm7nD_jdWIT2XDLGPouYUEz6imxYUEvaq6c3m0pM-kLNcgSVUqm_XvbiFTcSVy3AcCHoKeJk5243HApOPu6S17fU1F1r_WqEAsFpe2q75UO4I6ziHvsN33QU9Gt0HZtT6WhW6pYo-sA_og',
          fallbackImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&auto=format&fit=crop',
          scopes: [
            'Uji sondir daya dukung tanah keras 10 titik lokasi',
            'Hammer test mutu kuat tekan beton SNI K-250 / 26.4 MPa',
            'Rekomendasi teknis pembesian balok lentur & kolom portal'
          ],
          totalAmount: 765000,
          paymentMethod: 'Mandiri Livin (Escrow LIX)',
          guaranteeText: 'Garansi Audit Sesuai Standar SNI-2847 & LPJK Terenkripsi',
          milestones: [
            { title: 'Uji Titik Sondir 1–10 (Daya dukung 4.2m)', status: 'Selesai ✓' },
            { title: 'Uji Hammer Test Mutu Beton (26.4 MPa)', status: 'Selesai ✓' },
            { title: 'Resume Rekomendasi SNI & Laporan SAP2000', status: 'Sedang Berlangsung' }
          ]
        };

      default: // 'LX-TKG-5102' (Pak Joko Santoso)
        return {
          orderNumber: '#LX-TKG-5102',
          mitraId: 'joko' as MitraId,
          mitraName: 'Pak Joko Santoso',
          roleTitle: 'Tukang Ahli Finishing & Perbaikan Keramik',
          rating: '4.95',
          completedCount: '142 Proyek Selesai',
          specialBadge: 'Grade A',
          avatarUrl: JOKO_SANTOSO_IMG,
          fallbackAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
          statusCheckin: 'Check-in Presensi (08.15 WIB) • Fase Finishing Lapangan',
          serviceName: 'Jasa Finishing Harian Pasang Granit Lantai 60x60 & Nat Epoxy Presisi',
          portfolioRefTitle: 'Finishing Granit Lantai 60x60 Kamar Mandi & Ruang Tengah',
          imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1UdBshidhJf59rwjhXaUpMWB4ntBdiRijXY7xVlQ81mfKAO9aKfJjdgsUquGdZ-G7LSXp4l6b0TtIZT8veRKMdna0TnAgU2GXvEdXBvTLyEsfCAEzkRE8IeT0aPUdBmb7AARj2oqdRgQYi5rH434HUc_ayRCPUnm8NKQgZjifJ-BNQnA3Fw_ly4PqQSphZMD2rfLeW40jhZD5QCgXMGN7F12TYwUiwE4L0gvXkJ4-TaXLi3ufxZm9sz',
          fallbackImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&auto=format&fit=crop',
          scopes: [
            'Leveling dasar semen & pemasangan klip perata presisi nat 1.5mm',
            'Pemasangan ubin granit 60x60 anti-kopong dengan semen instan',
            'Pengisian nat epoxy 2-komponen kedap air & pembersihan akhir'
          ],
          totalAmount: 175000,
          paymentMethod: 'BCA Virtual Account (Rekber)',
          guaranteeText: 'Garansi 14 Hari Anti-Kopong & Perlindungan Anti-Ghosting',
          milestones: [
            { title: 'Tukang Check-in & Cek Lokasi (08:15 WIB)', status: 'Selesai ✓' },
            { title: 'Finishing Pemasangan Granit & Leveling Spacer Klip', status: 'Sedang Berlangsung' },
            { title: 'Aplikasi Nat Epoxy Kedap Air & Serah Terima Proyek', status: 'Menunggu' }
          ]
        };
    }
  };

  const data = getOrderData();

  return (
    <div className="w-full max-w-[430px] mx-auto min-h-screen bg-[#f8f9fa] text-[#191c1d] flex flex-col pb-24 font-sans relative">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md px-4 py-3 border-b border-gray-100 flex items-center justify-between shadow-xs">
        <button
          onClick={onBack}
          aria-label="Kembali"
          className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-800 hover:bg-gray-100 transition-colors"
        >
          <span className="material-symbols-outlined text-[22px]">arrow_back</span>
        </button>
        <div className="text-center">
          <h1 className="text-sm font-bold text-gray-900">Rincian Riwayat Pesanan</h1>
          <p className="text-[10px] text-gray-500 font-mono">{data.orderNumber}</p>
        </div>
        <div className="w-9 h-9 flex items-center justify-center text-gray-400">
          <span className="material-symbols-outlined text-[20px]">receipt_long</span>
        </div>
      </header>

      <div className="p-4 flex flex-col gap-3.5">
        {/* Status Tracker Escrow Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-[#a53d00] text-white rounded-2xl p-4 shadow-sm flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold bg-white/20 px-2.5 py-0.5 rounded-full backdrop-blur-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              <span>Sedang Berjalan</span>
            </span>
            <span className="text-xs font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-[15px]">lock</span>
              <span>Lunas Escrow LIX</span>
            </span>
          </div>

          <div>
            <h2 className="text-base font-bold text-white leading-tight">
              Dana Diamankan di Rekber Escrow LIX
            </h2>
            <p className="text-xs text-orange-100 mt-1 leading-snug">
              Pencairan dana ke mitra hanya dilakukan setelah Anda mengecek dan mengonfirmasi hasil pekerjaan di lokasi.
            </p>
          </div>

          <div className="pt-2 border-t border-white/20 flex items-center justify-between text-[11px] text-white/90">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[15px]">schedule</span>
              <span>{data.statusCheckin}</span>
            </span>
          </div>
        </div>

        {/* Profil Mitra Card */}
        <div className="bg-white rounded-2xl p-4 shadow-xs border border-gray-100 flex flex-col gap-3">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            Mitra Pelaksana Terverifikasi
          </span>

          <div className="flex items-center gap-3">
            <div className="relative w-14 h-14 shrink-0">
              <img
                referrerPolicy="no-referrer"
                src={data.avatarUrl}
                alt={data.mitraName}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-200"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = data.fallbackAvatar;
                }}
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white"></span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <h3 className="text-sm font-bold text-gray-900 truncate">{data.mitraName}</h3>
                <span className="material-symbols-outlined text-[#ff6200] text-[16px]">verified</span>
              </div>
              <p className="text-xs text-gray-500 truncate">{data.roleTitle}</p>
              <div className="flex items-center gap-2 mt-1 text-xs">
                <span className="flex items-center text-amber-500 font-bold">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="ml-0.5">{data.rating}</span>
                </span>
                <span className="text-gray-400 text-[10px]">({data.completedCount})</span>
                <span className="text-gray-300">•</span>
                <span className="text-emerald-700 font-bold text-[10px] bg-emerald-50 px-1.5 py-0.5 rounded">
                  {data.specialBadge}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100">
            <a
              href="tel:081234567890"
              className="flex items-center justify-center gap-1.5 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold transition-colors"
            >
              <span className="material-symbols-outlined text-[17px] text-gray-600">call</span>
              <span>Hubungi Mitra</span>
            </a>
            <button
              onClick={() => onOpenChatWithMitra(data.mitraId)}
              className="flex items-center justify-center gap-1.5 h-9 rounded-xl bg-orange-100 hover:bg-orange-200 text-[#541b00] text-xs font-bold transition-colors"
            >
              <span className="material-symbols-outlined text-[17px] text-[#ff6200]">chat</span>
              <span>Kirim Pesan</span>
            </button>
          </div>
        </div>

        {/* Detail Layanan & Portofolio Rujukan */}
        <div className="bg-white rounded-2xl p-4 shadow-xs border border-gray-100 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#ff6200] text-[18px]">handyman</span>
              <span>Paket &amp; Spesifikasi Kerja</span>
            </h3>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
              Sesuai Kontrak
            </span>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 leading-snug">{data.serviceName}</h4>
            <p className="text-[11px] text-gray-500 mt-0.5 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-[#ff6200]">folder</span>
              <span>Rujukan: {data.portfolioRefTitle}</span>
            </p>
          </div>

          {/* Reference Image */}
          <div className="relative w-full h-40 rounded-xl overflow-hidden bg-gray-100 shadow-2xs">
            <img
              referrerPolicy="no-referrer"
              src={data.imageUrl}
              alt={data.serviceName}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.currentTarget;
                target.src = data.fallbackImage;
              }}
            />
            <div className="absolute bottom-2 left-2 bg-gray-900/80 backdrop-blur-xs text-white px-2 py-0.5 rounded text-[10px] font-medium">
              Foto Rujukan Progres Lapangan
            </div>
          </div>

          {/* Scope Checklist */}
          <div className="bg-gray-50 rounded-xl p-3 flex flex-col gap-2 border border-gray-100">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Lingkup Pengerjaan (Scope of Work):
            </span>
            {data.scopes.map((s, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                <span className="material-symbols-outlined text-emerald-600 text-[16px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="leading-snug">{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Jaminan Proteksi Pesanan */}
        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-4 border border-teal-100 flex flex-col gap-2.5">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-teal-700 text-[20px]">shield_with_heart</span>
            <h3 className="text-xs font-bold text-teal-950">Proteksi Garansi LIX 100% Bebas Khawatir</h3>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px] text-teal-900">
            <div className="bg-white/90 p-2 rounded-lg border border-teal-100 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-teal-600 text-[16px]">lock_clock</span>
              <span className="font-semibold">Rekber Aman 100%</span>
            </div>
            <div className="bg-white/90 p-2 rounded-lg border border-teal-100 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-teal-600 text-[16px]">verified</span>
              <span className="font-semibold">Anti-Ghosting</span>
            </div>
          </div>
          <p className="text-[11px] text-teal-800 leading-snug">
            {data.guaranteeText}. Jika terjadi ketidaksesuaian, tim penjamin mutu LIX siap melakukan audit ulang tanpa biaya.
          </p>
        </div>

        {/* Rincian Pembayaran Escrow */}
        <div className="bg-white rounded-2xl p-4 shadow-xs border border-gray-100 flex flex-col gap-2">
          <h3 className="text-xs font-bold text-gray-900">Rincian Pembayaran Escrow</h3>
          <div className="space-y-1.5 text-xs text-gray-600 pt-1">
            <div className="flex justify-between">
              <span>Biaya Jasa Layanan Mitra</span>
              <span className="font-bold text-gray-900">Rp {data.totalAmount.toLocaleString('id-ID')}</span>
            </div>
            <div className="flex justify-between text-emerald-700">
              <span>Proteksi Rekber &amp; Asuransi Kopong</span>
              <span className="font-bold">Gratis (Promo LIX)</span>
            </div>
            <div className="flex justify-between">
              <span>Metode Pembayaran</span>
              <span className="font-bold text-gray-900">{data.paymentMethod}</span>
            </div>
            <div className="pt-2 border-t border-gray-100 flex justify-between items-baseline">
              <span className="font-bold text-gray-900">Total Terbayar di Escrow</span>
              <span className="text-base font-extrabold text-[#ff6200]">
                Rp {data.totalAmount.toLocaleString('id-ID')}
              </span>
            </div>
          </div>
        </div>

        {/* Tahapan Pengerjaan / Milestone List */}
        <div className="bg-white rounded-2xl p-4 shadow-xs border border-gray-100 flex flex-col gap-2.5">
          <h3 className="text-xs font-bold text-gray-900">Tahapan Pengerjaan (Milestones)</h3>
          <div className="space-y-2">
            {data.milestones.map((m, idx) => (
              <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-orange-100 text-[#ff6200] font-bold text-[10px] flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="font-medium text-gray-800 leading-tight">{m.title}</span>
                </div>
                <span className={`text-[10px] font-bold shrink-0 ml-2 ${
                  m.status.includes('✓') ? 'text-emerald-700' : 'text-[#ff6200]'
                }`}>
                  {m.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Sticky Action CTA */}
        <div className="pt-2 flex flex-col gap-2">
          <button
            onClick={() => onTrackProject(orderId)}
            className="w-full h-12 rounded-xl bg-[#ff6200] hover:bg-[#e05600] active:scale-95 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <span className="material-symbols-outlined text-[19px]">engineering</span>
            <span>Pantau Progres Proyek Sekarang</span>
          </button>

          <button
            onClick={onBack}
            className="w-full h-10 rounded-xl bg-white text-gray-600 hover:text-gray-900 font-bold text-xs flex items-center justify-center gap-1 border border-gray-200 transition-colors"
          >
            <span className="material-symbols-outlined text-[17px]">arrow_back</span>
            <span>Kembali ke Riwayat Pesanan</span>
          </button>
        </div>
      </div>
    </div>
  );
};
