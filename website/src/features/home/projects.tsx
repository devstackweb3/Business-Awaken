import React, { useRef } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/utils/cn'

const TransitionItem = ({
  delay,
  inView,
  children,
}: React.PropsWithChildren<{ delay: number; inView: boolean }>) => {
  return (
    <div
      className={cn(
        'transition-opacity opacity-0 duration-500',
        `delay-${delay}`,
        { 'opacity-1': inView }
      )}
    >
      {children}
    </div>
  )
}

const Projects = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    triggerOnce: false,
  })

  const itemsData = [
    {
      title: 'PROJECT 1',
      subtitle: 'SUBTITLE 1',
      description:
        'info bob is here but never seen there until yesterday morning.info bob is here but never seen there until yesterday morning.info bob is here but never seen there until yesterday morning.info bob is here but never seen there until yesterday morning.info bob is here but never seen there until yesterday morning.info bob is here but never seen there until yesterday morning.',
      imageBackground: (
        <Image
          className="object-cover"
          src="/authenticity.svg"
          sizes="100vw"
          style={{
            width: '100%',
            height: '100%',
          }}
          width={1140}
          height={800}
          alt="Project N°1"
        ></Image>
      ),
      initialImage: (
        <Image
          className="object-cover"
          src="/initial.png"
          sizes="100vw"
          style={{
            width: '100%',
            height: '100%',
          }}
          width={1140}
          height={800}
          alt="Project N° 2"
        ></Image>
      ),
    },
    {
      title: 'PROJECT 2',
      subtitle: 'SUBTITLE 2',
      description:
        'info alice is here but never seen there until yesterday morning.info alice is here but never seen there until yesterday morning.info alice is here but never seen there until yesterday morning.info alice is here but never seen there until yesterday morning.info alice is here but never seen there until yesterday morning.info alice is here but never seen there until yesterday morning.',
      imageBackground: (
        <Image
          className="object-cover"
          src="/visibility.svg"
          sizes="100vw"
          style={{
            width: '100%',
            height: '100%',
          }}
          width={1140}
          height={800}
          alt="Project N° 3"
        ></Image>
      ),
    },
  ]
  const delayIncrement = 100

  return (
    <div ref={ref} className="relative h-[100vh] w-[100vw] text-white">
      <div className="carousel">
        <div className="list">
          {itemsData.map((item, index) => (
            <div key={index} className="item">
              <div className={`item_env`}>
                <div className={`item absolute inset-0 z-10`}>
                  {item.imageBackground}
                  <div className="content absolute top-1/5 max-w-[80%] left-[50%] pr-12 -translate-x-[50%] box-border">
                    <TransitionItem inView={inView} delay={150}>
                      <div className="subtitle font-bold text-2xl tracking-widest">
                        {item.subtitle}
                      </div>
                    </TransitionItem>
                    <TransitionItem inView={inView} delay={300}>
                      <div className="subtitle font-bold text-6xl tracking-widest">
                        {item.title}
                      </div>
                    </TransitionItem>
                    <TransitionItem inView={inView} delay={500}>
                      {item.description}
                    </TransitionItem>

                    <div className="buttons grid grid-cols-2 grid-rows-[40px_minmax(900px,_1fr)_50px] gap-3 w-3/5 mt-4">
                      <button className="flex justify-center py-2 px-4 border-solid border-1 font-medium	text-white cursor-pointer border-cyan-500 rounded-md bg-cyan-200 bg-opacity-30 hover:bg-cyan-400 hover:bg-opacity-40 hover:transition-opacity ease-in-out duration-200 hover:scale-105 shadow-inner shadow-cyan-500">
                        Website
                      </button>
                      <button className="text-white bg-transparent rounded-md border-solid border-2 border-white cursor-pointer duration-200 hover:scale-105">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0">{item.initialImage}</div>
            </div>
          ))}
        </div>
      </div>

      {'Thumbnail'}
      <div
        className={`thumbnail absolute bottom-1/5 left-[50%] w-max flex gap-5 z-10 ${
          inView ? 'opacity-1' : 'opacity-0'
        }`}
      >
        <div className="item h-[220px] w-[150px] shrink-0 relative">
          <Image
            className="object-cover rounded-md"
            src="/visibility.svg"
            sizes="100vw"
            style={{
              width: '100%',
              height: '100%',
            }}
            width={1140}
            height={800}
            alt="Web3 3D Project"
          ></Image>
          <div className="content absolute right-1/5 left-1/5 bottom-1/5">
            <div className="title font-bold">Title</div>
            <div className="des">info détails</div>
          </div>
        </div>
        <div className="item h-[220px] w-[150px] shrink-0 relative">
          <Image
            className="object-cover rounded-md"
            src="/visibility.svg"
            sizes="100vw"
            style={{
              width: '100%',
              height: '100%',
            }}
            width={1140}
            height={800}
            alt="Web3 3D Project"
          ></Image>
          <div className="content absolute right-1/5 left-1/5 bottom-1/5">
            <div className="title font-bold">Title</div>
            <div className="des">info détails</div>
          </div>
        </div>
        <div className="item h-[220px] w-[150px] shrink-0 relative">
          <Image
            className="object-cover rounded-md"
            src="/visibility.svg"
            sizes="100vw"
            style={{
              width: '100%',
              height: '100%',
            }}
            width={1140}
            height={800}
            alt="Web3 3D Project"
          ></Image>
          <div className="content absolute right-1/5 left-1/5 bottom-1/5">
            <div className="title font-bold">Title</div>
            <div className="des">info détails</div>
          </div>
        </div>
        <div className="item h-[220px] w-[150px] shrink-0 relative">
          <Image
            className="object-cover rounded-md"
            src="/visibility.svg"
            sizes="100vw"
            style={{
              width: '100%',
              height: '100%',
            }}
            width={1140}
            height={800}
            alt="Web3 3D Project"
          ></Image>
          <div className="content absolute right-1/5 left-1/5 bottom-1/5">
            <div className="title font-bold">Title</div>
            <div className="des">info détails</div>
          </div>
        </div>
      </div>
      {'Arrows'}
      <div className="Arrows absolute flex w-[300px] max-w-1/3 gap-2.5 top-3/4 right-1/2 z-20">
        <button
          id="prev"
          className="w-[40px] h-[40px] rounded-full bg-slate-400 hover:bg-white border-none font-mono text-white hover:text-slate-500 font-bold duration-200"
        >
          {'<'}
        </button>
        <button
          id="next"
          className="w-[40px] h-[40px] rounded-full bg-slate-400 hover:bg-white border-none font-mono text-white hover:text-slate-500 font-bold duration-200"
        >
          {'>'}
        </button>
      </div>
    </div>
  )
}

export default Projects
