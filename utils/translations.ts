export type Language = 'en' | 'zh' | 'ar';

export interface ProductDetailData {
  fullDesc: string;
  benefits: string[];
  ingredients: string;
  usage: string;
}

export const translations = {
  en: {
    nav: {
      heritage: "Heritage",
      expertise: "Expertise",
      collections: "Collections",
      partners: "Brands",
      contact: "How to Start",
      inquire: "Contact Us"
    },
    hero: {
      since: "Since 2004 • Yiwu, China",
      professional: "Professional Soap Manufacturer",
      title: "20 Years of",
      titleItalic: "Artisan Soap",
      desc: "Your premier OEM/ODM partner for global markets. Blending twenty years of artisan craftsmanship with agile manufacturing speed.",
      explore: "Explore Collections",
      request: "Request Catalog"
    },
    features: {
      speed: {
        title: "Yiwu Speed & Agility",
        desc: "Located in the heart of global trade, we offer unparalleled production turnaround times without compromising artisanal quality."
      },
      global: {
        title: "Global Expertise",
        desc: "Specialized formulations for Middle Eastern (Oud/Amber) and Latin American markets, understanding regional preferences intimately."
      },
      heritage: {
        title: "20 Years Heritage",
        desc: "Two decades of mastery in soap saponification, fragrance blending, and private label design excellence."
      },
      quality: {
        title: "Certified Quality",
        desc: "Rigorous quality control from raw material sourcing to final packaging."
      }
    },
    products: {
      subtitle: "Our Collections",
      title: "Curated Manufacturing",
      viewAll: "More",
      back: "Back to Collections",
      inquiry: "Inquiry",
      detailsTitle: "Product Details",
      ingredientsTitle: "Ingredients",
      usageTitle: "How to Use",
      aiDisclaimer: "Product images are AI-generated illustrations and do not represent actual company products.",
      items: [
        {
          id: "rice-milk",
          category: "Skin Lightening",
          title: "Rice Milk & Collagen",
          desc: "Authentic bagged rice soap. Enriched with Rice Milk and Collagen for deep moisturizing and skin lightening effects.",
          details: {
            fullDesc: "A timeless classic in Asian skincare, our Rice Milk & Collagen soap is formulated to gently brighten the complexion while providing intense hydration. The natural enzymes in rice milk help to exfoliate dead skin cells, revealing a smoother, more radiant glow.",
            benefits: ["Brightens and evens skin tone", "Provides deep, long-lasting moisture", "Rich in antioxidants and Vitamin E", "Safe for sensitive skin types"],
            ingredients: "Natural Rice Milk Extract, Hydrolyzed Collagen, Palm Oil, Coconut Oil, Vitamin E, Glycerin, Fragrance.",
            usage: "Lather with water and massage onto face and body. Leave for 1-2 minutes for maximum absorption of brightening agents. Rinse thoroughly."
          }
        },
        {
          id: "doctor-soap",
          category: "Dermatological",
          title: "Doctor Soap Professional",
          desc: "Medical-grade aesthetic with Silk Protein & Collagen. Rich cream lather designed for whitening and smoothing skin.",
          details: {
            fullDesc: "Developed for professional skincare lines, this soap features a sophisticated blend of Silk Protein and Collagen. It creates a dense, whipped-cream-like lather that cleanses without stripping the skin's natural barrier.",
            benefits: ["Professional-grade whitening formula", "Ultra-creamy texture for luxury feel", "Silk proteins for skin smoothing", "Promotes skin elasticity"],
            ingredients: "Hydrolyzed Silk Protein, Soluble Collagen, Shea Butter, Sodium Palmate, Aqua, Titanium Dioxide.",
            usage: "Apply the rich foam to damp skin. Gently massage in circular motions. Ideal for daily facial cleansing and body washing."
          }
        },
        {
          id: "usma-shampoo",
          category: "Natural Hair Care",
          title: "Usma & Arborvitae Bar",
          desc: "Enriched with Usma Grass & Arborvitae Leaf extracts. Balances scalp oil for lightweight volume.",
          details: {
            fullDesc: "A revolutionary solid shampoo bar blending ancient herbal wisdom with modern hair science. Usma Grass and Arborvitae Leaf are renowned for their scalp-revitalizing properties, encouraging healthy hair growth and oil balance.",
            benefits: ["Balances scalp sebum production", "Enhances natural hair volume", "Nourishes follicles for shine", "Eco-friendly zero-waste format"],
            ingredients: "Usma Grass Extract, Arborvitae Leaf Extract, Sodium Cocoyl Isethionate, Panthenol (Vitamin B5), Argan Oil.",
            usage: "Rub the bar directly onto wet hair or between hands to create lather. Massage into scalp. Rinse and repeat if necessary."
          }
        },
        {
          id: "snow-lotus",
          category: "Skin Whitening",
          title: "Snow Sensation Whitening Soap",
          desc: "Deep cleansing formula with snow lotus extract for a bright, translucent complexion.",
          details: {
            fullDesc: "Infused with the rare Snow Lotus extract from high altitudes, this soap targets pigmentation and dullness. It provides a 'snow-like' translucent finish to the skin by deeply cleansing impurities.",
            benefits: ["Targets dark spots and hyperpigmentation", "Cooling sensation on the skin", "Promotes a translucent skin tone", "Deep pore purification"],
            ingredients: "Snow Lotus Extract, Pearl Powder, Kojic Acid, Sodium Palmitate, Natural Essential Oils.",
            usage: "Use morning and night. For best results, use a foaming net to create a thick lather and leave on skin for 3 minutes before rinsing."
          }
        },
        {
          id: "pink-gold",
          category: "Luxury Skincare",
          title: "Pink Gold Whitening Soap",
          desc: "Infused with 24k gold flakes and pink rose essence for ultimate radiance and luxury.",
          details: {
            fullDesc: "The pinnacle of our luxury range. This bar combines the anti-inflammatory properties of 24k gold with the soothing and brightening effects of premium Pink Rose essence.",
            benefits: ["Luxurious 24k gold skin rejuvenation", "Elegant rose aromatherapy experience", "Intensive skin brightening", "Anti-aging properties"],
            ingredients: "24k Gold Foil, Rosa Rugosa Flower Extract, Sodium Hyaluronate, Coconut Oil, Rose Essential Oil.",
            usage: "Indulge in a warm bath. Massage the soap over the skin to enjoy the aroma and allow gold particles to interact with the skin surface."
          }
        },
        {
          id: "aha-pineapple",
          category: "AHA Brightening",
          title: "AHA Pineapple Soap",
          desc: "Natural fruit acids exfoliate gently, revealing smoother and glowing skin.",
          details: {
            fullDesc: "A refreshing fruit-acid based soap that utilizes the natural exfoliating power of Pineapple enzymes (Bromelain) and AHA. It effectively removes dead skin cells to reveal the fresh, glowing skin beneath.",
            benefits: ["Gentle chemical exfoliation", "Improves skin texture and smoothness", "Natural fruit enzymes for radiance", "Refreshing tropical scent"],
            ingredients: "Pineapple Fruit Extract, Glycolic Acid (AHA), Lactic Acid, Vitamin C, Papaya Extract.",
            usage: "Best used in the evening. Lather and apply to skin. Do not use on broken or irritated skin. Follow with sunscreen during the day."
          }
        },
        {
          id: "geisha-soap",
          category: "Traditional Beauty",
          title: "Geisha Porcelain Skin Soap",
          desc: "Inspired by ancient beauty rituals for a flawless, translucent porcelain complexion.",
          details: {
            fullDesc: "Inspired by traditional beauty secrets, this specialized soap aims to refine skin texture and promote a porcelain-like clarity. Using carefully selected botanical extracts, it helps minimize the appearance of pores and brighten the overall complexion.",
            benefits: ["Refines skin texture for a smooth finish", "Promotes a translucent porcelain glow", "Deeply purifies pores without drying", "Traditional brightening botanical blend"],
            ingredients: "Pearl Powder, Sakura Extract, Tsubaki Oil, Sodium Palmate, Rice Bran Extract, Glycerin.",
            usage: "Work into a rich lather. Massage onto face and neck in upward motions. Rinse with lukewarm water for best results."
          }
        }
      ]
    },
    partners: {
      title: "Brand Showcase",
      subtitle: ""
    },
    services: {
      title: "OEM & ODM Excellence",
      desc: "We streamline the path from concept to shelf. Whether you need a turnkey solution (ODM) or manufacturing to your exact specifications (OEM), our Yiwu-based facility is optimized for flexibility and speed.",
      steps: {
        formulation: { title: "Formulation", desc: "Custom scent profiling and ingredient selection." },
        design: { title: "Design", desc: "Packaging and mold design services." },
        production: { title: "Production", desc: "Manufacturing at scale." },
        logistics: { title: "Logistics", desc: "Global shipping and export documentation." }
      }
    },
    contact: {
      title: "Start Your Project",
      subtitle: "Connect with our production team directly via WeChat for immediate consultation.",
      step1: "1. Add WeChat",
      step1Desc: "Search for WeChat ID: jingjingcosmetics or scan our code to connect.",
      step2: "2. Remark 'Official Website'",
      step2Desc: "Include 'Official Website' in your request for priority processing.",
      step3: "3. Send Details & Photos",
      step3Desc: "Send your requirements and reference sample photos to our manager.",
      downloadBtn: "Copy WeChat ID",
      emailUs: "Email: jingjingcosmetics@gmail.com"
    },
    footer: {
      headquarters: "Headquarters",
      contact: "Contact",
      desc: "Premier OEM/ODM Soap Manufacturer. Bringing 20 years of Yiwu craftsmanship to the world.",
      address: "Shop 26766, 3rd Floor, District 3\nInternational Trade City, Yiwu",
      rights: "JingJing Cosmetics. All Rights Reserved."
    }
  },
  zh: {
    nav: {
      heritage: "品牌传承",
      expertise: "专业技术",
      collections: "产品系列",
      partners: "品牌展示",
      contact: "开启项目",
      inquire: "联系我们"
    },
    hero: {
      since: "始于2004 • 中国义乌",
      professional: "专业香皂制造商",
      title: "菁静制皂",
      titleItalic: "二十载匠心",
      desc: "菁静化妆品：全球领先的OEM/ODM合作伙伴。融合20年匠心工艺与义乌制造速度，为您的品牌注入纯净能量。",
      explore: "浏览产品",
      request: "索取画册"
    },
    features: {
      speed: {
        title: "义乌速度",
        desc: "坐落于全球贸易中心，我们提供无与伦比的生产周转速度，同时保持工匠级品质。"
      },
      global: {
        title: "全球视野",
        desc: "专为各国市场定制的配方，深入了解区域市场偏好。"
      },
      heritage: {
        title: "20年传承",
        desc: "20年专注皂化工艺、香氛调配及自有品牌设计，成就卓越品质。"
      },
      quality: {
        title: "品质认证",
        desc: "从原料采购到成品包装，执行严格的质量控制。"
      }
    },
    products: {
      subtitle: "产品系列",
      title: "精选制造",
      viewAll: "更多",
      back: "返回系列",
      inquiry: "咨询",
      detailsTitle: "产品详情",
      ingredientsTitle: "成分说明",
      usageTitle: "使用方法",
      aiDisclaimer: "产品图片为ai生成示意图，不代表我司产品",
      items: [
        {
          id: "rice-milk",
          category: "美白滋润",
          title: "袋装大米皂",
          desc: "核心成分：大米浆与胶原蛋白。具有卓越的美白提亮与滋润功效。",
          details: {
            fullDesc: "亚洲护肤的经典之作。我们的袋装大米胶原蛋白皂专为温和提亮肤色而设计，同时提供深度补水。大米浆中的天然酶有助于代谢老旧角质，焕发肌肤自然光泽。",
            benefits: ["提亮并匀净肤色", "提供长效深度滋润", "富含抗氧化剂和维生素E", "温和配方，适合敏感肌"],
            ingredients: "天然大米提取物、水解胶原蛋白、棕榈油、椰子油、维生素E、甘油。",
            usage: "用水揉搓出泡沫，按摩脸部和身体。建议停留1-2分钟以充分吸收美白成分，然后用清水冲洗干净。"
          }
        },
        {
          id: "doctor-soap",
          category: "医学护肤",
          title: "Doctor Soap 医生皂",
          desc: "专业医学背书。蕴含丝蛋白提取物与胶原蛋白，丰盈霜感质地。",
          details: {
            fullDesc: "为专业护肤线开发。该产品融合了丝蛋白和胶原蛋白，能产生如鲜奶油般细密的泡沫，在深层清洁的同时保护肌肤天然屏障。",
            benefits: ["专业级美白配方", "霜状细腻泡沫，肤感极佳", "蚕丝蛋白令肌肤丝滑", "提升肌肤弹性"],
            ingredients: "水解丝蛋白、可溶性胶原蛋白、乳木果油、棕榈油酸钠、水、二氧化钛。",
            usage: "将丰盈泡沫涂抹于湿润肌肤，轻柔打圈按摩。适合每日洁面及身体洗护。"
          }
        },
        {
          id: "usma-shampoo",
          category: "天然洗护",
          title: "乌斯曼草侧柏叶洗发皂",
          desc: "蕴含乌斯曼草与侧柏叶等天然植萃。精准调节头皮水油平衡。",
          details: {
            fullDesc: "革命性的固态洗发皂，结合了传统草本智慧与现代洗护科学。乌斯曼草和侧柏叶提取物以焕活头皮著称，促进头发健康生长，调节油脂分泌。",
            benefits: ["平衡头皮油脂分泌", "增加发根支撑力，蓬松自然", "滋养毛囊，令发丝亮泽", "环保零浪费设计"],
            ingredients: "乌斯曼草提取物、侧柏叶提取物、椰油酰羟乙磺酸钠、泛醇(VB5)、阿甘油。",
            usage: "直接在湿发上揉搓或在手中揉搓出泡。按摩头皮后冲洗干净，必要时可重复一次。"
          }
        },
        {
          id: "snow-lotus",
          category: "美白护肤",
          title: "雪感焕白皂",
          desc: "蕴含雪莲花萃取精华，深层洁净，令肌肤如雪般剔透亮白。",
          details: {
            fullDesc: "萃取高海拔稀有雪莲精华，针对色素沉着和暗暗沉。通过深层净化毛孔杂质，赋予肌肤如初雪般的通透感。",
            benefits: ["针对色斑与色素沉着", "洗感清爽凉润", "提升肌肤通透度", "深层净化毛孔"],
            ingredients: "雪莲花提取物、珍珠粉、曲酸、棕榈酸钠、天然植物精油。",
            usage: "早晚使用。配合起泡网使用效果更佳，将泡沫敷在脸上3分钟后洗去，效果更显著。"
          }
        },
        {
          id: "pink-gold",
          category: "奢华护肤",
          title: "粉金焕白皂",
          desc: "融入24K金箔与粉玫瑰精华，带来极致奢华的焕白体验。",
          details: {
            fullDesc: "我们奢华系列的巅峰之作。结合了24K金箔的活肤特性与优质粉玫瑰精华的舒缓亮白功效，带来身心愉悦的洗护仪式。",
            benefits: ["24K金箔焕活肌肤", "高雅玫瑰芳香疗法", "强效美白提亮", "赋活抗衰"],
            ingredients: "24K金箔、红粉玫瑰花提取物、透明质酸钠、椰子油、玫瑰精油。",
            usage: "在温水浴中使用，按摩全身，享受芳香的同时让金箔微粒与肌肤充分接触。"
          }
        },
        {
          id: "aha-pineapple",
          category: "果酸焕肤",
          title: "AHA菠萝皂",
          desc: "天然果酸温和去角质，改善暗沉，重现肌肤光泽。",
          details: {
            fullDesc: "清新的果酸洗护皂，利用菠萝酶（蛋白酶）和AHA的天然剥脱力。有效去除老旧角质，展现下方鲜嫩、有光泽的肌肤。",
            benefits: ["温和化学剥脱", "改善肌肤纹理与平滑度", "天然酵素提亮", "清新热带果香"],
            ingredients: "菠萝果提取物、甘醇酸(AHA)、乳酸、维生素C、木瓜提取物。",
            usage: "建议晚间使用。揉搓出泡后涂抹，请勿用于受损或过敏肌肤。日间使用请配合防晒。"
          }
        },
        {
          id: "geisha-soap",
          category: "传统美肤",
          title: "艺伎瓷肌皂",
          desc: "灵感源自传统美肤仪式，打造如瓷般无瑕通透的瓷肌感。",
          details: {
            fullDesc: "受传统美肤智慧启发，这款专业香皂旨在细致肌肤纹理，提升肌肤如陶瓷般的净透感。选用精选植萃成分，帮助缩小毛孔并显著提亮肤色。",
            benefits: ["细致肌肤纹理，展现丝滑触感", "提亮肤色，展现如瓷般净透光泽", "深层净化毛孔而不干燥", "传统植萃亮肤配方"],
            ingredients: "珍珠粉、樱花提取物、山茶花油、棕榈酸钠、米糠提取物、甘油。",
            usage: "揉搓出丰盈泡沫，以向上打圈的方式按摩面部和颈部，随后用温水冲洗干净。"
          }
        }
      ]
    },
    partners: {
      title: "品牌展示",
      subtitle: ""
    },
    services: {
      title: "OEM & ODM 卓越服务",
      desc: "我们简化从概念到上架的流程。无论您需要一站式解决方案（ODM）还是按需定制（OEM），我们在义乌的工厂都能提供极致的灵活性与速度。",
      steps: {
        formulation: { title: "配方研发", desc: "定制香型分析与成分筛选。" },
        design: { title: "设计服务", desc: "包装设计与模具开发服务。" },
        production: { title: "规模生产", desc: "自有工厂大规模生产能力。" },
        logistics: { title: "物流出口", desc: "全球运输与出口单证处理。" }
      }
    },
    contact: {
      title: "开启项目",
      subtitle: "直接通过微信联系我们的生产团队，获取即时报价与建议。",
      step1: "1. 添加微信",
      step1Desc: "扫描二维码或搜索微信号 jingjingcosmetics 添加我们的商务经理。",
      step2: "2. 备注为“官网”",
      step2Desc: "申请好友时请务必备注“来自官网”，以便我们优先处理您的需求。",
      step3: "3. 发送需求与图片",
      step3Desc: "发送您的具体定制需求以及参考样品的实拍图片。",
      downloadBtn: "复制微信号码",
      emailUs: "邮箱: jingjingcosmetics@gmail.com"
    },
    footer: {
      headquarters: "总部地址",
      contact: "联系方式",
      desc: "菁静化妆品：首选OEM/ODM香皂制造商。将20年义乌匠心带向世界。",
      address: "义乌市国际商贸城\n三区三楼26766",
      rights: "菁静化妆品 JingJing Cosmetics. 版权所有."
    }
  },
  ar: {
    nav: {
      heritage: "التراث",
      expertise: "الخبرة",
      collections: "المجموعات",
      partners: "العلامات التجارية",
      contact: "كيف تبدأ",
      inquire: "اتصل بنا"
    },
    hero: {
      since: "منذ عام ٢٠٠٤ • ييوو، الصين",
      professional: "مصنع صابون محترف",
      title: "٢٠ عاماً من",
      titleItalic: "صناعة الصابون",
      desc: "شريكك الأول في تصنيع المعدات الأصلية (OEM/ODM) للأسواق العالمية. نمزج بين عشرين عاماً من الحرفية وسرعة التصنيع.",
      explore: "استكشف المجموعات",
      request: "اطلب الكتالوج"
    },
    features: {
      speed: {
        title: "سرعة ومرونة ييوو",
        desc: "نقع في قلب التجارة العالمية، ونقدم أوقات تسليم إنتاج لا مثيل لها دون المساومة على الجودة الحرفية."
      },
      global: {
        title: "خبرة عالمية",
        desc: "تركيبات متخصصة لأسواق الشرق الأوسط (العود/العنبر) وأمريكا اللاتينية، مع فهم عميق للتفضيلات الإقليمية."
      },
      heritage: {
        title: "٢٠ عاماً من التراث",
        desc: "عقدين من الإتقان في تصنيع الصابون، وخلط العطور، وتميز تصميم العلامات التجارية الخاصة."
      },
      quality: {
        title: "جودة معتمدة",
        desc: "مراقبة جودة صارمة من مصادر المواد الخام إلى التعبئة النهائية."
      }
    },
    products: {
      subtitle: "مجموعاتنا",
      title: "تصنيع متقن",
      viewAll: "المزيد",
      back: "العودة إلى المجموعات",
      inquiry: "طلب",
      detailsTitle: "تفاصيل المنتج",
      ingredientsTitle: "المكونات",
      usageTitle: "طريقة الاستخدام",
      aiDisclaimer: "صور المنتجات هي رسوم توضيحية تم إنشاؤها بواسطة الذكاء الاصطناعي ولا تمثل منتجات الشركة الفعلية.",
      items: [
        {
          id: "rice-milk",
          category: "تفتيح البشرة",
          title: "صابون حليب الأرز",
          desc: "حليب الأرز والكولاجين. لتفتيح البشرة وترطيبها بعمق.",
          details: {
            fullDesc: "كلاسيكية خالدة في العناية بالبشرة الآسيوية، تم تركيب صابون حليب الأرز والكولاجين لتفتيح البشرة بلطف مع توفير ترطيب مكثف. تساعد الإنزيمات الطبيعية في حليب الأرز على تقشير خلايا الجلد الميتة.",
            benefits: ["يفتح ويوحد لون البشرة", "يوفر ترطيباً عميقاً وطويل الأمد", "غني بمضادات الأكسدة وفيتامين E", "آمن لأنواع البشرة الحساسة"],
            ingredients: "خلاصة حليب الأرز الطبيعي، كولاجين محلل، زيت النخيل، زيت جوز الهند، فيتامين E، جليسرين.",
            usage: "يرغى بالماء ويدلك على الوجه والجسم. يترك لمدة 1-2 دقيقة لامتصاص عوامل التفتيح، ثم يشطف جيداً."
          }
        },
        {
          id: "doctor-soap",
          category: "عناية طبية",
          title: "صابون الدكتورة",
          desc: "تركيبة طبية مع بروتين الحرير والكولاجين. رغوة كريمية غنية لتبييض وتنعيم البشرة.",
          details: {
            fullDesc: "تم تطويره لخطوط العناية بالبشرة المحترفة، ويتميز هذا الصابون بمزيج متطور من بروتين الحرير والكولاجين. يخلق رغوة كثيفة تشبه الكريمة المخفوقة.",
            benefits: ["تركيبة تبييض احترافية", "قوام كريمي فائق لتجربة فاخرة", "بروتينات الحرير لتنعيم البشرة", "يعزز مرونة الجلد"],
            ingredients: "بروتين الحرير المحلل، كولاجين قابل للذوبان، زبدة الشيا، بالميتات الصوديوم، ماء.",
            usage: "ضعي الرغوة الغنية على بشرة رطبة. دلكي بلطف بحركات دائرية. مثالي لتنظيف الوجه اليومي."
          }
        },
        {
          id: "usma-shampoo",
          category: "العناية بالشعر",
          title: "صابون شامبو عشبة الوسمة",
          desc: "غني بمستخلصات عشبة الوسمة وأوراق العفص. يوازن زيوت فروة الرأس.",
          details: {
            fullDesc: "لوح شامبو صلب ثوري يمزج بين الحكمة العشبية القديمة وعلم الشعر الحديث. تشتهر عشبة الوسمة وأوراق العفص بخصائصهما المنشطة لفروة الرأس.",
            benefits: ["يوازن إنتاج زيوت فروة الرأس", "يعزز حجم الشعر الطبيعي", "يغذي الجذور للمعان الشعر", "تنسيق صديق للبيئة بدون نفايات"],
            ingredients: "مستخلص عشبة الوسمة، مستخلص أوراق العفص، صوديوم كوكويل إيسيثيونات، بانثينول (فيتامين B5).",
            usage: "دلكي اللوح مباشرة على الشعر المبلل أو بين اليدين لعمل رغوة. دلكي فروة الرأس ثم اشطفي جيداً."
          }
        },
        {
          id: "snow-lotus",
          category: "تفتيح البشرة",
          title: "Snow Sensation Whitening Soap",
          desc: "تركيبة تنظيف عميق مع مستخلص زهرة الثلج لبشرة مشرقة وشفافة.",
          details: {
            fullDesc: "مشبع بمستخلص زهرة الثلج النادرة من المرتفعات العالية، يستهدف هذا الصابون التصبغات والبهتان. يمنح البشرة لمسة نهائية شفافة كالثلج.",
            benefits: ["يستهدف البقع الداكنة والتصبغات", "إحساس بالانتعاش على البشرة", "يعزز نضارة البشرة وشفافيتها", "تنقية عميقة للمسام"],
            ingredients: "مستخلص زهرة الثلج، مسحوق اللؤلؤ، حمض الكوجيك، بالميتات الصوديوم.",
            usage: "يستخدم صباحاً ومساءً. لأفضل النتائج، استخدمي شبكة الرغوة لعمل رغوة كثيفة واتركيها على البشرة لمدة 3 دقائق."
          }
        },
        {
          id: "pink-gold",
          category: "عناية فاخرة",
          title: "Pink Gold Whitening Soap",
          desc: "غني رقائق الذهب عيار 24 وجوهر الورد الوردي لإشراقة وفخامة فائقة.",
          details: {
            fullDesc: "قمة مجموعتنا الفاخرة. يجمع هذا اللوح بين خصائص الذهب عيار 24 المضادة للالتهابات وتأثيرات جوهر الورد الوردي المهدئة والمفتحة.",
            benefits: ["تجديد شباب البشرة بالذهب عيار 24", "تجربة علاج عطري أنيقة بالورد", "تفتيح مكثف للبشرة", "خصائص مضادة للشيخوخة"],
            ingredients: "رقائق ذهب عيار 24، مستخلص زهرة الورد، هيالورونات الصوديوم، زيت الورد الأساسي.",
            usage: "استمتعي بحمام دافئ. دلكي الصابون على البشرة للاستمتاع بالرائحة والسماح لجزيئات الذهب بالتفاعل مع الجلد."
          }
        },
        {
          id: "aha-pineapple",
          category: "تفتيح أحماض الفواكه",
          title: "AHA Pineapple Soap",
          desc: "أحماض الفواكه الطبيعية تقشر بلطف، لتكشف عن بشرة أكثر نعومة وتوهجاً.",
          details: {
            fullDesc: "صابون منعش يعتمد على أحماض الفواكه ويستخدم قوة التقشير الطبيعية لإنزيمات الأناناس (البروميلين) وAHA. يزيل خلايا الجلد الميتة بفعالية.",
            benefits: ["تقشير كيميائي لطيف", "يحسن ملمس ونعومة البشرة", "إنزيمات فاكهة طبيعية للإشراق", "رائحة استوائية منعشة"],
            ingredients: "مستخلص فاكهة الأناناس، حمض الجليكوليك (AHA)، حمض اللاكتيك، فيتامين C.",
            usage: "يفضل استخدامه في المساء. يرغى ويوضع على البشرة. لا يستخدم على الجلد المتهيج. اتبعيه بواقي شمس في النهار."
          }
        },
        {
          id: "geisha-soap",
          category: "جمال تقليدي",
          title: "صابون غيشا بورسلين",
          desc: "مستوحى من طقوس الجمال التقليدية للحصول على بشرة خالية من العيوب تشبه البورسلين.",
          details: {
            fullDesc: "مستوحى من أسرار الجمال التقليدية، يهدف هذا الصابون المتخصص إلى تحسين ملمس البشرة وتعزيز نقاء يشبه البورسلين. باستخدام مستخلصات نباتية مختارة بعناية، يساعد في تقليل مظهر المسام وتفتيح البشرة بشكل عام.",
            benefits: ["يحسن ملمس البشرة لمسة نهائية ناعمة", "يعزز توهج البورسلين الشفاف", "ينقي المسام بعمق دون تجفيف", "مزيج نباتي تقليدي للتفتيح"],
            ingredients: "مسحوق اللؤلؤ، مستخلص الساكورا، زيت التسوباكي، بالميتات الصوديوم، مستخلص نخالة الأرز.",
            usage: "يرغى للحصول على رغوة غنية. يدلك على الوجه والرقبة بحركات تصاعدية. يشطف بماء فاتر للحصول على أفضل النتائج."
          }
        }
      ]
    },
    partners: {
      title: "معرض العلامات التجارية",
      subtitle: ""
    },
    services: {
      title: "التميز في OEM & ODM",
      desc: "نمهد الطريق من الفكرة إلى الرف. سواء كنت بحاجة إلى حل جاهز (ODM) أو تصنيع بمواصفاتك الدقيقة (OEM)، فإن منشأتنا في ييوو مجهزة للمرونة والسرعة.",
      steps: {
        formulation: { title: "التركيب", desc: "تحديد ملامح الرائحة واختيار المكونات." },
        design: { title: "التصميم", desc: "خدمات تصميم العبوات والقوالب." },
        production: { title: "الإنتاج", desc: "تصنيع واسع النطاق." },
        logistics: { title: "اللوجستيات", desc: "الشحن العالمي وتوثيق التصدير." }
      }
    },
    contact: {
      title: "كيف تبدأ مشروعك",
      subtitle: "تواصل مع فريق الإنتاج لدينا مباشرة عبر WeChat للحصول على استشارة فورية.",
      step1: "١. إضافة WeChat",
      step1Desc: "ابحث عن معرف WeChat: jingjingcosmetics أو امسح الرمز للتواصل.",
      step2: "٢. ملاحظة 'الموقع الرسمي'",
      step2Desc: "يرجى كتابة 'الموقع الرسمي' في طلبك لضمان المعالجة ذات الأولوية.",
      step3: "٣. إرسال المتطلبات والصور",
      step3Desc: "أرسل تفاصيل طلبك وصور العينات المرجعية إلى مديرنا.",
      downloadBtn: "نسخ معرف ويشات",
      emailUs: "jingjingcosmetics@gmail.com :البريد الإلكتروني"
    },
    footer: {
      headquarters: "المقر الرئيسي",
      contact: "اتصل بنا",
      desc: "الشركة المصنعة الرائدة للصابون OEM/ODM. نجلب ٢٠ عاماً من حرفية ييوو إلى العالم.",
      address: "مدينة التجارة الدولية، ييوو\nالمنطقة ٣، الطابق الثالث، ٢٦٧٦٦",
      rights: "JingJing Cosmetics. جميع الحقوق محفوظة."
    }
  }
};