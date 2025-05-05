import React from "react";
import Image, { type StaticImageData } from "next/image";

type PageHeaderProps = {
  readonly pageTitle: string;
  readonly backgroundImage: string | StaticImageData;
};

export default function PageHeader({
  pageTitle,
  backgroundImage,
}: PageHeaderProps) {
  return (
    <div className="page-header relative w-full overflow-hidden">
      <Image
        src={backgroundImage}
        alt={`${pageTitle} Background`}
        fill
        className="object-cover object-center"
        priority
      />
      <h1 className="z-10">{pageTitle}</h1>
    </div>
  );
}
