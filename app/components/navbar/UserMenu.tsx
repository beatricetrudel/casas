"use client";

import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";

import { useRouter } from "next/navigation";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => { // Cette function permet de gerer les connexions
  const router = useRouter(); // useRouter est une fonction qui permet de gerer les routes pour la direction des pages
  const loginModal = useLoginModal();

  const registerModal = useRegisterModal();

  // state pour le hamburger
  const [isOpen, setIsOpen] = useState(false); // on change l'ouverte de la modal avec le hook useState

   // une fois clicker le menu s ouvre 
  const toggleOpen = useCallback(() => {
    setIsOpen((value: any) => !value);
  }, []);



  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        
        <div
          onClick={toggleOpen}
          className="
                      p-4
                      md:py-1
                      md:px-20
                      border-[1px]
                      border-neutral-200
                      flex
                      flex-row
                      items-center
                      gap-3
                      rounded-full
                      cursor-pointer
                      hover:shadow-md
                      transition
                       "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
                    absolute
                    rounded-xl
                    shadow-md
                    w-[40vw]
                    md:w-3/4
                    bg-white
                    backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
                    overflow-hidden
                    right-0
                    top-12
                    text-sm
                    "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? ( // Si on ce connect avec un utilisateur alors on affiche ce menu
              <>
                <MenuItem onClick={() => router.push("/trips")} 
                label="Mes voyages" 
                />
                <MenuItem
                  onClick={() => router.push("/favorites")}  // onOpen est une fonction qui permet d'ouvrir la modal Inscription
                  label="Mes favoris"
                />
                <MenuItem
                  onClick={() => router.push("/reservations")}  // onOpen est une fonction qui permet d'ouvrir la modal Inscription
                  label="Mes réservations"
                />
                <MenuItem
                  onClick={() => router.push("/properties")}  // onOpen est une fonction qui permet d'ouvrir la modal Inscription
                  label="Mes proprietes"
                />
                <MenuItem
                  onClick={()=>{}}  // onOpen est une fonction qui permet d'ouvrir la modal Inscription
                  label="Votre logement"
                />
                <hr />
                <MenuItem
                  onClick={() => signOut()}  // onOpen est une fonction qui permet d'ouvrir la modal Inscription
                  label="Logout"
                />
              </>
              
            ) : ( // si aucune connexion on affiche cela:

              <>
                <MenuItem onClick={loginModal.onOpen} label="Connexion" />

                <MenuItem
                  onClick={registerModal.onOpen} // onOpen est une fonction qui permet d'ouvrir la modal Inscription
                  label="
                  Inscrivez-vous pour héberger"
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;