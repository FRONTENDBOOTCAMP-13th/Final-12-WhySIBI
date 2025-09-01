'use client';
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

function CategoryItem({
  href,
  img,
  img_dark,
  video,
  video_dark,
  label,
}: {
  href: string;
  img: string;
  img_dark: string;
  video: string;
  video_dark: string;
  label: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
    const videoDarkRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
      if (videoDarkRef.current) {
        videoDarkRef.current.currentTime = 0;
        videoDarkRef.current.play().catch(() => {});
      }
    };

    const handleMouseLeave = () => {
      videoRef.current?.pause();
      videoDarkRef.current?.pause();
    };

  return (
    <figure>
      <Link
        href={href}
        className="group flex flex-col items-center hover:scale-110 duration-200"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
          {/* 라이트모드 */}
          <div className="relative block dark:hidden w-[100px] h-[100px]">
            <Image
              src={img}
              alt={label}
              fill
              className="object-contain group-hover:hidden"
            />
            <video
              ref={videoRef}
              src={video}
              width={100} height={100}
              muted
              playsInline
              loop
              className="hidden group-hover:block w-full h-full object-cover"
            />
          </div>

          {/* 다크모드 */}
          <div className="relative hidden dark:block w-[100px] h-[100px]">
            <Image
              src={img_dark}
              alt={label}
              fill
              className="object-contain group-hover:hidden"
            />
            <video
              ref={videoDarkRef}
              src={video_dark}
              width={100} height={100}
              muted
              playsInline
              loop
              className="hidden group-hover:block w-full h-full object-cover"
            />
          </div>

        <figcaption className="mt-5">{label}</figcaption>
      </Link>
    </figure>
  );
}

export default CategoryItem;