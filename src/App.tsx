import React, { useState } from 'react';
import { MitraId, ScreenType, TabType, OrderRecord, MitraData, BankOption } from './types';
import { MITRA_DATA_MAP } from './data/mitraData';
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

export function App() {
  // Navigation States
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [activeTab, setActiveTab] = useState<TabType>('cari');
  const [selectedMitraId, setSelectedMitraId] = useState<MitraId>('joko');
  const [chatTargetMitraId, setChatTargetMitraId] = useState<MitraId>('joko');

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

  // Orders History
  const [orders, setOrders] = useState<OrderRecord[]>([
    {
      id: 'ord-1',
      orderNumber: 'LX-ARC-8821',
      mitraId: 'dwi',
      mitraName: 'Ir. Dwi Prabowo, IAI',
      mitraRole: 'Arsitektur Utama & Perencana Bangunan',
      mitraAvatar: MITRA_DATA_MAP.dwi.avatar,
      serviceName: 'Paket Jasa Gambar & Konsep Arsitektur DED',
      totalAmount: 1875000,
      bankName: 'Bank Central Asia (BCA)',
      status: 'LUNAS ESCROW',
      createdAt: '19 Feb 2024, 11:20 WIB',
      schedule: 'Besok, 09:30 – 12:00 WIB',
      addressTitle: 'Proyek Hunian (Ibu Ratna)',
      addressDesc: 'Jl. Kencana Asri No. 18, Kebayoran Baru, Jakarta Selatan',
      notes: 'Rencana perancangan arsitektur hunian 2 lantai gaya Modern Tropis. Kebutuhan: DED 2D, render 3D fasad, dan gambar siap IMB/PBG.',
      guaranteeDays: 30
    },
    {
      id: 'ord-2',
      orderNumber: 'LX-TKG-5102',
      mitraId: 'joko',
      mitraName: 'Pak Joko Santoso',
      mitraRole: 'Tukang Ahli Finishing & Pasang Keramik',
      mitraAvatar: MITRA_DATA_MAP.joko.avatar,
      serviceName: 'Paket Jasa Tukang Finishing Harian (1 Hari)',
      totalAmount: 175000,
      bankName: 'Bank Negara Indonesia (BNI)',
      status: 'SELESAI',
      createdAt: '15 Feb 2024, 08:45 WIB',
      schedule: '15 Feb 2024, 08:30 – 17:00 WIB',
      addressTitle: 'Proyek Renovasi Pasang Keramik',
      addressDesc: 'Jl. Boulevard Bukit Gading Raya No. 8, Kelapa Gading, Jakarta Utara',
      notes: 'Pemasangan dan perapian granit tile 60×60 ruang tamu & koridor.',
      guaranteeDays: 14
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
              setActiveTab('cari');
            }}
            className={`px-1.5 py-0.5 rounded ${
              currentScreen === 'home' && activeTab === 'cari'
                ? 'bg-orange-500 font-bold'
                : 'hover:bg-gray-800 text-gray-300'
            }`}
          >
            Beranda
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
          <button
            onClick={() => setCurrentScreen('payment_success')}
            className={`px-1.5 py-0.5 rounded ${
              currentScreen === 'payment_success' ? 'bg-orange-500 font-bold' : 'hover:bg-gray-800 text-gray-300'
            }`}
          >
            Sukses
          </button>
        </div>
      </div>

      {/* Main Mobile App Frame */}
      <main className="w-full max-w-[430px] min-h-screen bg-[#f8f9fa] shadow-2xl relative flex flex-col">
        {currentScreen === 'login' && (
          <LoginScreen
            onLoginSuccess={() => {
              setCurrentScreen('home');
              setActiveTab('cari');
            }}
            onContinueAsGuest={() => {
              setCurrentScreen('home');
              setActiveTab('cari');
            }}
          />
        )}

        {currentScreen === 'home' && (
          <>
            {activeTab === 'cari' && (
              <HomeScreen
                onSelectMitra={handleSelectMitra}
                activeTab={activeTab}
                onChangeTab={setActiveTab}
                ordersCount={orders.length}
              />
            )}
            {activeTab === 'favorit' && (
              <FavoritesTab
                onSelectMitra={handleSelectMitra}
                onExplore={() => setActiveTab('cari')}
              />
            )}
            {activeTab === 'pesanan' && (
              <OrdersTab
                orders={orders}
                onOpenChatWithMitra={handleOpenChatFromOrder}
                onExploreMitra={() => setActiveTab('cari')}
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

            {/* Bottom Nav Bar (persistent when on home screen) */}
            {activeTab !== 'cari' && (
              <nav className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white/95 backdrop-blur-lg border-t border-gray-200/80 px-4 py-2 z-40 flex items-center justify-between shadow-lg">
                <button
                  onClick={() => setActiveTab('cari')}
                  className={`flex flex-col items-center gap-0.5 flex-1 ${
                    activeTab === 'cari' ? 'text-[#ff6200]' : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  <span className="material-symbols-outlined text-[22px]">search</span>
                  <span className="text-[10px] font-bold">Cari</span>
                </button>

                <button
                  onClick={() => setActiveTab('favorit')}
                  className={`flex flex-col items-center gap-0.5 flex-1 ${
                    activeTab === 'favorit' ? 'text-[#ff6200]' : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  <span className="material-symbols-outlined text-[22px]">favorite_border</span>
                  <span className="text-[10px] font-semibold">Favorit</span>
                </button>

                <button
                  onClick={() => setActiveTab('pesanan')}
                  className={`flex flex-col items-center gap-0.5 flex-1 relative ${
                    activeTab === 'pesanan' ? 'text-[#ff6200]' : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  <div className="relative">
                    <span className="material-symbols-outlined text-[22px]">receipt_long</span>
                    {orders.length > 0 && (
                      <span className="absolute -top-1 -right-2 bg-[#ff6200] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                        {orders.length}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] font-semibold">Pesanan</span>
                </button>

                <button
                  onClick={() => setActiveTab('chat')}
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
                  onClick={() => setActiveTab('profil')}
                  className={`flex flex-col items-center gap-0.5 flex-1 ${
                    activeTab === 'profil' ? 'text-[#ff6200]' : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  <span className="material-symbols-outlined text-[22px]">person_outline</span>
                  <span className="text-[10px] font-semibold">Profil</span>
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
              setCurrentScreen('home');
              setActiveTab('pesanan');
            }}
            onReturnHome={() => {
              setCurrentScreen('home');
              setActiveTab('cari');
            }}
          />
        )}
      </main>
    </div>
  );
}

export default App;
