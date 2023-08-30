export enum Notification {
    MESSAGE = "message",
    WARNING = "warning",
}

export enum Consult {
    ONLINE = "online",
    OFFLINE = "offline",
}

export interface IUser {
    id: number;
    name: string;
    notification: Notification | null;
    photo: string;
    primary: boolean;
    note: INote[];
    consult: IConsult[];
    video: IVideo[];
    event: IEvent[];
}

export interface INote {
    date: string;
    text: string;
    photo: string | null;
}

export interface IConsult {
    date: string;
    type: Consult;
    name: string;
    confirmed: boolean;
}

export interface IVideo {
    name: string;
    date: string;
    author: string;
    photo: string;
}

export interface IEvent {
    name: string;
    type: string;
    date: string;
    time: string;
    photo: string;
}

export const users: IUser[] = [
    {
        id: 1,
        name: "Кравцова Александра",
        notification: Notification.MESSAGE,
        photo: "/users/1.png",
        primary: true,
        note: [],
        consult: [],
        video: [],
        event: [],
    },
    {
        id: 2,
        name: "Денис Рожков",
        notification: null,
        photo: "/users/2.png",
        primary: false,
        note: [
            {
                date: '20.12.2019',
                text: 'Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
                photo: null,
            },
            {
                date: '20.12.2019',
                text: 'Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
                photo: '/map.png',
            }
        ],
        consult: [
            {
                date: '15.01.2019, 12:30-13:00',
                name: 'Online консультация',
                confirmed: true,
                type: Consult.ONLINE,
            },
            {
                date: '15.01.2019, 12:30-13:00',
                name: 'Online консультация',
                confirmed: true,
                type: Consult.ONLINE,
            },
            {
                date: '15.01.2019, 12:30-13:00',
                name: 'Личный приём',
                confirmed: false,
                type: Consult.OFFLINE,
            },
        ],
        video: [
            {
                name: 'Крабик, ходьба в бок в приседе с двумя резинками Крабик, ходьба в бок в приседе с двумя резинками',
                date: '15.01.2019 - 22.01.2019',
                author: 'Астахова Е.В.',
                photo: '/video1.png',
            },
            {
                name: 'Разминка для локтевого сустава',
                date: '15.01.2019 - 22.01.2019',
                author: 'Астахова Е.В.',
                photo: '/video2.png',
            },
            {
                name: 'Разминка для локтевого суставаРазминка для локтевого сустава',
                date: '15.01.2019 - 22.01.2019',
                author: 'Астахова Е.В.',
                photo: '/video3.png',
            },
        ],
        event: [
            {
                name: 'Тяга резинки в шаге со сгибанием локтя под 90 градусов',
                type: 'Вебинар',
                date: '9 марта 2021',
                time: '17:00',
                photo: '/event1.png',
            },
            {
                name: 'Тяга резинки в шаге со сгибанием локтя под 90 градусов',
                type: 'Вебинар',
                date: '9 марта 2021',
                time: '17:00',
                photo: '/event1.png',
            },
            {
                name: 'Тяга резинки в шаге со сгибанием локтя под 90 градусов',
                type: 'Вебинар',
                date: '9 марта 2021',
                time: '17:00',
                photo: '/event1.png',
            },
            {
                name: 'Тяга резинки в шаге со сгибанием локтя под 90 градусов',
                type: 'Вебинар',
                date: '9 марта 2021',
                time: '17:00',
                photo: '/event1.png',
            },
        ],
    },
    {
        id: 3,
        name: "Кравцова Александра",
        notification: Notification.WARNING,
        photo: "/users/3.png",
        primary: false,
        note: [],
        consult: [],
        video: [],
        event: [],
    },
    {
        id: 4,
        name: "Диброва Алевтина",
        notification: null,
        photo: "/users/4.png",
        primary: false,
        note: [],
        consult: [],
        video: [],
        event: [],
    },
    {
        id: 5,
        name: "Иванов Дмитрий",
        notification: null,
        photo: "/users/5.png",
        primary: false,
        note: [],
        consult: [],
        video: [],
        event: [],
    },
    {
        id: 6,
        name: "nosikov@list.ru",
        notification: null,
        photo: "/users/6.png",
        primary: false,
        note: [],
        consult: [],
        video: [],
        event: [],
    },
    {
        id: 7,
        name: "Форс Александр",
        notification: null,
        photo: "/users/7.png",
        primary: false,
        note: [],
        consult: [],
        video: [],
        event: [],
    },
    {
        id: 8,
        name: "Ахмедов Артур",
        notification: null,
        photo: "/users/8.png",
        primary: false,
        note: [],
        consult: [],
        video: [],
        event: [],
    },
    {
        id: 9,
        name: "Блажевич Игорь",
        notification: null,
        photo: "/users/9.png",
        primary: false,
        note: [],
        consult: [],
        video: [],
        event: [],
    },
    {
        id: 10,
        name: "Валиева Руфина",
        notification: null,
        photo: "/users/10.png",
        primary: false,
        note: [],
        consult: [],
        video: [],
        event: [],
    },
    {
        id: 11,
        name: "Волошина Виктория",
        notification: null,
        photo: "/users/11.png",
        primary: false,
        note: [],
        consult: [],
        video: [],
        event: [],
    },
    {
        id: 12,
        name: "Волошина Виктория",
        notification: null,
        photo: "/users/12.png",
        primary: false,
        note: [],
        consult: [],
        video: [],
        event: [],
    },
]