export const storeInfo = {
  name: 'Battle Real',
  tagline: 'Chúng tôi thiết kế — Sản xuất — Sắp mở bán',
  status: 'Đang chuẩn bị mở bán',
  comingSoonLabel: 'Sắp mở bán',
  description:
    'Chúng tôi đang hoàn thiện các mẫu xe tăng RC, xe đua RC và đồ chơi điện tử do đội ngũ Battle Real thiết kế. Website giới thiệu sản phẩm — giá và đặt hàng sẽ được công bố khi chính thức mở bán.',
  highlights: [
    { value: 'BR', label: 'Chúng tôi thiết kế' },
    { value: '12+', label: 'Mẫu độc quyền' },
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
      'Xe đua tốc độ cao, drift, FPV — khung gầm, động cơ và vỏ xe do chúng tôi thiết kế, không copy mẫu ngoài.',
    tag: 'Sắp mở bán',
  },
  {
    id: 'tank',
    icon: '🛡️',
    title: 'Xe Tăng RC',
    description:
      'Xe tăng mini tháp pháo xoay 360°, bắn đạn nước. Cơ cấu tháp pháo và hệ thống bắn do đội ngũ chúng tôi phát triển.',
    tag: 'Sắp mở bán',
  },
  {
    id: 'electronic',
    icon: '⚡',
    title: 'Đồ Chơi Điện Tử',
    description:
      'Robot điều khiển, xe biến hình, mạch điện tử tích hợp — board và firmware do chúng tôi thiết kế.',
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
    includes: ['Xe đua Battle Real R1', 'Pin + sạc LiPo', 'Tay cầm 2.4GHz', 'Bảo hành dự kiến'],
  },
  {
    id: 'tank-kit',
    name: 'Combo Xe Tăng Pro',
    unit: '1 xe + phụ kiện',
    badge: 'Dự kiến',
    description: 'Xe tăng do chúng tôi thiết kế với hệ thống bắn đạn nước, tháp pháo servo độc quyền.',
    includes: ['Xe tăng Battle Real T1', 'Bình nước + đạn', 'Pin sạc USB-C', 'Hướng dẫn tiếng Việt'],
    featured: true,
  },
  {
    id: 'dual',
    name: 'Combo Đôi Đấu',
    unit: '2 xe + sân mini',
    badge: 'Dự kiến',
    description: '2 xe (đua hoặc tăng) + sân đấu mini gập — do chúng tôi thiết kế cho chơi đối kháng tại nhà.',
    includes: ['2 xe Battle Real', 'Sân đấu mini gập', 'Pin dự phòng', 'Bảo hành dự kiến'],
  },
  {
    id: 'electronic-kit',
    name: 'Combo Điện Tử Khám Phá',
    unit: '3 sản phẩm',
    badge: 'Dự kiến',
    description: 'Bộ đồ chơi điện tử do chúng tôi thiết kế: robot mini, mạch LED và bộ lắp ráp cơ bản.',
    includes: ['Robot mini BR-Bot', 'Bộ mạch LED thử nghiệm', 'Hướng dẫn lắp ráp', 'Hỗ trợ kỹ thuật'],
  },
];

export const steps = [
  {
    step: '01',
    icon: '✏️',
    title: 'Chúng Tôi Thiết Kế',
    description:
      'Mỗi sản phẩm bắt đầu từ bản vẽ và mô hình 3D do đội ngũ Battle Real phát triển. Không mua thiết kế có sẵn, không OEM.',
  },
  {
    step: '02',
    icon: '🔧',
    title: 'Sản Xuất & Lắp Ráp',
    description:
      'Gia công khung, lắp mạch điện tử, lập trình firmware và kiểm tra chất lượng từng chiếc trước khi xuất xưởng.',
  },
  {
    step: '03',
    icon: '🚀',
    title: 'Sắp Mở Bán',
    description:
      'Đang hoàn thiện sản phẩm và chuẩn bị mở bán. Đăng ký để nhận thông báo khi có giá và ngày ra mắt.',
  },
];

export const features = [
  {
    icon: '🎨',
    title: 'Thiết Kế Bởi Battle Real',
    description: 'Từ ý tưởng, bản vẽ 3D, mạch điện tử đến vỏ xe — tất cả do đội ngũ chúng tôi phát triển.',
  },
  {
    icon: '🇻🇳',
    title: 'Sản Xuất Tại Việt Nam',
    description: 'Thiết kế và lắp ráp tại Việt Nam, kiểm soát chất lượng từng khâu trước khi đưa ra thị trường.',
  },
  {
    icon: '⚙️',
    title: 'Công Nghệ Riêng',
    description: 'Firmware, cơ cấu tháp pháo, hệ thống bắn và khung gầm — đều do chúng tôi nghiên cứu và phát triển.',
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
    name: 'Battle Real R1 — Xe Đua FPV',
    category: 'Xe Đua RC',
    description: 'Xe đua FPV 1080p, tốc độ 50km/h. Khung nhôm do chúng tôi thiết kế, động cơ brushless riêng.',
    icon: '🏎️',
    badge: 'BR Design',
  },
  {
    id: 2,
    name: 'Battle Real T1 — Xe Tăng',
    category: 'Xe Tăng RC',
    description: 'Xe tăng bắn đạn nước, tháp pháo servo 360°. Cơ cấu bắn và vỏ thép do team chúng tôi phát triển.',
    icon: '🛡️',
    badge: 'Độc quyền',
  },
  {
    id: 3,
    name: 'Battle Real D1 — Drift Racer',
    category: 'Xe Đua RC',
    description: 'Xe drift nhẹ, lốp chuyên dụng, khung gầm thấp do chúng tôi thiết kế cho người mới bắt đầu.',
    icon: '🏁',
    badge: 'BR Design',
  },
  {
    id: 4,
    name: 'Battle Real T2 — Xe Tăng Hạng Nặng',
    category: 'Xe Tăng RC',
    description: 'Bản nâng cấp với giáp dày, bình nước lớn, động cơ kép. Thiết kế riêng của Battle Real cho địa hình khó.',
    icon: '⚔️',
    badge: 'Mới',
  },
  {
    id: 5,
    name: 'BR-Bot Mini — Robot Điện Tử',
    category: 'Đồ Chơi Điện Tử',
    description: 'Robot mini điều khiển Bluetooth, mạch và firmware do chúng tôi viết. Lập trình được qua app.',
    icon: '🤖',
    badge: 'BR Design',
  },
  {
    id: 6,
    name: 'BR-Transform — Xe Biến Hình',
    category: 'Đồ Chơi Điện Tử',
    description: 'Xe biến hình thành robot, khớp nối và mạch điều khiển do đội ngũ chúng tôi thiết kế.',
    icon: '🔄',
    badge: 'Độc quyền',
  },
  {
    id: 7,
    name: 'Battle Real R2 — Xe Đua Pro',
    category: 'Xe Đua RC',
    description: 'Bản pro với carbon fiber, ESC tự tune, camera FPV 60fps. Dành cho tay đua nghiêm túc.',
    icon: '📹',
    badge: 'Pro',
  },
  {
    id: 8,
    name: 'BR-Circuit Kit — Bộ Mạch Thử Nghiệm',
    category: 'Đồ Chơi Điện Tử',
    description: 'Bộ mạch LED, cảm biến và module điều khiển do chúng tôi thiết kế — dành cho bé yêu công nghệ.',
    icon: '💡',
    badge: 'STEM',
  },
];
