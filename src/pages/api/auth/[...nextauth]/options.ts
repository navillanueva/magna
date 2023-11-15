import type { NextAuthOptions } from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

// providers is the type of authentifications methods you will use for your app
// you can add pages to the nextAuthOptions, this would allow you to redirect it to your own sign page
//

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Userbname:',
          type: 'text:',
          placeholder: 'your username',
        },
        password: {
          label: 'Password:',
          type: 'text: ',
          placeholder: 'your password',
        },
      },
      async authorize(credentials) {
        // this is where you would retrieve your users from your database
        // check how to do this in https://next-auth.js.org/configuration/providers/credentials
        // for now i am going to hardcode in a user
        const user = { id: '42', name: 'Dave', password: 'nextauth' };

        if (credentials?.username === user.name && credentials?.password === user.password) {
          return user;
        } else {
          return null;
        }
      },
    }),
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
};
