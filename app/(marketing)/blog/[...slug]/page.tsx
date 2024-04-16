import { allPosts } from "@/.contentlayer/generated";
import { buttonVariants } from "@/components/ui/button";
import { cn, formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article className="container max-w-3xl py-6 lg:py-10">
      <Link
        href={"/blog"}
        className={cn(buttonVariants({ variant: "ghost" }), "hidden")}
      >
        全ての記事を見る
      </Link>
      <div>
        {post.date && (
          <time
            dateTime={post.date}
            className="block text-sm text-muted-foreground"
          >
            Published on {formatDate(post.date)}
          </time>
        )}
        <h1 className="mt-2 font-extrabold text-4xl leading-tight lg:text-5xl">
          {post.title}
        </h1>
      </div>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          priority
          className="my-8 rounded-md border bg-muted transition-colors"
        />
      )}
    </article>
  );
}
