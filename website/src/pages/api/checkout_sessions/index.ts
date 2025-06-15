import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
  apiVersion: '2023-10-16',
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.

      const session: Stripe.Checkout.Session =
        await stripe.checkout.sessions.create({
          line_items: [
            {
              price: 'price_1PQnQEHfG0OINaOo7SScDM4T',
              quantity: 1,
            },
          ],

          mode: 'payment',
          consent_collection: {
            terms_of_service: 'required',
          },
          custom_text: {
            terms_of_service_acceptance: {
              message:
                'I agree to the [Terms of Service](https://www.w3beconomy.uk/terms&conditions)',
            },
            submit: {
              message:
                "You'll get access to our latest Digital Architecture Strategy on our ",
            },
            after_submit: {
              message: `You are going to receive a priority link meeting on your e-mail in the next minutes. Learn more about **your purchase** on our [product page](https://www.w3beconomy.ch/services/loyalty-strategy/details).`,
            },
          },
          success_url: `${req.headers.origin}/?success=true`,
          cancel_url: `${req.headers.origin}/?canceled=true`,
        })

      res.status(200).json({ sessionId: session.id })
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message)
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
