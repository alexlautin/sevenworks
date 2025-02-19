import NextAuth from "next-auth";
import User from "../../../models/user";
import connectToDatabase from "@/app/lib/mongodb";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    session: {
        strategy: "jwt", //token-based approach
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                try {
                    await connectToDatabase();
                    const user = await User.findOne({email: credentials?.email});

                    //Check if user exists in the db
                    if (!user) {
                        throw new Error("");
                    }

                    const isValidPassword = await bcrypt.compare(
                        credentials?.password ?? "", user.password as string
                    );

                    //Check if password is correct
                    if (!isValidPassword) {
                        throw new Error("");
                    }
                    return user;
                } catch {
                    return null;
                }
            }
        })
    ],
    callbacks: {
        async jwt({token, user}) {
            if(user) { //If user exists, set token values to user values
                token.id = user.id;
                token.email = user.email;
            };
            return token;
        },
        async session({session, token}) { 
            if (token) {
                session.user = {
                    email: token.email,
                    image: token.picture,
                };
            };
            return session;
        }
    },
    pages: {
        signIn: "../../../register/login",
    },
    secret: process.env.NEXTAUTH_SECRET
});

export {handler as GET, handler as POST};