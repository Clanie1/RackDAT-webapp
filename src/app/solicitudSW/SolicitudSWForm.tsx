"use client"
import {Formik, Field, Form} from 'formik'
import Btn from '@/components/global/Btn'


const SolicitudSWForm = () => {

  return (
      <Formik
      initialValues={{
        name:"",
        distrib:"",
        lab:"",
        clase:"",
        justnotes:""
      }}
      onSubmit={ (values)=>{
        console.log("🐎🏳‍🌈🌄")
        alert(JSON.stringify(values))
      } }
      >
        <div className='h-full  bg-[#EDEDED] flex items-center justify-center m-10 w-1/2 rounded-md'>
      <Form className='w-1/2 h-full m-5 flex flex-col gap-5 p-5 justify-items-center flex-wrap'>
          <div className='flex flex-col gap-5' >
        <label className=''>Nombre del software</label>
        <Field className='border-2 border-gray-300 rounded-md' name='name' type='text' placeholder='Photoshop' />
          </div>
          <div className='flex flex-col gap-5' >
          <label>Distribuidor </label>
        <Field name='distrib' type='text' className='border-2 border-gray-300 rounded-md' placeholder='Adobe'  />
          </div>
        <div className='flex flex-col gap-5'  >
        <label>Laboratorio </label>
        {/* Aqui después lo cambiaremos a un select multiple, para las opciones */}
        <Field name='lab' type='text' className='border-2 border-gray-300 rounded-md' placeholder='redes' />
        </div>
        <div className='flex flex-col gap-5'  >
        <label>Clase asociada </label>
        <Field name='clase' type='text' className='border-2 border-gray-300 rounded-md' placeholder='Diseño' />
        </div>
          <div className='flex flex-col gap-5'  >
          <label>Justificación y notas </label>
          <Field as='textarea' name='justnotes' type='text' rows={4} className='w-full h-20 p-2 border-2 border-gray-300 rounded-md resize-none' placeholder='albion online es un mmorpg no lineal en el que escribes tu propia historia sin limitarte a seguir un camino prefijado, explora un amplio mundo abierto con cinco biomas unicos, todo cuanto hagas tendra su repercusíon en el mundo' />
          </div>
        <Btn> Solicitar </Btn>

      </Form>
      </div>
    </Formik>
  )
}

export default SolicitudSWForm