import { NextApiRequest, NextApiResponse } from 'next'
import WelcomeEmail from './welcome-user'
import { v5 as uuidv5 } from 'uuid'
import { PrismaClient, Prisma } from '@prisma/client'
import { Resend } from 'resend'

type MailercheckStatus =
  | 'valid'
  | 'catch_all'
  | 'mailbox_full'
  | 'role'
  | 'unknown'
  | string

type MailercheckResult = {
  status: MailercheckStatus
}

type Email = {
  email: string
  status: boolean
  validationToken: string
}

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email }: Pick<Email, 'email'> = req.body
    console.log('email', email)
    if (!email) return res.status(401).send({ error: 'No email provided' })
    //---------------------------------------------------------------------------
    //CHECKEMAILVALIDITY
    const MAILERCHECK_API_CHECK = 'https://app.mailercheck.com/api/check/single'
    const mailerCheckApiKey = process.env.MAILERCHECK_API_KEY

    console.log('CALL BACKEND')
    console.log(email)

    const response: MailercheckResult = await fetch(MAILERCHECK_API_CHECK, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${mailerCheckApiKey}`,
      },
      body: JSON.stringify({ email }),
    }).then((r) => r.json())

    // const response = {
    //   status: 'error',
    // };

    console.log(response)

    const validStatus = [
      'valid',
      'catch_all',
      'mailbox_full',
      'role',
      'unknown',
    ]

    if (!validStatus.includes(response.status)) {
      return res.status(400).send({ error: 'email not valid' })
    }
    console.log('valid', response)
    //-------------------------------------------------------------
    //SENDEMAIL
    const resend = new Resend(process.env.RESEND_API_KEY)

    console.log('sendemail')
    try {
      const data = await resend.emails.send({
        from: 'Acme <welcome@w3beconomy.ch>',
        to: [email],
        subject: 'Welcome to our monthly Newsletter',
        react: <WelcomeEmail />,
      })
      console.log(data)
    } catch (error: any) {
      throw new Error(error)
    }
    //-------------------------------------------------------------
    return res.status(203).send('ok')
  } catch (error) {}
}
