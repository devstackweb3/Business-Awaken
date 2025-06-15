import { PortableText, PortableTextComponents } from '@portabletext/react'
import { type PropsWithChildren } from 'react'
import NavLink from '@/components/blog/navlink'

const Title = ({ children }: PropsWithChildren) => (
  <h1 className="text-black font-semibold">{children}</h1>
)

const Subtitle = ({ children }: PropsWithChildren) => (
  <h2 className="text-black font-semibold text-xl">{children}</h2>
)

const SubSubTitle = ({ children }: PropsWithChildren) => (
  <h3 className="text-black font-semibold text-lg">{children}</h3>
)

const SubSubSubTitle = ({ children }: PropsWithChildren) => (
  <h4 className="text-black font-semibold text-base">{children}</h4>
)

const components: PortableTextComponents = {
  /*types: {
    image: ({ value }) => <Image src={value.imageUrl} alt="" />,
    callToAction: ({ value, isInline }) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },*/
  marks: {
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('https')
        ? '_blank'
        : undefined
      return (
        <NavLink href={value?.href} exact={undefined} child={children}>
          {children}
        </NavLink>
      )
    },
  },
  block: {
    h1: ({ children }) => <Title>{children}</Title>,
    h2: ({ children }) => <Subtitle>{children}</Subtitle>,
    h3: ({ children }) => <SubSubTitle>{children}</SubSubTitle>,
    h4: ({ children }) => <SubSubSubTitle>{children}</SubSubSubTitle>,
    normal: ({ children }) => <span>{children}</span>, //parent of "link:..." rethrieving the return value and target
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="ml-2" style={{ listStyleType: 'disclosure-closed' }}>
        {children}
      </li>
    ),
  },
}

export const RichText = (props: { value: any }) => {
  return <PortableText value={props.value} components={components} />
}
