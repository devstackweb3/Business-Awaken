import type { Sub_subject as SubSubject } from '@/types/sanity/sanity.types'
import { RichText } from '@/components/blog/rich-text'
import Image from 'next/image'
import { urlFor } from '@/utils/sanity-client'

export const Subsubject = ({ data }: { data: SubSubject }) => {
  const { subtitle, subdescription } = data
  //console.log(subdescription ? subdescription[0] : null)
  return (
    <div className="flex flex-col gap-1">
      {subtitle ? (
        <p className="font-sans font-semibold text-2xl">{subtitle}</p>
      ) : null}
      {subdescription ? <RichText value={subdescription} /> : null}
    </div>
  )
}
