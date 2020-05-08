import P1 from '@/assets/images/bavarskaya.jpg'
import P2 from '@/assets/images/chempion.jpg'
import P3 from '@/assets/images/franc.jpg'
import P4 from '@/assets/images/barbeku.jpg'
import P5 from '@/assets/images/gorinich.jpg'
import P6 from '@/assets/images/margarita.jpg'
import P7 from '@/assets/images/peperoni.jpg'
import P11 from '@/assets/images/honevic.jpg'
import P12 from '@/assets/images/kartoshka.jpg'
import P13 from '@/assets/images/cheesecake.webp'
import P14 from '@/assets/images/ecler.jpg'
import P111 from '@/assets/images/05L_adrush_rush.jpg'
import P112 from '@/assets/images/Aqua_Minerale_[0600_pet]_02_Carbon.jpg'
import P113 from '@/assets/images/mirinda.jpg'
import P114 from '@/assets/images/klukva_1l.jpg'
import P115 from '@/assets/images/oblepiha_1l.jpg'
import P116 from '@/assets/images/chernaia_smorodina_1l.jpg'
import P117 from '@/assets/images/1L_pepsi_regular.jpg'
import P118 from '@/assets/images/1L_pepsi_light.jpg'
import P119 from '@/assets/images/05L_pepsi_cherry.jpg'
import P120 from '@/assets/images/05L_pepsi_regular.jpg'
import P121 from '@/assets/images/1L_7up.jpg'
import P122 from '@/assets/images/YA_Orange_1L_pack.jpg'
import P123 from '@/assets/images/YA_Cherry_1L_pack.jpg'
import P124 from '@/assets/images/YA_Apple_1L_pack.jpg'
import P1111 from '@/assets/images/olivie.jpg'
import P1112 from '@/assets/images/cesar.jpg'
import P1113 from '@/assets/images/cesarchiken.jpg'
import P1114 from '@/assets/images/stolich.jpg'
import P1115 from '@/assets/images/chefs.jpg'
import P11111 from '@/assets/images/Sauce-island.jpg'
import P11112 from '@/assets/images/Sauce-runch.jpg'
import P11113 from '@/assets/images/Sauce-tomato.jpg'
import P11114 from '@/assets/images/sgushenka.png'
import P11115 from '@/assets/images/chocolate-soucce.png'


export default [
    {
        path: '/pizzas',
        name: 'Пиццы',
        data: [
            {
                photo: P1,
                title: 'Барская',
                description: 'Состав: ветчина, курица, шампиньоны, помидоры, сыр моцарелла,' +
                    'пепперони, грудинка, сыр чеддер',
                price: 449
            },
            {
                photo: P2, title: 'Чемпионская', description: ' Состав: колбаски, сыр моцарелла, ' +
                    'сыр Чеддер, помидоры, маслины черные, чеснок', price: 499
            },
            {
                photo: P3, title: 'Французская', description: 'Состав: грибы, сливки, курица, лук репчатый,' +
                    ' сыр моцарелла, сыр чеддер, маслины черные, лук зеленый', price: 499
            },
            {
                photo: P4, title: 'Барбекю', description: 'Состав: свинина, сыр моцарелла,' +
                    ' помидоры черри, соус барбекю, лук зеленый, чеснок', price: 520
            },
            {
                photo: P5, title: 'Горыныч', description: 'Состав: шампиньоны, ветчина,' +
                    ' пепперони, сыр моцарелла, перец халапеньо, сыр Чеддер', price: 510
            },
            {
                photo: P6,
                title: 'Маргарита',
                description: 'Состав: Помидоры, пицца-соус, сыр моцарелла',
                price: 469
            },
            {
                photo: P7, title: 'Пеперони', description: 'Состав: шампиньоны, пепперони, сыр моцарелла,' +
                    ' сыр Чеддер', price: 469
            }
        ],
    },
    {
        path: '/deserts',
        name: 'Десерты',
        data: [
            {
                photo: P11, title: 'Медовик', description: 'Медовый бисквит, сметанный крем, мед цветочный, ' +
                    'мед гречишный', price: 150
            },
            {
                photo: P12, title: 'Картошка 2шт.', description: 'Шоколадный бисквит, печенье, молоко ' +
                    'сгущенное, какао', price: 139
            },
            {
                photo: P13, title: 'Чизкейк', description: 'Песочное тесто, франжипан, сыр сливочный, сметана,' +
                    'яйцо куриное, ванилин, сахарная пудра', price: 169
            },
            { photo: P14, title: 'Эклер', description: 'Тесто заварное, тесто крамбл, крем муслин', price: 120 }
            
        ],
    },
    {
        path: '/drinks',
        name: 'Напитки',
        data: [
            { photo: P111, title: 'Адреналир Раш 0,5л', price: 179 },
            { photo: P112, title: 'Аква минерале 0,5л', price: 99 },
            { photo: P113, title: 'Миринда', price: 119 },
            { photo: P114, title: 'Морс из клюквы 1л', description: 'Клюква, сахар', price: 169 },
            { photo: P115, title: 'Морс из облепихи 1л', description: 'Облепиха, сахар', price: 169 },
            {
                            photo: P116,
                title: 'Морс из чёрной смородины 1л',
                description: 'Черная смородина, сахар',
                price: 169
            },
            { photo: P117, title: 'Пепси 1л', price: 129 },
            { photo: P118, title: 'Пепси лайт 1л', price: 129 },
            { photo: P119, title: 'Пепси черри 0,5л', price: 79 },
            { photo: P120, title: 'Пепси кола 0,5л', price: 79 },
            { photo: P121, title: 'Севен Ап', price: 120 },
            { photo: P122, title: 'Сок "Я" Апельсин 0,97л', price: 179 },
            { photo: P123, title: ' Сок "Я" Вишня 0,97л', price: 179 },
            { photo: P124, title: ' Сок "Я" Яблоко 0,97л', price: 179 },
        ]
    },
    {
        path: '/salads',
        name: 'Салаты',
        data: [
            {
                photo: P1111, title: 'Салат "Оливье"', description: 'Состав: ветчина, картофель отварной,' +
                    ' яйцо куриное, огурцы маринованные, майонез, морковь, горошек зеленый, укроп',
                price: 249
            },
            {
                photo: P1112, title: 'Салат "Цезарь с креветкой"', description: 'Креветки, айсберг, ' +
                    'помидоры черри, пармезан, соус цезарь, гренки, чеснок', price: 349
            },
            {
                photo: P1113, title: 'Салат "Цезарь с курицей"', description: 'Курица, салат айсберг,' +
                    ' помидоры черри, пармезан, соус цезарь, гренки', price: 299
            },
            {
                photo: P1114, title: 'Салат "Столичный с Курицей"', description: 'Состав: курица, картофель отварной, ' +
                    'яйцо куриное, майонез, огурцы свежий, огурцы маринованные, горошек зеленый, укроп', price: 229
            },
            {
                photo: P1115, title: 'Салат от шефа', description: 'Курица, ветчина, шампиньоны,' +
                    ' капуста китайская, перец болгарский, помидоры, яйцо, чеддер, маслины, соус тар-тар, укроп', price: 249
            }
        ]
    },
    {
        path: '/sauces',
        name: 'Соусы',
        data: [
            { photo: P11111, title: '1000 Островов', price: 39 },
            { photo: P11112, title: 'Чесночный ранч', price: 39 },
            { photo: P11113, title: 'Томатный', price: 39 },
            { photo: P11114, title: 'Сгущёнка', price: 39 },
            { photo: P11115, title: 'Шоколадный', price: 39 }
        ]
    }
]
