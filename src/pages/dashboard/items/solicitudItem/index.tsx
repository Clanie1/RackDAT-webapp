import React, { useEffect } from "react";
import Layout from "@/components/dashboard/Layout";
import LayoutHeader from "@/components/dashboard/LayoutHeader";
import { useRouter } from "next/router";
import { useState } from "react";
import { GetServerSideProps } from "next/types";
import axios from "axios";
import ItemsColumns from "@/components/dashboard/items/solicitudItem/ItemsColumns";
import Item from "@/assets/interfaces/item";
import ColumnaDayPicker from "@/components/dashboard/laboratorios/solicitud/ColumnaDayPicker";
import JustificationColumn from "@/components/dashboard/items/solicitudItem/JustificationColumn";
import { toast, ToastContainer } from "react-toastify";
import { createContext } from "react";
import { userIsLogged } from "@/assets/middlewares/authUser";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const itemIds = ctx.query.selectedItems
    ? String(ctx.query.selectedItems)
        .split(",")
        .map((item) => Number(item))
    : [];

  const itemsPromises = await itemIds.map(async (id) => {
    const cosa = await axios
      .get(`https://rackdat.onrender.com/Equipos/equipo/${id}`)
      .then((res) => res.data);
    return cosa;
  });

  const items = await Promise.all(itemsPromises);

  return {
    props: {
      items: items,
    },
  };
};

type Props = {
  items: Item[];
};

const Index = ({ items }: Props) => {
  userIsLogged();
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());
  const [justification, setJustification] = useState<string>("");
  const router = useRouter();

  const handleSolicitar = () => {
    toast.success("Default Notification", {
      position: toast.POSITION.TOP_RIGHT,
    });
    console.log(selectedDay);
    console.log(justification);
    console.log(items);
    // router.push("/dashboard/solicitudes");
  };
  return (
    <Layout>
      <LayoutHeader title="Equipos" />
      <div className="w-[90%] m-auto mt-10 h-[75vh] max-h-[600px] flex gap-2">
        <ItemsColumns items={items} />
        <ColumnaDayPicker
          daySelected={selectedDay}
          setDaySelected={setSelectedDay}
        />

        <JustificationColumn
          handleSolicitar={handleSolicitar}
          justification={justification}
          setJustification={setJustification}
          day={selectedDay}
        />
      </div>
    </Layout>
  );
};

export default Index;
