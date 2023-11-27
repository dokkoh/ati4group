import {useEffect, useState} from 'react';

const Countdown = ({targetDate}) => {

    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {

        const interval = setInterval(() => {

            // ICI ON CHANGE LA DATE DE FIN DU COMPTE A REBOURS
            const target = new Date("2023-08-16T16:00:00");
            const now = new Date();

            if (now <= target) {

                const diff = target - now;

                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((diff / (1000 * 60)) % 60);
                const seconds = Math.floor((diff / 1000) % 60);

                setTime({
                    days,
                    hours,
                    minutes,
                    seconds
                });

            } else {

                clearInterval(interval);

                setTime({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                });
            }

        }, 1000);

        return () => clearInterval(interval);

    }, [targetDate]);

    const addLeadingZero = value => {
        return value < 10 ? `0${value}` : value;
    }

    return (
        <div className="bg-background-grey px-6 py-12 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Temps restant avant l&#39;événement</h2>
            <div className="mt-6 flex justify-center">
                <div className="flex sm:flex-row sm:space-x-6" role="timer"
                     aria-label={`Compte à rebours jusqu'à l'évènement en date du ${targetDate}`}>

                    <div className="justify-center m-1">
                        <div className="text-2xl sm:text-5xl font-bold text-black" aria-label={`${time.days} jours`}>
                            {addLeadingZero(time.days)}
                        </div>

                        <div className="text-xs sm:text-sm text-primary-orange">
                            Jours
                        </div>
                    </div>

                    <div className="m-1">
                        <div className="text-2xl sm:text-5xl font-bold text-black" aria-label={`${time.hours} heures`}>
                            {addLeadingZero(time.hours)}
                        </div>

                        <div className="text-xs sm:text-sm text-primary-orange">
                            Heures
                        </div>
                    </div>

                    <div className="m-1">
                        <div className="text-2xl sm:text-5xl font-bold text-black" aria-label={`${time.minutes} minutes`}>
                            {addLeadingZero(time.minutes)}
                        </div>

                        <div className="text-xs sm:text-sm text-primary-orange">
                            Minutes
                        </div>
                    </div>

                    <div className="m-1">
                        <div className="text-2xl sm:text-5xl font-bold text-black" aria-label={`${time.seconds} secondes`}>
                            {addLeadingZero(time.seconds)}
                        </div>

                        <div className="text-xs sm:text-sm text-primary-orange">
                            Secondes
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>


);
}

export default Countdown;