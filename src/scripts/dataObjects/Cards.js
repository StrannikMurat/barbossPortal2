// импорт фото упражнений
import exercise1 from "../../img/exercises/exercise_1.png";
import exercise2 from "../../img/exercises/exercise_2.png";
import exercise3 from "../../img/exercises/exercise_3.png";
import exercise4 from "../../img/exercises/exercise_4.png";
import exercise5 from "../../img/exercises/exercise_5.png";
import exercise6 from "../../img/exercises/exercise_6.png";
import exercise7 from "../../img/exercises/exercise_7.png";
import exercise8 from "../../img/exercises/exercise_8.png";
import exercise9 from "../../img/exercises/exercise_9.png";
import exercise10 from "../../img/exercises/exercise_10.png";
import exercise11 from "../../img/exercises/exercise_11.png";
import exercise12 from "../../img/exercises/exercise_12.png";
import exercise13 from "../../img/exercises/exercise_13.png";
import exercise14 from "../../img/exercises/exercise_14.png";
import exercise15 from "../../img/exercises/exercise_15.png";
import exercise16 from "../../img/exercises/exercise_16.png";
import exercise17 from "../../img/exercises/exercise_17.png";
import exercise18 from "../../img/exercises/exercise_18.png";
import exercise19 from "../../img/exercises/exercise_19.png";
import exercise20 from "../../img/exercises/exercise_20.png";
import exercise21 from "../../img/exercises/exercise_21.png";
import exercise22 from "../../img/exercises/exercise_22.png";
import exercise23 from "../../img/exercises/exercise_23.png";
import exercise24 from "../../img/exercises/exercise_24.png";
import exercise25 from "../../img/exercises/exercise_25.png";
import exercise26 from "../../img/exercises/exercise_26.png";
import exercise27 from "../../img/exercises/exercise_27.png";
import exercise28 from "../../img/exercises/exercise_28.png";
import exercise29 from "../../img/exercises/exercise_29.png";
import exercise30 from "../../img/exercises/exercise_30.png";
import exercise31 from "../../img/exercises/exercise_31.png";
import exercise32 from "../../img/exercises/exercise_32.png";
import exercise33 from "../../img/exercises/exercise_33.png";
import exercise34 from "../../img/exercises/exercise_34.png";
import exercise35 from "../../img/exercises/exercise_35.png";

// массив с объектами упражнений
export const initialCards = [
  {
    title: "Подтягивания к столбу",
    subTitle: "Подтягивания",
    difficult: "Облегченное упражнение",
    url: exercise1,
    equipment : 'Вертикальный столб',
    musclelsMaster : `Широчайшие, Трапеция нижняя`,
    musclelsSlave : `Бицепсы, Предпелчья, Задние дельты`,
    about :  `● Найди устойчивый столб, за который тебе будет удобно держаться. 
              ● Схватись за столб. Кисти рук должны быть примерно на уровне солнечного сплетения. 
              ● Разогни руки. Твоё тело отклонится от параллели столба. 
              ● Начни движение к столбу со сведения лопаток и уже после переходя на сгибание рук в локтях. 
              ● Поднявшись до параллели со столбом - не расслабляй мышцы. 
              ● Медленно вернись в исходное положение - разогнув локти. Для увеличения амплитуды - округли спину.`,
  },

  {
    title: "Отжимания от столба",
    subTitle: "Отжимания",
    difficult: "Облегченное упражнение",
    url: exercise2,
    equipment : 'Вертикальный столб',
    musclelsMaster : `Малые_грудные, Большие_грудные, Передняя_дельта`,
    musclelsSlave : `Трицепсы`,
    about :  `● Встань рядом с устойчивым вертикальным столбом.<br>
              ● Схватись руками за столб. Ладони на уровне солнечного сплетения.<br>
              ● Сделай шаг назад, наклоняя тело под углом около 45° к земле.<br>
              ● Начни сгибать руки в локтях - выполнять отжимания.<br>
              ● Не поднимай пятки. <br>`,
  },

  {
    title: "Приседания с упором икрами",
    subTitle: "Ноги",
    difficult: "Облегченное упражнение",
    url: exercise3,
    equipment : 'Низкая перекладина',
    musclelsMaster : `Четырёхглавые, Ягодицы`,
    musclelsSlave : `Икры`,
    about :  `● Найди низкую перекладину или платформу.<br>
              ● Встань перед ней, прижми икры к перекладине, стопы на ширине плеч, носки слегка развернуты наружу.<br>
              ● Медленно начни сгибать колени, опуская таз вниз и отклячиваясь назад. Держи спину ровной,<br>
              ● Опускайся до тех пор, пока бедра не станут параллельны полу или немного ниже.<br>
              ● Поднимись в исходное положение, разгибая колени и возвращая таз в верхнее положение.<br>`,
  },

  {
    title: "Додо от столба/стены",
    subTitle: "Разводки",
    difficult: "Облегченное упражнение",
    url: exercise4,
    equipment : 'Вертикальный столб',
    musclelsMaster : [`Средняя_дельта`],
    musclelsSlave : [],
    about :  `● Найди стену или вертикальный столб.<br>
              ● Подойди к столбу сплотную, повернись боком и согни руку близжайшую к столбу руку на 90 градусов в локте.<br>
              ● Сделай один шаг от столба, наклоняя тело под углом около 45° к земле. Согнутая рука прислонена к столбу.<br>
              ● Начни отводить и приводить согнутую руку.<br>`,
  },

  {
    title: "Бег в упоре",
    subTitle: "Скручивания",
    difficult: "Облегченное упражнение",
    url: exercise5,
    equipment : 'Пол',
    musclelsMaster : [`Пресс`],
    musclelsSlave : [`Передняя_дельта`, `Трицепсы`],
    about :  `● Займи положение - упор лёжа. <br>
              ● Согни одну ногу в колене и поднеси её к поясу. <br>
              ● Вернись в изначальное положение. После чего повтори это с другой ногой. <br>`,
  },

  {
    title: "Австралийские подтягивания",
    subTitle: "Подтягивания",
    difficult: "Базовое упражнение",
    url: exercise6,
  },

  {
    title: 'Отжимания "Руки выше ног',
    subTitle: "Отжимания",
    difficult: "Базовое упражнение",
    url: exercise7,
  },

  {
    title: "Зашагивания",
    subTitle: "Ноги",
    difficult: "Базовое упражнение",
    url: exercise8,
  },

  {
    title: "Додо от наклонной поверхности",
    subTitle: "Разводки",
    difficult: "Базовое упражнение",
    url: exercise9,
  },

  {
    title: "Скручивания",
    subTitle: "Скручивания",
    difficult: "Базовое упражнение",
    url: exercise10,
  },

  {
    title: 'Подтягивания "Австралийский тюлень"',
    subTitle: "Подтягивания",
    difficult: "Базовое упражнение",
    url: exercise11,
  },

  {
    title: "Отжимания от пола",
    subTitle: "Отжимания",
    difficult: "Базовое упражнение",
    url: exercise12,
  },

  {
    title: "Приседания",
    subTitle: "Ноги",
    difficult: "Базовое упражнение",
    url: exercise13,
  },

  {
    title: "Подъёмы коленей до груди в висе/упоре на брусьях",
    subTitle: "Скручивания",
    difficult: "Базовое упражнение",
    url: exercise14,
  },

  {
    title: "Подтягивания",
    subTitle: "Подтягивания",
    difficult: "Базовое упражнение",
    url: exercise15,
  },

  {
    title: 'Отжимания "Руки выше ног"',
    subTitle: "Отжимания",
    difficult: "Базовое упражнение",
    url: exercise16,
  },

  {
    title: "Выпады",
    subTitle: "Ноги",
    difficult: "Базовое упражнение",
    url: exercise17,
  },

  {
    title: "Подъёмы ног выше уголка в висе/упоре на брусьях",
    subTitle: "Скручивания",
    difficult: "Базовое упражнение",
    url: exercise18,
  },

  {
    title: "Австралийские подтягивания на бицепс ложным нижним хватом",
    subTitle: "Подтягивания",
    difficult: "Базовое упражнение",
    url: exercise19,
  },

  {
    title: "Отжимания на трицепс",
    subTitle: "Отжимания",
    difficult: "Базовое упражнение",
    url: exercise20,
  },

  {
    title: "Подъёмы на носки двумя ногами",
    subTitle: "Ноги",
    difficult: "Базовое упражнение",
    url: exercise21,
  },

  {
    title: "Боковые скручивания с согнутыми ногами в висе/упоре на брусьях",
    subTitle: "Скручивания",
    difficult: "Продвинутое упражнение",
    url: exercise22,
  },

  {
    title: "Высокие подтягивания",
    subTitle: "Подтягивания",
    difficult: "Продвинутое упражнение",
    url: exercise23,
  },

  {
    title: "Отжимания на брусьях",
    subTitle: "Отжимания",
    difficult: "Базовое упражнение",
    url: exercise24,
  },

  {
    title: "Подъёмы на носки одной ногой",
    subTitle: "Ноги",
    difficult: "Базовое упражнение",
    url: exercise25,
  },

  {
    title: "Подъёмы ног как можно выше в висе/упоре на брусьях",
    subTitle: "Скручивания",
    difficult: "Продвинутое упражнение",
    url: exercise26,
  },

  {
    title: "Подтягивания со сведением лопаток",
    subTitle: "Подтягивания",
    difficult: "Продвинутое упражнение",
    url: exercise27,
  },

  {
    title: 'Отжимания "Нырок щуки"',
    subTitle: "Отжимания",
    difficult: "Продвинутое упражнение",
    url: exercise28,
  },

  {
    title: "Сгибания на заднюю поверхность бедра с помощью рук",
    subTitle: "Ноги",
    difficult: "Базовое упражнение",
    url: exercise29,
  },

  {
    title: "Боковые подъёмы ног как можно выше в висе/в упоре на брусьях",
    subTitle: "Скручивания",
    difficult: "Продвинутое упражнение",
    url: exercise30,
  },

  {
    title: 'Подтягивания "Австралийский тюлень" на заднюю дельту',
    subTitle: "Подтягивания",
    difficult: "Продвинутое упражнение",
    url: exercise31,
  },

  {
    title: "Французские отжимания",
    subTitle: "Отжимания",
    difficult: "Продвинутое упражнение",
    url: exercise32,
  },

  {
    title: "Болгарские приседания",
    subTitle: "Ноги",
    difficult: "Продвинутое упражнение",
    url: exercise33,
  },

  {
    title: "Отжимания на брусьях в группировке",
    subTitle: "Отжимания",
    difficult: "Продвинутое упражнение",
    url: exercise34,
  },

  {
    title: "Выпрыгивания",
    subTitle: "Ноги",
    difficult: "Продвинутое упражнение",
    url: exercise35,
  },
];
