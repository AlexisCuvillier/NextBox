import React from "react";
import Image from "next/image";
import Styles from '../styles/Vinyle.module.css'

export default function Vinyle({props}) {
  return (
    <>
      <div className={Styles.base}>
        <div>
          <div>
            <Image src="/assets/Images/vinyle.png" alt="vinyle" width={200} height={200}></Image>
            <div>
              <Image src="" alt="" layout="fill"></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
