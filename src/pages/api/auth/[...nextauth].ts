import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'

export default NextAuth({

  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'read:user',
        },
      },
    })
  ]
})