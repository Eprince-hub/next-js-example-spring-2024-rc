import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getAnimals } from '../../../database/animals';
import AnimalsForm from './AnimalsForm';

export const metadata = {
  title: 'Animal Admin page',
  description: 'Generated by create next app',
};

export default async function AnimalsPage() {
  // 4. If the sessionToken cookie is valid, allow access to dashboard page
  const animals = await getAnimals();
  return <AnimalsForm animals={animals} />;
}
