import React from "react";
import { useDisconnect, useAddress, useMetamask } from "@thirdweb-dev/react";

function NFTDropPage () {

    // Auth 
    const connectWithMetamask = useMetamask();
    const address = useAddress();
    const disconnect = useDisconnect();

    // 

    console.log(address)

  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
        {/* Left */}
        <div className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
            <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
                <div className="bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl">
                <img className="w-44 rounded-xl object-cover lg:h-96 lg:w-72" src="https://links.papareact.com/8sg" alt="" />
                </div>
             
               <div className="text-center p-5 space-y-2">
                <h1 className="text-4xl font-bold text-white">
                    Evilieswithin Apes
                </h1>
                <h2 className="text-xl text-gray-300">
                    A collection of Evilieswithin Apes who live and breathe React!
                </h2>
               </div>
            </div>

        </div>
        {/* Right */}
        <div className="flex flex-1 flex-col p-12 lg:col-span-6">
          {/* Header */}
           <header className="flex items-center justify-between">
            <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
                The{ ' '}
                <span className="font-extrabold underline decoration-pink-600/50">Evilieswithin</span>{ ' '}
                NFT Market Place
                </h1>
           
            <button onClick={() => address ? disconnect() :  connectWithMetamask()} className="rounded-full bg-rose-400 text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base">
                {address ? 'Sign Out' : 'Sign In'}
            </button>

           </header>

           <hr className="my-2 border" />

           {address && (
            <p className="text-center text-sm text-rose-400">You're logged in with wallet {address.substring(0, 5)}...{address.substring(address.length - 5)}</p>
           ) }


          {/* Body */}
            <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0">
                <img className="w-80 object-cover pb-10 lg:h-40" src="https://links.papareact.com/bdy" alt="" />

                <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">Evilieswithin Ape Coding Club | NFT Drop</h1>
                <p className="pt-2 text-xl text-green-500">13 / 21 NFT's claimed</p>
            </div>


          {/* Mint Button */}

          <button className="h-16 w-full text-white rounded-full bg-red-600 font-bold">
            Mint NFT (0.01 ETH)
          </button>

        </div>
    </div>
  )
}

export default NFTDropPage