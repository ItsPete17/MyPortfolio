import Link from "next/link";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex items-center justify-center gap-8 mt-10 py-10 md:h-24">
        
        {/* GitHub Button */}
        <Link
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "h-10 w-10 p-2"
          )}
          aria-label="GitHub"
        >
          <Icons.gitHub className="h-5 w-5" />
        </Link>

        {/* Facebook Button */}
        <Link
          href={siteConfig.links.facebook}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "h-10 w-10 p-2"
          )}
          aria-label="Facebook"
        >
          <Icons.facebook className="h-5 w-5" />
        </Link>

        {/* Email Button - CHANGED ICON HERE 👇 */}
        <Link
          href={siteConfig.links.mail}
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "h-10 w-10 p-2"
          )}
          aria-label="Email"
        >
          <Icons.mail className="h-5 w-5" />
        </Link>

      </div>
    </footer>
  );
}