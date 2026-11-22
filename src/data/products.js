export const storeInfo = {
  name: 'Robovix',
  tagline: 'Thế giới đồ chơi công nghệ',
  status: {
    vi: 'Đang chuẩn bị mở bán',
    en: 'Preparing to launch',
  },
  comingSoonLabel: {
    vi: 'Sắp mở bán',
    en: 'Coming soon',
  },
  headline: 'RC Tanks',
  headlineAccent: 'Autonomous Vehicles',
  description: {
    vi: 'Xe tăng RC và xe tự hành do Robovix thiết kế & sản xuất. Phát triển sản phẩm từ cơ khí, mạch điều khiển đến phần mềm vận hành.',
    en: 'RC tanks and autonomous vehicles designed & built by Robovix. Product development from mechanics and control boards to operating software.',
  },
  highlights: [
    {
      value: 'Robovix',
      label: { vi: 'Thiết kế & hoàn thiện', en: 'Design & finish' },
    },
    {
      value: '12+',
      label: { vi: 'Mẫu đang phát triển', en: 'Models in development' },
    },
    {
      value: { vi: 'Sắp', en: 'Soon' },
      label: { vi: 'Ra mắt', en: 'Launch' },
    },
    {
      value: { vi: 'Đăng ký', en: 'Sign up' },
      label: { vi: 'Nhận tin sớm', en: 'Get early updates' },
    },
  ],
};

export const categories = [
  {
    id: 'tank',
    image: '/products/tank_sherman/front_tank_no_background.png',
    title: { vi: 'Xe Tăng RC', en: 'RC Tanks' },
  },
  {
    id: 'autonomous',
    image: '/products/autonomous-research-rover.png',
    title: { vi: 'Xe Tự Hành', en: 'Autonomous Vehicles' },
  },
];

export const brandPoints = [
  {
    icon: '⚙️',
    title: { vi: 'Thiết Kế Cơ Khí', en: 'Mechanical Design' },
    description: {
      vi: 'Bản vẽ 3D, khung gầm và cơ cấu chuyển động — thiết kế, chỉnh sửa cho từng sản phẩm.',
      en: '3D drawings, chassis, and motion mechanisms — designed and refined for each product.',
    },
  },
  {
    icon: 'pcb',
    title: { vi: 'Thiết Kế Mạch Điện', en: 'Electronics Design' },
    description: {
      vi: 'PCB, cảm biến và hệ thống nguồn — thiết kế để chạy ổn định trên sản phẩm thật.',
      en: 'PCBs, sensors, and power systems — designed for reliable real-world products.',
    },
  },
  {
    icon: 'chip',
    title: { vi: 'Phát Triển Phần Mềm', en: 'Software Development' },
    description: {
      vi: 'Firmware, điều khiển và ứng dụng — lập trình và hoàn thiện cho từng mẫu.',
      en: 'Firmware, control systems, and apps — coded and finished for each model.',
    },
  },
  {
    icon: 'vn-flag',
    title: { vi: 'Sản Xuất Tại Việt Nam', en: 'Made in Vietnam' },
    description: {
      vi: 'Lắp ráp và kiểm soát chất lượng tại Việt Nam trước khi đưa ra thị trường.',
      en: 'Assembled and quality-checked in Vietnam before going to market.',
    },
  },
];

export const services = [
  {
    id: 'oem-odm',
    icon: '🏷️',
    title: {
      vi: 'OEM / ODM theo logo',
      en: 'OEM / ODM under your logo',
    },
    description: {
      vi: 'Gia công theo yêu cầu thương hiệu của bạn — từ chỉnh sửa mẫu có sẵn đến thiết kế ODM, gắn logo và đóng gói riêng.',
      en: 'Built for your brand — from customizing existing models to full ODM design, logo branding, and custom packaging.',
    },
    includes: {
      vi: ['Tùy biến vỏ & logo', 'Chỉnh sửa cơ khí / mạch', 'Sản xuất theo đơn hàng'],
      en: ['Custom housing & logo', 'Mechanical / PCB edits', 'Made-to-order production'],
    },
  },
  {
    id: 'outsource-hardware',
    icon: '⚙️',
    title: {
      vi: 'Giải pháp phần cứng',
      en: 'Vehicle hardware solutions',
    },
    description: {
      vi: 'Cung cấp giải pháp phần cứng xe tăng RC và xe tự hành: cơ khí, PCB và firmware — từ ý tưởng đến prototype hoặc series nhỏ.',
      en: 'Vehicle hardware solutions: mechanics, PCB, and firmware — from idea to prototype or small series.',
    },
    includes: {
      vi: ['Cơ khí / 3D', 'PCB & mạch điện', 'Firmware'],
      en: ['Mechanics / 3D', 'PCB & electronics', 'Firmware'],
    },
  },
  {
    id: 'outsource-software',
    icon: '💻',
    title: {
      vi: 'Phần mềm điều khiển & tự hành',
      en: 'Control & autonomy software',
    },
    description: {
      vi: 'Cung cấp giải pháp phần mềm điều khiển và tự hành: backend, API và hệ thống kết nối — triển khai theo nhu cầu dự án.',
      en: 'Control & autonomy software: backend, APIs, and connected systems — delivered to your project needs.',
    },
    includes: {
      vi: ['Web app', 'Backend / API', 'Tích hợp hệ thống'],
      en: ['Web apps', 'Backend / API', 'System integration'],
    },
  },
];

export const products = [
  {
    id: 7,
    diyType: 'camera',
    catalogGroup: 'accessories',
    model: 'RV1106 eMMC',
    name: {
      vi: 'Bộ điều khiển tích hợp camera RV1106 eMMC',
      en: 'RV1106 eMMC Controller with Integrated Camera',
    },
    category: { vi: 'Mạch R&D / DIY', en: 'R&D / DIY Boards' },
    categoryId: 'diy',
    status: 'coming_soon',
    price: null,
    description: {
      vi: 'Bộ điều khiển tích hợp camera cho xe DIY.',
      en: 'A controller with an integrated camera for DIY vehicles.',
    },
    article: {
      vi: [
        'RV1106 eMMC là bộ điều khiển tích hợp camera dành cho xe DIY. Đây là một lựa chọn cho người thích tự lắp ráp và muốn tìm hiểu cách đưa hình ảnh từ camera vào dự án xe mô hình.',
        'Bạn có thể bắt đầu bằng việc lên bố trí cho mạch và góc nhìn của camera trên khung xe. Khi thử nghiệm, hãy quan sát góc nhìn ở các vị trí lắp khác nhau để chọn vị trí phù hợp với mô hình của mình.',
      ],
      en: [
        'The RV1106 eMMC is a controller with an integrated camera for DIY vehicles. It gives makers a starting point for exploring how to use camera images in a model vehicle project.',
        'Start by planning where the board will sit and what the camera needs to see. During testing, compare the view from different mounting positions to find one that suits your model.',
      ],
    },
    icon: '📷',
    images: [
      '/products/RV1106_EMMC/rv1106_emmc.png',
    ],
  },
  {
    id: 8,
    diyType: 'camera',
    catalogGroup: 'accessories',
    model: 'RV1106 SPI',
    name: {
      vi: 'Bộ điều khiển tích hợp camera RV1106 SPI',
      en: 'RV1106 SPI Controller with Integrated Camera',
    },
    category: { vi: 'Mạch R&D / DIY', en: 'R&D / DIY Boards' },
    categoryId: 'diy',
    status: 'coming_soon',
    price: null,
    description: {
      vi: 'Bộ điều khiển tích hợp camera cho xe DIY.',
      en: 'A controller with an integrated camera for DIY vehicles.',
    },
    article: {
      vi: [
        'Phiên bản RV1106 SPI kết hợp bộ điều khiển và camera trên một mạch dành cho xe DIY. Mạch hướng đến các dự án mô hình nhỏ cần thử nghiệm với hình ảnh từ góc nhìn của xe.',
        'Một bài thử đơn giản là đặt xe trên bàn, bố trí vài vật thể trong tầm nhìn rồi quan sát hình ảnh khi thay đổi góc đặt camera hoặc ánh sáng. Qua đó, bạn có thể điều chỉnh vị trí lắp trước khi hoàn thiện khung xe.',
      ],
      en: [
        'The RV1106 SPI combines a controller and camera on one board for DIY vehicles. It is intended for small model projects that explore images from the vehicle’s point of view.',
        'For a simple bench experiment, place a few objects in view and see how the image changes with the camera angle or lighting. Use what you observe to refine the mounting position before finishing the chassis.',
      ],
    },
    icon: '📷',
    images: [
      '/products/RV1106_spi/rv1106_spi.png',
    ],
  },
  {
    id: 5,
    name: {
      vi: 'Robovix Rover — Xe Tự Hành Nghiên Cứu',
      en: 'Robovix Rover — Educational Autonomous Vehicle',
    },
    category: { vi: 'Xe Tự Hành', en: 'Autonomous Vehicles' },
    categoryId: 'autonomous',
    status: 'coming_soon',
    price: null,
    description: {
      vi: 'Ý tưởng xe tự hành dạng đồ chơi nghiên cứu, khung mở để khám phá mạch điều khiển, camera và cảm biến. Hình ảnh minh họa bằng AI.',
      en: 'An educational autonomous toy rover concept with an open chassis for exploring control boards, cameras, and sensors. AI-generated concept image.',
    },
    article: {
      vi: [
        'Robovix Rover là ý tưởng xe tự hành dạng đồ chơi phục vụ học tập và nghiên cứu. Thiết kế khung mở giúp người học hình dung cách bố trí mạch điều khiển, camera và cảm biến trên cùng một mô hình.',
        'Có thể dùng ý tưởng Rover để chia một bài học về xe tự hành thành ba phần: quan sát môi trường, xử lý thông tin và điều khiển chuyển động. Hình ảnh do AI tạo minh họa cho ý tưởng thiết kế.',
      ],
      en: [
        'Robovix Rover is an autonomous toy vehicle concept for learning and research. Its open chassis illustrates how a control board, camera, and sensors could be arranged on a single model.',
        'The Rover concept can structure a lesson around three parts of autonomous driving: sensing the surroundings, processing information, and controlling motion. The AI-generated image illustrates the design concept.',
      ],
    },
    images: ['/products/autonomous-research-rover.png'],
  },
  {
    id: 1,
    model: 'Robovix Sherman',
    heroDescription: {
      vi: 'Mô hình Sherman M4 in 3D với tháp pháo kiểu Firefly.',
      en: 'A 3D-printed M4 Sherman model with a Firefly-style turret.',
    },
    name: {
      vi: 'Robovix Sherman — Xe Tăng Sherman M4',
      en: 'Robovix Sherman — M4 Sherman Tank',
    },
    category: { vi: 'Xe Tăng RC', en: 'RC Tanks' },
    categoryId: 'tank',
    status: 'coming_soon',
    price: null,
    description: {
      vi: 'Mô hình xe tăng Sherman M4 in 3D chi tiết, tháp pháo dài Firefly. Thiết kế, chỉnh sửa và hoàn thiện bởi Robovix.',
      en: 'Detailed 3D-printed M4 Sherman tank model with a long Firefly turret. Designed, refined, and finished by Robovix.',
    },
    article: {
      vi: [
        'Robovix Sherman là mẫu xe tăng RC in 3D lấy cảm hứng từ Sherman M4, với tháp pháo kiểu Firefly và nòng dài. Robovix thiết kế, tinh chỉnh và hoàn thiện mẫu xe.',
        'Ảnh chính diện cho thấy cách thân xe và tháp pháo tạo nên dáng tổng thể. Ở góc nhìn bên hông, bạn có thể quan sát rõ hơn các bánh chịu tải và từng mắt xích của dải xích.',
      ],
      en: [
        'Robovix Sherman is a 3D-printed RC model inspired by the M4 Sherman, with a Firefly-style turret and long barrel. Robovix designed, refined, and finished the model.',
        'The front photo shows how the hull and turret shape the model’s silhouette. The side view gives a closer look at the road wheels and individual track links.',
      ],
    },
    icon: '🛡️',
    badge: 'new',
    heroImage: '/products/tank_sherman/front_tank_no_background.png',
    images: [
      '/products/tank_sherman/front_tank.png',
      '/products/tank_sherman/right_tank.png',
    ],
  },
];
