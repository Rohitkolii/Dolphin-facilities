'use client';
import {useEffect,useState} from 'react';
export default function IntroSplash(){
 const [show,setShow]=useState(true);
 useEffect(()=>{ const t=setTimeout(()=>setShow(false),1000); return()=>clearTimeout(t)},[]);
 if(!show)return null;
 return <div className="fixed inset-0 z-[100] grid place-items-center bg-[#292929] transition-opacity duration-500">
   <div className="relative flex flex-col items-center gap-6 px-8 text-center">
     <div className="absolute -inset-10 rounded-full" />
     <img src="/intro.gif" alt="Wizcraft intro" className="relative w-150 rounded-md  shadow-soft" />
   </div>
 </div>
}
