import Image from 'next/image'
import { Article } from '@/types/sanity/sanity.types'
import { urlFor } from '@/utils/sanity-client'

export const Tableofcontent = (props: { value: Article }) => {
  const subsubjects = props.value.sub_subjects
  const imgTableOfContent = props.value.imgtofc
  //const article = props.value

  return (
    <div className="min-w-full mb-32 items-center h-fit p-3 mt-64 overflow-y-hidden overflow-x-hidden relative bg-white duration-300 flex-col rounded-lg shadow-[0_0_0_8px_rgba(255,255,255,0.2)] content">
      <div className="relative flex h-32 shrink-0 w-full duration-300">
        <div className="w-full absolute h-40 top-[-20%] left-0 will-change-[top] bg-cover bg-center blur-[30px] scale-[1.2] duration-500">
          {imgTableOfContent
            ? imgTableOfContent && (
                <Image
                  src={urlFor(imgTableOfContent).url()}
                  alt="Table of Content"
                  height={300}
                  width={650}
                />
              )
            : null}
        </div>
        {imgTableOfContent
          ? imgTableOfContent && (
              <Image
                priority={true}
                src={urlFor(imgTableOfContent).url()}
                className="z-10 rounded-md h-auto"
                alt="Table of Content"
                width={450}
                height={350}
              />
            )
          : null}
      </div>
      <div className="relative flex flex-col pt-2.5">
        <div>
          <div className="flex flex-col p-5 text-center">
            <div className="font-bold text-[21px] mb-2">TABLE OF CONTENT</div>
            <div>
              {subsubjects
                ? subsubjects.map((sub_subject: any, index: number) => (
                    <div className="flex flex-col" key={index}>
                      {sub_subject?.subtitle}
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
