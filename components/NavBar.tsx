import React, { useState } from "react";
import Image from "next/image";

interface Props {
    children: React.ReactNode,
    href: string
}


function NavLink({ children, href }: Props) {
    return (
        <a href={href} className="mx-4">
            {children}
        </a>

    )
}

function MobileNav({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) {
    return (
        <div className={`
        absolute 
        top-0
        left-0 
        h-screen 
        w-screen
        bg-white 
        transform
        ${open ? 'translate-x-0' : '-translate-x-full'}
        transition-transform
        duration-300
        ease-in-out
        filter
        drop-shadow-md
         `}>
            <div className="
            flex 
            items-center 
            justify-center 
            filter 
            drop-shadow-md 
            bg-white h-20">
                <a href="/" className="text-xl font-semibold" >
                    <Image src="/openheal.png" priority alt="logo" width={100} height={100} />
                </a>
            </div>

            <div className="flex flex-col ml-4">
                <a href="/" className="text-xl font-medium my-4" onClick={() => setTimeout(() => setOpen(!open), 100)}>
                    Home
                </a>
                <a href="/about" className="text-xl font-medium my-4" onClick={() => setTimeout(() => setOpen(!open), 100)}>
                    About
                </a>
                <a href="/quill" className="text-xl font-medium my-4" onClick={() => setTimeout(() => setOpen(!open), 100)}>
                    Quill
                </a>
                <a href="/inbodyS10" className="text-xl font-medium my-4" onClick={() => setTimeout(() => setOpen(!open), 100)}>
                    InbodyS10
                </a>
            </div>


        </div>
    )
}

export default function NavBar() {

    const [open, setOpen] = useState<boolean>(false)
    return (

            <nav className="flex filter fixed w-screen drop-shadow-md bg-white bg-opacity-90  px-4 py-4 h-20 item-center">
                <MobileNav open={open} setOpen={setOpen} />
                <div className="w-3/12 flex items-center">
                    <a className="text-2xl font-semibold" href="/">
                        <Image src="/openheal.png" priority alt="logo" width={100} height={100} />
                    </a>
                </div >
                <div className="w-9/12 flex justify-end items-center">
                    <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
                        onClick={() => { setOpen(!open) }}>
                        <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                        <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                        <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                    </div>
                    <div className="hidden md:flex">
                        <NavLink href="/">
                            Home
                        </NavLink>
                        <NavLink href="/about">
                            About
                        </NavLink>
                        <NavLink href="/quill">
                            Quill
                        </NavLink>
                        <NavLink href="/inbodyS10">
                            InbodyS10
                        </NavLink>
                    </div>
                </div>
            </nav>
    )
}
