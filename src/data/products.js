export const arenaInfo = {
  name: 'Battle Real Arena',
  tagline: 'Game xe thực tế — Điều khiển từ xa, chiến đấu thật',
  status: 'Đang xây dựng',
  description:
    'Chúng tôi đang xây dựng sân chơi đầu tiên tại Việt Nam, nơi bạn ngồi tại cabin điều khiển và lái xe đua, xe tăng, xe bắn súng thật — đấu trực tiếp với bạn bè trên sân arena.',
  highlights: [
    { value: '300m²', label: 'Diện tích sân' },
    { value: '8–16', label: 'Người chơi / trận' },
    { value: 'FPV', label: 'Camera góc nhìn thứ nhất' },
    { value: '3', label: 'Chế độ chơi' },
  ],
};

export const gameModes = [
  {
    id: 'racing',
    icon: '🏎️',
    title: 'Đua Xe RC',
    description:
      'Lái xe đua tốc độ cao trên đường đua thực tế. Drift, vượt mặt đối thủ và về đích trong góc nhìn FPV như đang ngồi trong xe.',
    players: '2–8 người',
  },
  {
    id: 'tank',
    icon: '🛡️',
    title: 'Chiến Tăng',
    description:
      'Điều khiển xe tăng mini, xoay tháp pháo 360°, bắn đạn nước và phá hủy đối phương. Chiến thuật đội, phòng thủ căn cứ.',
    players: '4–12 người',
  },
  {
    id: 'shooter',
    icon: '🔫',
    title: 'Bắn Súng & Chiến Đấu',
    description:
      'Xe bọc thép trang bị súng bắn bi, săn đuổi và tiêu diệt đối thủ trên địa hình phức tạp. Kết hợp lái xe và bắn súng thực tế.',
    players: '4–16 người',
  },
];

export const playPackages = [
  {
    id: 'starter',
    name: 'Gói Khám Phá',
    price: 99000,
    duration: '30 phút',
    badge: 'Phù hợp người mới',
    description: 'Trải nghiệm lần đầu với 1 chế độ chơi tùy chọn. Bao gồm hướng dẫn cơ bản.',
    includes: ['1 chế độ chơi', 'Hướng dẫn 10 phút', 'Xe sẵn tại sân', 'Bảng điểm cá nhân'],
  },
  {
    id: 'battle',
    name: 'Gói Chiến Đấu',
    price: 199000,
    duration: '60 phút',
    badge: 'Phổ biến nhất',
    description: 'Trận đấu đầy đủ với bạn bè. Chọn chế độ, chia đội và tranh giải vô địch buổi chơi.',
    includes: ['Mọi chế độ chơi', '2–8 người / nhóm', 'Livestream màn hình lớn', 'Ảnh kỷ niệm'],
    featured: true,
  },
  {
    id: 'party',
    name: 'Gói Tiệc & Team',
    price: 890000,
    duration: '2 giờ',
    badge: 'Nhóm lớn',
    description: 'Đặt riêng cả sân cho sinh nhật, team building hoặc nhóm bạn. Giải đấu mini có huy chương.',
    includes: ['Sân riêng 2 giờ', 'Tối đa 16 người', 'Giải đấu mini', 'Nước uống & snack'],
  },
  {
    id: 'esports',
    name: 'Giải Đấu Tuần',
    price: 149000,
    duration: '90 phút',
    badge: 'Thi đấu',
    description: 'Tham gia giải hàng tuần, xếp hạng toàn quốc và nhận giải thưởng cho top 3.',
    includes: ['Bảng xếp hạng', 'Giải thưởng top 3', 'Phát sóng live', 'Huấn luyện viên'],
  },
];

export const steps = [
  {
    step: '01',
    title: 'Đến Sân Chơi',
    description: 'Ghé Battle Real Arena — không cần mang xe, mọi thiết bị đã sẵn sàng tại sân.',
  },
  {
    step: '02',
    title: 'Chọn Chế Độ & Xe',
    description: 'Chọn đua xe, chiến tăng hoặc bắn súng. Nhân viên hướng dẫn điều khiển qua app.',
  },
  {
    step: '03',
    title: 'Chiến Đấu Thật',
    description: 'Ngồi tại khu điều khiển, lái xe thật trên sân và đấu trực tiếp với người chơi khác.',
  },
];

export const features = [
  {
    icon: '📱',
    title: 'Điều Khiển Qua App',
    description: 'Lái xe bằng điện thoại hoặc tay cầm chuyên dụng với độ trễ cực thấp.',
  },
  {
    icon: '📹',
    title: 'Góc Nhìn FPV',
    description: 'Camera HD trên xe — cảm giác như đang ngồi trong cabin thật.',
  },
  {
    icon: '👥',
    title: 'Multiplayer Thực Tế',
    description: 'Không phải game trên màn hình — đối thủ là người thật, xe thật, sân thật.',
  },
  {
    icon: '🏆',
    title: 'Giải Đấu & Xếp Hạng',
    description: 'Leo rank, tham gia giải tuần và khoe thành tích với cộng đồng.',
  },
];

export const vehicles = [
  {
    id: 1,
    name: 'RC Speed Demon X1',
    category: 'Xe Đua',
    price: 2490000,
    description: 'Xe đua RC FPV 1080p, tốc độ 45km/h. Dành cho ai muốn mang về tập ở nhà.',
    icon: '🏎️',
  },
  {
    id: 2,
    name: 'Battle Tank T-90 Mini',
    category: 'Xe Tăng',
    price: 3290000,
    description: 'Xe tăng bắn đạn nước, tháp pháo xoay 360°. Mua về hoặc chơi thử tại sân trước.',
    icon: '🛡️',
  },
  {
    id: 3,
    name: 'Assault Rover AR-7',
    category: 'Bắn Súng',
    price: 2890000,
    description: 'Xe bọc thép + súng bắn bi. Trải nghiệm tại arena trước khi quyết định mua.',
    icon: '🔫',
  },
];
