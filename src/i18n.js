import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import axios from "axios";

const loadTranslations = async (lang) => {
  try {
    const response = await axios.get(`https://ingame1.azeme.uz/api/user/langs?lang=${lang}`);
    return response.data.translations || {};
  } catch (error) {
    console.error("Ошибка загрузки переводов:", error);
    return {};
  }
};

const staticTranslations = {
  ru: {
    translation: {
      navbarProduct: "Продукция",
      navbarUsluga: "Услуги",
      navbarBrand: "О бренде",
      navbarSvyaz: "Связаться",
      catalogTitle: "КАТАЛОГ INGAME.UZ",
      catalogDescr: "Выберите себе в каталоге  для максимально комфортной игры",
      ourPcTitle: "Наши ПК",
      system: "Характеристики",
      price: "Цена",
      discount: "Скидка",
      NovinkiTitle: "Новинки",
      buy: "Купить",
      AksiiTitle: "Акции",
      full: "Подробнее",
      ReviewTitle: "Почему стоит выбрать нас?",
      ReviewDescr: "Об этом лучше всего расскажут сами наши клиенты!",
      questionTitle: "Часто задаваемые вопросы",
      question: "Сколько примерно стоит средний ПК для игр?",
      answer: "Ответ 1",
      NewsTitle: "Блог и новости",
      read: "Читать дальше",
      menegerTitle: "Одним онлайн-звонком мы изменим ваш игровой опыт навсегда",
      menegerDescr: "Назначим звонок, узнаем о ваших запросах, предложим подгодящую конфигурацию. После разбора мы возьмем на себя все заботы по поддержке и дальнейшей доставке и сбору ПК",
      call: "Заказать звонок",
      prev: "Назад",
      next: "Вперед",
      productTitle: "Игровые ПК",
      serviceTitle: "Мобильная разработка",
      serviceDescr: "Мы создаем качественные веб-приложения",
      serviceText: "Проблемы с мощностью ?",
      serviceText: "Неполадки в работе системы?",
      serviceText: "Не устраивает внешний вид?",
      serviceText: "Долго добираться до офиса?",
      servicetitle: "Что мы можем лучше остальных?",
      book: "Заказать апгрейд",
      weTitle: "Увеличить мощность",
      weDescr: "Подберем наиболее оптимальные комплектующие под задачи вашего ПК",
      list1: "обновим видеокарту",
      list2: "подберем новый процессор и материнскую плату",
      list3: "увеличим объём оперативной памяти",
      list4: "улучшим систему охлаждения компьютера",
      tovar: "Товар",
      sklad: "Наличие",
      availability: "Количество",
      isHave: "В наличии",
      pochta: "Отправка за 2-3 дня",
      korzina: "Корзина пуста",
      go: "Продолжить",
      last: "Итого",
      fio: "Пожалуйста, введите ваше ФИО.",
      phone: "Пожалуйста, введите корректный номер телефона в формате +998XXXXXXXXX.",
      address: "Пожалуйста, введите адрес доставки.",
      selected: "Пожалуйста, выберите способ доставки.",
      comment: "Комментарий не должен превышать 500 символов.",
      success: "Заказ успешно оформлен!",
      error: "Произошла ошибка при оформлении заказа.",
      order: "Оформить заказ",
      name: "Ф.И.О.*",
      number: "Номер телефона*",
      tovari: "Товаров",
      deliveryTitle: "Способы получения заказа",
      kuryer: "Доставка",
      samovivoz: "Самовывоз",
      deliveryTitle1: "Стандартная доставка",
      deliveryDescr1: "1 день",
      deliveryTitle2: "Бесплатная доставка по Ташкенту",
      deliveryDescr2: "1 день",
      deliveryTitle3: "Доставка в регионы",
      deliveryDescr3: "По тарифу экспресс-почты BTS или Fargo",
      addressDelivery: "Адрес доставки*",
      placeholder: "Введите ваш комментарий...",
      commentary: "Комментарий к заказу",
      BrandTitle: 'О компании',
      BrandSubtitle: "Компания INGAME была основана в 20017 году. Мы — официальный партнер таких известных технологических гигантов, как NVIDIA, ASUS ROG, Cougar, Huntkey. Главный офис INGAME и производственный центр расположены в Ташкенте. Шоурум с компьютерами и периферией находится также в Ташкенте. Мы осуществляем доставку компьютеров по всему Узбекистану и миру. Наша компания работает как с частными, так и с юридическими лицами.",
      BrandAboutTitle: "Про нас",
      BrandAboutSubtitle1: "Здравствуйте, я – Шахзод Шодиев основатель компании inGame",
      BrandAboutSubtitle2: "Я прошел все этапы работы: сам продавал, собирал и доставлял компьютеры клиентам. Как никто другой знаю, как это делать правильно; За 7 лет работы мы построили компанию олдним из лучших производителей компьютеров премиум класса в Узбекистане;",
      BrandAboutSubtitle3: "За это время мы собрали мощную команду единомышленников, с которыми дружим и работаем с самого основания компании.",
      BrandMissionTitle: 'Наша миссия',
      BrandMissionSubtitle: "Создавать лучшие компьютеры, которые будут дарить геймерам и творческим профессионалам удовольствие от использования. inGame это восхитительный дизайн, высокая производительность, безупречное качество и персональный сервис",
      BrandWhyTitle: "Почему стоит выбрать нас?",
      BrandWhyText1: "Компания была основана в 2009 году. Мы — официальный партнер таких известных технологических гигантов как NVIDIA, Intel, Microsoft. Нам также удалось реализовать несколько успешных совместных проектов с такими известными игровыми компаниями как Wargaming, UbiSoft, Electronic Arts, Bethesda и Mail.Games.",
      BrandWhyText2: "Главный офис и производственный центр расположены в Москве. Шоурум с компьютерами и периферией находятся в Москве. Мы осуществляем доставку компьютеров по всей России и миру. Наша компания работает как с частными, так и с юридическими лицами.",
      BrandWhyBlock: "съешь же ещё этих мягких французских булок, да выпей чаю съешь",
      OrderTitle: "Оплата и доставка",
      OrderSubtitle1: "Компания была основана в 2009 году. Мы — официальный партнер таких известных технологических гигантов как NVIDIA, Intel, Microsoft. Нам также удалось реализовать несколько успешных совместных проектов с такими известными игровыми компаниями как Wargaming, UbiSoft, Electronic Arts, Bethesda и Mail.Games.",
      OrderSubtitle2: "Главный офис и производственный центр расположены в Москве. Шоурум с компьютерами и периферией находятся в Москве. Мы осуществляем доставку компьютеров по всей России и миру. Наша компания работает как с частными, так и с юридическими лицами.",
      OrderSubtitle3: "съешь же ещё этих мягких французских булок, да выпей чаю съешь",
      OrderSubtitle4: "Компания была основана в 2009 году. Мы — официальный партнер таких известных технологических гигантов как NVIDIA, Intel, Microsoft. Нам также удалось реализовать несколько успешных совместных проектов с такими известными игровыми компаниями как Wargaming, UbiSoft, Electronic Arts, Bethesda и Mail.Games.",
      OrderSubtitle5: "Главный офис и производственный центр расположены в Москве. Шоурум с компьютерами и периферией находятся в Москве. Мы осуществляем доставку компьютеров по всей России и миру. Наша компания работает как с частными, так и с юридическими лицами.",
      GuaranteesTitle: "Гарантии",
      GuaranteesText1: "Компания была основана в 2009 году. Мы — официальный партнер таких известных технологических гигантов как NVIDIA, Intel, Microsoft. Нам также удалось реализовать несколько успешных совместных проектов с такими известными игровыми компаниями как Wargaming, UbiSoft, Electronic Arts, Bethesda и Mail.Games.",
      GuaranteesText2: "Главный офис и производственный центр расположены в Москве. Шоурум с компьютерами и периферией находятся в Москве. Мы осуществляем доставку компьютеров по всей России и миру. Наша компания работает как с частными, так и с юридическими лицами.",
      GuaranteesText3: "Компания была основана в 2009 году. Мы — официальный партнер таких известных технологических гигантов как NVIDIA, Intel, Microsoft. Нам также удалось реализовать несколько успешных совместных проектов с такими известными игровыми компаниями как Wargaming, UbiSoft, Electronic Arts, Bethesda и Mail.Games.",
      GuaranteesText4: "Главный офис и производственный центр расположены в Москве. Шоурум с компьютерами и периферией находятся в Москве. Мы осуществляем доставку компьютеров по всей России и миру. Наша компания работает как с частными, так и с юридическими лицами.",
      GuaranteesText5: "Компания была основана в 2009 году. Мы — официальный партнер таких известных технологических гигантов как NVIDIA, Intel, Microsoft. Нам также удалось реализовать несколько успешных совместных проектов с такими известными игровыми компаниями как Wargaming, UbiSoft, Electronic Arts, Bethesda и Mail.Games.",
      GuaranteesText6: "Главный офис и производственный центр расположены в Москве. Шоурум с компьютерами и периферией находятся в Москве. Мы осуществляем доставку компьютеров по всей России и миру. Наша компания работает как с частными, так и с юридическими лицами.",
      footerContact: "Контакты",
      footerSocial: "Наши соц. сети",
      footerNumber: "номер",
      footerTime: "время работы",
      footerLocate: "локация",
    },
  },
  uz: {
    translation: {
      navbarProduct: "Mahsulotlar",
      navbarUsluga: "Xizmatlar",
      navbarBrand: "Biz haqimizda",
      navbarSvyaz: "Bog'lanish",
      catalogTitle: "INGAME.UZ KATALOGI",
      catalogDescr: "Eng qulay o‘yin uchun katalogdan tanlang.",
      ourPcTitle: "Bizning kompyuterlar",
      system: "Xususiyatlar",
      price: "Narxi",
      discount: "Chegirma",
      NovinkiTitle: "Yangi mahsulotlar",
      buy: "Sotib olish",
      AksiiTitle: "Aksiyalar",
      full: "Batafsil",
      ReviewTitle: "Nega bizni tanlash kerak?",
      ReviewDescr: "Bu haqda eng yaxshi bizning mijozlarimiz gapirib berishadi!",
      questionTitle: "Ko‘p so‘raladigan savollar",
      question: "Oʻrtacha oʻyin kompyuteri taxminan qancha turadi?",
      answer: "Javob 1",
      NewsTitle: "Blog va yangiliklar",
      read: "Davomini o‘qish",
      menegerTitle: "Bitta onlayn qo‘ng‘iroq bilan biz sizning o‘yin tajribangizni butunlay o‘zgartiramiz!",
      menegerDescr: "Qo‘ng‘iroq belgilaymiz, talablaringizni bilib olamiz va mos konfiguratsiyani taklif qilamiz. Tahlildan so‘ng, biz texnik qo‘llab-quvvatlash, yetkazib berish va kompyuter yig‘ish jarayonini to‘liq o‘z zimmamizga olamiz.",
      call: "Qo‘ng‘iroq buyurtma qilish",
      prev: "Ortga",
      next: "Keyingisi",
      productTitle: 'O‘yin kompyuterlari',
      serviceTitle: "Mobile dasturlash",
      serviceDescr: "Biz yuqori sifatli veb dasturlar yaratamiz.",
      serviceText: "Quvvat bilan bog‘liq muammolar bormi?",
      serviceText: "Tizim ishida nosozliklar bormi?",
      serviceText: "Tashqi ko‘rinishi yoqmayaptimi?",
      serviceText: "Ofisga yetib borish uzoqmi?",
      servicetitle: "Biz boshqalardan qanday yaxshiroqmiz?",
      book: "Yangilashga buyurtma berish",
      weTitle: "Quvvatni oshirish",
      weDescr: "Kompyuteringiz vazifalariga mos eng optimal komponentlarni tanlab beramiz.",
      list1: "Videokartani yangilaymiz",
      list2: "Yangi protsessor va ona platasini tanlab beramiz",
      list3: "Operativ xotira hajmini oshiramiz",
      list4: "Kompyuterning sovutish tizimini yaxshilaymiz",
      tovar: "Mahsulot",
      sklad: "Mavjudlik",
      availability: "Soni",
      isHave: "Mavjud",
      pochta: "2-3 kun ichida jo‘natiladi",
      korzina: "Savat bo‘sh",
      go: "Davom etish",
      last: "Jami",
      fio: "Iltimos, to‘liq ismingizni kiriting.",
      phone: "Iltimos, telefon raqamingizni to‘g‘ri formatda kiriting: +998XXXXXXXXX.",
      address: "Iltimos, yetkazib berish manzilini kiriting.",
      selected: "Iltimos, yetkazib berish usulini tanlang.",
      comment: "Izoh 500 ta belgidan oshmasligi kerak.",
      success: "Buyurtma muvaffaqiyatli rasmiylashtirildi!",
      error: "Buyurtmani rasmiylashtirishda xatolik yuz berdi.",
      order: "Buyurtma rasmiylashtirish",
      name: "F.I.O*",
      number: "Telefon raqami*",
      tovari: "Mahsulotlar",
      deliveryTitle: "Buyurtmani olish usullari",
      kuryer: "Yetkazib berish",
      samovivoz: "O‘zi olib ketish",
      deliveryTitle1: "Standart yetkazib berish",
      deliveryDescr1: "1 kun",
      deliveryTitle2: "Toshkent bo‘ylab bepul yetkazib berish",
      deliveryDescr2: "1 kun",
      deliveryTitle3: "Hududlarga yetkazib berish",
      deliveryDescr3: "BTS yoki Fargo ekspress pochta tarifi bo‘yicha",
      addressDelivery: "Yetkazib berish manzili*",
      placeholder: "Izohingizni kiriting...",
      commentary: "Buyurtmaga izoh",
      BrandTitle: "Kompaniya haqida",
      BrandSubtitle: "Kompaniya INGAME 2017-yilda tashkil etilgan. Biz NVIDIA, ASUS ROG, Cougar, Huntkey kabi mashhur texnologik gigantlarning rasmiy hamkorimiz. INGAME'ning bosh ofisi va ishlab chiqarish markazi Toshkent shahrida joylashgan. Kompyuterlar va periferiyalar uchun shourum ham Toshkentda joylashgan. Biz kompyuterlarni butun Oʻzbekiston bo‘ylab va dunyo miqyosida yetkazib beramiz. Kompaniyamiz jismoniy va yuridik shaxslar bilan hamkorlik qiladi.",
      BrandAboutTitle: "Biz haqimizda",
      BrandAboutSubtitle1: "Assalomu alaykum, men – Shakhzod Shodiev, inGame kompaniyasining asoschisi.",
      BrandAboutSubtitle2: "Men ishning barcha bosqichlaridan o‘tganman: o‘zim kompyuterlarni sotganman, yig‘ganman va mijozlarga yetkazib berganman. Boshqalarga qaraganda yaxshiroq bilaman, bu ishni qanday to‘g‘ri bajarish kerak. 7 yil davomida biz kompaniyamizni O‘zbekistonning premium toifadagi eng yaxshi kompyuter ishlab chiqaruvchilaridan biriga aylantirdik.",
      BrandAboutSubtitle3: "Bu vaqt ichida biz kuchli hamfikrlar jamoasini shakllantirdik, ular bilan kompaniya tashkil etilgan kundan boshlab birga ishlaymiz va do‘stona munosabatdamiz.",
      BrandMissionTitle: 'Bizning missiyamiz',
      BrandMissionSubtitle: "Eng yaxshi kompyuterlarni yaratish, ular geymerlar va ijodiy professionallar uchun foydalanishdan zavq bag‘ishlashi kerak. inGame – bu ajoyib dizayn, yuqori samaradorlik, benuqson sifat va shaxsiy yondashuvli xizmat.",
      BrandWhyTitle: "Nega bizni tanlash kerak?",
      BrandWhyText1: "Kompaniyamiz 2009-yilda tashkil etilgan. Biz NVIDIA, Intel, Microsoft kabi mashhur texnologik gigantlarning rasmiy hamkorimiz. Shuningdek, Wargaming, UbiSoft, Electronic Arts, Bethesda va Mail.Games kabi taniqli o‘yin kompaniyalari bilan bir nechta muvaffaqiyatli hamkorlik loyihalarini amalga oshirdik.",
      BrandWhyText2: "Bosh ofis va ishlab chiqarish markazi Moskva shahrida joylashgan. Kompyuterlar va periferiyalar uchun shourum ham Moskvada joylashgan. Biz kompyuterlarni butun Rossiya bo‘ylab va dunyo miqyosida yetkazib beramiz. Kompaniyamiz jismoniy va yuridik shaxslar bilan hamkorlik qiladi.",
      BrandWhyBlock: "Yana shu yumshoq fransuz bulkalaridan ye va choy ich.",
      OrderTitle: "To‘lov va yetkazib berish",
      OrderSubtitle1: "Kompaniyamiz 2009-yilda tashkil etilgan. Biz NVIDIA, Intel, Microsoft kabi mashhur texnologik gigantlarning rasmiy hamkorimiz. Shuningdek, Wargaming, UbiSoft, Electronic Arts, Bethesda va Mail.Games kabi taniqli o‘yin kompaniyalari bilan bir nechta muvaffaqiyatli hamkorlik loyihalarini amalga oshirdik.",
      OrderSubtitle2: "Bosh ofis va ishlab chiqarish markazi Moskva shahrida joylashgan. Kompyuterlar va periferiyalar uchun shourum ham Moskvada joylashgan. Biz kompyuterlarni butun Rossiya bo‘ylab va dunyo miqyosida yetkazib beramiz. Kompaniyamiz jismoniy va yuridik shaxslar bilan hamkorlik qiladi.",
      OrderSubtitle3: "Yana shu yumshoq fransuz bulkalaridan ye va choy ich.",
      OrderSubtitle4: "Kompaniyamiz 2009-yilda tashkil etilgan. Biz NVIDIA, Intel, Microsoft kabi mashhur texnologik gigantlarning rasmiy hamkorimiz. Shuningdek, Wargaming, UbiSoft, Electronic Arts, Bethesda va Mail.Games kabi taniqli o‘yin kompaniyalari bilan bir nechta muvaffaqiyatli hamkorlik loyihalarini amalga oshirdik.",
      OrderSubtitle5: "Bosh ofis va ishlab chiqarish markazi Moskva shahrida joylashgan. Kompyuterlar va periferiyalar uchun shourum ham Moskvada joylashgan. Biz kompyuterlarni butun Rossiya bo‘ylab va dunyo miqyosida yetkazib beramiz. Kompaniyamiz jismoniy va yuridik shaxslar bilan hamkorlik qiladi.",
      GuaranteesTitle: "Kafolatlar",
      GuaranteesText1: "Kompaniyamiz 2009-yilda tashkil etilgan. Biz NVIDIA, Intel, Microsoft kabi mashhur texnologik gigantlarning rasmiy hamkorimiz. Shuningdek, Wargaming, UbiSoft, Electronic Arts, Bethesda va Mail.Games kabi taniqli o‘yin kompaniyalari bilan bir nechta muvaffaqiyatli hamkorlik loyihalarini amalga oshirdik.",
      GuaranteesText2: "Bosh ofis va ishlab chiqarish markazi Moskva shahrida joylashgan. Kompyuterlar va periferiyalar uchun shourum ham Moskvada joylashgan. Biz kompyuterlarni butun Rossiya bo‘ylab va dunyo miqyosida yetkazib beramiz. Kompaniyamiz jismoniy va yuridik shaxslar bilan hamkorlik qiladi.",
      GuaranteesText3: "Kompaniyamiz 2009-yilda tashkil etilgan. Biz NVIDIA, Intel, Microsoft kabi mashhur texnologik gigantlarning rasmiy hamkorimiz. Shuningdek, Wargaming, UbiSoft, Electronic Arts, Bethesda va Mail.Games kabi taniqli o‘yin kompaniyalari bilan bir nechta muvaffaqiyatli hamkorlik loyihalarini amalga oshirdik.",
      GuaranteesText4: "Bosh ofis va ishlab chiqarish markazi Moskva shahrida joylashgan. Kompyuterlar va periferiyalar uchun shourum ham Moskvada joylashgan. Biz kompyuterlarni butun Rossiya bo‘ylab va dunyo miqyosida yetkazib beramiz. Kompaniyamiz jismoniy va yuridik shaxslar bilan hamkorlik qiladi.",
      GuaranteesText5: "Kompaniyamiz 2009-yilda tashkil etilgan. Biz NVIDIA, Intel, Microsoft kabi mashhur texnologik gigantlarning rasmiy hamkorimiz. Shuningdek, Wargaming, UbiSoft, Electronic Arts, Bethesda va Mail.Games kabi taniqli o‘yin kompaniyalari bilan bir nechta muvaffaqiyatli hamkorlik loyihalarini amalga oshirdik.",
      GuaranteesText6: "Bosh ofis va ishlab chiqarish markazi Moskva shahrida joylashgan. Kompyuterlar va periferiyalar uchun shourum ham Moskvada joylashgan. Biz kompyuterlarni butun Rossiya bo‘ylab va dunyo miqyosida yetkazib beramiz. Kompaniyamiz jismoniy va yuridik shaxslar bilan hamkorlik qiladi.",
      footerContact: "Aloqa",
      footerSocial: "Bizning ijtimoiy tarmoqlar",
      footerNumber: "Raqam",
      footerTime: "Ish vaqti",
      footerLocate: "Manzil"
    },
  },
};

i18next
  .use(initReactI18next)
  .init({
    lng: "ru", // Язык по умолчанию
    fallbackLng: "en",
    debug: false,
    interpolation: { escapeValue: false },
    resources: staticTranslations, // Добавляем статические переводы
  });

export const changeLanguage = async (lang) => {
  const translations = await loadTranslations(lang);
  i18next.addResourceBundle(lang, "translation", translations, true, true);
  await i18next.changeLanguage(lang);
};

export default i18next;
