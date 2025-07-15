// src/lib/local-data.ts
import type { Product, AdminUser } from './types';

const products: Product[] = [
    {
      "id": "-OLuwW7t_F5LBDh3_kS8",
      "slug": "laptop-special",
      "category": "Laptops",
      "condition": "Used",
      "description": "لابتوب مستعمل بحالة ممتازة",
      "longDescription": "لابتوب مستعمل بحالة ممتازة، مناسب للأعمال المكتبية والتصفح. يأتي مع شاحن أصلي.",
      "image": "https://th.bing.com/th/id/OIP.HF3_zA2w_jrg85YnuM1IlQHaEh?rs=1&pid=ImgDetMain",
      "name": "Laptop Special",
      "price": 400,
      "featured": true,
      "featured2": true,
      "timestamp": 1742598181606
    },
    {
      "id": "-OLvJColxHDp6KHs9Hqy",
      "slug": "lenovo-used",
      "category": "Laptops",
      "condition": "Used",
      "description": "لابتوب لينوفو مستعمل",
      "longDescription": "لابتوب لينوفو مستعمل مع معالج قوي وذاكرة كبيرة، مثالي للمهام المتعددة.",
      "image": "https://res.cloudinary.com/dgx08zujs/image/upload/v1743468922/484398328_660181293534784_838721784984225036_n_1_dtklrj.jpg",
      "name": "Lenovo Used",
      "price": 200,
      "featured": false,
      "featured2": true,
      "timestamp": 1742604393957
    },
    {
      "id": "-OLvmhGaCg6m_BTZYeQA",
      "slug": "lenovo-i5-new",
      "category": "Laptops",
      "condition": "New",
      "description": "Processor : Core I5 -8350U, Memory :16 GB",
      "longDescription": "لابتوب لينوفو جديد بمعالج Core i5 من الجيل الثامن وذاكرة 16 جيجابايت. أداء سريع وتصميم أنيق.",
      "image": "https://th.bing.com/th/id/R.10d1622367b1a60529d10492a4e69643?rik=6Cgofqx0XQUPYA&pid=ImgRaw&r=0",
      "name": "Lenovo i5 New",
      "price": 179,
      "featured": true,
      "featured2": true,
      "timestamp": 1742612387102
    },
    {
      "id": "-OLztMiqWXEYw37RlJLN",
      "slug": "generic-phone-new",
      "category": "Phones",
      "condition": "New",
      "description": "هاتف ذكي جديد بمواصفات رائعة",
      "longDescription": "هاتف ذكي جديد بشاشة عالية الدقة وكاميرا ممتازة وبطارية تدوم طويلاً.",
      "image": "https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770_1280.png",
      "name": "Generic Phone",
      "price": 20,
      "featured": false,
      "featured2": true,
      "timestamp": 1742681242737
    },
    {
      "id": "-OMJkeiOJSqiGKOS5RQl",
      "slug": "akrama-laptop",
      "category": "Laptops",
      "condition": "New",
      "description": "لابتوب عكرما بإصدار خاص",
      "longDescription": "إصدار خاص من لابتوب عكرما بمميزات وتصميم فريد. كمية محدودة.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsJA3F0yHwkzM4Wi1qVitT20dmTd2iXJUkuCgh8bIWz2tDq1znv_AkSWw&s",
      "name": "Akrama Laptop",
      "price": 10,
      "featured": true,
      "featured2": true,
      "timestamp": 1743031282750
    },
    {
      "id": "-OMO_yoGh3W0K6rC2QmJ",
      "slug": "dg-laptop-new",
      "category": "Laptops",
      "condition": "New",
      "description": "جهاز رائع آخر لمجموعتك",
      "longDescription": "جهاز رائع آخر لمجموعتك. أداء عالٍ وتصميم أنيق.",
      "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6504/6504566_rd.jpg",
      "name": "DG Laptop",
      "price": 150,
      "featured": false,
      "featured2": true,
      "timestamp": 1743112367559
    },
    {
      "id": "-OMiZYM6LLYcHkxRfpsA",
      "slug": "test-product",
      "category": "Laptops",
      "condition": "New",
      "description": "منتج تجريبي لأغراض العرض",
      "longDescription": "هذا منتج تجريبي لأغراض العرض. يحتوي على وصف وصورة افتراضية.",
      "image": "https://www.webmotors.com.br/wp-content/uploads/2022/11/08131522/Royal-Enfield-Super-Meteor-650-10.jpg",
      "name": "Test Product",
      "price": 50,
      "featured": true,
      "featured2": false,
      "timestamp": 1743464314492
    },
     {
      "id": "-OV6CA-rG5MSb6w243MI",
      "slug": "qorbak-laptop",
      "category": "Laptops",
      "condition": "New",
      "description": "وصف قصير للابتوب قرباك",
      "featured": true,
      "featured2": true,
      "image": "https://res.cloudinary.com/prod/image/upload/e_gen_background_replace:prompt_Minimalist%20background%20with%20a%20soft%20pastel%20gradient%20even%20lighting/me/gen-bgr-object-1",
      "longDescription": "وصف طويل ومفصل للابتوب قرباك، يشرح جميع المواصفات والمميزات.",
      "name": "Qorbak Laptop",
      "price": 200,
      "timestamp": 1752467550476
    }
];

const users: AdminUser[] = [
    {
        "id": "user1",
        "email": "yazan.admin@hanzo.com",
        "password": "123456789"
    }
];

export const localDatabase = {
  background: "https://www.freepik.com/free-vector/yellow-diagonal-geometric-striped-background-with-halftone-detailed_18483375.htm#fromView=keyword&page=1&position=0&uuid=02308c3f-e366-4e1c-99fd-f8a830ecfc91&query=Yellow+Background",
  content: {
    aboutClosingLine: "Hanzo — حيث التميّز التقني يلتقي باحتياجاتك!",
    aboutCtaParagraph: "انضم إلى آلاف العملاء الذين اختاروا Hanzo ليكونوا في الصدارة...",
    aboutCtaTitle: "لا تُضيّع الفرصة!",
    aboutImage: "https://res.cloudinary.com/prod/image/upload/e_gen_background_replace:prompt_Minimalist%20background%20with%20a%20soft%20pastel%20gradient%20even%20lighting/me/gen-bgr-object-1",
    aboutListItem1: "تشكيلة واسعة من أحدث الأجهزة.",
    aboutListItem2: "أسعار تنافسية وعروض حصرية.",
    aboutListItem3: "فريق دعم فني متخصص.",
    aboutListItem4: "تجربة تسوق سهلة وممتعة.",
    aboutListTitle: "لماذا Hanzo؟",
    aboutParagraph: "في عالمٍ تسوده السرعة والابتكار، تبرز Hanzo كشريكك المثالي في عالم التقنية...",
    aboutSubtitle: "تقنيتك بلمسة تميّز وسرعة لا تُضاهى",
    aboutTitle: "عن HANZO",
    heroSubtitle: "اكتشف المزيج المثالي من القوة والتصميم والابتكار مع مجموعتنا المختارة من الهواتف واللاب توب",
    heroTitle: 'تقنية <span class="text-primary">متميزة</span> لك'
  },
  coverImage: "https://www.freepik.com/free-vector/yellow-diagonal-geometric-striped-background-with-halftone-detailed_18483375.htm#fromView=keyword&page=1&position=0&uuid=02308c3f-e366-4e1c-99fd-f8a830ecfc91&query=Yellow+Background",
  footer: {
    about: "HANZO - تقنية متميزة لأسلوب حياتك",
    facebook: "https://www.facebook.com/HanzoLaptops",
    height: 75,
    instagram: "https://www.instagram.com/hanzo_laptop/",
    logo: "https://scontent.famm10-1.fna.fbcdn.net/v/t39.30808-6/493669213_709780695241510_2056210301092640393_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=hNzJn5cfIlcQ7kNvwGmDGOA&_nc_oc=AdlPLoGMtGSC9H4VHA8IC34EFsU7w47kiTW2t7KUvjKondzEKN38HeknmezoiO5f3AE&_nc_zt=23&_nc_ht=scontent.famm10-1.fna&_nc_gid=2T3Cz4H9c1z31-EnzfE9mA&oh=00_AfSyb-qUgL-jRCVBx48_OJJeIbEZJdj48S5J-_u70fh7_w&oe=687B7184",
    phone1: "0776342240",
    phone2: "0776153357",
    whatsapp: "https://wa.link/wxmlue",
    width: 75
  },
  header: {
    background: "https://scontent.famm2-3.fna.fbcdn.net/v/t39.30808-6/476406405_630805916472322_2308860158059805573_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=WHL-qVl-egQQ7kNvgHSKohC&_nc_oc=AdnFoK3XOwPt5ZZBjPyw3lqPQD7Rj-s_3iepR8F2HWhbtKQ1h9ezFP-PqjPiPHHkcb0&_nc_zt=23&_nc_ht=scontent.famm2-3.fna&_nc_gid=EYeSetJ_EQfMLlNsoQVVLQ&oh=00_AYGZuN-hFbxU3JY7dUfKzGnFkf9NsYpl62yEwTbpM5tcng&oe=67EE2ED5",
    height: 75,
    logo: "https://scontent.famm10-1.fna.fbcdn.net/v/t39.30808-6/493669213_709780695241510_2056210301092640393_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=hNzJn5cfIlcQ7kNvwGmDGOA&_nc_oc=AdlPLoGMtGSC9H4VHA8IC34EFsU7w47kiTW2t7KUvjKondzEKN38HeknmezoiO5f3AE&_nc_zt=23&_nc_ht=scontent.famm10-1.fna&_nc_gid=2T3Cz4H9c1z31-EnzfE9mA&oh=00_AfSyb-qUgL-jRCVBx48_OJJeIbEZJdj48S5J-_u70fh7_w&oe=687B7184",
    width: 75
  },
  homeImage: "https://res.cloudinary.com/prod/image/upload/e_gen_background_replace:prompt_Minimalist%20background%20with%20a%20soft%20pastel%20gradient%20even%20lighting/me/gen-bgr-object-1",
  messages: {
    "-OMZ1uHmwR6OWG1eFDPb": { "message": "dsfsdfsdf", "name": "fdfs", "phone": "563456", "timestamp": 1743287723364 },
    "-ONR6F054AYII9_MxS4r": { "message": "رررررر", "name": "رررررر", "phone": "123456", "timestamp": 1744228385030 },
    "-OV6Cu9okdw9ou_RMgdC": { "message": "اهلا وسهلا", "name": "Qorbak", "phone": "+962772419449", "timestamp": 1752467743600 }
  },
  orders: {
    "-ONR6c7wy2okvEMYArfm": {
      "city": "222", "deliveryMethod": "delivery", "fullName": "ووو", "landmark": "222", "phoneNumber": "123456",
      "products": [
        { "condition": "جديد", "description": "Processor : Core I5 -8350U\nMemory :16 GB", "id": "-OLvmhGaCg6m_BTZYeQA", "image": "https://th.bing.com/th/id/R.10d1622367b1a60529d10492a4e69643?rik=6Cgofqx0XQUPYA&pid=ImgRaw&r=0", "name": "Lenovo", "price": "179" },
        { "condition": "جديد", "description": "sdfsfdsdfsfd", "id": "-OLztMiqWXEYw37RlJLN", "image": "https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770_1280.png", "name": "sjkdfhksjdfhksj", "price": "20" }
      ],
      "timestamp": 1744228483836
    },
    "-OV6COtlEZWZfcblrgB0": {
      "city": "", "deliveryMethod": "pickup", "fullName": "Abdalsamad Shatti",
      "items": [
        { "category": "Laptops", "condition": "New", "description": "سينبتنمسيتبمنسيتبمنسيتبمنستب", "featured": false, "featured2": false, "id": "-OV6CA-rG5MSb6w243MI", "image": "data:image/jpeg;base64,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",
          "longDescription": "يبمنيستبنمسيتبمنسيتبمنسيتبمنسيتبمنسيتبمنسيتبمنسيتبمنسيتب",
          "name": "Qorbak",
          "price": 200,
          "quantity": 2,
          "slug": "qorbak",
          "timestamp": 1752467550476
        }
      ],
      "landmark": "",
      "phoneNumber": "0775580440",
      "timestamp": 1752467611466
    }
  },
  products: products,
  specialAds: {
    "adHeight": 500,
    "adPosition": "center",
    "adWidth": 500,
    "image": "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2hocHlzMGE2cHUzdHB6eWM3eWFxaHFucjBxaW5wczhlZzJscHljMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7yORCExjS87Jk10xSU/giphy.gif",
    "link": "https://www.google.com",
    "text": "خصم 30% بمناسبة عيد الفطر",
    "visible": true
  },
  users: users,
};

    