import React from "react";
import Layout from "@/components/dashboard/Layout";
import LayoutHeader from "@/components/dashboard/LayoutHeader";
import SolicitudUserColumn from "@/components/dashboard/solicitudes/singleSolicitud/SolicitudUserColumn";
import SolicitudInfomationColumn from "@/components/dashboard/solicitudes/singleSolicitud/SolicitudInfomationColumn";
import Btn from "@/components/global/Btn";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { userIsLogged } from "@/assets/middlewares/authUser";
import axios from "axios";
import { GetServerSideProps } from "next";
import ISolicitud from "@/assets/interfaces/solicitud";

// usar contexto para sacar el id, hacer get para sacar el tipo_de_solicitud_id y con eso manejar los divs

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const itemIds = ctx.query.idSolicitud;
  const solicitud = await axios
    .get(`https://rackdat.onrender.com/Solicitudes/solicitud/${itemIds}`)
    .then((res) => res.data);

  return {
    props: {
      solicitud: solicitud,
    },
  };
};

type Props = { solicitud: ISolicitud };

const Index = ({ solicitud }: Props) => {
  console.log(solicitud);
  const router = useRouter();
  userIsLogged();
  const tipoSolicitudId = router.query.tipoSolicitudId;

  const handleAceptar = () => {
    toast.success("Deafault Notification", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setTimeout(() => {
      router.push("/dashboard/solicitudes?status=${fssdf}");
    }, 1000);
  };

  const handleRechazar = () => {
    toast.success("Deafault Notification", {
      position: toast.POSITION.TOP_RIGHT,
    });

    setTimeout(() => {}, 1000);
    router.push("/dashboard/solicitudes");
  };

  return (
    <Layout>
      <LayoutHeader title="Solicitudes" />
      <div className="w-[90%] flex flex-col m-auto">
        <div className=" m-auto mt-10 flex gap-2">
          <SolicitudUserColumn user={solicitud.usuario} />
          <SolicitudInfomationColumn
            id_tipo_solicitud={solicitud.id_tipo_solicitud}
            solicitud={solicitud}
          />
        </div>
        <div className="mt-3 flex gap-2 self-end">
          <Btn style="strong" onClick={handleAceptar}>
            Acceptar
          </Btn>
          <Btn style="light" onClick={handleRechazar}>
            Rechazar
          </Btn>
        </div>
        <ToastContainer />
      </div>
    </Layout>
  );
};

export default Index;
