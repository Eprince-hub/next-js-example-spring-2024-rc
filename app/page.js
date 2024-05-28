import Image from 'next/image';
import smilingCat from '../public/images/smiling-cat.jpeg';

export default function Home() {
  return (
    <div>
      <h1>Hello UpLeveled</h1>
      <Image src={smilingCat} alt="Smiling cat" />
    </div>
  );
}
