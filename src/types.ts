export type MitraId = 'dwi' | 'hendra' | 'yanto' | 'joko';

export type ScreenType =
  | 'login'
  | 'home'
  | 'mitra_profile'
  | 'booking_confirm'
  | 'payment_method'
  | 'payment_success';

export type TabType = 'cari' | 'favorit' | 'pesanan' | 'chat' | 'profil';

export interface CertificateItem {
  institution: string;
  badge: string;
  badgeClass?: string;
  title: string;
  iconName: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  location: string;
  completionDate: string;
  costEstimate: string;
  contractorFee?: string;
  projectValue?: string;
  duration: string;
  precisionLabel: string;
  precisionValue: string;
  mainImage: string;
  fallbackImage?: string;
  specs: string[];
  galleryPreviews?: { label: string; image: string }[];
  clientQuote?: string;
  clientAuthor?: string;
  tagBottomRight: string;
  statusTag?: string;
}

export interface ClientReview {
  id: string;
  authorName: string;
  authorInitials: string;
  authorBadge?: string;
  projectTitle: string;
  date: string;
  stars: number;
  escrowTag: string;
  comment: string;
  photos?: { label: string; image: string }[];
  mitraReply?: {
    author: string;
    date: string;
    text: string;
  };
  hasPhoto?: boolean;
}

export interface MitraData {
  id: MitraId;
  name: string;
  shortRole: string;
  fullRole: string;
  roleCategory: string;
  binaanText: string;
  avatar: string;
  badgeTopText: string;
  rating: number;
  reviewCount: number;
  location: string;
  experienceYears: number;
  completedProjects: number;
  guaranteeDays: number;
  guaranteeTitle: string;
  guaranteeDesc: string;
  certifications: CertificateItem[];
  verifiedStatusText: string;
  portfolioCategories: { id: string; label: string; count: number }[];
  portfolioProjects: PortfolioProject[];
  reviews: ClientReview[];
  ratingBreakdown: {
    fiveStar: number;
    fourStar: number;
    threeStar: number;
    twoStar: number;
    oneStar: number;
    stat1Label: string;
    stat1Value: string;
    stat2Label: string;
    stat2Value: string;
    stat3Label: string;
    stat3Value: string;
  };
  priceOriginal: number;
  priceDiscounted: number;
  priceUnit: string;
  discountBadge: string;
  priceSubtext: string;
  ctaButtonText: string;
  // Booking specific
  bookingHeaderLabel: string;
  availabilityText: string;
  bookingSchedule: string;
  orderNumber: string;
  servicePackageName: string;
  servicePackagePrice: number;
  serviceFee: number;
  defaultAddress: {
    title: string;
    desc: string;
  };
  defaultNote: string;
  defaultNoteExtra: string;
  serviceProtectionTitle: string;
  serviceProtectionSubtitle: string;
}

export interface BankOption {
  id: string;
  name: string;
  subtitle: string;
  logo: string;
  isPopular?: boolean;
}

export interface OrderRecord {
  id: string;
  orderNumber: string;
  mitraId: MitraId;
  mitraName: string;
  mitraRole: string;
  mitraAvatar: string;
  serviceName: string;
  totalAmount: number;
  bankName: string;
  status: 'LUNAS ESCROW' | 'PROSES KUNJUNGAN' | 'PENGERJAAN' | 'SELESAI';
  createdAt: string;
  schedule: string;
  addressTitle: string;
  addressDesc: string;
  notes: string;
  guaranteeDays: number;
}
