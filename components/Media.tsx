import Image from 'next/image';
import Placeholder from './Placeholder';
import type { Photo } from '@/data/profile';

/* Mostra la foto reale se `src` è impostato, altrimenti un segnaposto.
   Il contenitore genitore deve avere position: relative. */
export default function Media({
  photo,
  seed = 0,
  sizes,
  priority = false,
}: {
  photo: Photo;
  seed?: number;
  sizes: string;
  priority?: boolean;
}) {
  if (photo.src) {
    return (
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectFit: 'cover' }}
      />
    );
  }
  return <Placeholder seed={seed} label={photo.alt} />;
}
