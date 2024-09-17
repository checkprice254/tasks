import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import User from "../../../connectedModels/users";

async function login(credentials) {
  try {
    const user = await User.findOne({ email: credentials.email });
    console.log(user);
    if (!user) throw new Error("wrong credentials.");
    const iscorrect = await bcrypt.compare(credentials.password, user.password);
    if (!iscorrect) throw new Error("wrong credentials.");
    return user;
  } catch (error) {
    console.log("error while logging in");
    throw new Error("something went wrong.");
  }
}

export const authOptions = {
  pages: {
    signIn: "/login",
  },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid. e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters (i.e., the request IP address)
        //console.log({ credentials });
        try {
          const user = await login(credentials);
          //console.log("user", user);

          return user;
        } catch (error) {
          //console.log("error", error);
          // Return null if user data could not be retrieved
          throw new Error("failed to login.");
        }
      },
    }),

    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.email = user.email;
        token.id = user.id;
        token.role = user.role;
      }
      //console.log("token:", token);
      return token;
    },
    async session({ session, token }) {
      if (session) {
        session.user.username = token.username;
        session.user.email = token.email;
        session.user.id = token.id;
        session.user.role = token.role;
      }
      //console.log("session:", session);

      return session;
    },
  },
};

const handler = nextAuth(authOptions);

export { handler as GET, handler as POST };
