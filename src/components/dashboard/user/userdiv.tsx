import React from "react";
import Btn from "@/components/global/Btn";
import User from "@/assets/interfaces/users";
import Router from "next/router";

type Props = {
  user: User;
};

const redirectToSingleUserView = (id: number) => {
  Router.push(`/dashboard/users/${id}`);
};

const UserDiv = (props: Props) => {
  return (
    <div className=" w-full flex bg-white rounded-xl flex-col hover:scale-[100.5%] duration-200 shadow-md">
      {/* header */}
      <div className="border-b-2 w-full border-neutral-300 px-4 py-1 flex justify-between">
        <span className="text-neutral-400 font-">{props.user.correo}</span>
      </div>

      {/* content? */}
      <div className="p-4 flex gap-2 items-center justify-between">
        <div className="flex items-center space-x-3.5">
          <img
            src="https://picsum.photos/200/300"
            alt=""
            className="w-28 h-28 ml-10 mr-5 rounded-full"
          />
          <div className="flex flex-col justify-between h-5/6">
            <h1 className="text-2xl">
              {props.user.nombre} {props.user.apellido_pat}
            </h1>
            <label className="text-neutral-500 text-md">
              {props.user.carrera.carrera}
            </label>
          </div>
        </div>
        {/* buttons */}
        <div className="flex flex-col gap-2 mr-10">
          <Btn
            style="strong"
            onClick={() => {
              redirectToSingleUserView(props.user.id);
            }}
          >
            <p className="text-lg">Ver Detalles</p>
          </Btn>
          <Btn style="light">
            <p className="text-lg">Eliminar usuario</p>
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default UserDiv;