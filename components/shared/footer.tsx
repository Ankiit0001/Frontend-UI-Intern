
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="flex flex-col items-center justify-center gap-2 md:h-24 md:flex-row"
        style={{
          flexDirection: 'column',
          paddingTop: '5rem',
          marginTop: '5rem'
        }}
      >
        <Image
          src="/logo.png"
          alt="logo"
          width={50}
          height={50}
        />
        <div
          style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#4E29E8'
          }}
        >
          ahead
        </div>
        <div
          style={{
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: 'space-evenly',
            gap: '15px',
            marginBottom: 10
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Image 
              src='/location.jpg'
              alt="location logo"
              width={20}
              height={10}
            />
            AuguststraBe 26, 10117 Berlin
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '5px'
          }}>
            <Image 
              src='/mail.png'
              alt="mail logo"
              width={20}
              height={10}
            />
            h1@ahead-app.com
          </div>
        </div>
        <div className="bg-black text-white" 
            style={{
                borderRadius: 8,
                display: "flex",
                alignItems: 'center',
                padding: 10,
                marginBottom: 10
              }}
          >
            <div>
              <Image
                src="/apple-icon.png"
                width={32}
                height={32}
                alt="icon"
              />
            </div>
            <div className="flex items-center justify-center flex-col p-2">
              <span style={{
                fontSize: '12px'
              }}>
                Download on the 
              </span>
              <span style={{
                fontSize: '20px'
              }}>
                App Store
              </span>
            </div>
          </div>
        <div
          style={{
            color: "lightgray",
            paddingBottom: 25
          }}
        >
          © 2022 Ahead app. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
