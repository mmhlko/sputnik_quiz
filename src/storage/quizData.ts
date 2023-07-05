export type TQuizQuestion = {
    title: string,
    variants: string[],
    correctAnswer: number,
    id: number
}

export const quizData: TQuizQuestion[] = [
    {
        title: 'Как называется еврейский Новый год?',
        variants: ['Ханука', 'Йом Кипур','Кванза','Рош ха-Шана'],
        correctAnswer: 4,
        id: 1,
    },
    {
        title: 'Сколько синих полос на флаге США?',
        variants: ['6', '7','13','0'],
        correctAnswer: 4,
        id: 2,
    },
    {
        title: 'Кто из этих персонажей не дружит с Гарри Поттером?',
        variants: ['Рон Уизли', 'Невилл Лонгботтом','Драко Малфой','Гермиона Грейнджер'],
        correctAnswer: 3,
        id: 3,
    },
    {
        title: 'Какое животное не фигурирует в китайском зодиаке?',
        variants: ['Дракон', 'Кролик','Собака','Колибри'],
        correctAnswer: 4,
        id: 4,
    },
    {
        title: 'В какой стране проходили летние Олимпийские игры 2016 года?',
        variants: ['Китай', 'Ирландия','Бразилия','Италия'],
        correctAnswer: 3,
        id: 5,
    },
    {
        title: 'Какая планета самая горячая?',
        variants: ['Венера', 'Сатурн','Меркурий','Марс'],
        correctAnswer: 1,
        id: 6,
    },
    {
        title: 'Как назывался корабль капитана Джека Воробья в "Пиратах Карибского моря"?',
        variants: ['Мародер', 'Черная жемчужина','Черный питон','Слизерин'],
        correctAnswer: 3,
        id: 7,
    },
    {
        title: 'Какая самая редкая группа крови?',
        variants: ['I группа', 'II группа','III группа','IV группа'],
        correctAnswer: 1,
        id: 8,
    },
    {
        title: 'Кто из этих персонажей не входит в группу друзей из сериала "Друзья"?',
        variants: ['Рэйчел', 'Джоуи','Гюнтер','Моника'],
        correctAnswer: 3,
        id: 9,
    },
    {
        title: 'Кто из этих персонажей не входит в группу друзей из сериала "Друзья"?',
        variants: ['Рэйчел', 'Джоуи','Гюнтер','Моника'],
        correctAnswer: 3,
        id: 10,
    },
    {
        title: 'Сколько костей в теле человека?',
        variants: ['206','205','201','209'],
        correctAnswer: 1,
        id: 11,
    },
]