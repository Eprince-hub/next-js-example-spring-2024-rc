import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getAnimalById } from '../../../database/animals';

export async function generateMetadata(props) {
  const singleAnimal = await getAnimalById(props.params.animalId);
  return {
    title: singleAnimal?.firstName,
  };
}

export default async function AnimalPage(props) {
  const singleAnimal = await getAnimalById(props.params.animalId);

  if (!singleAnimal) {
    notFound();
  }

  return (
    <div>
      Single animal page
      <h1>{singleAnimal.firstName}</h1>
      <Image
        src={`/images/${singleAnimal.firstName.toLowerCase()}.png`}
        alt={singleAnimal.firstName}
        width={200}
        height={200}
      />
      this is a {singleAnimal.type} carrying {singleAnimal.accessory}
    </div>
  );
}
