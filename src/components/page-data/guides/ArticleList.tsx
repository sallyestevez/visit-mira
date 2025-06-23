"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import GuidesData from "@/components/page-data/guides/GuidesData";

import MiraImg from "@/components/images/home/Mira.png";

export default function ArticleList() {
  const [Guides] = useState(GuidesData);

  return (
    <div className="articles-list">
      {Guides.map((article) => {
        return (
          <Link href={`/guides/${article.id}`} key={article.id}>
            <div className="article" key={article.id}>
              <Image
                className="article-image"
                src={article.img}
                alt="Article key image"
              />
              <div className="article-text">
                <div className="article-title">{article.title}</div>
                <p className="article-description">{article.description}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
