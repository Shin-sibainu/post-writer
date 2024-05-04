"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Icons } from "./icon";
import { Post } from "@prisma/client";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postPatchSchema } from "@/lib/validations/post";
import { z } from "zod";

interface EditorProps {
  post: Pick<Post, "id" | "title" | "content" | "published">;
}

type FormData = z.infer<typeof postPatchSchema>;

export default function Editor({ post }: EditorProps) {
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(postPatchSchema),
  });

  async function onSubmit(data: FormData) {
    setIsSaving(true);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-full gap-10">
        <div>
          <div>
            <Link
              href="/dashboard"
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              <>
                <Icons.chevronLeft className="mr-2 h-4 w-4" />
                戻る
              </>
            </Link>
            <p className="text-sm text-muted-foreground">
              {post.published ? "公開" : "ドラフト"}
            </p>
          </div>
          <button type="submit" className={cn(buttonVariants())}>
            {isSaving && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            <span>保存</span>
          </button>
        </div>
        <div>
          <TextareaAutosize
            autoFocus
            id="title"
            defaultValue={post.title}
            placeholder="Post title"
            className="w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none"
          />
          <div id="editor" className="min-h-[500px]" />
          <p className="text-sm text-gray-500">
            Use
            <kbd className="rounded-md border bg-muted px-1 text-xs uppercase">
              Tab
            </kbd>
            to open the command menu.
          </p>
        </div>
      </div>
    </form>
  );
}
