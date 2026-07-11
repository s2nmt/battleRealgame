export const storeInfo = {
  name: 'Battle Real',
  tagline: 'Xe điều khiển từ xa — Chất lượng thật, lái thật',
  status: 'Đang mở bán',
  description:
    'Chuyên bán xe điều khiển từ xa RC: xe đua tốc độ, xe tăng, xe chiến đấu. Hàng chính hãng, bảo hành rõ ràng, giao hàng toàn quốc và tư vấn chọn xe phù hợp từng nhu cầu.',
  highlights: [
    { value: '15+', label: 'Mẫu xe đang bán' },
    { value: '48h', label: 'Giao hàng nhanh' },
    { value: '12', label: 'Tháng bảo hành' },
    { value: 'FPV', label: 'Camera HD tích hợp' },
  ],
};

export const categories = [
  {
    id: 'racing',
    icon: '🏎️',
    title: 'Xe Đua RC',
    description:
      'Xe đua tốc độ cao, drift mượt, trang bị camera FPV. Phù hợp người mới lẫn tay đua có kinh nghiệm.',
    players: 'Từ 1.990.000đ',
  },
  {
    id: 'tank',
    icon: '🛡️',
    title: 'Xe Tăng RC',
    description:
      'Xe tăng mini tháp pháo xoay 360°, bắn đạn nước. Vui chơi ngoài trời, quà tặng cho trẻ em và người lớn.',
    players: 'Từ 2.490.000đ',
  },
  {
    id: 'shooter',
    icon: '🔫',
    title: 'Xe Chiến Đấu',
    description:
      'Xe bọc thép trang bị súng bắn bi, địa hình mạnh. Dành cho ai thích trải nghiệm chiến thuật và hành động.',
    players: 'Từ 2.290.000đ',
  },
];

export const bundles = [
  {
    id: 'starter',
    name: 'Combo Khởi Đầu',
    price: 2290000,
    duration: '1 xe + phụ kiện',
    badge: 'Người mới',
    description: 'Xe đua RC cơ bản kèm pin dự phòng, sạc nhanh và hướng dẫn sử dụng chi tiết.',
    includes: ['1 xe đua RC', 'Pin + sạc dự phòng', 'Tay cầi điều khiển', 'Hướng dẫn tiếng Việt'],
  },
  {
    id: 'family',
    name: 'Combo Gia Đình',
    price: 4990000,
    duration: '2 xe + phụ kiện',
    badge: 'Bán chạy',
    description: 'Hai xe đua RC để cả nhà cùng chơi. Tiết kiệm hơn mua lẻ, kèm đường đua mini.',
    includes: ['2 xe đua RC', 'Đường đua mini gập', 'Pin dự phòng x2', 'Bảo hành 12 tháng'],
    featured: true,
  },
  {
    id: 'pro',
    name: 'Combo Pro FPV',
    price: 6490000,
    duration: '1 xe cao cấp',
    badge: 'Cao cấp',
    description: 'Xe FPV 1080p, tốc độ cao, phụ kiện đầy đủ cho người chơi nghiêm túc.',
    includes: ['Xe FPV 1080p', 'Kính FPV', 'Pin LiPo cao cấp', 'Bảo hành 12 tháng'],
  },
  {
    id: 'gift',
    name: 'Combo Quà Tặng',
    price: 2790000,
    duration: '1 xe tăng + hộp quà',
    badge: 'Quà tặng',
    description: 'Xe tăng RC đóng hộp quà đẹp — lý tưởng cho sinh nhật, lễ tết và các dịp đặc biệt.',
    includes: ['Xe tăng RC', 'Hộp quà cao cấp', 'Thiệp chúc mừng', 'Giao hàng nhanh 48h'],
  },
];

export const steps = [
  {
    step: '01',
    title: 'Chọn Mẫu Xe',
    description: 'Xem danh mục xe đua, xe tăng hoặc xe chiến đấu. Mỗi sản phẩm có mô tả kỹ thuật rõ ràng.',
  },
  {
    step: '02',
    title: 'Tư Vấn & Đặt Hàng',
    description: 'Liên hệ qua form hoặc hotline. Nhân viên tư vấn mẫu phù hợp và xác nhận đơn hàng.',
  },
  {
    step: '03',
    title: 'Nhận Hàng & Chơi Ngay',
    description: 'Giao hàng toàn quốc trong 48h. Mở hộp, sạc pin và bắt đầu lái xe ngay tại nhà.',
  },
];

export const features = [
  {
    icon: '✅',
    title: 'Hàng Chính Hãng',
    description: 'Nguồn gốc rõ ràng, đầy đủ tem bảo hành và chứng từ mua hàng.',
  },
  {
    icon: '🔧',
    title: 'Bảo Hành 12 Tháng',
    description: 'Hỗ trợ sửa chữa, thay linh kiện và tư vấn kỹ thuật trong suốt thời gian bảo hành.',
  },
  {
    icon: '🚚',
    title: 'Giao Hàng Toàn Quốc',
    description: 'Đóng gói cẩn thận, giao nhanh 48h tại TP.HCM và 3–5 ngày các tỉnh thành khác.',
  },
  {
    icon: '💬',
    title: 'Tư Vấn Miễn Phí',
    description: 'Chưa biết chọn xe nào? Đội ngũ tư vấn giúp bạn chọn đúng mẫu theo ngân sách và nhu cầu.',
  },
];

export const vehicles = [
  {
    id: 1,
    name: 'RC Speed Demon X1',
    category: 'Xe Đua',
    price: 2490000,
    description: 'Xe đua RC FPV 1080p, tốc độ 45km/h. Pin LiPo, sạc nhanh và tay cầm đi kèm.',
    icon: '🏎️',
  },
  {
    id: 2,
    name: 'Battle Tank T-90 Mini',
    category: 'Xe Tăng',
    price: 3290000,
    description: 'Xe tăng bắn đạn nước, tháp pháo xoay 360°. Pin trâu, chơi ngoài trời lâu.',
    icon: '🛡️',
  },
  {
    id: 3,
    name: 'Assault Rover AR-7',
    category: 'Xe Chiến Đấu',
    price: 2890000,
    description: 'Xe bọc thép + súng bắn bi. Địa hình mạnh, phù hợp sân cỏ và nền đất.',
    icon: '🔫',
  },
  {
    id: 4,
    name: 'Drift Master D3',
    category: 'Xe Đua',
    price: 1990000,
    description: 'Xe drift giá tốt cho người mới. Nhẹ, dễ điều khiển, lốp drift chuyên dụng.',
    icon: '🏁',
  },
  {
    id: 5,
    name: 'FPV Racer Pro V2',
    category: 'Xe Đua',
    price: 4590000,
    description: 'Xe FPV cao cấp, camera 1080p 60fps, tốc độ 60km/h. Kèm kính FPV và pin dự phòng.',
    icon: '📹',
  },
  {
    id: 6,
    name: 'War Machine WM-5',
    category: 'Xe Chiến Đấu',
    price: 3490000,
    description: 'Xe chiến đấu 4 bánh, súng bắn bi tự động. Thiết kế hầm hố, pin 2S mạnh mẽ.',
    icon: '⚔️',
  },
];
