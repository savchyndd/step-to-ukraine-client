import travels_1 from '../../app/assets/travels_1.webp';
import travels_2 from '../../app/assets/travels_2.webp';
import travels_3 from '../../app/assets/travels_3.webp';
import reservation_1 from '../../app/assets/reservation_1.webp';
import reservation_2 from '../../app/assets/reservation_2.webp';
import reservation_3 from '../../app/assets/reservation_3.webp';
import traditions_1 from '../../app/assets/traditions_1.webp';
import traditions_2 from '../../app/assets/traditions_2.webp';
import traditions_3 from '../../app/assets/traditions_3.webp';
import custle from '../../img/custle.webp';
import palace from '../../img/palace.webp';
import house from '../../img/house.webp';

const dataSections = [
  {
    styleSection: 'section_contener',
    number: '02',
    title: 'Подорожі',
    description: {
      text1:
        'Ми віримо, що подорож - це не лише спосіб дізнатися більше про світ, але і можливість відкрити для себе неймовірні різноманітності України, її багатство традицій, культури та природи.',
      text2:
        'Тут ви зможете зануритися у чарівний світ України, обираючи з різноманітних подорожей та пригод. Ми пропонуємо вам контент, який	розкаже про найцікавіші місця та події в кожному регіоні. Ви зможете зручно планувати свої маршрути використовуючи нашу платформу.',
      text3:
        'Ми пишаємося отриманим результатом. Наша платформа відкрита для всіх, хто цікавиться Україною та подорожами. Приєднуйтесь до нас і відкривайте нові горизонти!',
    },
    gallery: {
      img_1: {
        src: travels_1,
        alt: 'building',
      },
      img_2: {
        src: travels_2,
        alt: 'mountain',
      },
      img_3: {
        src: travels_3,
        alt: 'waterfall',
      },
    },
    imgOnBg: {
      imgSrc: custle,
      imgAlt: 'custle',
    },
    btn: {
      more: 'Більше',
      toMap: 'До мапи',
    },
    SVG: {
      arrowUp: 'button_default_svg',
      arrowDown: 'button_second_svg',
    },
    decorationLinie: {
      lineOriginal: 'section_decoration_line',
      lineRotate: 'section_decoration_line_rotate',
    },
  },
  {
    styleSection: 'section_contener_reverse',
    number: '03',
    title: 'Бронювання',
    description: {
      text1:
        'Тут ви зможете зробити вашу подорож Україною ще комфортнішою та приємнішою. Цей розділ пропонує широкий вибір можливостей – від ресторанів і кафетеріїв, де ви скуштуєту неймовірні страви, до готелів і хостелів, де відпочинете в комфортних умовах.',
      text2:
        'Наша платформа робить бронювання легким та зручним. Ви можете обирати серед різноманітних закладів, оглядати відгуки і рейтинги, а потім легко забронювати те, що вам подобається. Ми розуміємо, наскільки важливий для вас комфорт під час подорожей, і саме тому ми робимо все можливе, щоб зробити процес бронювання максимально приємним і ефективним.',
      text3: 'Бронюйте та насолоджуйтесь вашим відпочинком!',
    },
    gallery: {
      img_1: {
        src: reservation_1,
        alt: 'Lviv croissants',
      },
      img_2: {
        src: reservation_2,
        alt: 'food on the festive table',
      },
      img_3: {
        src: reservation_3,
        alt: 'house with old architecture',
      },
    },
    imgOnBg: {
      imgSrc: palace,
      imgAlt: 'palace',
    },
    btn: {
      more: 'Більше',
      toMap: 'До мапи',
    },
    SVG: {
      arrowUp: 'button_default_svg',
      arrowDown: 'button_second_svg',
    },
    decorationLinie: {
      lineOriginal: 'section_decoration_line',
      lineRotate: 'section_decoration_line_rotate',
    },
  },
  {
    styleSection: 'section_contener',
    number: '04',
    title: 'Традиції',
    description: {
      text1:
        'Тут ви зможете поглибити своє знайомство з унікальною культурною спадщиною України. Цей розділ проведе вас в глибини української історії та культури, розкриваючи перед вами багатство наших обрядів, свят та звичаїв.',
      text2:
        'Ми віримо, що ознайомлення з традиціями — це ключ до кращого розуміння країни та її жителів. Ви дізнаєтеся більше про обряди та свята, які формують нашу культурну ідентичність.',
      text3: 'Розкрийте справжню душу країни через її традиції.',
    },
    gallery: {
      img_1: {
        src: traditions_1,
        alt: 'sunset behind the house',
      },
      img_2: {
        src: traditions_2,
        alt: 'happy girl in a white skirt on the field',
      },
      img_3: {
        src: traditions_3,
        alt: 'the old building is a church from the time of the Ukrainian Cossacks',
      },
    },
    imgOnBg: {
      imgSrc: house,
      imgAlt: 'house',
    },
    btn: {
      more: 'Більше',
    },
    SVG: {
      arrowUp: 'button_default_svg',
    },
    decorationLinie: {
      lineOriginal: 'section_decoration_line',
      lineRotate: 'section_decoration_line_rotate',
    },
  },
];

export default dataSections;
