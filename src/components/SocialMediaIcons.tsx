"use client";

import React from "react";

export const SocialMediaIcons = ({ iconComponent, href }: any) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="mx-1">
      <div className="text-4xl transition hover-shake">{iconComponent}</div>
    </a>
  );
};
