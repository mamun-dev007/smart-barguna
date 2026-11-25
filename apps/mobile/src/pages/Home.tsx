import {
  ADVERTISEMENTS,
  BLOOD_GROUPS,
  EMERGENCY_NUMBERS,
  EMERGENCY_SERVICES,
  JOB_NEWS,
  MANUAL_SERVICES,
  NOTICES,
  TOURISM_PLACES,
} from "../data/home";
import AdvertisementSection from "../components/home/AdvertisementSection";
import BloodInfoSection from "../components/home/BloodInfoSection";
import EmergencyNumbersSection from "../components/home/EmergencyNumbersSection";
import EmergencyServicesSection from "../components/home/EmergencyServicesSection";
import JobNewsSection from "../components/home/JobNewsSection";
import ManualServicesSection from "../components/home/ManualServicesSection";
import NoticeBar from "../components/home/NoticeBar";
import TourismPlacesSection from "../components/home/TourismPlacesSection";

export default function Home() {
  return (
    <main className="sb-container w-full py-4 sm:py-6">
      <NoticeBar notices={NOTICES} />
      <AdvertisementSection ads={ADVERTISEMENTS} />
      <BloodInfoSection groups={BLOOD_GROUPS} />
      <EmergencyNumbersSection numbers={EMERGENCY_NUMBERS} />
      <EmergencyServicesSection services={EMERGENCY_SERVICES} />
      <ManualServicesSection services={MANUAL_SERVICES} />
      <TourismPlacesSection places={TOURISM_PLACES} />
      <JobNewsSection jobs={JOB_NEWS} />
    </main>
  );
}
