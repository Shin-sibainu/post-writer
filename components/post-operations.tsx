"use client";

import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { DropdownMenu } from "./ui/dropdown-menu";
import { Icons } from "./icon";
import Link from "next/link";
import { Post } from "@prisma/client";

interface PostOperationsProps {
  post: Pick<Post, "id" | "title">;
}

export default function PostOperations({ post }: PostOperationsProps) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex h-8 w-8 items-center justify-center rounded-md border transition-colors hover:bg-muted">
          <Icons.ellipsis className="h-4 w-4" />
          <span className="sr-only">開く</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Link href={`/editor/${post.id}`} className="flex w-full">
              編集
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex cursor-pointer items-center text-destructive focus:text-destructive">
            削除
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
