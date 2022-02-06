import axios from 'axios';
import { setCookie } from 'nookies'

export default async (req, res) => {
  const { password, identifier } = req.body;

  try {
    const postRes = await axios.post('http://85.214.72.113:1337/auth/local', {
      identifier,
      password,
    })

    setCookie({ res }, 'jwt', postRes.data.jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });

    res.status(200).end();
  } catch (e) {
    res.status(400).send(e.response.data.message[0].messages[0]);
  }
}