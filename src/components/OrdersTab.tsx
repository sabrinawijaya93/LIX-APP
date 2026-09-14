import React, { useState } from 'react';
import { OrderRecord } from '../types';

interface OrdersTabProps {
  orders: OrderRecord[];
  onOpenChatWithMitra: (mitraId: string) => void;
  onExploreMitra: () => void;
  onTrackProject?: (orderNumber: string) => void;
  onSelectOrder?: (orderNumber: string) => void;
}

export const OrdersTab: React.FC<OrdersTabProps> = ({
  orders,
  onOpenChatWithMitra,
  onExploreMitra,
  onTrackProject,
  onSelectOrder
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'escrow' | 'active' | 'done'>('all');
  const [confirmedEscrowIds, setConfirmedEscrowIds] = useState<string[]>([]);
  const [showConfirmModal, setShowConfirmModal] = useState<OrderRecord | null>(null);

  const filteredOrders = orders.filter(o => {
    const isDone = confirmedEscrowIds.includes(o.id) || o.status === 'SELESAI';
    if (activeFilter === 'done') return isDone;
    if (activeFilter === 'escrow') return !isDone && o.status === 'LUNAS ESCROW';
    if (activeFilter === 'active') return !isDone && o.status !== 'LUNAS ESCROW';
    return true;
  });

  const handleApproveWork = (order: OrderRecord) => {
    setConfirmedEscrowIds(prev => [...prev, order.id]);
    setShowConfirmModal(null);
  };

  return (
    <div className="w-full max-w-[430px] mx-auto min-h-screen bg-[#f8f9fa] text-[#191c1d] flex flex-col pb-24 relative font-sans">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md px-4 py-3 border-b border-gray-100 flex items-center justify-between shadow-xs">
        <div>
          <h1 className="text-base font-bold text-gray-900 leading-tight">Riwayat &amp; Status Proyek</h1>
          <p className="text-[11px] text-gray-500">
            Terlindungi 100% Rekening Bersama Escrow LIX
          </p>
        </div>

        <span className="w-8 h-8 rounded-full bg-orange-100 text-[#ff6200] flex items-center justify-center font-bold text-xs">
          {orders.length}
        </span>
      </header>

      {/* Filter Tabs */}
      <div className="bg-white border-b border-gray-100 px-4 py-2 flex items-center gap-2 overflow-x-auto scrollbar-none sticky top-[53px] z-30">
        {[
          { id: 'all', label: 'Semua Proyek' },
          { id: 'escrow', label: 'Dana di Rekber' },
          { id: 'active', label: 'Sedang Berjalan' },
          { id: 'done', label: 'Selesai & Garansi' }
        ].map(f => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id as any)}
            className={`px-3 py-1 rounded-full text-xs whitespace-nowrap transition-all cursor-pointer ${
              activeFilter === f.id
                ? 'bg-[#ff6200] text-white font-bold shadow-xs'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 font-medium'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Main Content List */}
      <div className="px-4 pt-3 flex flex-col gap-3">
        {filteredOrders.length === 0 ? (
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-200/80 flex flex-col items-center gap-3 my-6">
            <div className="w-16 h-16 rounded-full bg-orange-50 text-[#ff6200] flex items-center justify-center">
              <span className="material-symbols-outlined text-[32px]">receipt_long</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">Belum Ada Pesanan di Kategori Ini</h3>
              <p className="text-xs text-gray-500 mt-1 max-w-xs">
                Cari arsitek, konsultan struktur, mandor atau tukang ahli bergaransi bebas ghosting.
              </p>
            </div>
            <button
              onClick={onExploreMitra}
              className="mt-2 px-4 py-2 bg-[#ff6200] text-white text-xs font-bold rounded-xl shadow-xs hover:bg-[#e05600]"
            >
              Cari Tenaga Ahli Sekarang
            </button>
          </div>
        ) : (
          filteredOrders.map(order => {
            const isCompleted = confirmedEscrowIds.includes(order.id) || order.status === 'SELESAI';
            return (
              <div
                key={order.id}
                className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs flex flex-col gap-3 hover:border-orange-300 transition-colors"
              >
                {/* Status Bar */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${isCompleted ? 'bg-emerald-500' : 'bg-[#ff6200] animate-pulse'}`}></span>
                    <span className={`text-[11px] font-extrabold uppercase tracking-wide ${isCompleted ? 'text-emerald-800' : 'text-[#ff6200]'}`}>
                      {isCompleted ? 'SELESAI (GARANSI AKTIF)' : 'SEDANG BERJALAN • LUNAS ESCROW'}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-gray-500">{order.orderNumber}</span>
                </div>

                {/* Mitra Info */}
                <div
                  className="flex items-start gap-3 cursor-pointer"
                  onClick={() => onSelectOrder?.(order.orderNumber)}
                >
                  <img
                    referrerPolicy="no-referrer"
                    src={order.mitraAvatar}
                    alt={order.mitraName}
                    className="w-14 h-14 rounded-2xl object-cover ring-2 ring-orange-100 flex-shrink-0"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop';
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <h4 className="text-xs font-bold text-gray-900 truncate">
                        {order.mitraName}
                      </h4>
                      <span className="material-symbols-outlined text-[#ff6200] text-[15px]">verified</span>
                    </div>
                    <span className="text-[10px] font-bold text-[#ff6200] block mt-0.5">
                      {order.mitraRole}
                    </span>
                    <p className="text-[11px] text-gray-600 mt-0.5 truncate font-medium">
                      {order.serviceName}
                    </p>
                    <div className="flex items-center gap-2 mt-1 text-[10px] text-gray-500">
                      <span className="flex items-center gap-0.5">
                        <span className="material-symbols-outlined text-[12px] text-gray-400">schedule</span>
                        <span>{order.schedule.split('(')[0]}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Escrow Status Banner */}
                <div className="bg-gray-50 rounded-xl p-2.5 border border-gray-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px]">verified_user</span>
                    <div>
                      <span className="font-bold text-gray-900 block leading-tight">Rekber Escrow Terlindungi</span>
                      <span className="text-[10px] text-gray-500">Garansi Retensi {order.guaranteeDays} Hari</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-gray-400 block">Total Pembayaran</span>
                    <span className="font-extrabold text-xs text-[#ff6200]">
                      Rp {order.totalAmount.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectOrder?.(order.orderNumber)}
                    className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl flex items-center gap-1 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[15px]">info</span>
                    <span>Rincian</span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onOpenChatWithMitra(order.mitraId)}
                      className="px-3 py-1.5 bg-orange-50 hover:bg-orange-100 text-[#ff6200] text-xs font-bold rounded-xl flex items-center gap-1 transition-colors border border-orange-200/60"
                    >
                      <span className="material-symbols-outlined text-[15px]">chat</span>
                      <span>Chat</span>
                    </button>

                    <button
                      onClick={() => onTrackProject?.(order.orderNumber)}
                      className="px-3.5 py-1.5 bg-[#ff6200] hover:bg-[#e05600] active:scale-95 text-white text-xs font-bold rounded-xl shadow-2xs flex items-center gap-1 transition-all"
                    >
                      <span className="material-symbols-outlined text-[15px]">engineering</span>
                      <span>Pantau Proyek</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Confirm Approve Work Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-5 max-w-sm w-full shadow-2xl flex flex-col gap-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-[28px]">verified</span>
            </div>
            <h4 className="text-sm font-bold text-gray-900 text-center">
              Konfirmasi Pekerjaan Selesai
            </h4>
            <p className="text-xs text-gray-600 text-center leading-relaxed">
              Apakah hasil pengerjaan dari{' '}
              <strong className="text-gray-900">{showConfirmModal.mitraName}</strong> sudah sesuai
              ekspektasi dan standar teknis?
            </p>
            <div className="p-3 bg-emerald-50 rounded-xl text-xs text-emerald-900 font-medium">
              ✓ Garansi perlindungan retensi {showConfirmModal.guaranteeDays} hari akan langsung aktif untuk menjamin kualitas hasil kerja.
            </div>
            <div className="grid grid-cols-2 gap-2 mt-1">
              <button
                onClick={() => setShowConfirmModal(null)}
                className="py-2.5 bg-gray-100 text-gray-700 text-xs font-bold rounded-xl hover:bg-gray-200"
              >
                Belum
              </button>
              <button
                onClick={() => handleApproveWork(showConfirmModal)}
                className="py-2.5 bg-emerald-600 text-white text-xs font-bold rounded-xl hover:bg-emerald-700"
              >
                Ya, Setujui &amp; Cairkan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
