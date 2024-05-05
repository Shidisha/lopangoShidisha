import data from '../../data.json'
import { useForm } from 'react-hook-form';

const LoginPage = () =>{

    const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    //les gestion de la soumission du formulaire sera faite ici
    //telle que l'envoi de données d'identification au serveur

    console.log(data);
  };
    return(
        <div>
            <div>
                <img src={data.nav[0].logo} alt="Logo of application" />
            </div>
            <div>
                <h3>Veillez vous connecter</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nom d&apos;utilisateur ou Email:</label>
          <input {...register("username", { required: true })} />
          {errors.username && <span>Ce champ est requis.</span>}
        </div>
        <div>
          <label>Mot de passe:</label>
          <input type="password" {...register("password", { required: true })} />
          {errors.password && <span>Ce champ est requis.</span>}
        </div>
        <button type="submit">Se Connecter</button>
      </form>

            </div>
        </div>
    )
}

export default LoginPage