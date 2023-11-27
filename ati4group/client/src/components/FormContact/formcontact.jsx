import { useForm } from 'react-hook-form';
import message from "../../assets/images/messages/Ati4GroupContactMessage.png"

export default function FormContact() {

  const defaultValues = {
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  }
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const onSubmit = async (values) => {
    try {
      const response = await fetch("http://localhost:8000/api/contactes/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        const newUser = await response.json();
        reset();
        const formElt = document.getElementById('contacteForm');
        formElt.style.display = 'none';

        const successMessage = document.getElementById('success');
        successMessage.style.display = 'block';
      }

    } catch (e) { console.error('Erreur lors de la récupération des données:', e); }
  };
  return (
    <div className="bg-background-grey pb-10">
      <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:px-8">
        <div className=" px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Formulaire de contact</h2>
          </div>
        </div>
        <div className="mx-auto max-w-3xl">
          <div id='success' style={{ display: 'none', textAlign: 'center', padding: '2rem' }}>
            <img src={message} alt="" />
          </div>
          <form id="contacteForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-12 sm:space-y-16">
              <div>
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Informations personnelles</h2>
                <div
                  className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label htmlFor="firstname"
                      className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                      Prénom
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                      <input
                        type="text"
                        id="firstnamecontact"
                        name="firstname"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-orange sm:max-w-xs sm:text-sm sm:leading-6"
                        aria-invalid={errors.firstname ? "true" : "false"}
                        {...register("firstname", { required: true, minLength: 2 })}
                      />
                      {errors.firstname && <p className="text-red-600" role='alert'>Le prénom est obligatoire et doit contenir au moins 2 caracteres</p>}
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label htmlFor="lastname"
                      className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                      Nom
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                      <input
                        type="text"
                        id="lastnamecontact"
                        name="lastname"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-orange sm:max-w-xs sm:text-sm sm:leading-6"
                        aria-invalid={errors.lastname ? "true" : "false"}
                        {...register("lastname", { required: true, minLength: 2 })}
                      />
                      {errors.lastname && <p className="text-red-600" role='alert'>Le nom est obligatoire et doit contenir au moins 2 caracteres</p>}
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                      Email
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-orange sm:max-w-xs sm:text-sm sm:leading-6"
                        aria-invalid={errors.email ? "true" : "false"}
                        {...register("email", { required: true, pattern: { value: /\S+@\S+\.\S+/ } })}
                      />
                      {errors.email && <p className="text-red-600" role='alert'>Le format de l&apos;email est incorrect, il doit etre similaire a aperodev@gmail.com</p>}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                  <label htmlFor="comment"
                    className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                    Votre message
                  </label>
                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                    <textarea
                      id="contact"
                      name="comment"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-orange sm:max-w-xs sm:text-sm sm:leading-6"
                      aria-invalid={errors.comment ? "true" : "false"}
                      {...register("comment", { required: true, minLength: 2 })}
                    />
                    {errors.comment && <p className="text-red-600" role='alert'> Un message est obligatoire </p>}
                  </div>
                </div>
              </div>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <button
                  type="submit"
                  value="Envoyer"
                  className="rounded-md bg-primary-orange px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Envoyer votre demande de contact
                </button>
              </div>
            </div>
          </form>
        </div>
      </div >
    </div >
  )
}