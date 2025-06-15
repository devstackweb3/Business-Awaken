import type { Author as TAuthor } from '@/types/sanity/author'
import { RichText } from '@/components/blog/rich-text'
import { author } from '@/styles/author'
import { useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/utils/sanity-client'

export const Author = ({ data }: { data: TAuthor }) => {
  const { name, surname, image, biography, job } = data

  //USEREF() INSTEAD OF QUERYSELECTOR?

  const [showOn, showSetOn] = useState(1)

  const handletab = (e: any) => {
    showSetOn(e)
  }

  return (
    <div className="h-fit sticky top-5">
      <div className="card" data-state="#about">
        <div className="relative flex justify-center h-28 shrink-0 w-full duration-300">
          <div className="card-cover card-background"></div>
          <Image
            className="absolute place-self-center object-contain rounded-full "
            src={urlFor(data.image).url()}
            width={55}
            height={55}
            alt="avatar"
          />
          <div className="card-fullname">
            {surname ? (
              <div className="text-black font-sans">{surname}</div>
            ) : null}{' '}
            {name ? (
              <div className="text-black font-sans ml-2">{name}</div>
            ) : null}
          </div>
          <div className="card-jobtitle">
            {job ? <div className="text-black font-sans">{job}</div> : null}
          </div>
        </div>
        <div className="card-main">
          <div
            className={
              showOn === 1 ? 'block animate-fadeIn is-active' : 'hidden'
            }
            id="about"
          >
            <div className="p-5 mt-8">
              <div className="font-bold text-[13px] mb-2">BIOGRAPHY</div>
              <div className="card-desc">
                {biography ? <RichText value={biography} /> : null}
              </div>
            </div>
            <div className="card-social">
              <a
                data-navigo
                href="#"
                className="social-btn hover:bg-cyan-400 transition duration-100"
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" />
                </svg>
              </a>
              <a
                data-navigo
                href="#"
                className="social-btn hover:bg-cyan-400 transition duration-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
                </svg>
              </a>
              <a
                data-navigo
                href="#"
                className="social-btn hover:bg-cyan-400 transition duration-100"
              >
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />
                  <path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />
                  <path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" />
                </svg>
              </a>
              <a
                data-navigo
                href="#"
                className="social-btn hover:bg-cyan-400 transition duration-100"
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />
                </svg>
              </a>
            </div>
          </div>
          <div
            className={
              showOn === 2 ? 'block animate-fadeIn is-active' : 'hidden'
            }
            id="experience"
          >
            <div className="p-5 mt-8">
              <div className="font-bold text-[13px] mb-2">MY BACKGROUND</div>
              <div className="card-timeline">
                <div className="card-item">
                  <div className="data-year">2018</div>
                  <div className="card-item-title">
                    Front-end Developer at <span>JotForm</span>
                  </div>
                  <div className="card-item-desc">
                    Disrupt stumptown retro everyday carry unicorn.
                  </div>
                </div>
                <div className="card-item">
                  <div className="data-year">2021</div>
                  <div className="card-item-title">
                    UI Developer at <span>GitHub</span>
                  </div>
                  <div className="card-item-desc">
                    Developed new conversion funnels and disrupt.
                  </div>
                </div>
                <div className="card-item">
                  <div className="data-year">2022</div>
                  <div className="card-item-title">
                    Illustrator at <span>Google</span>
                  </div>
                  <div className="card-item-desc">
                    Onboarding illustrations for App.
                  </div>
                </div>
                <div className="card-item">
                  <div className="data-year">2023</div>
                  <div className="card-item-title">
                    Full-Stack Developer at <span>CodePen</span>
                  </div>
                  <div className="card-item-desc">
                    Responsible for the encomposing brand experience.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              showOn === 3 ? 'block animate-fadeIn is-active' : 'hidden'
            }
            id="contact"
          >
            <div className="p-5 mt-8">
              <div className="font-bold text-[13px] mb-2">CONTACT</div>
              <div className="card-contact-wrapper">
                <div className="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Street E32, London, United Kingdom
                </div>
                <div className="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  contact@w3beconomy.ch
                </div>
                <button className="contact-me">MY ARTICLES</button>
              </div>
            </div>
          </div>
          <div className="card-buttons">
            <button
              data-section="#about"
              className={showOn === 1 ? 'item is-on' : 'item'}
              onClick={() => handletab(1)}
            >
              ABOUT
            </button>
            <button
              data-section="#experience"
              className={showOn === 2 ? 'item is-on' : 'item'}
              onClick={() => handletab(2)}
            >
              EXPERIENCE
            </button>
            <button
              data-section="#contact"
              className={showOn === 3 ? 'item is-on' : 'item'}
              onClick={() => handletab(3)}
            >
              CONTACT
            </button>
          </div>
        </div>
      </div>
      <style jsx>{author}</style>
    </div>
  )
}
