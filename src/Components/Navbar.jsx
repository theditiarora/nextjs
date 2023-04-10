"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import UserImg from "../../public/user.png";

const Navbar = () => {
  const [userImg, setUserImg] = useState(UserImg)
  const [pfp, setPfp] = useState()
  const fileInput = useRef();

  useEffect(() => {
    if (pfp) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserImg(reader.result);
      };
      reader.readAsDataURL(pfp);
    } else {
      setUserImg(userImg);
    }
  }, [pfp]);

  return (
    <div className="flex justify-between">
      <h1 className="text-2xl font-semibold">YNotes.</h1>

      <Image
        onClick={() => fileInput.current.click()}
        className="w-16 h-16 rounded-full cursor-pointer hover:opacity-80 duration-200 transition-opacity object-cover"
        width={200}
        height={200}
        src={userImg}
      />

      <input
        onChange={(e) => {
            if (e.target.files[0]) {
            setPfp(e.target.files[0]);
        }
         }}
        className="invisible hidden"
        ref={fileInput}
        type="file"
        accept="image/*"
      />
    </div>
  );
};

export default Navbar;
