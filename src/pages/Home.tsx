import { useState } from 'react';
import Hero from '../components/Hero';
import Balance from '../components/Balance';
import QuickActions from '../components/QuickActions';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import RecentTransactions from '../components/RecentTransactions';

export default function Home() {
  const [balance] = useState("R 250.00");

  return (
    <div className="container mx-auto px-4 pb-20">
      <Hero />
      <Balance balance={balance} />
      <QuickActions />
      <Testimonials />
      <FAQ />
      <RecentTransactions />
    </div>
  );
}