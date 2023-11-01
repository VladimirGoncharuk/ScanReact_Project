import React from 'react';
import Title from './components/Title/Title';
import CardReasonCarusel from './components/CardReasonCarusel/CardReasonCarusel'
import './main.css'
import mainReasonPart1 from '../../images/ReasonCardsPart1.svg'
import mainReasonPart2 from '../../images/ReasonCardsPart2.svg'
import TariffCard from './components/TarifCard/TariffCard'
import lamp from '../../images/lamp.svg'
import aim from '../../images/aim.svg'
import book from '../../images/book.svg'

function Main() {
    const cardTariff1 = {
        tariffName: 'Beginner',
        tariffAim: 'Для небольшого исследования',
        oldPrice: '1 200 ₽',
        newPrice: '799 ₽',
        conditions: [
            "Безлимитная история запросов", "Безопасная сделка", "Поддержка 24/7"
        ],
        tariffOption: true,
        cost: 'или 150 ₽/мес. при рассрочке на 24 мес.'

    };
    const cardTariff2 = {
        tariffName: 'Pro',
        tariffAim: 'Для HR и фрилансеров',
        oldPrice: '2 600  ₽',
        newPrice: '1 299 ₽',
        conditions: [
            "Все пункты тарифа Beginner", "Экспорт истории", "Рекомендации по приоритетам"
        ],
        tariffOption: false,
        cost: 'или 279 ₽/мес. при рассрочке на 24 мес.'

    };
    const cardTariff3 = {
        tariffName: 'Business',
        tariffAim: 'Для корпоративных клиентов',
        oldPrice: '3 700 ₽',
        newPrice: '2 379 ₽',
        conditions: [
            "Все пункты тарифа Pro", "Безлимитное количество запросов", "Приоритетная поддержка"
        ],
        tariffOption: false,
        cost: <br/>

    };

    function tariffAction(cardTariff) {
        if (cardTariff.tariffOption) {
            return "Перейти в личный кабинет"
        }
        return "Подробнее"

    }

    return (
        <div>

            <Title/>
            <div className='reasonBlock'>
                <h1 className='reasonBlock__title font-ferry'>Почему именно мы</h1>
                <CardReasonCarusel/>
            </div>
            <div className='imgMainBlock'>
                <img className='imgMainBlock__img1' src={mainReasonPart1} alt="imgReason"/>
                <img className='imgMainBlock__img2' src={mainReasonPart2} alt="imgReason"/>
            </div>

            <div className='tariffs'>
                <h1 className='tariffs__title font-ferry'>
                    Наши тарифы
                </h1>
                <div className='tariffs__blockCardTariff'>
                    <TariffCard tariffAction={tariffAction(cardTariff1)} tarriffImg={lamp} bg='bg1'>
                        {cardTariff1}
                    </TariffCard>
                    <TariffCard tariffAction={tariffAction(cardTariff2)} tarriffImg={aim} bg='bg2'>
                        {cardTariff2}
                    </TariffCard>
                    <TariffCard tariffAction={tariffAction(cardTariff3)} tarriffImg={book} bg='bg3'>
                        {cardTariff3}
                    </TariffCard>
                </div>
            </div>

        </div>
    )
}

export default Main;