export type NoticeItem = {
  id: string;
  text: string;
};

export type AdvertisementItem = {
  id: string;
  imageUrl: string;
  imageAlt: string;
  destinationUrl?: string;
};

export type BloodGroupItem = {
  id: string;
  group: string;
  donorCount?: number;
};

export type EmergencyNumberItem = {
  id: string;
  name: string;
  phone: string;
  verified: boolean;
  iconKey: string;
};

export type ServiceLinkItem = {
  id: string;
  title: string;
  to: string;
  iconKey: string;
};

export type TourismPlaceItem = {
  id: string;
  name: string;
  imageUrl: string;
  location?: string;
  to?: string;
};

export type JobNewsItem = {
  id: string;
  title: string;
  organization?: string;
  publishedAt: string;
  deadline?: string;
  iconKey: string;
  to?: string;
};

export const NOTICES: NoticeItem[] = [];

export const ADVERTISEMENTS: AdvertisementItem[] = [];

export const BLOOD_GROUPS: BloodGroupItem[] = [
  { id: "a-positive", group: "A+" },
  { id: "a-negative", group: "A-" },
  { id: "b-positive", group: "B+" },
  { id: "b-negative", group: "B-" },
  { id: "o-positive", group: "O+" },
  { id: "o-negative", group: "O-" },
  { id: "ab-positive", group: "AB+" },
  { id: "ab-negative", group: "AB-" },
];

export const EMERGENCY_NUMBERS: EmergencyNumberItem[] = [];

export const EMERGENCY_SERVICES: ServiceLinkItem[] = [
  { id: "hospital", title: "হাসপাতাল সেবা", to: "/services/healthcare", iconKey: "hospital" },
  { id: "police", title: "পুলিশ সহায়তা", to: "/emergency", iconKey: "police" },
  { id: "fire", title: "অগ্নিনির্বাপণ", to: "/emergency", iconKey: "fire" },
  { id: "blood", title: "রক্ত সহায়তা", to: "/services/blood-bank", iconKey: "blood" },
  { id: "women", title: "মহিলা ও শিশু সহায়তা", to: "/emergency", iconKey: "women" },
  { id: "disaster", title: "দুর্যোগ সহায়তা", to: "/emergency", iconKey: "disaster" },
  { id: "electricity", title: "বিদ্যুৎ অভিযোগ", to: "/emergency", iconKey: "electricity" },
  { id: "road", title: "সড়ক দুর্ঘটনা", to: "/emergency", iconKey: "road" },
  { id: "waterway", title: "নৌ দুর্ঘটনা", to: "/emergency", iconKey: "waterway" },
  { id: "other", title: "অন্যান্য জরুরি সেবা", to: "/emergency", iconKey: "other" },
];

export const MANUAL_SERVICES: ServiceLinkItem[] = [
  { id: "healthcare", title: "স্বাস্থ্যসেবা", to: "/services/healthcare", iconKey: "healthcare" },
  { id: "education", title: "শিক্ষা", to: "/services/education", iconKey: "education" },
  { id: "jobs", title: "চাকরি ও ক্যারিয়ার", to: "/services/jobs-career", iconKey: "jobs" },
  { id: "transport", title: "পরিবহন", to: "/services/transport", iconKey: "transport" },
  { id: "hotels", title: "হোটেল ও আবাসন", to: "/explore/hotels-accommodation", iconKey: "hotels" },
  { id: "restaurants", title: "রেস্টুরেন্ট ও খাদ্য", to: "/explore/restaurants-food", iconKey: "restaurants" },
  { id: "government", title: "সরকারি সেবা", to: "/district", iconKey: "government" },
  { id: "events", title: "ইভেন্ট", to: "/services/events", iconKey: "events" },
  { id: "upazila", title: "উপজেলা তথ্য", to: "/explore/upazila-information", iconKey: "upazila" },
  { id: "union", title: "ইউনিয়ন তথ্য", to: "/explore/union-information", iconKey: "union" },
];

export const TOURISM_PLACES: TourismPlaceItem[] = [];

export const JOB_NEWS: JobNewsItem[] = [];
