'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import { useParams } from 'next/navigation';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;

  const toggleLanguage = () => {
    const newLocale = currentLocale === 'en' ? 'fr' : 'en';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="gap-2"
    >
      <Globe className="h-4 w-4" />
      <span className="uppercase">{currentLocale === 'en' ? 'FR' : 'EN'}</span>
    </Button>
  );
}
