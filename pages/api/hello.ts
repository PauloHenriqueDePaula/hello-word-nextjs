// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next' //conceito destructor, abre o escopo e trás quais são as necessidades do Next que você precisa

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.method);
  res.status(200).json({ name: 'Paulo Henrique De Paula', idade: 21 })
}