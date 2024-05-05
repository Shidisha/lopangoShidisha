import data from '../../data.json'
import { useForm } from 'react-hook-form';

const Connection = () =>{

    const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
    return(
        <div>
            <div>
                <img src={data.nav[0].logo} alt="Logo of application" />
            </div>
            <div>
                <span>Veillez vous connecter</span>

            </div>
        </div>
    )
}

export default Connection