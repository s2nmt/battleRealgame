export const storeInfo = {
  name: 'Robovix Studio',
  tagline: 'Thiết kế — Chỉnh sửa — Hoàn thiện',
  status: 'Đang chuẩn bị mở bán',
  comingSoonLabel: 'Sắp mở bán',
  headline: 'Let\'s build',
  headlineAccent: 'something amazing',
  description:
    'Xe tăng RC, xe đua RC, robot và đồ chơi điện tử do Robovix Studio thiết kế, chỉnh sửa và hoàn thiện. Sắp mở bán — đăng ký để nhận tin sớm.',
  highlights: [
    { value: 'Robovix', label: 'Thiết kế & hoàn thiện' },
    { value: '12+', label: 'Mẫu đang phát triển' },
    { value: 'Sắp', label: 'Ra mắt' },
    { value: 'Đăng ký', label: 'Nhận tin sớm' },
  ],
};

export const categories = [
  {
    id: 'racing',
    icon: '🏎️',
    title: 'Xe Đua RC',
    description:
      'Xe đua tốc độ cao, drift, FPV — khung gầm, động cơ và vỏ xe do chúng tôi thiết kế, chỉnh sửa và hoàn thiện.',
    tag: 'Sắp mở bán',
  },
  {
    id: 'tank',
    icon: '🛡️',
    title: 'Xe Tăng RC',
    description:
      'Xe tăng mini tháp pháo xoay 360°, bắn đạn nước. Cơ cấu tháp pháo và hệ thống bắn do chúng tôi thiết kế, chỉnh sửa và hoàn thiện.',
    tag: 'Sắp mở bán',
  },
  {
    id: 'electronic',
    icon: '⚡',
    title: 'Đồ Chơi Điện Tử',
    description:
      'Robot điều khiển, xe biến hình, mạch điện tử tích hợp — board và firmware do chúng tôi thiết kế, chỉnh sửa và hoàn thiện.',
    tag: 'Sắp mở bán',
  },
];

export const bundles = [
  {
    id: 'racing-kit',
    name: 'Combo Xe Đua Starter',
    unit: '1 xe + phụ kiện',
    badge: 'Dự kiến',
    description: 'Xe đua RC do chúng tôi thiết kế, kèm pin LiPo, sạc nhanh và tay cầm 2.4GHz.',
    includes: ['Xe đua Robovix R1', 'Pin + sạc LiPo', 'Tay cầm 2.4GHz', 'Bảo hành dự kiến'],
  },
  {
    id: 'tank-kit',
    name: 'Combo Xe Tăng Pro',
    unit: '1 xe + phụ kiện',
    badge: 'Dự kiến',
    description: 'Xe tăng do chúng tôi thiết kế với hệ thống bắn đạn nước, tháp pháo servo độc quyền.',
    includes: ['Xe tăng Robovix T1', 'Bình nước + đạn', 'Pin sạc USB-C', 'Hướng dẫn tiếng Việt'],
    featured: true,
  },
  {
    id: 'dual',
    name: 'Combo Đôi Đấu',
    unit: '2 xe + sân mini',
    badge: 'Dự kiến',
    description: '2 xe (đua hoặc tăng) + sân đấu mini gập — do chúng tôi thiết kế cho chơi đối kháng tại nhà.',
    includes: ['2 xe Robovix', 'Sân đấu mini gập', 'Pin dự phòng', 'Bảo hành dự kiến'],
  },
  {
    id: 'electronic-kit',
    name: 'Combo Điện Tử Khám Phá',
    unit: '3 sản phẩm',
    badge: 'Dự kiến',
    description: 'Bộ đồ chơi điện tử do chúng tôi thiết kế: robot mini, mạch LED và bộ lắp ráp cơ bản.',
    includes: ['Robot mini Robovix-Bot', 'Bộ mạch LED thử nghiệm', 'Hướng dẫn lắp ráp', 'Hỗ trợ kỹ thuật'],
  },
];

export const steps = [
  {
    step: '01',
    icon: '✏️',
    title: 'Thiết Kế',
    description:
      'Hình thành ý tưởng, chỉnh sửa và hoàn thiện định hướng sản phẩm trước khi triển khai chi tiết.',
  },
  {
    step: '02',
    icon: '⚙️',
    title: 'Thiết Kế Cơ Khí',
    description:
      'Bản vẽ 3D, khung gầm, vỏ xe và cơ cấu chuyển động — thiết kế, chỉnh sửa cho từng sản phẩm.',
  },
  {
    step: '03',
    icon: 'pcb',
    title: 'Thiết Kế Mạch Điện',
    description:
      'Sơ đồ mạch, PCB, cảm biến và hệ thống nguồn — thiết kế, chỉnh sửa để chạy ổn định trên sản phẩm thật.',
  },
  {
    step: '04',
    icon: 'chip',
    title: 'Phát Triển Phần Mềm',
    description:
      'Firmware, điều khiển và ứng dụng — lập trình, chỉnh sửa và hoàn thiện để sản phẩm hoạt động đúng ý.',
  },
  {
    step: '05',
    icon: '🔧',
    title: 'Lắp Ráp',
    description:
      'Gia công khung, lắp mạch điện tử, nạp phần mềm và kiểm tra chất lượng từng chiếc trước khi xuất xưởng.',
  },
  {
    step: '06',
    icon: '🚀',
    title: 'Ra Mắt Sản Phẩm',
    description:
      'Hoàn thiện sản phẩm và chuẩn bị mở bán. Đăng ký để nhận thông báo khi có giá và ngày ra mắt.',
  },
];

export const features = [
  {
    icon: '🎨',
    title: 'Thiết Kế Bởi Robovix Studio',
    description:
      'Từ bản vẽ 3D, mạch điện tử đến vỏ xe — chúng tôi thiết kế, chỉnh sửa và hoàn thiện từng sản phẩm.',
  },
  {
    icon: 'vn-flag',
    title: 'Sản Xuất Tại Việt Nam',
    description: 'Thiết kế và lắp ráp tại Việt Nam, kiểm soát chất lượng từng khâu trước khi đưa ra thị trường.',
  },
  {
    icon: '⚙️',
    title: 'Công Nghệ Tùy Biến',
    description:
      'Firmware, cơ cấu tháp pháo, hệ thống bắn và khung gầm được thiết kế, chỉnh sửa cho từng sản phẩm.',
  },
  {
    icon: '🔔',
    title: 'Đăng Ký Nhận Tin',
    description: 'Chưa có giá chính thức — để lại thông tin để được ưu tiên khi mở bán và nhận ưu đãi early bird.',
  },
];

export const products = [
  {
    id: 1,
    name: 'Robovix Sherman — Xe Tăng Sherman M4',
    category: 'Xe Tăng RC',
    description:
      'Mô hình xe tăng Sherman M4 in 3D chi tiết, tháp pháo dài Firefly. Thiết kế, chỉnh sửa và hoàn thiện bởi Robovix Studio.',
    icon: '🛡️',
    badge: 'Mới',
    heroImage: '/products/tank_sherman/front_tank_no_background.png',
    images: [
      '/products/tank_sherman/front_tank.png',
      '/products/tank_sherman/right_tank.png',
    ],
  },
  {
    id: 2,
    name: 'Robovix Spider — Robot Nhện',
    category: 'Robot IoT',
    description:
      'Robot nhện đa khớp, khung cơ khí và mạch điều khiển do chúng tôi thiết kế, chỉnh sửa và hoàn thiện.',
    icon: '🕷️',
    badge: 'Mới',
    heroImage: '/products/spider/front_no_background.png',
    images: ['/products/spider/front.png'],
  },
  {
    id: 3,
    name: 'Robovix Qmini — Robot Mini',
    category: 'Robot IoT',
    description:
      'Robot 2 chân gọn, mặt LED và khung in 3D. Thiết kế, chỉnh sửa và hoàn thiện bởi Robovix Studio.',
    icon: '🤖',
    badge: 'Mới',
    images: ['/products/Qmini/Qmini.png'],
  },
  {
    id: 4,
    name: 'Robovix Duck Mini — Robot Mini',
    category: 'Robot IoT',
    description:
      'Robot mini 2 chân, khung in 3D. Thiết kế, chỉnh sửa và hoàn thiện bởi Robovix Studio.',
    icon: '🤖',
    badge: 'Mới',
    model: '/products/Duck_Mini_Robot/Open_Duck_Mini_v2.glb',
    images: ['/products/Duck_Mini_Robot/duckmini.png'],
  },

  // {
  //   id: 11,
  //   name: 'Robovix Duck Mini — Robot Mini',
  //   category: 'Robot IoT',
  //   description:
  //     'Robot mini 2 chân, đầu cảm biến và khung in 3D. Thiết kế, chỉnh sửa và hoàn thiện bởi Robovix Studio.',
  //   icon: '🤖',
  //   badge: 'Mới',
  //   images: ['/products/Duck_Mini_Robot/duck_mini_robot.png'],
  // },
  // {
  //   id: 12,
  //   name: 'Robovix Wheel-Leg — Robot Bánh Chân',
  //   category: 'Robot IoT',
  //   description:
  //     'Robot bánh-chân, khung carbon và mạch điều khiển lộ. Thiết kế, chỉnh sửa và hoàn thiện bởi Robovix Studio.',
  //   icon: '⚙️',
  //   badge: 'Mới',
  //   images: ['/products/wheel_leg_robot/RobotRender.png'],
  // },
];
