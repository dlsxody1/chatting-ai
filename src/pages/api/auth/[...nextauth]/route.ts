import NextAuth from "next-auth/next";
import KakaoProvider from "next-auth/providers/kakao";
//import { NextApiRequest, NextApiResponse } from "next";
//import { NextAuthOptions } from "next-auth";

const handler = {
  providers: [
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_API as string,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET as string,
    }),
  ],
};

export { handler as GET, handler as POST };
