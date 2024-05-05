import { useForm } from "react-hook-form";
import data from '../../../data.json'
const SignupPage = () =>{
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit  = () => {

      // Ici,on va gérer la soumission du formulaire,
      // telle que l'envoi des données d'inscription au serveur.
        };
      console.log(data);
    return(
        <div>
                <h2>Page d&apos;Inscription</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Nom:</label>
                        <input {...register("name", { required: true })} />
                        {errors.name && <span>Ce champ est requis.</span>}
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" {...register("email", { required: true })} />
                        {errors.email && <span>Une adresse email valide est requise.</span>}
                    </div>
                    <div>
                        <label>Mot de passe:</label>
                        <input type="password" {...register("password", { required: true })} />
                        {errors.password && <span>Ce champ est requis.</span>}
                    </div>
                    <button type="submit">S&apos;Inscrire</button>
              </form> 
         </div>
    );
  }
  
 export default SignupPage