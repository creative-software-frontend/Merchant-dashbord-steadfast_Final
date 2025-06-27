'use client';
import ParcelDetails from '@/app/components/tracking-parcel/ParcelDetails';
import { useSearchParams } from 'next/navigation';


const ParcelDetailsPage = () => {
  const searchParams = useSearchParams();
  const phone = searchParams.get('phone');

  if (!phone) {
    return (
      <div className="text-center mt-10 text-red-500">
        No phone number provided in query.
      </div>
    );
  }

  return <ParcelDetails phone={phone} />;
};

export default ParcelDetailsPage;
