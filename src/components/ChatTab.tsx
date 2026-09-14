import React, { useState } from 'react';
import { MitraId } from '../types';
import { MITRA_DATA_MAP } from '../data/mitraData';

interface ChatMessage {
  id: string;
  sender: 'user' | 'mitra';
  text: string;
  time: string;
}

interface ChatTabProps {
  initialMitraId?: MitraId;
  onSelectMitraProfile: (id: MitraId) => void;
}

export const ChatTab: React.FC<ChatTabProps> = ({
  initialMitraId = 'joko',
  onSelectMitraProfile
}) => {
  const [activeMitraId, setActiveMitraId] = useState<MitraId>(initialMitraId);
  const [inputText, setInputText] = useState('');
  const [messagesMap, setMessagesMap] = useState<Record<MitraId, ChatMessage[]>>({
    joko: [
      {
        id: '1',
        sender: 'mitra',
        text: 'Halo Bpk/Ibu! Saya Pak Joko Santoso, tukang ahli keramik & finishing binaan BLK. Ada bagian lantai, kamar mandi, atau dinding yang ingin disurvey/dipasang?',
        time: '10:00'
      }
    ],
    dwi: [
      {
        id: '1',
        sender: 'mitra',
        text: 'Selamat datang! Saya Ir. Dwi Prabowo, IAI. Saya siap membantu gambar kerja DED arsitektur, render 3D photorealistis, dan pengajuan izin PBG.',
        time: '09:15'
      }
    ],
    yanto: [
      {
        id: '1',
        sender: 'mitra',
        text: 'Salam kenal! Mandor Yanto di sini. Siap supervisi lapangan dengan disiplin K3 dan manajemen tukang profesional agar proyek rumah bebas molor.',
        time: '08:30'
      }
    ],
    hendra: [
      {
        id: '1',
        sender: 'mitra',
        text: 'Halo! Saya Hendra Wijaya, S.T., konsultan struktur berlisensi STRA/PII. Ada keretakan balok, audit gempa SNI, atau rencana perkuatan pondasi?',
        time: '11:05'
      }
    ]
  });

  const activeMitra = MITRA_DATA_MAP[activeMitraId];
  const messages = messagesMap[activeMitraId] || [];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessagesMap(prev => ({
      ...prev,
      [activeMitraId]: [...(prev[activeMitraId] || []), userMsg]
    }));
    setInputText('');

    // Auto-reply from Mitra
    setTimeout(() => {
      const replies: Record<MitraId, string> = {
        joko: 'Baik Bpk/Ibu, siap! Saya selalu bawa laser level 3D dan adukan semen khusus agar hasil rata dan padat anti-kopong. Jadwal besok pagi sudah saya amankan!',
        dwi: 'Baik, saya catat kebutuhan desainnya. Gambar denah eksisting bisa dikirimkan dan akan saya buatkan draft zonasi ruangan sesuai standar sirkulasi udara & cahaya!',
        yanto: 'Siap laksanakan! Besok saya beserta tim tukang siap visit lokasi tepat waktu untuk cek volume fisik dan susun jadwal harian.',
        hendra: 'Baik, kami siap lakukan tinjauan langsung dengan alat NDT hammer test untuk mengukur mutu beton eksisting sesuai standar SNI 2847.'
      };

      const replyMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'mitra',
        text: replies[activeMitraId] || 'Siap, pesan Anda kami terima. Segera kami tindak lanjuti!',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessagesMap(prev => ({
        ...prev,
        [activeMitraId]: [...(prev[activeMitraId] || []), replyMsg]
      }));
    }, 1000);
  };

  const mitraIds: MitraId[] = ['joko', 'dwi', 'yanto', 'hendra'];

  return (
    <div className="w-full max-w-[430px] mx-auto min-h-screen bg-[#f8f9fa] text-[#191c1d] flex flex-col pb-24 relative">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md px-4 py-3 border-b border-gray-100 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <img
              referrerPolicy="no-referrer"
              src={activeMitra.avatar}
              alt={activeMitra.name}
              className="w-10 h-10 rounded-full object-cover ring-1 ring-orange-200"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full ring-2 ring-white"></span>
          </div>
          <div>
            <h2 className="text-xs font-bold text-gray-900 leading-tight">
              {activeMitra.name}
            </h2>
            <div className="flex items-center gap-1 text-[10px] text-emerald-700 font-semibold">
              <span>● Online</span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-500">{activeMitra.roleCategory}</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => onSelectMitraProfile(activeMitraId)}
          className="px-2.5 py-1 bg-orange-50 text-[#ff6200] hover:bg-orange-100 text-[11px] font-bold rounded-lg transition-colors"
        >
          Lihat Profil
        </button>
      </header>

      {/* Switcher Tabs */}
      <div className="bg-white border-b border-gray-100 px-4 py-2 flex items-center gap-2 overflow-x-auto scrollbar-none">
        {mitraIds.map(id => {
          const m = MITRA_DATA_MAP[id];
          const isSelected = activeMitraId === id;
          return (
            <button
              key={id}
              onClick={() => setActiveMitraId(id)}
              className={`px-3 py-1.5 rounded-xl text-xs whitespace-nowrap transition-all flex items-center gap-1.5 ${
                isSelected
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
            </button>
          );
        })}
      </div>

      {/* Trust Notice */}
      <div className="bg-emerald-50/70 border-b border-emerald-100 px-4 py-2 flex items-center gap-2 text-[11px] text-emerald-950 font-medium">
        <span className="material-symbols-outlined text-emerald-700 text-[16px]">lock</span>
        <span>Percakapan dilindungi standar privasi & garansi anti-ghosting LIX</span>
      </div>

      {/* Messages Container */}
      <div className="flex-1 px-4 py-3 flex flex-col gap-2.5 overflow-y-auto">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`flex flex-col max-w-[80%] ${
              msg.sender === 'user' ? 'self-end items-end' : 'self-start items-start'
            }`}
          >
            <div
              className={`p-3 rounded-2xl text-xs leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-[#ff6200] text-white rounded-br-xs'
                  : 'bg-white text-gray-900 border border-gray-200/80 rounded-bl-xs shadow-2xs'
              }`}
            >
              {msg.text}
            </div>
            <span className="text-[10px] text-gray-400 mt-1 px-1">{msg.time}</span>
          </div>
        ))}
      </div>

      {/* Suggested Quick Questions */}
      <div className="px-4 pb-2 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
        {[
          'Berapa estimasi hari pengerjaan?',
          'Apakah material saya sediakan sendiri?',
          'Bisa survey lokasi besok pagi?',
          'Bagaimana sistem garansi retensi?'
        ].map((q, idx) => (
          <button
            key={idx}
            onClick={() => setInputText(q)}
            className="px-2.5 py-1 rounded-full bg-white border border-gray-200 text-gray-700 text-[11px] whitespace-nowrap hover:bg-orange-50 hover:border-orange-200 transition-colors"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Chat Input Bar */}
      <div className="sticky bottom-14 bg-white border-t border-gray-100 p-3">
        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            placeholder={`Tulis pesan untuk ${activeMitra.name.split(',')[0]}...`}
            className="flex-1 h-11 bg-gray-100 rounded-2xl px-3.5 text-xs font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6200] focus:bg-white"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="w-11 h-11 bg-[#ff6200] disabled:bg-gray-300 text-white rounded-2xl flex items-center justify-center transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">send</span>
          </button>
        </form>
      </div>
    </div>
  );
};
