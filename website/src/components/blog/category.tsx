import type { Category as TCategory } from '@/types/sanity/sanity.types'

export const Category = ({ data }: { data: TCategory }) => {
  const { title } = data
  return (
    <div className="flex flex-row gap-1">
      {title ? <p className="font-sans uppercase">{title}</p> : null}
    </div>
  )
}
