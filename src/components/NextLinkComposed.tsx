'use client';

import * as React from 'react';
import { forwardRef } from 'react';
import NextLink from 'next/link';

type NextLinkComposedProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  to: string;
  linkAs?: string;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  prefetch?: boolean;
  locale?: string | false;
};

const NextLinkComposed = forwardRef<HTMLAnchorElement, NextLinkComposedProps>(
  function NextLinkComposed(
    { to, linkAs, replace, scroll, shallow, prefetch, locale, ...other },
    ref
  ) {
    return (
      <NextLink
        href={to}
        as={linkAs}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        prefetch={prefetch}
        locale={locale}
        ref={ref}
        {...other}
      />
    );
  }
);

export default NextLinkComposed;
