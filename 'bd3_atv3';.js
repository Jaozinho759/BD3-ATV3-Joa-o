const database = 'bd3_atv3';

const collection = 'bd3_atv3_produtos';

use(database);

/*db['bd3_atv3_produtos'].insertMany(
    [
        {
            "Nome do Produto": "Aspirador de Pó Vertical Mondial Turbo Cycle AP-36",
            "Valor do Produto": "R$ 259,90",
            "Quantidade em Estoque": 15,
            "Fabricante do Produto": "Mondial",
            "Categoria do Produto": "Eletrodomésticos / Limpeza",
            "Descrição do Produto": "Aspirador 2 em 1 com filtro HEPA, 1000W de potência, ideal para pisos, tapetes e carpetes."
        },
        {
            "Nome do Produto": "Mochila Executiva Dell Pro Slim",
            "Valor do Produto": "R$ 229,90",
            "Quantidade em Estoque": 35,
            "Fabricante do Produto": "Dell",
            "Categoria do Produto": "Acessórios / Mochilas",
            "Descrição do Produto": "Mochila resistente à água com compartimento acolchoado para notebook de até 15,6\", alça acolchoada e design minimalista."
        },
        {
            "Nome do Produto": "TV LED 50” 4K UHD LG ThinQ AI",
            "Valor do Produto": "R$ 2.599,00",
            "Quantidade em Estoque": 12,
            "Fabricante do Produto": "LG",
            "Categoria do Produto": "Eletrônicos / Televisores",
            "Descrição do Produto": "Smart TV com inteligência artificial, compatível com Alexa e Google Assistente, painel IPS e webOS."
        },
        {
            "Nome do Produto": "Mouse Gamer Redragon M908 Impact",
            "Valor do Produto": "R$ 189,90",
            "Quantidade em Estoque": 50,
            "Fabricante do Produto": "Redragon",
            "Categoria do Produto": "Informática / Periféricos",
            "Descrição do Produto": "Mouse com 12 botões programáveis, sensor de 12.400 DPI, retroiluminação RGB e design ergonômico."
        },
        {
            "Nome do Produto": "Liquidificador Arno Power Max 1000W",
            "Valor do Produto": "R$ 219,90",
            "Quantidade em Estoque": 22,
            "Fabricante do Produto": "Arno",
            "Categoria do Produto": "Eletroportáteis / Cozinha",
            "Descrição do Produto": "Copo resistente com 3,1L de capacidade, 15 velocidades, ideal para receitas do dia a dia com alta performance."
        },
        {
            "Nome do Produto": "Colchão Casal Ortobom Espuma D33",
            "Valor do Produto": "R$ 699,00",
            "Quantidade em Estoque": 8,
            "Fabricante do Produto": "Ortobom",
            "Categoria do Produto": "Móveis / Quarto",
            "Descrição do Produto": "Colchão com espuma de densidade D33, suporte ortopédico, revestimento em poliéster e selo INMETRO."
        },
        {
            "Nome do Produto": "Caixa de Som Bluetooth Sony SRS-XB13",
            "Valor do Produto": "R$ 349,90",
            "Quantidade em Estoque": 30,
            "Fabricante do Produto": "Sony",
            "Categoria do Produto": "Eletrônicos / Áudio",
            "Descrição do Produto": "Compacta, resistente à água (IP67), com Extra Bass, até 16 horas de bateria e conexão USB-C."
        },
        {
            "Nome do Produto": "Bicicleta Aro 29 Caloi Explorer Comp",
            "Valor do Produto": "R$ 3.199,00",
            "Quantidade em Estoque": 5,
            "Fabricante do Produto": "Caloi",
            "Categoria do Produto": "Esporte / Ciclismo",
            "Descrição do Produto": "Quadro de alumínio, suspensão com trava, freio a disco hidráulico, ideal para trilhas e passeios urbanos."
        },
        {
            "Nome do Produto": "Roteador TP-Link Archer AX23 Wi-Fi 6",
            "Valor do Produto": "R$ 279,90",
            "Quantidade em Estoque": 40,
            "Fabricante do Produto": "TP-Link",
            "Categoria do Produto": "Redes / Roteadores",
            "Descrição do Produto": "Roteador com tecnologia Wi-Fi 6, 1201 Mbps em 5GHz, controle dos pais, segurança WPA3 e fácil instalação."
        },
        {
            "Nome do Produto": "Base Líquida Maybelline Fit Me Matte",
            "Valor do Produto": "R$ 59,90",
            "Quantidade em Estoque": 100,
            "Fabricante do Produto": "Maybelline",
            "Categoria do Produto": "Beleza / Maquiagem",
            "Descrição do Produto": "Base com acabamento matte, cobertura média, ideal para pele mista a oleosa, disponível em diversos tons."
        },
        {
            "Nome do Produto": "Air Fryer Mondial Family Inox 4L",
            "Valor do Produto": "R$ 389,00",
            "Quantidade em Estoque": 27,
            "Fabricante do Produto": "Mondial",
            "Categoria do Produto": "Eletroportáteis / Cozinha",
            "Descrição do Produto": "Fritadeira elétrica sem óleo com capacidade de 4 litros, controle de temperatura e timer de 60 minutos."
        },
        {
            "Nome do Produto": "Relógio Masculino Casio Vintage A168WA",
            "Valor do Produto": "R$ 179,90",
            "Quantidade em Estoque": 44,
            "Fabricante do Produto": "Casio",
            "Categoria do Produto": "Acessórios / Relógios",
            "Descrição do Produto": "Relógio digital com iluminação LED, cronômetro, alarme diário e pulseira de aço inoxidável."
        },
        {
            "Nome do Produto": "Shampoo Elseve Hidra Hialurônico 400ml",
            "Valor do Produto": "R$ 19,90",
            "Quantidade em Estoque": 150,
            "Fabricante do Produto": "L'Oréal Paris",
            "Categoria do Produto": "Higiene Pessoal / Cabelos",
            "Descrição do Produto": "Shampoo com ácido hialurônico, preenche a fibra capilar com hidratação profunda, indicado para cabelos ressecados."
        },
        {
            "Nome do Produto": "Cadeira Gamer TGT Heron V2",
            "Valor do Produto": "R$ 1.199,00",
            "Quantidade em Estoque": 13,
            "Fabricante do Produto": "TGT",
            "Categoria do Produto": "Móveis / Cadeiras Gamer",
            "Descrição do Produto": "Cadeira ergonômica com ajuste de altura, encosto reclinável, apoio lombar e acabamento em couro sintético."
        },
        {
            "Nome do Produto": "Mesa Digitalizadora Wacom One",
            "Valor do Produto": "R$ 599,00",
            "Quantidade em Estoque": 9,
            "Fabricante do Produto": "Wacom",
            "Categoria do Produto": "Informática / Design",
            "Descrição do Produto": "Mesa digitalizadora com caneta sensível à pressão, ideal para ilustradores e profissionais criativos."
        },
        {
            "Nome do Produto": "Fogão 4 Bocas Atlas Mônaco Top Glass",
            "Valor do Produto": "R$ 1.199,00",
            "Quantidade em Estoque": 6,
            "Fabricante do Produto": "Atlas",
            "Categoria do Produto": "Eletrodomésticos / Cozinha",
            "Descrição do Produto": "Fogão com mesa de vidro temperado, acendimento automático, forno com visor amplo e puxador robusto."
        },
        {
            "Nome do Produto": "Teclado Mecânico Gamer Corsair K60 RGB Pro",
            "Valor do Produto": "R$ 479,90",
            "Quantidade em Estoque": 20,
            "Fabricante do Produto": "Corsair",
            "Categoria do Produto": "Informática / Periféricos",
            "Descrição do Produto": "Teclado com switches mecânicos CHERRY VIOLA, iluminação RGB, estrutura em alumínio e layout ABNT2."
        },
        {
            "Nome do Produto": "Óleo de Motor Mobil Super 5W30 1L",
            "Valor do Produto": "R$ 39,90",
            "Quantidade em Estoque": 80,
            "Fabricante do Produto": "Mobil",
            "Categoria do Produto": "Automotivo / Lubrificantes",
            "Descrição do Produto": "Óleo sintético para motores flex e gasolina, proteção contra o desgaste, indicado para diversas marcas de veículos."
        },
        {
            "Nome do Produto": "Creme Nivea Soft Hidratante 100ml",
            "Valor do Produto": "R$ 15,90",
            "Quantidade em Estoque": 200,
            "Fabricante do Produto": "Nivea",
            "Categoria do Produto": "Higiene Pessoal / Corpo",
            "Descrição do Produto": "Creme hidratante com rápida absorção, indicado para rosto, mãos e corpo, com vitamina E e óleo de jojoba."
        },
        {
            "Nome do Produto": "Suporte Articulado para TV ELG F400",
            "Valor do Produto": "R$ 129,00",
            "Quantidade em Estoque": 37,
            "Fabricante do Produto": "ELG",
            "Categoria do Produto": "Acessórios / Suportes",
            "Descrição do Produto": "Suporte articulado para TVs de 17” a 55”, suporta até 30kg, inclinação, rotação e ajuste de distância da parede."
        },
        {
            "Nome do Produto": "Travesseiro NASA Viscoelástico Duoflex",
            "Valor do Produto": "R$ 89,90",
            "Quantidade em Estoque": 38,
            "Fabricante do Produto": "Duoflex",
            "Categoria do Produto": "Cama / Travesseiros",
            "Descrição do Produto": "Travesseiro com espuma viscoelástica que se molda ao corpo, antialérgico e com capa removível lavável."
        },
        {
            "Nome do Produto": "Câmera Instax Mini 12 Fujifilm",
            "Valor do Produto": "R$ 479,90",
            "Quantidade em Estoque": 10,
            "Fabricante do Produto": "Fujifilm",
            "Categoria do Produto": "Fotografia / Câmeras Instantâneas",
            "Descrição do Produto": "Câmera instantânea com foco automático, design retrô, funcionamento com pilhas e uso de filmes Instax Mini."
        },
            {
                "Nome do Produto": "Smartphone Samsung Galaxy A52 128GB",
                "Valor do Produto": "R$ 1.799,00",
                "Quantidade em Estoque": 25,
                "Fabricante do Produto": "Samsung",
                "Categoria do Produto": "Eletrônicos / Smartphones",
                "Descrição do Produto": "Smartphone com tela Super AMOLED de 6,5'', 128GB de armazenamento, câmera quad de 64MP e bateria de 4500mAh."
            },
            {
                "Nome do Produto": "Cafeteira Elétrica Philips Walita 15 Cápsulas",
                "Valor do Produto": "R$ 249,90",
                "Quantidade em Estoque": 18,
                "Fabricante do Produto": "Philips Walita",
                "Categoria do Produto": "Eletrodomésticos / Cafeteiras",
                "Descrição do Produto": "Cafeteira com capacidade para 15 cápsulas, design moderno, e sistema de aquecimento rápido."
            },
            {
                "Nome do Produto": "Blender Philips Walita 350W",
                "Valor do Produto": "R$ 99,90",
                "Quantidade em Estoque": 50,
                "Fabricante do Produto": "Philips Walita",
                "Categoria do Produto": "Eletrodomésticos / Liquidificadores",
                "Descrição do Produto": "Blender com 350W de potência, copo plástico resistente de 1,5L e 2 velocidades para diferentes preparos."
            },
            {
                "Nome do Produto": "Tênis Nike Air Zoom Pegasus 38",
                "Valor do Produto": "R$ 599,90",
                "Quantidade em Estoque": 16,
                "Fabricante do Produto": "Nike",
                "Categoria do Produto": "Vestuário / Calçados",
                "Descrição do Produto": "Tênis com tecnologia Air Zoom, solado resistente e cabedal em mesh, ideal para corrida e atividades físicas."
            },
            {
                "Nome do Produto": "Impressora Multifuncional HP DeskJet 4130",
                "Valor do Produto": "R$ 369,00",
                "Quantidade em Estoque": 22,
                "Fabricante do Produto": "HP",
                "Categoria do Produto": "Informática / Impressoras",
                "Descrição do Produto": "Impressora multifuncional com impressão, cópia e digitalização, conectividade sem fio e fácil setup."
            },
            {
                "Nome do Produto": "Panela de Pressão Elétrica Oster 6L",
                "Valor do Produto": "R$ 329,00",
                "Quantidade em Estoque": 10,
                "Fabricante do Produto": "Oster",
                "Categoria do Produto": "Eletrodomésticos / Cozinha",
                "Descrição do Produto": "Panela elétrica de pressão com 6L de capacidade, 9 programas automáticos e timer de 24 horas."
            },
            {
                "Nome do Produto": "Cadeira de Escritório Kappesberg 102",
                "Valor do Produto": "R$ 289,90",
                "Quantidade em Estoque": 14,
                "Fabricante do Produto": "Kappesberg",
                "Categoria do Produto": "Móveis / Escritório",
                "Descrição do Produto": "Cadeira com ajuste de altura, encosto confortável e base em nylon resistente para uso prolongado."
            },
            {
                "Nome do Produto": "Tablet Samsung Galaxy Tab A7 32GB",
                "Valor do Produto": "R$ 1.099,00",
                "Quantidade em Estoque": 12,
                "Fabricante do Produto": "Samsung",
                "Categoria do Produto": "Eletrônicos / Tablets",
                "Descrição do Produto": "Tablet com tela de 10,4'', processador octa-core, 32GB de armazenamento e sistema Android 10."
            },
            {
                "Nome do Produto": "Carregador Portátil Anker PowerCore 10000",
                "Valor do Produto": "R$ 169,90",
                "Quantidade em Estoque": 55,
                "Fabricante do Produto": "Anker",
                "Categoria do Produto": "Eletrônicos / Acessórios",
                "Descrição do Produto": "Carregador portátil compacto com 10.000mAh, tecnologia de carga rápida e compatível com diversos dispositivos."
            },
            {
                "Nome do Produto": "Fone de Ouvido Bluetooth Sony WH-1000XM4",
                "Valor do Produto": "R$ 2.099,00",
                "Quantidade em Estoque": 10,
                "Fabricante do Produto": "Sony",
                "Categoria do Produto": "Eletrônicos / Áudio",
                "Descrição do Produto": "Fones de ouvido com cancelamento de ruído, até 30 horas de bateria e controle de toque para música e chamadas."
            },
            {
                "Nome do Produto": "Espremedor de Frutas Arno E-40",
                "Valor do Produto": "R$ 99,90",
                "Quantidade em Estoque": 30,
                "Fabricante do Produto": "Arno",
                "Categoria do Produto": "Eletrodomésticos / Cozinha",
                "Descrição do Produto": "Espremedor elétrico com base antiderrapante, copo de 1,5L e bico que evita gotejamento."
            },
            {
                "Nome do Produto": "Chaleira Elétrica Britânia 1,7L",
                "Valor do Produto": "R$ 89,90",
                "Quantidade em Estoque": 40,
                "Fabricante do Produto": "Britânia",
                "Categoria do Produto": "Eletrodomésticos / Cozinha",
                "Descrição do Produto": "Chaleira com capacidade de 1,7L, resistência oculta, desligamento automático e base com fio removível."
            },
            {
                "Nome do Produto": "Smartwatch Xiaomi Mi Band 6",
                "Valor do Produto": "R$ 399,00",
                "Quantidade em Estoque": 60,
                "Fabricante do Produto": "Xiaomi",
                "Categoria do Produto": "Tecnologia / Wearables",
                "Descrição do Produto": "Smartband com monitoramento de atividade física, sono e frequência cardíaca, tela AMOLED de 1,56\"."
            },
            {
                "Nome do Produto": "Fritadeira Elétrica Airfryer Philco 3,2L",
                "Valor do Produto": "R$ 239,90",
                "Quantidade em Estoque": 30,
                "Fabricante do Produto": "Philco",
                "Categoria do Produto": "Eletrodomésticos / Cozinha",
                "Descrição do Produto": "Fritadeira sem óleo com 3,2L de capacidade, timer e controle de temperatura ajustável."
            },
            {
                "Nome do Produto": "Sofá Retrátil 3 Lugares Suede",
                "Valor do Produto": "R$ 1.599,00",
                "Quantidade em Estoque": 8,
                "Fabricante do Produto": "Sofáflex",
                "Categoria do Produto": "Móveis / Sala de Estar",
                "Descrição do Produto": "Sofá com assento retrátil, reclinável e revestido em tecido suede, com estrutura de madeira e espuma de alta densidade."
            },
            {
                "Nome do Produto": "Câmera de Segurança Intelbras Mibo iM3",
                "Valor do Produto": "R$ 289,00",
                "Quantidade em Estoque": 15,
                "Fabricante do Produto": "Intelbras",
                "Categoria do Produto": "Segurança / Câmeras",
                "Descrição do Produto": "Câmera Wi-Fi com visão noturna, detecção de movimento, áudio bidirecional e gravação em nuvem."
            },
                {
                    "Nome do Produto": "Smartphone Samsung Galaxy A52 128GB",
                    "Valor do Produto": "R$ 1.799,00",
                    "Quantidade em Estoque": 25,
                    "Fabricante do Produto": "Samsung",
                    "Categoria do Produto": "Eletrônicos / Smartphones",
                    "Descrição do Produto": "Smartphone com tela Super AMOLED de 6,5'', 128GB de armazenamento, câmera quad de 64MP e bateria de 4500mAh."
                },
                {
                    "Nome do Produto": "Cafeteira Elétrica Philips Walita 15 Cápsulas",
                    "Valor do Produto": "R$ 249,90",
                    "Quantidade em Estoque": 18,
                    "Fabricante do Produto": "Philips Walita",
                    "Categoria do Produto": "Eletrodomésticos / Cafeteiras",
                    "Descrição do Produto": "Cafeteira com capacidade para 15 cápsulas, design moderno, e sistema de aquecimento rápido."
                },
                {
                    "Nome do Produto": "Blender Philips Walita 350W",
                    "Valor do Produto": "R$ 99,90",
                    "Quantidade em Estoque": 50,
                    "Fabricante do Produto": "Philips Walita",
                    "Categoria do Produto": "Eletrodomésticos / Liquidificadores",
                    "Descrição do Produto": "Blender com 350W de potência, copo plástico resistente de 1,5L e 2 velocidades para diferentes preparos."
                },
                {
                    "Nome do Produto": "Tênis Nike Air Zoom Pegasus 38",
                    "Valor do Produto": "R$ 599,90",
                    "Quantidade em Estoque": 16,
                    "Fabricante do Produto": "Nike",
                    "Categoria do Produto": "Vestuário / Calçados",
                    "Descrição do Produto": "Tênis com tecnologia Air Zoom, solado resistente e cabedal em mesh, ideal para corrida e atividades físicas."
                },
                {
                    "Nome do Produto": "Impressora Multifuncional HP DeskJet 4130",
                    "Valor do Produto": "R$ 369,00",
                    "Quantidade em Estoque": 22,
                    "Fabricante do Produto": "HP",
                    "Categoria do Produto": "Informática / Impressoras",
                    "Descrição do Produto": "Impressora multifuncional com impressão, cópia e digitalização, conectividade sem fio e fácil setup."
                },
                {
                    "Nome do Produto": "Panela de Pressão Elétrica Oster 6L",
                    "Valor do Produto": "R$ 329,00",
                    "Quantidade em Estoque": 10,
                    "Fabricante do Produto": "Oster",
                    "Categoria do Produto": "Eletrodomésticos / Cozinha",
                    "Descrição do Produto": "Panela elétrica de pressão com 6L de capacidade, 9 programas automáticos e timer de 24 horas."
                },
                {
                    "Nome do Produto": "Cadeira de Escritório Kappesberg 102",
                    "Valor do Produto": "R$ 289,90",
                    "Quantidade em Estoque": 14,
                    "Fabricante do Produto": "Kappesberg",
                    "Categoria do Produto": "Móveis / Escritório",
                    "Descrição do Produto": "Cadeira com ajuste de altura, encosto confortável e base em nylon resistente para uso prolongado."
                },
                {
                    "Nome do Produto": "Tablet Samsung Galaxy Tab A7 32GB",
                    "Valor do Produto": "R$ 1.099,00",
                    "Quantidade em Estoque": 12,
                    "Fabricante do Produto": "Samsung",
                    "Categoria do Produto": "Eletrônicos / Tablets",
                    "Descrição do Produto": "Tablet com tela de 10,4'', processador octa-core, 32GB de armazenamento e sistema Android 10."
                },
                {
                    "Nome do Produto": "Carregador Portátil Anker PowerCore 10000",
                    "Valor do Produto": "R$ 169,90",
                    "Quantidade em Estoque": 55,
                    "Fabricante do Produto": "Anker",
                    "Categoria do Produto": "Eletrônicos / Acessórios",
                    "Descrição do Produto": "Carregador portátil compacto com 10.000mAh, tecnologia de carga rápida e compatível com diversos dispositivos."
                },
                {
                    "Nome do Produto": "Fone de Ouvido Bluetooth Sony WH-1000XM4",
                    "Valor do Produto": "R$ 2.099,00",
                    "Quantidade em Estoque": 10,
                    "Fabricante do Produto": "Sony",
                    "Categoria do Produto": "Eletrônicos / Áudio",
                    "Descrição do Produto": "Fones de ouvido com cancelamento de ruído, até 30 horas de bateria e controle de toque para música e chamadas."
                },
                {
                    "Nome do Produto": "Espremedor de Frutas Arno E-40",
                    "Valor do Produto": "R$ 99,90",
                    "Quantidade em Estoque": 30,
                    "Fabricante do Produto": "Arno",
                    "Categoria do Produto": "Eletrodomésticos / Cozinha",
                    "Descrição do Produto": "Espremedor elétrico com base antiderrapante, copo de 1,5L e bico que evita gotejamento."
                },
                {
                    "Nome do Produto": "Chaleira Elétrica Britânia 1,7L",
                    "Valor do Produto": "R$ 89,90",
                    "Quantidade em Estoque": 40,
                    "Fabricante do Produto": "Britânia",
                    "Categoria do Produto": "Eletrodomésticos / Cozinha",
                    "Descrição do Produto": "Chaleira com capacidade de 1,7L, resistência oculta, desligamento automático e base com fio removível."
                },
                {
                    "Nome do Produto": "Smartwatch Xiaomi Mi Band 6",
                    "Valor do Produto": "R$ 399,00",
                    "Quantidade em Estoque": 60,
                    "Fabricante do Produto": "Xiaomi",
                    "Categoria do Produto": "Tecnologia / Wearables",
                    "Descrição do Produto": "Smartband com monitoramento de atividade física, sono e frequência cardíaca, tela AMOLED de 1,56\"."
                },
                {
                    "Nome do Produto": "Fritadeira Elétrica Airfryer Philco 3,2L",
                    "Valor do Produto": "R$ 239,90",
                    "Quantidade em Estoque": 30,
                    "Fabricante do Produto": "Philco",
                    "Categoria do Produto": "Eletrodomésticos / Cozinha",
                    "Descrição do Produto": "Fritadeira sem óleo com 3,2L de capacidade, timer e controle de temperatura ajustável."
                },
                {
                    "Nome do Produto": "Sofá Retrátil 3 Lugares Suede",
                    "Valor do Produto": "R$ 1.599,00",
                    "Quantidade em Estoque": 8,
                    "Fabricante do Produto": "Sofáflex",
                    "Categoria do Produto": "Móveis / Sala de Estar",
                    "Descrição do Produto": "Sofá com assento retrátil, reclinável e revestido em tecido suede, com estrutura de madeira e espuma de alta densidade."
                },
                {
                    "Nome do Produto": "Câmera de Segurança Intelbras Mibo iM3",
                    "Valor do Produto": "R$ 289,00",
                    "Quantidade em Estoque": 15,
                    "Fabricante do Produto": "Intelbras",
                    "Categoria do Produto": "Segurança / Câmeras",
                    "Descrição do Produto": "Câmera Wi-Fi com visão noturna, detecção de movimento, áudio bidirecional e gravação em nuvem."
                },
                {
                    "Nome do Produto": "Camiseta Masculina Adidas Performance",
                    "Valor do Produto": "R$ 79,90",
                    "Quantidade em Estoque": 100,
                    "Fabricante do Produto": "Adidas",
                    "Categoria do Produto": "Vestuário / Masculino",
                    "Descrição do Produto": "Camiseta de malha, ideal para prática de esportes, com logo Adidas no peito e material respirável."
                },
                {
                    "Nome do Produto": "Sofá Cama 2 Lugares Móveis Azov",
                    "Valor do Produto": "R$ 1.299,00",
                    "Quantidade em Estoque": 5,
                    "Fabricante do Produto": "Azov",
                    "Categoria do Produto": "Móveis / Sala de Estar",
                    "Descrição do Produto": "Sofá cama com mecanismo de conversão rápido, revestido em tecido veludo e estrutura reforçada."
                },
                {
                    "Nome do Produto": "Mesa de Jantar 6 Lugares Madeira",
                    "Valor do Produto": "R$ 899,00",
                    "Quantidade em Estoque": 7,
                    "Fabricante do Produto": "Madesa",
                    "Categoria do Produto": "Móveis / Sala de Jantar",
                    "Descrição do Produto": "Mesa com tampo de MDF e acabamento em madeira, 6 cadeiras inclusas com design contemporâneo."
                },
                {
                    "Nome do Produto": "Console PlayStation 5",
                    "Valor do Produto": "R$ 4.599,00",
                    "Quantidade em Estoque": 10,
                    "Fabricante do Produto": "Sony",
                    "Categoria do Produto": "Eletrônicos / Games",
                    "Descrição do Produto": "Console de última geração com 825GB de armazenamento, suporta jogos em 4K, com controle DualSense inovador e VRR."
                },
                {
                    "Nome do Produto": "Cafeteira Nespresso Vertuo Plus",
                    "Valor do Produto": "R$ 899,90",
                    "Quantidade em Estoque": 15,
                    "Fabricante do Produto": "Nespresso",
                    "Categoria do Produto": "Eletrodomésticos / Cafeteiras",
                    "Descrição do Produto": "Cafeteira automática que utiliza cápsulas Nespresso Vertuo, oferece diferentes tamanhos de café com um simples toque."
                },
                {
                    "Nome do Produto": "Fone de Ouvido Sony WH-XB700 Extra Bass",
                    "Valor do Produto": "R$ 699,90",
                    "Quantidade em Estoque": 18,
                    "Fabricante do Produto": "Sony",
                    "Categoria do Produto": "Eletrônicos / Áudio",
                    "Descrição do Produto": "Fones de ouvido com tecnologia Extra Bass, até 30 horas de bateria e compatibilidade com assistentes de voz."
                },
                {
                    "Nome do Produto": "Notebook Lenovo Ideapad 3i",
                    "Valor do Produto": "R$ 2.399,00",
                    "Quantidade em Estoque": 20,
                    "Fabricante do Produto": "Lenovo",
                    "Categoria do Produto": "Informática / Notebooks",
                    "Descrição do Produto": "Notebook com processador Intel Core i5, 8GB de RAM, 512GB SSD e tela de 15,6\" Full HD."
                },
                {
                    "Nome do Produto": "Cesta de Café da Manhã Gourmet",
                    "Valor do Produto": "R$ 159,90",
                    "Quantidade em Estoque": 50,
                    "Fabricante do Produto": "Delícias da Manhã",
                    "Categoria do Produto": "Alimentos / Presentes",
                    "Descrição do Produto": "Cesta com itens gourmet como pães artesanais, geleias, café premium, biscoitos e suco natural."
                },
                {
                    "Nome do Produto": "Almofada Decorativa Veludo Pink",
                    "Valor do Produto": "R$ 49,90",
                    "Quantidade em Estoque": 120,
                    "Fabricante do Produto": "Home Design",
                    "Categoria do Produto": "Decoração / Almofadas",
                    "Descrição do Produto": "Almofada de veludo rosa, com zíper e enchimento macio, ideal para decorar sofás ou camas."
                },
                {
                    "Nome do Produto": "Fritadeira Airfryer Mondial 3,2L",
                    "Valor do Produto": "R$ 259,00",
                    "Quantidade em Estoque": 35,
                    "Fabricante do Produto": "Mondial",
                    "Categoria do Produto": "Eletrodomésticos / Cozinha",
                    "Descrição do Produto": "Fritadeira sem óleo com 3,2L de capacidade, controle de temperatura e timer ajustável."
                },
                {
                    "Nome do Produto": "Conjunto de Panelas Tramontina 5 Peças",
                    "Valor do Produto": "R$ 299,00",
                    "Quantidade em Estoque": 22,
                    "Fabricante do Produto": "Tramontina",
                    "Categoria do Produto": "Eletrodomésticos / Cozinha",
                    "Descrição do Produto": "Conjunto de panelas em alumínio, com revestimento antiaderente, ideal para uso diário, resistente e durável."
                }
            ]) */

        

    
                   


