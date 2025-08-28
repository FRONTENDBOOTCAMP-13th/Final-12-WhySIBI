'use client';
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

function CategoryItem({
  href,
  img,
  video,
  label,
}: {
  href: string;
  img: string;
  video: string;
  label: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

    return (
    <figure>
      <Link
        href={href}
        className="group flex flex-col items-center hover:scale-110 duration-200"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={img}
          alt={label}
          width={100}
          height={100}
          className="block group-hover:hidden"
        />
        <video
          ref={videoRef}
          src={video}
          width={100}
          height={100}
          muted
          playsInline
          loop
          className="hidden group-hover:block object-cover"
        />
        <figcaption className="mt-5">{label}</figcaption>
      </Link>
    </figure>
  );
}

export default CategoryItem;