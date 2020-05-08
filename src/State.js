import React from 'react';
import Photo1 from './images/1.jpg'
import Photo2 from '../src/images/2.jpg'
import Photo3 from '../src/images/3.jpg'
import Photo4 from '../src/images/4.jpg'
import Photo5 from '../src/images/5.jpg'
import Photo7 from '../src/images/7.png'
import P1 from '../src/images/bavarskaya.jpg'
import P2 from '../src/images/chempion.jpg'
import P3 from '../src/images/franc.jpg'
import P4 from '../src/images/barbeku.jpg'
import P5 from '../src/images/gorinich.jpg'
import P6 from '../src/images/margarita.jpg'
import P7 from '../src/images/peperoni.jpg'
import P11 from '../src/images/honevic.jpg'
import P12 from '../src/images/kartoshka.jpg'
import P13 from '../src/images/cheesecake.webp'
import P14 from '../src/images/ecler.jpg'
import P111 from '../src/images/05L_adrush_rush.jpg'
import P112 from '../src/images/Aqua_Minerale_[0600_pet]_02_Carbon.jpg'
import P113 from '../src/images/mirinda.jpg'
import P114 from '../src/images/klukva_1l.jpg'
import P115 from '../src/images/oblepiha_1l.jpg'
import P116 from '../src/images/chernaia_smorodina_1l.jpg'
import P117 from '../src/images/1L_pepsi_regular.jpg'
import P118 from '../src/images/1L_pepsi_light.jpg'
import P119 from '../src/images/05L_pepsi_cherry.jpg'
import P120 from '../src/images/05L_pepsi_regular.jpg'
import P121 from '../src/images/1L_7up.jpg'
import P122 from '../src/images/YA_Orange_1L_pack.jpg'
import P123 from '../src/images/YA_Cherry_1L_pack.jpg'
import P124 from '../src/images/YA_Apple_1L_pack.jpg'
import P1111 from '../src/images/olivie.jpg'
import P1112 from '../src/images/cesar.jpg'
import P1113 from '../src/images/cesarchiken.jpg'
import P1114 from '../src/images/stolich.jpg'
import P1115 from '../src/images/chefs.jpg'
import P11111 from '../src/images/Sauce-island.jpg'
import P11112 from '../src/images/Sauce-runch.jpg'
import P11113 from '../src/images/Sauce-tomato.jpg'
import P11114 from '../src/images/sgushenka.png'
import P11115 from '../src/images/chocolate-soucce.png'


let State = {
    Reviews:
        [
            {id: 1, photo: Photo1, login: 'Arturka', Message: 'Всё очень вкусно, спасибо!!!'},
            {id: 2, photo: Photo2, login: 'kING2000', Message: 'Доставка опоздала на 15 минут, а в целом неплохо)'},
            {id: 3, photo: Photo3, login: 'Agent007', Message: 'Маргарита потрясающая!!! Ребята молодцы!'},
            {id: 4, photo: Photo4, login: 'Rus02', Message: 'Слишком мало начинки в Техасской! Забыли салфетки(('},
            {
                id: 5,
                photo: Photo5,
                login: 'NochnoiSniper12',
                Message: 'Неплохо было бы to супы какие-нибудь добавить)'
            }],
    NewRev: 'Неплохо!',
    Pizzas:
        [
            {
                id: 1,
                photo: P1,
                title: 'Барская',
                description: 'Состав: ветчина, курица, шампиньоны, помидоры, сыр моцарелла,' +
                    'пепперони, грудинка, сыр чеддер',
                price: 449
            },
            {
                id: 2, photo: P2, title: 'Чемпионская', description: ' Состав: колбаски, сыр моцарелла, ' +
                    'сыр Чеддер, помидоры, маслины черные, чеснок', price: 499
            },
            {
                id: 3, photo: P3, title: 'Французская', description: 'Состав: грибы, сливки, курица, лук репчатый,' +
                    ' сыр моцарелла, сыр чеддер, маслины черные, лук зеленый', price: 499
            },
            {
                id: 4, photo: P4, title: 'Барбекю', description: 'Состав: свинина, сыр моцарелла,' +
                    ' помидоры черри, соус барбекю, лук зеленый, чеснок', price: 520
            },
            {
                id: 5, photo: P5, title: 'Горыныч', description: 'Состав: шампиньоны, ветчина,' +
                    ' пепперони, сыр моцарелла, перец халапеньо, сыр Чеддер', price: 510
            },
            {
                id: 6,
                photo: P6,
                title: 'Маргарита',
                description: 'Состав: Помидоры, пицца-соус, сыр моцарелла',
                price: 469
            },
            {
                id: 7, photo: P7, title: 'Пеперони', description: 'Состав: шампиньоны, пепперони, сыр моцарелла,' +
                    ' сыр Чеддер', price: 469
            }],
    Deserts:
        [
            {
                id: 1, photo: P11, title: 'Медовик', description: 'Медовый бисквит, сметанный крем, мед цветочный, ' +
                    'мед гречишный', price: 150
            },
            {
                id: 2, photo: P12, title: 'Картошка 2шт.', description: 'Шоколадный бисквит, печенье, молоко ' +
                    'сгущенное, какао', price: 139
            },
            {
                id: 3, photo: P13, title: 'Чизкейк', description: 'Песочное тесто, франжипан, сыр сливочный, сметана,' +
                    'яйцо куриное, ванилин, сахарная пудра', price: 169
            },
            {id: 4, photo: P14, title: 'Эклер', description: 'Тесто заварное, тесто крамбл, крем муслин', price: 120}
        ],
    Drinks:
        [
            {id: 1, photo: P111, title: 'Адреналир Раш 0,5л', price: 179},
            {id: 2, photo: P112, title: 'Аква минерале 0,5л', price: 99},
            {id: 3, photo: P113, title: 'Миринда', price: 119},
            {id: 4, photo: P114, title: 'Морс из клюквы 1л', description: 'Клюква, сахар', price: 169},
            {id: 5, photo: P115, title: 'Морс из облепихи 1л', description: 'Облепиха, сахар', price: 169},
            {
                id: 6,
                photo: P116,
                title: 'Морс из чёрной смородины 1л',
                description: 'Черная смородина, сахар',
                price: 169
            },
            {id: 7, photo: P117, title: 'Пепси 1л', price: 129},
            {id: 8, photo: P118, title: 'Пепси лайт 1л', price: 129},
            {id: 9, photo: P119, title: 'Пепси черри 0,5л', price: 79},
            {id: 10, photo: P120, title: 'Пепси кола 0,5л', price: 79},
            {id: 11, photo: P121, title: 'Севен Ап', price: 120},
            {id: 12, photo: P122, title: 'Сок "Я" Апельсин 0,97л', price: 179},
            {id: 13, photo: P123, title: ' Сок "Я" Вишня 0,97л', price: 179},
            {id: 14, photo: P124, title: ' Сок "Я" Яблоко 0,97л', price: 179},
        ],
    Salads:
        [ {
            id: 1, photo: P1111, title: 'Салат "Оливье"', description: 'Состав: ветчина, картофель отварной,' +
                ' яйцо куриное, огурцы маринованные, майонез, морковь, горошек зеленый, укроп',
            price: 249
        },
            {
                id: 2, photo: P1112, title: 'Салат "Цезарь с креветкой"', description: 'Креветки, айсберг, ' +
                    'помидоры черри, пармезан, соус цезарь, гренки, чеснок', price: 349
            },
            {
                id: 3, photo: P1113, title: 'Салат "Цезарь с курицей"', description: 'Курица, салат айсберг,' +
                    ' помидоры черри, пармезан, соус цезарь, гренки', price: 299
            },
            {
                id: 4, photo: P1114, title: 'Салат "Столичный с Курицей"', description: 'Состав: курица, картофель отварной, ' +
                    'яйцо куриное, майонез, огурцы свежий, огурцы маринованные, горошек зеленый, укроп', price: 229
            },
            {
                id: 5, photo: P1115, title: 'Салат от шефа', description: 'Курица, ветчина, шампиньоны,' +
                    ' капуста китайская, перец болгарский, помидоры, яйцо, чеддер, маслины, соус тар-тар, укроп', price: 249
            }
            ],
            Souces:
[
    {id: 1, photo: P11111, title: '1000 Островов', price: 39},
    {id: 2, photo: P11112, title: 'Чесночный ранч', price: 39},
    {id: 3, photo: P11113, title: 'Томатный', price: 39},
    {id: 4, photo: P11114, title: 'Сгущёнка', price: 39},
    {id: 5, photo: P11115, title: 'Шоколадный', price: 39}
]
}
let RerenderEntireTree = () =>{

}

export let AddReview = () => {
    let NewReview =
        {
            id: 7,
            photo: Photo7,
            login: 'wegfsdv12',
            Message: State.NewRev
        };
    State.Reviews.push(NewReview);
    State.NewRev = ' ';
    RerenderEntireTree(State);
};

export let updateNewReview = (NewText) => {
    State.NewRev = NewText;
    RerenderEntireTree(State);
};
export const subscribe = (observer) =>
{
    RerenderEntireTree= observer;
}



export default State;