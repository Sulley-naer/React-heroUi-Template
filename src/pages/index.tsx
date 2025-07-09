import { Code } from '@heroui/code'
import { Link } from '@heroui/link'
import { Snippet } from '@heroui/snippet'
import { button as buttonStyles } from '@heroui/theme'
import { motion } from 'framer-motion'

import { useTranslation } from 'react-i18next'
import { GithubIcon } from '@/components/icons'
import { siteConfig } from '@/config/site'
import DefaultLayout from '@/layouts/default'

export default function IndexPage() {
  const { t } = useTranslation('home')

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.35 },
    }),
  }

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <div className="text-9xl">
            {['Kickstart', 'your', 'Reading'].map((text, i) => (
              <motion.p
                key={i}
                animate={textVariants.visible(i)}
                className={
                  i === 0
                    ? 'text-primary'
                    : i === 1
                      ? 'text-pink-400'
                      : 'text-cyan-500'
                }
                custom={i}
                initial="hidden"
                variants={textVariants}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            className={buttonStyles({
              color: 'primary',
              radius: 'full',
              variant: 'shadow',
            })}
            href={siteConfig.links.docs}
          >
            {t('document')}
          </Link>
          <Link
            className={buttonStyles({ variant: 'bordered', radius: 'full' })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            {t('GitHub')}
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              start your visiting
              <Code color="primary" style={{ marginInline: '0.3rem' }}>
                pages/index.tsx
              </Code>
            </span>
          </Snippet>
        </div>
      </section>
    </DefaultLayout>
  )
}
