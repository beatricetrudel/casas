import { getServerSession } from "next-auth/next"

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/app/libs/prismadb";



// ouvrive la session 
export async function getSession() {
  return await getServerSession(authOptions)
}


// fonction pour recuperer l utilisateur 
export default async function getCurrentUser() {
  try {
    const session = await getSession();
// check si l utilisateur existe
    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      }
    });
// En cas  d utilsateur innexistant
    if (!currentUser) {
      return null;
    }
// return currentuser avec 
    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified: 
        currentUser.emailVerified?.toISOString() || null,
    };
  } catch (error: any) {
    return null;
  }
}

