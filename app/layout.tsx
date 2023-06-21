import {Nunito } from "next/font/google"

import "./globals.css"
import Navbar from "./components/navbar/Navbar"
import ClientOnly from "./components/ClientOnly"
import RegisterModal from "./components/modals/RegisterModal"
import ToasterProvider from "./providers/ToasterProvider"
import LoginModal from "./components/modals/LoginModal"
import getCurrentUser from "./actions/getCurrentUser"

import Carousel from "./components/Carousel"

// Cela permet de le titre de la page:
export const metadata = {
    title: "Agence Location",
    description: "Airbnb clone",
}

// Cela permet de charger la police:
const fonts = Nunito({
    subsets: ["latin"],
})

// Cela permet de charger les styles:
export default async function RootLayout ({
    children,
}: {
    children: React.ReactNode
    }) {
        const currentUser = await getCurrentUser();
        

    return (
        <html lang="en">
            <body className="{font.className">
              <ClientOnly>
              <ToasterProvider />
           
              <LoginModal />
              <RegisterModal  /> 
              <Navbar currentUser={currentUser} />
              </ClientOnly>
              <div className="pd-20 pt-28">
              {children}
                </div>
              </body>
        </html>
    )
}
