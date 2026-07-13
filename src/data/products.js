export const storeInfo = {
  name: 'Battle Real',
  tagline: 'Tự thiết kế — Sản xuất — Phân phối',
  status: '100% tự thiết kế',
  description:
    'Chúng tôi tự thiết kế và sản xuất xe tăng RC, xe đua RC và đồ chơi điện tử — không bán hàng có sẵn, không đi OEM. Mỗi sản phẩm là ý tưởng riêng, được đội ngũ kỹ sư Việt Nam phát triển từ khung vẽ đến thành phẩm.',
  highlights: [
    { value: '100%', label: 'Tự thiết kế' },
    { value: '12+', label: 'Mẫu độc quyền' },
    { value: '48h', label: 'Giao hàng' },
    { value: '12', label: 'Tháng bảo hành' },
  ],
};

export const categories = [
  {
    id: 'racing',
    icon: '🏎️',
    title: 'Xe Đua RC',
    description:
      'Xe đua tốc độ cao, drift, FPV — thiết kế khung gầm, động cơ và vỏ xe riêng biệt, không copy mẫu ngoài.',
    tag: 'Tự thiết kế',
  },
  {
    id: 'tank',
    icon: '🛡️',
    title: 'Xe Tăng RC',
    description:
      'Xe tăng mini tháp pháo xoay 360°, bắn đạn nước. Cơ cấu tháp pháo và hệ thống bắn do đội ngũ tự phát triển.',
    tag: 'Độc quyền',
  },
  {
    id: 'electronic',
    icon: '⚡',
    title: 'Đồ Chơi Điện Tử',
    description:
      'Robot điều khiển, xe biến hình, mạch điện tử tích hợp — sản phẩm điện tử tự thiết kế board và firmware.',
    tag: 'Made in VN',
  },
];

export const bundles = [
  {
    id: 'racing-kit',
    name: 'Combo Xe Đua Starter',
    price: 2790000,
    unit: '1 xe + phụ kiện',
    badge: 'Tự thiết kế',
    description: 'Xe đua RC bản thiết kế riêng kèm pin LiPo, sạc nhanh và tay cầm 2.4GHz.',
    includes: ['Xe đua Battle Real R1', 'Pin + sạc LiPo', 'Tay cầm 2.4GHz', 'Bảo hành 12 tháng'],
  },
  {
    id: 'tank-kit',
    name: 'Combo Xe Tăng Pro',
    price: 3490000,
    unit: '1 xe + phụ kiện',
    badge: 'Bán chạy',
    description: 'Xe tăng tự thiết kế với hệ thống bắn đạn nước, tháp pháo servo độc quyền.',
    includes: ['Xe tăng Battle Real T1', 'Bình nước + đạn', 'Pin sạc USB-C', 'Hướng dẫn tiếng Việt'],
    featured: true,
  },
  {
    id: 'dual',
    name: 'Combo Đôi Đấu',
    price: 5490000,
    unit: '2 xe + sân mini',
    badge: 'Tiết kiệm',
    description: '2 xe (đua hoặc tăng) + sân đấu mini gập — thiết kế riêng cho chơi đối kháng tại nhà.',
    includes: ['2 xe tự thiết kế', 'Sân đấu mini gập', 'Pin dự phòng', 'Bảo hành 12 tháng'],
  },
  {
    id: 'electronic-kit',
    name: 'Combo Điện Tử Khám Phá',
    price: 1890000,
    unit: '3 sản phẩm',
    badge: 'Mới',
    description: 'Bộ đồ chơi điện tử tự thiết kế: robot mini, mạch LED và bộ lắp ráp cơ bản.',
    includes: ['Robot mini BR-Bot', 'Bộ mạch LED thử nghiệm', 'Hướng dẫn lắp ráp', 'Hỗ trợ kỹ thuật'],
  },
];

export const steps = [
  {
    step: '01',
    icon: '✏️',
    title: 'Tự Thiết Kế',
    description:
      'Mỗi sản phẩm bắt đầu từ bản vẽ và mô hình 3D nội bộ. Không mua thiết kế có sẵn, không OEM.',
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
    icon: '🚚',
    title: 'Giao Đến Tay Bạn',
    description:
      'Đóng gói cẩn thận, giao toàn quốc trong 48h. Mỗi sản phẩm kèm phiếu bảo hành và hỗ trợ kỹ thuật.',
  },
];

export const features = [
  {
    icon: '🎨',
    title: '100% Tự Thiết Kế',
    description: 'Từ ý tưởng, bản vẽ 3D, mạch điện tử đến vỏ xe — tất cả do đội ngũ Battle Real phát triển.',
  },
  {
    icon: '🇻🇳',
    title: 'Sản Xuất Tại Việt Nam',
    description: 'Thiết kế và lắp ráp tại Việt Nam, kiểm soát chất lượng từng khâu, hỗ trợ sửa chữa nhanh.',
  },
  {
    icon: '⚙️',
    title: 'Công Nghệ Riêng',
    description: 'Firmware, cơ cấu tháp pháo, hệ thống bắn và khung gầm — đều là giải pháp tự phát triển.',
  },
  {
    icon: '🔧',
    title: 'Bảo Hành & Hỗ Trợ',
    description: 'Bảo hành 12 tháng, thay linh kiện chính hãng Battle Real, tư vấn kỹ thuật miễn phí.',
  },
];

export const products = [
  {
    id: 1,
    name: 'Battle Real R1 — Xe Đua FPV',
    category: 'Xe Đua RC',
    price: 2490000,
    description: 'Xe đua FPV 1080p, tốc độ 50km/h. Khung nhôm tự thiết kế, động cơ brushless riêng.',
    icon: '🏎️',
    badge: 'Tự thiết kế',
  },
  {
    id: 2,
    name: 'Battle Real T1 — Xe Tăng',
    category: 'Xe Tăng RC',
    price: 3290000,
    description: 'Xe tăng bắn đạn nước, tháp pháo servo 360°. Cơ cấu bắn và vỏ thép do team tự phát triển.',
    icon: '🛡️',
    badge: 'Độc quyền',
  },
  {
    id: 3,
    name: 'Battle Real D1 — Drift Racer',
    category: 'Xe Đua RC',
    price: 1990000,
    description: 'Xe drift nhẹ, lốp chuyên dụng, khung gầm thấp tự thiết kế cho người mới bắt đầu.',
    icon: '🏁',
    badge: 'Tự thiết kế',
  },
  {
    id: 4,
    name: 'Battle Real T2 — Xe Tăng Hạng Nặng',
    category: 'Xe Tăng RC',
    price: 4290000,
    description: 'Bản nâng cấp với giáp dày, bình nước lớn, động cơ kép. Thiết kế riêng cho địa hình khó.',
    icon: '⚔️',
    badge: 'Mới',
  },
  {
    id: 5,
    name: 'BR-Bot Mini — Robot Điện Tử',
    category: 'Đồ Chơi Điện Tử',
    price: 890000,
    description: 'Robot mini điều khiển Bluetooth, mạch và firmware tự viết. Lập trình được qua app.',
    icon: '🤖',
    badge: 'Tự thiết kế',
  },
  {
    id: 6,
    name: 'BR-Transform — Xe Biến Hình',
    category: 'Đồ Chơi Điện Tử',
    price: 1590000,
    description: 'Xe biến hình thành robot, khớp nối và mạch điều khiển do đội ngũ tự thiết kế.',
    icon: '🔄',
    badge: 'Độc quyền',
  },
  {
    id: 7,
    name: 'Battle Real R2 — Xe Đua Pro',
    category: 'Xe Đua RC',
    price: 4590000,
    description: 'Bản pro với carbon fiber, ESC tự tune, camera FPV 60fps. Dành cho tay đua nghiêm túc.',
    icon: '📹',
    badge: 'Pro',
  },
  {
    id: 8,
    name: 'BR-Circuit Kit — Bộ Mạch Thử Nghiệm',
    category: 'Đồ Chơi Điện Tử',
    price: 590000,
    description: 'Bộ mạch LED, cảm biến và module điều khiển tự thiết kế — dành cho bé yêu công nghệ.',
    icon: '💡',
    badge: 'STEM',
  },
];
