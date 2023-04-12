import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { query } from "faunadb"
import { fauna } from "@/services/fauna"

type userType = {
  user: {
    email: string;
  }
}

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      scope: 'read:user'
    }),
  ],
  callbacks: {
    async signIn({ user }: any) {
      const { email } = user;
      
      try {
        await fauna.query(
          query.If(
            query.Not(
              query.Exists(
                query.Match(
                  query.Index('user_by_email'),
                  query.Casefold(user.email)
                )
              )
            ),
            query.Create(
              query.Collection('users'),
              { data: { email } }
            ),
            query.Get(
              query.Match(
                query.Index('user_by_email'),
                query.Casefold(user.email)
              )
            )
          )
        )

        return true
      } catch {
        return false
      }
    },
  }
}

export default NextAuth(authOptions)