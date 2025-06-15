import * as React from 'react'
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from '@react-email/components'

interface WelcomeEmailProps {
  program?: string
  company?: string
}

const baseUrl = 'https://w3beconomy.uk'

const WelcomeEmail = ({
  program = 'Loyalty Odyssey',
  company = 'W3B Economy',
}: WelcomeEmailProps) => {
  const previewText = `Welcome to ${program}!`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body style={main}>
          <Container style={container}>
            <Section style={box}>
              <Img
                src={`${baseUrl}/logo.png`}
                width="80"
                height="80"
                alt="W3B Economy Logo"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-2xl font-normal text-center p-0 my-8 mx-0">
              Welcome to <strong>{program}</strong>!
            </Heading>
            <Text className="text-sm">
              Hello dear fellow digital adventurer,
            </Text>
            <Text className="text-sm">
              We are excited to have you onboard on the{' '}
              <strong>{program}</strong>. We hope you enjoy your journey with
              us. If you have any questions or need assistance, feel free to
              reach out.
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#39cac8] px-2 py-1 rounded text-white text-xs font-semibold no-underline text-center"
                href={`${baseUrl}/get-started`}
              >
                Get Started
              </Button>
            </Section>
            <Text className="text-sm">
              Cheers,
              <br />
              The {company} Team
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

/*HTML Style Object | https://www.w3schools.com/jsref/dom_obj_style.asp */
//-----------------------------------------------------------------------
const main = {
  backgroundColor: '#efefef',
  fontFamily: 'sans-serif',
}

const container = {
  backgroundImage:
    'radial-gradient(100% 50% at 50% 0%, rgba(0, 163, 255, 0.13) 0%, rgba(0, 163, 255, 0) 50%, rgba(0, 163, 255, 0) 100%)',
  backgroundColor: 'white',
  margin: '10 auto',
  padding: '20px 2px 48px',
}

const box = {
  padding: '0 48px',
}

const icon = {
  display: 'flex',
  alignItems: 'center',
  height: '56px',
  width: '56px',
  margin: '20px 10px 20px 10px',
  backgroundImage: 'radial-gradient(#00ffed, #08869e)',
  borderRadius: '15%',
}

const imgIcon = {
  height: '36px',
  width: '36px',
  margin: '0 auto',
}

export default WelcomeEmail
