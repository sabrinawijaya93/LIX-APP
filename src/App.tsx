import React, { useState } from 'react';
import { MitraId, ScreenType, TabType, OrderRecord, MitraData, BankOption } from './types';
import { MITRA_DATA_MAP, JOKO_SANTOSO_IMG } from './data/mitraData';
import { LoginScreen } from './components/LoginScreen';
import { HomeScreen } from './components/HomeScreen';
import { MitraProfileScreen } from './components/MitraProfileScreen';
import { BookingConfirmScreen } from './components/BookingConfirmScreen';
import { PaymentMethodScreen } from './components/PaymentMethodScreen';
import { PaymentSuccessScreen } from './components/PaymentSuccessScreen';
import { OrdersTab } from './components/OrdersTab';
import { ChatTab } from './components/ChatTab';
import { FavoritesTab } from './components/FavoritesTab';
import { ProfileTab } from './components/ProfileTab';
import { ProjectTrackingScreen } from './components/ProjectTrackingScreen';
import { OrderDetailScreen } from './components/OrderDetailScreen';

export function App() {
  // Navigation States
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [activeTab, setActiveTab] = useState<TabType>('beranda');
  const [selectedMitraId, setSelectedMitraId] = useState<MitraId>('joko');
  const [chatTargetMitraId, setChatTargetMitraId] = useState<MitraId>('joko');

  // Active Selected Orders for Live Tracking and Details
  const [selectedTrackingOrderId, setSelectedTrackingOrderId] = useState<string>('LX-TKG-5102');
  const [selectedDetailOrderId, setSelectedDetailOrderId] = useState<string>('LX-MND-7820');

  // Booking Checkout State
  const [currentBookingDetails, setCurrentBookingDetails] = useState<{
    addressTitle: string;
    addressDesc: string;
    schedule: string;
    notes: string;
    totalAmount: number;
  }>({
    addressTitle: MITRA_DATA_MAP.joko.defaultAddress.title,
    addressDesc: MITRA_DATA_MAP.joko.defaultAddress.desc,
    schedule: MITRA_DATA_MAP.joko.bookingSchedule,
    notes: MITRA_DATA_MAP.joko.defaultNote,
    totalAmount: MITRA_DATA_MAP.joko.servicePackagePrice + MITRA_DATA_MAP.joko.serviceFee
  });

  // Orders History across all 4 personas
  const [orders, setOrders] = useState<OrderRecord[]>([
    {
      id: 'ord-1',
      orderNumber: 'LX-TKG-5102',
      mitraId: 'joko',
      mitraName: 'Pak Joko Santoso',
      mitraRole: 'Tukang Ahli Finishing & Pasang Keramik',
      mitraAvatar: JOKO_SANTOSO_IMG,
      serviceName: 'Pasang Granit Lantai 60x60 & Nat Epoxy Presisi',
      totalAmount: 175000,
      bankName: 'Bank Central Asia (BCA)',
      status: 'LUNAS ESCROW',
      createdAt: 'Hari Ini, 08:15 WIB',
      schedule: 'Hari Ini, 08:00 – 17:00 WIB',
      addressTitle: 'Proyek Finishing Kamar Mandi & Koridor',
      addressDesc: 'Jl. Bintaro Melati Indah No. 12, Sektor 9, Tangerang Selatan',
      notes: 'Pemasangan presisi leveling klip keramik granit 60x60, nat epoxy 2-komponen kedap air anti-kopong.',
      guaranteeDays: 14
    },
    {
      id: 'ord-2',
      orderNumber: 'LX-MND-7820',
      mitraId: 'yanto',
      mitraName: 'Pak Yanto Subagyo',
      mitraRole: 'Mandor Kepala Pelaksana Sipil & Bangunan',
      mitraAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMMBzfj2J3-myzOfieKi3tNqy19DKztKLy88WcX4OD0VQLYTuVhtYV1EJgsyiutOw3gnT1cHcw6l0vugSRB9_KgeLI7Y9L8i3AKuk35jWeohm9yQW5Kc0VT3TUUxNnAZ_tJMXWLoAEBYkqNmoroKO0lTKDGRuWwb-P-o2zVLXK9jUnP8G81-0KdqNStqdhYl2_wSK_tT53PyTY_LmohMUWt0s97tGjdiUlfz-aNeHaUe0RN56MtNU',
      serviceName: 'Supervisi Mandor Harian (Sipil & Struktur Kanopi)',
      totalAmount: 220000,
      bankName: 'QRIS Instan',
      status: 'LUNAS ESCROW',
      createdAt: 'Hari Ini, 07:45 WIB',
      schedule: 'Hari Ini, 08:00 – 17:00 WIB',
      addressTitle: 'Renovasi & Bangun Rumah 2 Lantai (Bpk. Budi)',
      addressDesc: 'Komp. Bintaro Jaya Sektor 9 Blok H-4, Tangerang Selatan',
      notes: 'Supervisi 6 tukang, vertikalitas dinding bata ringan lantai 2, dan kontrol mutu bekisting plat beton canopy.',
      guaranteeDays: 60
    },
    {
      id: 'ord-3',
      orderNumber: 'LX-ARC-8821',
      mitraId: 'dwi',
      mitraName: 'Ir. Dwi Prabowo, IAI',
      mitraRole: 'Arsitek Utama & Principal Designer',
      mitraAvatar: MITRA_DATA_MAP.dwi.avatar,
      serviceName: 'Paket Desain Arsitektur Modern Tropis 2 Lantai (DED & 3D)',
      totalAmount: 1875000,
      bankName: 'Bank Central Asia (BCA)',
      status: 'LUNAS ESCROW',
      createdAt: '24 Mei 2024, 10:15 WIB',
      schedule: 'Target Selesai: 3 Hari Kerja',
      addressTitle: 'Villa Modern Tropis 2 Lantai (Bpk. Budi)',
      addressDesc: 'Bintaro Sektor 9, Tangerang Selatan',
      notes: 'Desain arsitektur modern tropis teras kolam renang, gambar kerja DED 16 lembar, dan paket render fotorealistis 4K.',
      guaranteeDays: 30
    },
    {
      id: 'ord-4',
      orderNumber: 'LX-STR-9421',
      mitraId: 'hendra',
      mitraName: 'Hendra Wijaya, S.T.',
      mitraRole: 'Konsultan Struktur Bersertifikasi LPJK & Uji SNI',
      mitraAvatar: MITRA_DATA_MAP.hendra.avatar,
      serviceName: 'Analisis Struktur Beton Bertulang, Sondir & Uji Pembebanan SNI',
      totalAmount: 765000,
      bankName: 'Mandiri Livin (Escrow)',
      status: 'LUNAS ESCROW',
      createdAt: 'Kemarin, 14:28 WIB',
      schedule: 'Target Laporan: Sore Ini, 17:00 WIB',
      addressTitle: 'Proyek Pondasi & Balok Beton Blok D-14',
      addressDesc: 'Bintaro Sektor 9, Tangerang Selatan (Titik Tie Beam A-1)',
      notes: 'Uji sondir 10 titik daya dukung tanah keras 4.2m dan hammer test mutu beton K-250 rata-rata 26.4 MPa standar SNI-2847.',
      guaranteeDays: 90
    }
  ]);

  const [lastCompletedOrder, setLastCompletedOrder] = useState<OrderRecord>(orders[0]);

  // Handler Actions
  const handleSelectMitra = (id: MitraId) => {
    setSelectedMitraId(id);
    const mitra = MITRA_DATA_MAP[id];
    setCurrentBookingDetails({
      addressTitle: mitra.defaultAddress.title,
      addressDesc: mitra.defaultAddress.desc,
      schedule: mitra.bookingSchedule,
      notes: mitra.defaultNote,
      totalAmount: mitra.servicePackagePrice + mitra.serviceFee
    });
    setCurrentScreen('mitra_profile');
  };

  const handleProceedBooking = (mitra: MitraData) => {
    setCurrentBookingDetails({
      addressTitle: mitra.defaultAddress.title,
      addressDesc: mitra.defaultAddress.desc,
      schedule: mitra.bookingSchedule,
      notes: mitra.defaultNote,
      totalAmount: mitra.servicePackagePrice + mitra.serviceFee
    });
    setCurrentScreen('booking_confirm');
  };

  const handleProceedPayment = (details: {
    addressTitle: string;
    addressDesc: string;
    schedule: string;
    notes: string;
    totalAmount: number;
  }) => {
    setCurrentBookingDetails(details);
    setCurrentScreen('payment_method');
  };

  const handleConfirmPayment = (bank: BankOption) => {
    const mitra = MITRA_DATA_MAP[selectedMitraId];
    const newOrder: OrderRecord = {
      id: `ord-${Date.now()}`,
      orderNumber: mitra.orderNumber,
      mitraId: mitra.id,
      mitraName: mitra.name,
      mitraRole: mitra.shortRole,
      mitraAvatar: mitra.avatar,
      serviceName: mitra.servicePackageName,
      totalAmount: currentBookingDetails.totalAmount,
      bankName: bank.name,
      status: 'LUNAS ESCROW',
      createdAt: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }) + ' WIB',
      schedule: currentBookingDetails.schedule,
      addressTitle: currentBookingDetails.addressTitle,
      addressDesc: currentBookingDetails.addressDesc,
      notes: currentBookingDetails.notes,
      guaranteeDays: mitra.guaranteeDays
    };

    setOrders(prev => [newOrder, ...prev]);
    setLastCompletedOrder(newOrder);
    setCurrentScreen('payment_success');
  };

  const handleOpenChatFromMitra = (mitra: MitraData) => {
    setChatTargetMitraId(mitra.id);
    setCurrentScreen('home');
    setActiveTab('chat');
  };

  const handleOpenChatFromOrder = (mId: string) => {
    setChatTargetMitraId((mId as MitraId) || 'joko');
    setCurrentScreen('home');
    setActiveTab('chat');
  };

  const handleTrackProject = (orderNumber: string) => {
    setSelectedTrackingOrderId(orderNumber);
    setCurrentScreen('home');
    setActiveTab('proyek');
  };

  const handleViewOrderDetail = (orderNumber: string) => {
    setSelectedDetailOrderId(orderNumber);
    setCurrentScreen('order_detail');
  };

  const currentMitra = MITRA_DATA_MAP[selectedMitraId];

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-start antialiased text-gray-900 font-sans">
      {/* Top Demo Quick Navigator for testing all screens */}
      <div className="w-full max-w-[430px] bg-gray-900 text-white text-[11px] px-3 py-1.5 flex items-center justify-between z-50 shadow-md">
        <div className="flex items-center gap-1 font-bold text-orange-400">
          <span className="material-symbols-outlined text-[14px]">bolt</span>
          <span>LIX App Navigator:</span>
        </div>
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setCurrentScreen('login')}
            className={`px-1.5 py-0.5 rounded ${
              currentScreen === 'login' ? 'bg-orange-500 font-bold' : 'hover:bg-gray-800 text-gray-300'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => {
              setCurrentScreen('home');
              setActiveTab('beranda');
            }}
            className={`px-1.5 py-0.5 rounded ${
              currentScreen === 'home' && (activeTab === 'beranda' || activeTab === 'cari')
                ? 'bg-orange-500 font-bold'
                : 'hover:bg-gray-800 text-gray-300'
            }`}
          >
            Beranda
          </button>
          <button
            onClick={() => {
              setCurrentScreen('home');
              setActiveTab('proyek');
            }}
            className={`px-1.5 py-0.5 rounded ${
              currentScreen === 'home' && activeTab === 'proyek'
                ? 'bg-orange-500 font-bold'
                : 'hover:bg-gray-800 text-gray-300'
            }`}
          >
            Proyek
          </button>
          <button
            onClick={() => {
              setCurrentScreen('home');
              setActiveTab('riwayat');
            }}
            className={`px-1.5 py-0.5 rounded ${
              currentScreen === 'home' && (activeTab === 'riwayat' || activeTab === 'pesanan')
                ? 'bg-orange-500 font-bold'
                : 'hover:bg-gray-800 text-gray-300'
            }`}
          >
            Riwayat
          </button>
          <button
            onClick={() => setCurrentScreen('mitra_profile')}
            className={`px-1.5 py-0.5 rounded ${
              currentScreen === 'mitra_profile' ? 'bg-orange-500 font-bold' : 'hover:bg-gray-800 text-gray-300'
            }`}
          >
            Profil
          </button>
          <button
            onClick={() => setCurrentScreen('booking_confirm')}
            className={`px-1.5 py-0.5 rounded ${
              currentScreen === 'booking_confirm' ? 'bg-orange-500 font-bold' : 'hover:bg-gray-800 text-gray-300'
            }`}
          >
            Konfirmasi
          </button>
          <button
            onClick={() => setCurrentScreen('payment_method')}
            className={`px-1.5 py-0.5 rounded ${
              currentScreen === 'payment_method' ? 'bg-orange-500 font-bold' : 'hover:bg-gray-800 text-gray-300'
            }`}
          >
            Bayar
          </button>
        </div>
      </div>

      {/* Main Mobile App Frame */}
      <main className="w-full max-w-[430px] min-h-screen bg-[#f8f9fa] shadow-2xl relative flex flex-col overflow-x-hidden">
        {currentScreen === 'login' && (
          <LoginScreen
            onLoginSuccess={() => {
              setCurrentScreen('home');
              setActiveTab('beranda');
            }}
            onContinueAsGuest={() => {
              setCurrentScreen('home');
              setActiveTab('beranda');
            }}
          />
        )}

        {currentScreen === 'home' && (
          <>
            {(activeTab === 'beranda' || activeTab === 'cari') && (
              <HomeScreen
                onSelectMitra={handleSelectMitra}
                activeTab={activeTab}
                onChangeTab={setActiveTab}
                ordersCount={orders.length}
              />
            )}

            {activeTab === 'proyek' && (
              <ProjectTrackingScreen
                initialOrderId={selectedTrackingOrderId}
                onNavigateToHistory={() => setActiveTab('riwayat')}
                onOpenChatWithMitra={handleOpenChatFromMitra}
              />
            )}

            {activeTab === 'favorit' && (
              <FavoritesTab
                onSelectMitra={handleSelectMitra}
                onExplore={() => setActiveTab('beranda')}
              />
            )}

            {(activeTab === 'riwayat' || activeTab === 'pesanan') && (
              <OrdersTab
                orders={orders}
                onOpenChatWithMitra={handleOpenChatFromOrder}
                onExploreMitra={() => setActiveTab('beranda')}
                onTrackProject={handleTrackProject}
                onSelectOrder={handleViewOrderDetail}
              />
            )}

            {activeTab === 'chat' && (
              <ChatTab
                initialMitraId={chatTargetMitraId}
                onSelectMitraProfile={handleSelectMitra}
              />
            )}

            {activeTab === 'profil' && (
              <ProfileTab onLogout={() => setCurrentScreen('login')} />
            )}

            {/* Bottom Nav Bar (persistent when not on beranda/cari) */}
            {activeTab !== 'beranda' && activeTab !== 'cari' && (
              <nav className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white/95 backdrop-blur-lg border-t border-gray-200/80 px-2 py-1.5 z-40 flex items-center justify-around shadow-lg">
                <button
                  onClick={() => setActiveTab('beranda')}
                  className={`flex flex-col items-center justify-center min-w-[56px] h-12 transition-colors cursor-pointer ${
                    activeTab === 'beranda' || activeTab === 'cari' ? 'text-[#ff6200] font-bold' : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  <span className="material-symbols-outlined text-[24px]">home</span>
                  <span className="text-[10px] mt-0.5">Beranda</span>
                </button>

                <button
                  onClick={() => setActiveTab('proyek')}
                  className={`flex flex-col items-center justify-center min-w-[56px] h-12 transition-colors cursor-pointer relative ${
                    activeTab === 'proyek' ? 'text-[#ff6200] font-bold' : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  <div className="relative">
                    <span
                      className="material-symbols-outlined text-[24px]"
                      style={{ fontVariationSettings: activeTab === 'proyek' ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      engineering
                    </span>
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#ff6200] ring-2 ring-white animate-pulse"></span>
                  </div>
                  <span className="text-[10px] mt-0.5">Proyek</span>
                </button>

                <button
                  onClick={() => setActiveTab('chat')}
                  className={`flex flex-col items-center justify-center min-w-[56px] h-12 transition-colors cursor-pointer relative ${
                    activeTab === 'chat' ? 'text-[#ff6200] font-bold' : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  <div className="relative">
                    <span className="material-symbols-outlined text-[24px]">chat_bubble</span>
                    <span className="absolute -top-1 -right-2 bg-[#ff6200] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                      2
                    </span>
                  </div>
                  <span className="text-[10px] mt-0.5">Chat</span>
                </button>

                <button
                  onClick={() => setActiveTab('riwayat')}
                  className={`flex flex-col items-center justify-center min-w-[56px] h-12 transition-colors cursor-pointer relative ${
                    activeTab === 'riwayat' || activeTab === 'pesanan' ? 'text-[#ff6200] font-bold' : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  <div className="relative">
                    <span className="material-symbols-outlined text-[24px]">receipt_long</span>
                    {orders.length > 0 && (
                      <span className="absolute -top-1 -right-2 bg-[#ff6200] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                        {orders.length}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] mt-0.5">Riwayat</span>
                </button>

                <button
                  onClick={() => setActiveTab('profil')}
                  className={`flex flex-col items-center justify-center min-w-[56px] h-12 transition-colors cursor-pointer ${
                    activeTab === 'profil' ? 'text-[#ff6200] font-bold' : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  <span className="material-symbols-outlined text-[24px]">account_circle</span>
                  <span className="text-[10px] mt-0.5">Profil</span>
                </button>
              </nav>
            )}
          </>
        )}

        {currentScreen === 'mitra_profile' && (
          <MitraProfileScreen
            mitraId={selectedMitraId}
            onSelectMitra={handleSelectMitra}
            onBack={() => setCurrentScreen('home')}
            onProceedBooking={handleProceedBooking}
            onOpenChat={handleOpenChatFromMitra}
          />
        )}

        {currentScreen === 'project_detail' && (
          <ProjectTrackingScreen
            initialOrderId={selectedTrackingOrderId}
            onBack={() => setCurrentScreen('home')}
            onNavigateToHistory={() => {
              setCurrentScreen('home');
              setActiveTab('riwayat');
            }}
            onOpenChatWithMitra={handleOpenChatFromMitra}
          />
        )}

        {currentScreen === 'order_detail' && (
          <OrderDetailScreen
            orderId={selectedDetailOrderId}
            onBack={() => {
              setCurrentScreen('home');
              setActiveTab('riwayat');
            }}
            onTrackProject={(orderId) => {
              setSelectedTrackingOrderId(orderId);
              setCurrentScreen('home');
              setActiveTab('proyek');
            }}
            onOpenChatWithMitra={handleOpenChatFromMitra}
          />
        )}

        {currentScreen === 'booking_confirm' && (
          <BookingConfirmScreen
            mitra={currentMitra}
            onBack={() => setCurrentScreen('mitra_profile')}
            onProceedPayment={handleProceedPayment}
          />
        )}

        {currentScreen === 'payment_method' && (
          <PaymentMethodScreen
            mitra={currentMitra}
            totalAmount={currentBookingDetails.totalAmount}
            onBack={() => setCurrentScreen('booking_confirm')}
            onConfirmPayment={handleConfirmPayment}
          />
        )}

        {currentScreen === 'payment_success' && (
          <PaymentSuccessScreen
            order={lastCompletedOrder}
            onViewOrderTracking={() => {
              setSelectedTrackingOrderId(lastCompletedOrder.orderNumber);
              setCurrentScreen('home');
              setActiveTab('proyek');
            }}
            onReturnHome={() => {
              setCurrentScreen('home');
              setActiveTab('beranda');
            }}
          />
        )}
      </main>
    </div>
  );
}

export default App;
