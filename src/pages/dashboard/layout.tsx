import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import { HiOutlineLogout } from "react-icons/hi";
import LayoutHeader from "./LayoutHeader";
import { useRouter } from "next/router";

import rackdatLogo from "../../assets/img/bag-heart-love-svgrepo-com.svg";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const Opciones = [
  { name: "inicio", url: "home" },
  { name: "laboratorios", url: "laboratorios" },
  { name: "solicitudes", url: "solicitudes" },
  { name: "items", url: "items" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="w-[270px] h-screen flex flex-col align-center p-4 justify-between flex-shrink-0">
        {/* sidebar */}
        <div>
          <img
            src={
              "https://th.bing.com/th/id/R.0e4d95a788b68565e74fc9b2e65efa0a?rik=a7CYTmm6j6%2f7pA&pid=ImgRaw&r=0"
            }
          />
          <div className="flex flex-col gap-2 mt-10">
            {Opciones.map((opcion) => {
              return <BarOptions name={opcion.name} url={opcion.url} />;
            })}
          </div>
        </div>
        {/* account */}
        <div className="flex p-2 rounded-md justify-around border-2 border-neutral-700">
          <img
            src={
              "https://agpnoticias.com/news/wp-content/uploads/2019/12/GP_4203-1-e1577058302615.jpg"
            }
            className="rounded-full w-12 h-12 object-cover border-2 border-neutral-500"
          />

          <div className="flex flex-col justify-between py-1">
            <label className="text-white text-[14px]">Daniel Barocio</label>
            <label className="text-neutral-400 text-[14px]">11571</label>
          </div>
          <div className="text-white flex justify-center items-center ">
            <div className="hover:bg-white p-[2px] hover:text-black duration-75 rounded cursor-pointer">
              <HiOutlineLogout className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen rounded-l-2xl  bg-slate-100  overflow-y-auto">
        {children}
      </div>
    </div>
  );
}

type Props = {
  name: string;
  url: string;
  icon?: any;
};

const BarOptions = (Props: Props) => {
  const router = useRouter();
  return (
    <div
      className="text-neutral-100 hover:text-white hover:bg-[#45444D] px-3 rounded-lg flex items-center gap-2 cursor-pointer duration-[200ms] flex-shrink-0 min-w-[34px] h-[34px]"
      onClick={() => {
        router.push(Props.url);
      }}
    >
      <AiFillHome className="w-5 h-5" />
      <label className="text-[14px] cursor-pointer">{Props.name}</label>
    </div>
  );
};
