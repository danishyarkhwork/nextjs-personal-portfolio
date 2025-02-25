import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex items-center')}>
      <Link
        href={href}
        className="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>Vincent Villafuerte | About</title>
        <meta
          name="description"
          content="I’m Vincent Villafuerte also known as vinzvinci. I live in Las Piñas City, Philippines, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="relative max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt="Vincent Villafuerte"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 transform rounded-2xl bg-zinc-100 object-cover shadow-lg transition-transform hover:scale-105 dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Vincent Villafuerte, also known as vinzvinci.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>Hey there 👋</p>
              <p>
                My name is Vincent Villafuerte, but you can call me vinz for
                short. I am a passionate and dedicated college student who is on
                the verge of graduating with a Bachelor’s degree in Information
                Systems. As an avid Octocat lover and OSS Advocate, I am
                constantly seeking ways to engage with the developer community
                and learn from their experiences.
              </p>
              <p>
                Technology has become a central part of my daily life, and I am
                passionate about the open-source community and the ways in which
                it promotes communication and collaboration. I am grateful to
                have found my love for coding at an early age and to have had
                the opportunity to mentor other students and make connections
                with people in the tech industry around the world.
              </p>
              <p>
                Overall, I am grateful for the path I have chosen in the tech
                industry and am excited to see where it takes me in the future.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list" className="space-y-4">
              <SocialLink
                href="https://twitter.com/vinzvinci"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/vinzvinci/"
                icon={InstagramIcon}
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/vinzvinci" icon={GitHubIcon}>
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/vinzvinci/"
                icon={LinkedInIcon}
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:info.vinzvinci@gmail.com"
                icon={MailIcon}
                className="border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                info.vinzvinci@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
