import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Switch } from '@headlessui/react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function FormConfirmation() {

    const [enabled1, setEnabled1] = useState(false);
    const [enabled2, setEnabled2] = useState(false);

    const { handleSubmit, register, formState: { errors } } = useForm()
    function onSubmit(data) {
        console.log(data);
    }

    const validateLanguage = (value) => {
        if (!value || value === false || (Array.isArray(value) && value.length === 0)) {
            return 'Veuillez selectionner au moins un langage';
        }
        return true;
    };

    return (
        <div className="bg-background-grey pb-10">
            <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:px-8">
                <div className=" px-6 py-16 sm:py-24 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Formulaire d&#39;inscription</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Remplissez les informations requises pour réserver votre place à l&#39;Apéro Dev.
                        </p>
                    </div>
                </div>
                <div className="mx-auto max-w-3xl">{

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-12 sm:space-y-16">

                            <div>
                                <h2 className="text-base font-semibold leading-7 text-gray-900">
                                    Informations personnelles</h2>
                                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
                                    Assurez-vous de fournir des informations précises et complètes dans le formulaire
                                    afin de recevoir un billet valide pour l&#39;événement.
                                </p>

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
                                                id="firstname"
                                                autoComplete="given-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-orange sm:max-w-xs sm:text-sm sm:leading-6"
                                                aria-invalid={errors.firstname ? "true" : "false"}
                                                {...register("firstname", { required: true, minLength: 2 })}
                                            />
                                            {errors.firstname && <p className="text-red-600" role='alert'>Le prénom est obligatoire et doit contenir au moins 2 caracteres</p>}
                                        </div>
                                    </div>

                                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                        <label htmlFor="lasname"
                                            className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                            Nom
                                        </label>
                                        <div className="mt-2 sm:col-span-2 sm:mt-0">
                                            <input
                                                type="text"
                                                id="lastname"
                                                autoComplete="family-name"
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
                                                autoComplete="email"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-orange sm:max-w-xs sm:text-sm sm:leading-6"
                                                aria-invalid={errors.email ? "true" : "false"}
                                                {...register("email", { required: true, pattern: { value: /\S+@\S+\.\S+/ } })}
                                            />
                                            {errors.email && <p className="text-red-600" role='alert'>Le format de l&apos;email est incorrect, il doit etre similaire a aperodev@gmail.com</p>}
                                        </div>
                                    </div>

                                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                        <label htmlFor="phonenumber"
                                            className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                            Téléphone
                                        </label>
                                        <div className="mt-2 sm:col-span-2 sm:mt-0">
                                            <input
                                                type="tel"
                                                id="phonenumber"
                                                autoComplete="address-level2"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-orange sm:max-w-xs sm:text-sm sm:leading-6"
                                                aria-invalid={errors.email ? "true" : "false"}
                                                {...register("phonenumber", { required: true, maxLength: 10 })}
                                            />
                                            {errors.phonenumber && <p className="text-red-600" role='alert'>Le numéro de téléphone est incorrect, il doit etre similaire a 0606060606</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Informations
                                    professionnelles</h2>
                                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
                                    Veuillez fournir des informations professionnelles et techniques exactes et
                                    complètes.
                                </p>

                                <div
                                    className="mt-10 space-y-10 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">

                                    <fieldset>
                                        <legend className="sr-only">Catégories</legend>
                                        <div className="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4 sm:py-6">
                                            <div className="text-sm font-semibold leading-6 text-gray-900"
                                                aria-hidden="true">
                                                Catégories
                                            </div>
                                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                                <div className="max-w-lg">
                                                    <p className="text-sm leading-6 text-gray-600">Choisissez votre
                                                        camp.</p>
                                                    <div className="mt-6 space-y-6">
                                                        <div className="flex items-center gap-x-3">
                                                            <input
                                                                id="senior"
                                                                type="radio"
                                                                value="Développeur Senior"
                                                                className="h-4 w-4 border-gray-300 text-primary-orange focus:ring-secondary-orange"
                                                                {...register("category", { validate: validateLanguage })}
                                                            />
                                                            <label htmlFor="senior"
                                                                className="block text-sm font-medium leading-6 text-gray-900">
                                                                Développeur Senior
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center gap-x-3">
                                                            <input
                                                                id="etudiants"
                                                                type="radio"
                                                                value="Étudiants dans le numérique"
                                                                className="h-4 w-4 border-gray-300 text-primary-orange focus:ring-secondary-orange"
                                                                {...register("category", { validate: validateLanguage })}
                                                            />
                                                            <label htmlFor="etudiants"
                                                                className="block text-sm font-medium leading-6 text-gray-900">
                                                                Étudiants dans le numérique
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center gap-x-3">
                                                            <input
                                                                id="reconversion"
                                                                type="radio"
                                                                value="En reconversion professionnelle"
                                                                className="h-4 w-4 border-gray-300 text-primary-orange focus:ring-secondary-orange"
                                                                {...register("category", { validate: validateLanguage })}
                                                            />
                                                            <label htmlFor="reconversion"
                                                                className="block text-sm font-medium leading-6 text-gray-900">
                                                                En reconversion professionnelle
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {errors.category && (
                                            <p className="text-red-600" role='alert'>Veuillez selectionner une catégorie</p>
                                        )}
                                    </fieldset>
                                    <fieldset>
                                        <legend className="sr-only">Langages</legend>
                                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:py-6">
                                            <div className="text-sm font-semibold leading-6 text-gray-900"
                                                aria-hidden="true">
                                                Langages
                                            </div>
                                            <div className="mt-4 sm:col-span-2 sm:mt-0">
                                                <div className="max-w-lg space-y-6">
                                                    <p className="text-sm leading-6 text-gray-600">Choisissez vos
                                                        technologies.</p>
                                                    <div className="relative flex gap-x-3">
                                                        <div className="flex h-6 items-center">
                                                            <input
                                                                id="magento"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 text-primary-orange focus:ring-secondary-orange"
                                                                value="Magento 2"
                                                                {...register('language', { validate: validateLanguage })}
                                                            />
                                                        </div>
                                                        <div className="text-sm leading-6">
                                                            <label htmlFor="magento"
                                                                className="font-medium text-gray-900">
                                                                Magento 2
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="relative flex gap-x-3">
                                                        <div className="flex h-6 items-center">
                                                            <input
                                                                id="symphony"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 text-primary-orange focus:ring-secondary-orange"
                                                                value="Symphony"
                                                                {...register('language', { validate: validateLanguage })}
                                                            />
                                                        </div>
                                                        <div className="text-sm leading-6">
                                                            <label htmlFor="symphony"
                                                                className="font-medium text-gray-900">
                                                                Symphony
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="relative flex gap-x-3">
                                                        <div className="flex h-6 items-center">
                                                            <input
                                                                id="php"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 text-primary-orange focus:ring-secondary-orange"
                                                                value="PHP"
                                                                {...register('language', { validate: validateLanguage })}
                                                            />
                                                        </div>
                                                        <div className="text-sm leading-6">
                                                            <label htmlFor="php"
                                                                className="font-medium text-gray-900">
                                                                PHP
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="relative flex gap-x-3">
                                                        <div className="flex h-6 items-center">
                                                            <input
                                                                id="tailwind"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 text-primary-orange focus:ring-secondary-orange"
                                                                value="Tailwind CSS"
                                                                {...register('language', { validate: validateLanguage })}
                                                            />
                                                        </div>
                                                        <div className="text-sm leading-6">
                                                            <label htmlFor="tailwind"
                                                                className="font-medium text-gray-900">
                                                                Tailwind CSS
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="relative flex gap-x-3">
                                                        <div className="flex h-6 items-center">
                                                            <input
                                                                id="alpine"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 text-primary-orange focus:ring-secondary-orange"
                                                                value="Alpine JS"
                                                                {...register('language', { validate: validateLanguage })}
                                                            />
                                                        </div>
                                                        <div className="text-sm leading-6">
                                                            <label htmlFor="alpine"
                                                                className="font-medium text-gray-900">
                                                                Alpine JS
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="relative flex gap-x-3">
                                                        <div className="flex h-6 items-center">
                                                            <input
                                                                id="react"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 text-primary-orange focus:ring-secondary-orange"
                                                                value="React JS"
                                                                {...register('language', { validate: validateLanguage })}
                                                            />
                                                        </div>
                                                        <div className="text-sm leading-6">
                                                            <label htmlFor="react"
                                                                className="font-medium text-gray-900">
                                                                React JS
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="relative flex gap-x-3">
                                                        <div className="flex h-6 items-center">
                                                            <input
                                                                id="vue"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 text-primary-orange focus:ring-secondary-orange"
                                                                value="Vue JS"
                                                                {...register('language', { validate: validateLanguage })}
                                                            />
                                                        </div>
                                                        <div className="text-sm leading-6">
                                                            <label htmlFor="vue"
                                                                className="font-medium text-gray-900">
                                                                Vue JS
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {errors.language && (
                                            <p className="text-red-600" role='alert'>{errors.language.message}</p>
                                        )}
                                    </fieldset>
                                    <fieldset>
                                        <legend className="sr-only">Expérience</legend>
                                        <div className="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4 sm:py-6">
                                            <div className="text-sm font-semibold leading-6 text-gray-900"
                                                aria-hidden="true">
                                                Expérience
                                            </div>
                                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                                <div className="max-w-lg">
                                                    <p className="text-sm leading-6 text-gray-600">Sélectionner votre niveau d&#39;expérience.</p>
                                                    <div className="mt-6 space-y-6">
                                                        <div className="flex items-center gap-x-3">
                                                            <input
                                                                id="start"
                                                                type="radio"
                                                                value="Je commence"
                                                                className="h-4 w-4 border-gray-300 text-primary-orange focus:ring-secondary-orange"
                                                                {...register("experience", { validate: validateLanguage })}
                                                            />
                                                            <label htmlFor="start"
                                                                className="block text-sm font-medium leading-6 text-gray-900">
                                                                Je commence
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center gap-x-3">
                                                            <input
                                                                id="moins-3"
                                                                type="radio"
                                                                value="Moins de 3 ans"
                                                                className="h-4 w-4 border-gray-300 text-primary-orange focus:ring-secondary-orange"
                                                                {...register("experience", { validate: validateLanguage })}
                                                            />
                                                            <label htmlFor="moins-3"
                                                                className="block text-sm font-medium leading-6 text-gray-900">
                                                                Moins de 3 ans
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center gap-x-3">
                                                            <input
                                                                id="plus-5"
                                                                type="radio"
                                                                value="Plus de 5 ans"
                                                                className="h-4 w-4 border-gray-300 text-primary-orange focus:ring-secondary-orange"
                                                                {...register("experience", { validate: validateLanguage })}
                                                            />
                                                            <label htmlFor="plus-5"
                                                                className="block text-sm font-medium leading-6 text-gray-900">
                                                                Plus de 5 ans
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {errors.experience && (
                                            <p className="text-red-600" role='alert'>Veuillez selectionner un niveau d&apos;expérience</p>
                                        )}
                                    </fieldset>


                                </div>
                            </div>
                        </div>

                        <div className="mt-6">

                            <div className="bg-white shadow sm:rounded-lg mt-3">
                                <Switch.Group as="div" className="px-4 py-5 sm:p-6">
                                    <Switch.Label as="h3" className="text-base font-semibold leading-6 text-gray-900"
                                        passive>
                                        Engagement requis pour l&#39;inscription à l&#39;événement Apéro Dev
                                    </Switch.Label>
                                    <div className="mt-2 sm:flex sm:items-start sm:justify-between">
                                        <div className="max-w-xl text-sm text-gray-500">
                                            <Switch.Description>
                                                En cochant cette case, je m&#39;engage à apporter mon propre PC portable
                                                avec prise HDMI le
                                                jour de l&#39;évènement
                                            </Switch.Description>
                                        </div>
                                        <div className="mt-5 sm:ml-6 sm:mt-0 sm:flex sm:flex-shrink-0 sm:items-center">
                                            <Switch
                                                checked={enabled1}
                                                onChange={setEnabled1}
                                                className={classNames(
                                                    enabled1 ? 'bg-primary-orange' : 'bg-gray-200',
                                                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-secondary-orange focus:ring-offset-2'
                                                )}
                                                name='engagement'
                                                value='accept'
                                            >
                                                <span className="sr-only">Utiliser le réglage</span>
                                                <span
                                                    className={classNames(
                                                        enabled1 ? 'translate-x-5' : 'translate-x-0',
                                                        'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                                    )}
                                                >
                                                    <span
                                                        className={classNames(
                                                            enabled1 ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in',
                                                            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                                                        )}
                                                        aria-hidden="true"
                                                    >
                                                        <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                                                            <path
                                                                d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                                                stroke="currentColor"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span
                                                        className={classNames(
                                                            enabled1 ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out',
                                                            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                                                        )}
                                                        aria-hidden="true"
                                                    >
                                                        <svg className="h-3 w-3 text-primary-orange" fill="currentColor" viewBox="0 0 12 12">
                                                            <path
                                                                d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                                                        </svg>
                                                    </span>
                                                </span>
                                            </Switch>
                                        </div>
                                    </div>
                                </Switch.Group>
                                {errors.engagement && (
                                    <p className="text-red-600" role='alert'>Veuillez accepter l&#39;engagement</p>
                                )}
                            </div>

                            <div className="bg-white shadow sm:rounded-lg mt-3">
                                <Switch.Group as="div" className="px-4 py-5 sm:p-6">
                                    <Switch.Label as="h3" className="text-base font-semibold leading-6 text-gray-900"
                                        passive>
                                        Consentement des données personnelles pour l&#39;inscription à l&#39;événement
                                        Apéro Dev
                                    </Switch.Label>
                                    <div className="mt-2 sm:flex sm:items-start sm:justify-between">
                                        <div className="max-w-xl text-sm text-gray-500">
                                            <Switch.Description>
                                                En cochant cette case, j&#39;accepte que mes données personnelles soient
                                                recueillies et
                                                traitées conformément à la politique de confidentialité. Je suis
                                                informé(e) que ces
                                                données sont recueillies par ATI4 Group dans le but de gérer mon
                                                inscription à
                                                l&#39;évènement Apéro Dev et que je dispose d&#39;un droit d&#39;accès,
                                                de rectification et de
                                                suppression de mes données en contactant l&#39;adresse email de contact
                                                pour la gestion des
                                                données.
                                            </Switch.Description>
                                        </div>
                                        <div className="mt-5 sm:ml-6 sm:mt-0 sm:flex sm:flex-shrink-0 sm:items-center">
                                            <Switch
                                                checked={enabled2}
                                                onChange={setEnabled2}
                                                className={classNames(
                                                    enabled2 ? 'bg-primary-orange' : 'bg-gray-200',
                                                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-secondary-orange focus:ring-offset-2'
                                                )}
                                                name='consentement'
                                                value='accept'
                                            >
                                                <span className="sr-only">Utiliser le réglage</span>
                                                <span
                                                    className={classNames(
                                                        enabled2 ? 'translate-x-5' : 'translate-x-0',
                                                        'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                                    )}
                                                >
                                                    <span
                                                        className={classNames(
                                                            enabled2 ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in',
                                                            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                                                        )}
                                                        aria-hidden="true"
                                                    >
                                                        <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                                                            <path
                                                                d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                                                stroke="currentColor"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span
                                                        className={classNames(
                                                            enabled2 ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out',
                                                            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                                                        )}
                                                        aria-hidden="true"
                                                    >
                                                        <svg className="h-3 w-3 text-primary-orange" fill="currentColor" viewBox="0 0 12 12">
                                                            <path
                                                                d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                                                        </svg>
                                                    </span>
                                                </span>
                                            </Switch>
                                        </div>
                                    </div>
                                </Switch.Group>
                                {errors.consentement && (
                                    <p className="text-red-600" role='alert'>Veuillez accepter le consentement des données personnelles</p>
                                )}
                            </div>

                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <button
                                    type="submit"
                                    className="rounded-md bg-primary-orange px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Valider mon inscription et générer mon e-billet
                                </button>
                            </div>

                        </div>
                    </form>
                }</div>
            </div>
        </div>
    )
}
