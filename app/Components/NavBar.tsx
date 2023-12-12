"use client"
import { Socials } from "../Constatnts/index";
import * as React from "react"
import Link from "next/link"
import Image from "next/image";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem,
    Button
  } from "@nextui-org/react";



const NavBar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="/"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Greg
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="/About" className="cursor-pointer">
              About
            </a>
            <a href="/Contact" className="cursor-pointer">
              Contact
            </a>
            <a href="/projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5 z-40">
          {Socials.map((social) => (
            <a href={social.link}>
              <Image
               src={social.src}
               alt={social.name}
                key={social.name}
               width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NavBar
