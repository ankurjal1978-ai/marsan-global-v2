import Image, { type ImageProps } from 'next/image';
export function SiteImage({ alt, ...props }: ImageProps) {
  return (
    <Image
      {...props}
      alt={alt}
      sizes={props.priority ? '100vw' : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px'}
    />
  );
}
