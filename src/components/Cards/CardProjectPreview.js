import React from "react";

export default function CardProjectPreview({ title, category, urlImg, slug }) {
  return (
    <div>
      <Link href={`posts/${slug}`}>
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
          <div>
            <img
              src={urlImg}
              className="rounded-t-xl border-none"
              alt={title}
            />
          </div>
          <div className="text-center px-4 py-6">
            <p className="font-normal text-lg md:text-xl text-[#1E3851] mb-2">
              {title}
            </p>
            <span className="text-lg font-light text-[#1E3851]">{category}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
