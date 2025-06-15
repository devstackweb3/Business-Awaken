import type { Sub_subject as SubSubject } from '@/types/sanity/sanity.types'

export const Subchapter = ({ data }: { data: SubSubject }) => {
  const { subtitle } = data
  return (
    <div className="flex flex-col gap-1">
      {subtitle ? <h3 className="font-sans">{subtitle}</h3> : null}
    </div>
  )
}
