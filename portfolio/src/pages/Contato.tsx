import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  nome: yup.string().required("Nome obrigatório"),
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  mensagem: yup.string().required("Mensagem obrigatória"),
});

const Contato = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const enviarFormulario = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(enviarFormulario)}>
      <input type="text" placeholder="Nome" {...register("nome")} />
      <p>{errors.nome?.message}</p>

      <input type="email" placeholder="E-mail" {...register("email")} />
      <p>{errors.email?.message}</p>

      <textarea placeholder="Mensagem" {...register("mensagem")}></textarea>
      <p>{errors.mensagem?.message}</p>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Contato;
