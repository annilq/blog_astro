"use client";

import React, { useState } from "react";
import type { Book } from "../api/book/util";
import BookModal from "./BookModal.tsx";
import * as Icon from "lucide-react";

interface BookInteractiveWrapperProps {
  data: Book;
}

export default function BookInteractiveWrapper({
  data,
}: BookInteractiveWrapperProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <div className="relative bg-background dark:bg-gray-800 rounded-2xl p-4 shadow flex gap-4 w-72 aspect-video">
        <a href={data.href} target="_blank" title={data.title}>
          <Icon.Link className="absolute top-2 right-2 w-4 text-gray-600" />
        </a>
        <img
          src={data.url}
          alt={data.title}
          className="shadow rounded-sm cursor-pointer max-w-24"
          onClick={() => setOpen(true)}
        />
        <div className="flex-1 flex flex-col gap-4 justify-center ">
          <div className="font-bold line-clamp-2">{data.title}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {data.author}
          </div>
        </div>
      </div>
      <BookModal data={data} open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
