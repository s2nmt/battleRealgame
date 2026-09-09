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
  headline: 'Robotics & IoT',
  headlineAccent: 'Solutions',
  description: {
    vi: 'Robot, xe tăng RC và thiết bị IoT do Robovix thiết kế & sản xuất. Cung cấp ứng dụng và giải pháp IoT từ phần cứng đến phần mềm.',
    en: 'Robots, RC tanks, and IoT devices designed & built by Robovix. Applications and IoT solutions from hardware to software.',
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
    title: { vi: 'Xe Tăng RC', en: 'RC Tanks' },
  },
  {
    id: 'robot',
    title: { vi: 'Robot', en: 'Robots' },
  },
  {
    id: 'iot',
    title: { vi: 'Thiết Bị IoT', en: 'IoT Devices' },
  },
];

export const collections = [
  {
    id: 'tank',
    href: '#shop',
    image: '/products/tank_sherman/front_tank.png',
    title: { vi: 'Xe Tăng RC', en: 'RC Tanks' },
    description: {
      vi: 'Mô hình xe tăng chi tiết — thiết kế và hoàn thiện bởi Robovix.',
      en: 'Detailed tank models — designed and finished by Robovix.',
    },
  },
  {
    id: 'robot',
    href: '#shop',
    image: '/products/spider/front.png',
    title: { vi: 'Robot', en: 'Robots' },
    description: {
      vi: 'Robot đa khớp và mini — từ khung cơ khí đến mạch điều khiển.',
      en: 'Multi-joint and mini robots — from mechanics to control boards.',
    },
  },
  {
    id: 'iot',
    href: '#shop',
    image: '/products/mini_clock/mini_clock.png',
    title: { vi: 'Thiết Bị IoT', en: 'IoT Devices' },
    description: {
      vi: 'Thiết bị IoT thực tế — phần cứng và phần mềm đi kèm.',
      en: 'Practical IoT devices — hardware with matching software.',
    },
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
      en: 'IoT hardware solutions',
    },
    description: {
      vi: 'Cung cấp giải pháp phần cứng IoT: cơ khí, PCB và firmware — từ ý tưởng đến prototype hoặc series nhỏ.',
      en: 'IoT hardware solutions: mechanics, PCB, and firmware — from idea to prototype or small series.',
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
      vi: 'Platform IoT',
      en: 'IoT software solutions',
    },
    description: {
      vi: 'Cung cấp giải pháp phần mềm IoT: backend, API và hệ thống kết nối — triển khai theo nhu cầu dự án.',
      en: 'IoT software solutions: backend, APIs, and connected systems — delivered to your project needs.',
    },
    includes: {
      vi: ['Web app', 'Backend / API', 'Tích hợp hệ thống'],
      en: ['Web apps', 'Backend / API', 'System integration'],
    },
  },
];

export const products = [
  {
    id: 1,
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
    icon: '🛡️',
    badge: 'new',
    heroImage: '/products/tank_sherman/front_tank_no_background.png',
    images: [
      '/products/tank_sherman/front_tank.png',
      '/products/tank_sherman/right_tank.png',
    ],
  },
  {
    id: 2,
    name: {
      vi: 'Robovix Spider — Robot Nhện',
      en: 'Robovix Spider — Spider Robot',
    },
    category: { vi: 'Robot', en: 'Robots' },
    categoryId: 'robot',
    status: 'coming_soon',
    price: null,
    description: {
      vi: 'Robot nhện đa khớp, khung cơ khí và mạch điều khiển do chúng tôi thiết kế, chỉnh sửa và hoàn thiện.',
      en: 'Multi-joint spider robot with mechanical frame and control board designed, refined, and finished by us.',
    },
    icon: '🕷️',
    badge: 'new',
    heroImage: '/products/spider/front_no_background.png',
    images: ['/products/spider/front.png'],
  },
  {
    id: 3,
    name: {
      vi: 'Robovix Qmini — Robot Mini',
      en: 'Robovix Qmini — Mini Robot',
    },
    category: { vi: 'Robot', en: 'Robots' },
    categoryId: 'robot',
    status: 'coming_soon',
    price: null,
    description: {
      vi: 'Robot 2 chân gọn, mặt LED và khung in 3D. Thiết kế, chỉnh sửa và hoàn thiện bởi Robovix.',
      en: 'Compact biped robot with LED face and 3D-printed frame. Designed, refined, and finished by Robovix.',
    },
    icon: '🤖',
    badge: 'new',
    images: ['/products/Qmini/Qmini.png'],
  },
  {
    id: 4,
    name: {
      vi: 'Robovix Duck Mini — Robot Mini',
      en: 'Robovix Duck Mini — Mini Robot',
    },
    category: { vi: 'Robot', en: 'Robots' },
    categoryId: 'robot',
    status: 'coming_soon',
    price: null,
    description: {
      vi: 'Robot mini 2 chân, khung in 3D. Thiết kế, chỉnh sửa và hoàn thiện bởi Robovix.',
      en: 'Mini biped robot with a 3D-printed frame. Designed, refined, and finished by Robovix.',
    },
    icon: '🤖',
    badge: 'new',
    model: '/products/Duck_Mini_Robot/Open_Duck_Mini_v2.glb',
    images: ['/products/Duck_Mini_Robot/duckmini.png'],
  },
];
