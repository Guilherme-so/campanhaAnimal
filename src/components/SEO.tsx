import Head from 'next/head';

interface SEOProps {
  title: string;
  description?: string;
  shouldExcludeTitleSuffix?: boolean;
}

export function SEO({title,description,shouldExcludeTitleSuffix = false,}: SEOProps) {

  function makePageTitle(title: string, shouldExcludeTitleSuffix: boolean) {
    const suffix = shouldExcludeTitleSuffix ? '' : ' | CAP Financeira';
    return title + suffix;
  }

  const pageTitle = makePageTitle(title, shouldExcludeTitleSuffix);

  return (
    <Head>
      <title>{pageTitle}</title>

      {description && <meta name="description" content={description} />}

      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#711bb5" />
      <meta name="msapplication-TileColor" content="#711bb5" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={pageTitle} />
    </Head>
  );
}
